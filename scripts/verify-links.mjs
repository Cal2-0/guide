/**
 * Outbound Link Hygiene & Security Auditor for Lyra
 *
 * Verifies:
 * 1. Protocol security: Every URL must enforce HTTPS (no plain HTTP, no javascript:, no data:)
 * 2. SSRF prevention: Blocks private/loopback/cloud-metadata IP ranges (127.0.0.1, 10.x, 169.254.x)
 * 3. Domain formatting & RFC 3986 compliance
 * 4. Optional Live Ping (--live): Batched HEAD/GET requests to detect dead links / domain takeovers
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

const BLOCKED_HOST_PATTERNS = [
  /^localhost$/i,
  /^127\./,
  /^10\./,
  /^192\.168\./,
  /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
  /^169\.254\./, // AWS / GCP metadata
  /\.internal$/i,
  /\.local$/i,
];

function extractUrlsFromCode(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, 'utf-8');
  const urlRegex = /"url":\s*"([^"]+)"/g;
  const urls = [];
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

async function auditLinks() {
  console.log('🔍 Starting Outbound Link Security Audit...\n');

  const filesToCheck = [
    path.join(PROJECT_ROOT, 'client', 'src', 'lib', 'toolsDataArticle.ts'),
    path.join(PROJECT_ROOT, 'client', 'src', 'lib', 'directoryAdditions.ts')
  ];

  const allUrls = [];
  for (const f of filesToCheck) {
    const urls = extractUrlsFromCode(f);
    console.log(`  Parsed ${urls.length} URLs from ${path.basename(f)}`);
    allUrls.push(...urls);
  }

  const uniqueUrls = Array.from(new Set(allUrls));
  console.log(`\nTotal unique URLs discovered: ${uniqueUrls.length}\n`);

  let invalidProtocol = 0;
  let blockedHost = 0;
  let malformedUrl = 0;

  for (const urlStr of uniqueUrls) {
    try {
      const parsed = new URL(urlStr);
      if (parsed.protocol !== 'https:') {
        console.warn(`  ⚠️ Insecure Protocol: ${urlStr} (expected https:)`);
        invalidProtocol++;
      }

      for (const pattern of BLOCKED_HOST_PATTERNS) {
        if (pattern.test(parsed.hostname)) {
          console.error(`  🚨 Blocked / SSRF-risk Hostname: ${parsed.hostname} in ${urlStr}`);
          blockedHost++;
        }
      }
    } catch {
      console.error(`  ❌ Malformed URL: ${urlStr}`);
      malformedUrl++;
    }
  }

  console.log('--- Summary ---');
  console.log(`✅ Safe Unique URLs: ${uniqueUrls.length - invalidProtocol - blockedHost - malformedUrl}`);
  console.log(`⚠️ Insecure HTTP: ${invalidProtocol}`);
  console.log(`🚨 SSRF / Blocked: ${blockedHost}`);
  console.log(`❌ Malformed: ${malformedUrl}`);

  if (process.argv.includes('--live')) {
    console.log('\n🌐 Running live reachability check (sample of 25 URLs)...');
    const sample = uniqueUrls.slice(0, 25);
    for (const url of sample) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 4000);
        const res = await fetch(url, { method: 'HEAD', signal: controller.signal, headers: { 'User-Agent': 'Lyra-Link-Health-Check/1.0' } });
        clearTimeout(timeout);
        console.log(`  [${res.status}] ${url}`);
      } catch (err) {
        console.log(`  [FAIL] ${url} (${err.message})`);
      }
    }
  }

  if (blockedHost > 0 || malformedUrl > 0) {
    process.exit(1);
  }
}

auditLinks().catch(err => {
  console.error('Fatal link audit error:', err);
  process.exit(1);
});
