import json

with open('client/src/lib/toolsDataArticle.ts', 'r', encoding='utf-8') as f:
    content = f.read()

tools_to_check = [
    'framer', 'motionsites-ai', 'fontsource', 'haikei', 'autoanimate', 'cruip', 'umami', 'shape-divider',
    'openrouter', 'groq', 'cerebras', 'llamaindex', 'pgvector', 'pydantic-ai', 'dify', 'litellm',
    'better-auth', 'drizzle-orm', 'resend', 'react-email', 'lemon-squeezy', 'infisical', 'posthog', 'railway', 't3-app',
    'expo', 'expo-router', 'nativewind', 'mmkv', 'zustand', 'eas-build', 'revenuecat', 'sentry',
    'shodan', 'holehe', 'ghunt', 'theharvester', 'semgrep', 'trufflehog', 'wazuh', 'neo4j',
    'alchemy', 'etherscan', 'defillama', 'goplus', 'viem', 'wagmi', 'blockscout', 'hardhat'
]

missing = [t for t in tools_to_check if f'"{t}"' not in content and f"'{t}'" not in content and f'id: "{t}"' not in content and f'id: \'{t}\'' not in content]
print("Missing:", missing)
