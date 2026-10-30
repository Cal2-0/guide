/**
 * Regenerates LYRA_SUPER_DIRECTORY.md (repo root and guide/) from the site's tool data,
 * so the markdown counts and tags can never drift from what /directory shows.
 *
 * Run: pnpm gen:directory
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { tools, type Tool } from "../client/src/lib/toolsData";

const here = path.dirname(fileURLToPath(import.meta.url));
const byName = (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name, "en", { sensitivity: "base" });
const anchor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const fmt = (n: number) => n.toLocaleString("en-US");
const line = (t: Tool) => `- **[${t.name}](${t.url})** ${t.tags.map((x) => `\`${x}\``).join(" ")} — ${t.description}`;

const categories = new Map<string, Tool[]>();
for (const t of tools) categories.set(t.category, [...(categories.get(t.category) ?? []), t]);
const names = [...categories.keys()].sort((a, b) => a.localeCompare(b));
const count = (c: string) => categories.get(c)?.length ?? 0;

const out: string[] = [
  `# Lyra Super Directory: ${fmt(tools.length)} Curated Builder Tools, Skills & GitHub Radars`,
  "> **The single-source master directory of every curated tool, framework, database, AI system, engineering playbook, and GitHub repository across the Lyra ecosystem.**",
  "> Generated from the live site data by `guide/scripts/generate-directory-md.ts`. Do not edit by hand.",
  "---",
  "",
  "## 📊 Master Directory Summary",
  "",
  `- **Total Curated Assets:** **${fmt(tools.length)} Tools & Skills**`,
  `- **Total Categories:** **${names.length} Domains**`,
  `- **Engineering Playbooks:** **${count("Engineering Skills")}**`,
  `- **GitHub Radars:** **${count("GitHub Radars")} Upstream Source Repositories**`,
  "- **Live Web App:** Synchronized 1:1 on `http://localhost:3000/directory`",
  "",
  "---",
  "",
  "## 📑 Table of Contents",
  "",
  ...names.map((c, i) => `${i + 1}. [${c}](#${anchor(c)}) — **${count(c)} ${count(c) === 1 ? "tool" : "tools"}**`),
  "",
  "---",
  "",
];

names.forEach((c, i) => {
  const list = categories.get(c)!;
  out.push(`## ${i + 1}. ${c}`, "", `> **${list.length} ${list.length === 1 ? "tool" : "tools"}** in this category`, "");
  const loose = list.filter((t) => !t.subcategory).sort(byName);
  if (loose.length) out.push(...loose.map(line), "");
  const subs = [...new Set(list.map((t) => t.subcategory).filter(Boolean) as string[])].sort((a, b) => a.localeCompare(b));
  for (const s of subs) {
    out.push(`### ✦ ${s}`, "", ...list.filter((t) => t.subcategory === s).sort(byName).map(line), "");
  }
  out.push("---", "");
});

const md = out.join("\n");
for (const target of [path.resolve(here, "../LYRA_SUPER_DIRECTORY.md"), path.resolve(here, "../../LYRA_SUPER_DIRECTORY.md")]) {
  fs.writeFileSync(target, md);
  console.log(`wrote ${target} (${fmt(tools.length)} tools, ${names.length} categories)`);
}
