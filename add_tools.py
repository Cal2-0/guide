import json

with open('client/src/lib/toolsDataArticle.ts', 'r', encoding='utf-8') as f:
    content = f.read()

missing_tools = [
    {'id': 'react-email', 'name': 'React Email', 'description': 'Build and send emails using React.', 'tags': ['OSS'], 'url': 'https://react.email'},
    {'id': 't3-app', 'name': 'T3 Stack', 'description': 'The best way to start a full-stack, typesafe Next.js app.', 'tags': ['OSS'], 'url': 'https://create.t3.gg/'},
    {'id': 'expo', 'name': 'Expo', 'description': 'An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.', 'tags': ['OSS'], 'url': 'https://expo.dev'},
    {'id': 'expo-router', 'name': 'Expo Router', 'description': 'File-based routing for React Native and web applications.', 'tags': ['OSS'], 'url': 'https://docs.expo.dev/router/introduction/'},
    {'id': 'nativewind', 'name': 'NativeWind', 'description': 'Tailwind CSS for React Native.', 'tags': ['OSS'], 'url': 'https://www.nativewind.dev'},
    {'id': 'mmkv', 'name': 'MMKV', 'description': 'An efficient, small mobile key-value storage framework.', 'tags': ['OSS'], 'url': 'https://github.com/Tencent/MMKV'},
    {'id': 'eas-build', 'name': 'EAS Build', 'description': 'Cloud builds for Expo and React Native apps.', 'tags': ['Paid'], 'url': 'https://expo.dev/eas'},
    {'id': 'revenuecat', 'name': 'RevenueCat', 'description': 'In-app subscriptions made easy.', 'tags': ['Paid'], 'url': 'https://www.revenuecat.com'},
    {'id': 'alchemy', 'name': 'Alchemy', 'description': 'The web3 development platform.', 'tags': ['Paid'], 'url': 'https://www.alchemy.com'},
    {'id': 'etherscan', 'name': 'Etherscan API', 'description': 'Ethereum block explorer and API.', 'tags': ['Paid'], 'url': 'https://etherscan.io'},
    {'id': 'defillama', 'name': 'DefiLlama API', 'description': 'Open and transparent DeFi analytics.', 'tags': ['Free'], 'url': 'https://defillama.com'},
    {'id': 'goplus', 'name': 'GoPlus', 'description': 'Open, permissionless, user-driven security network.', 'tags': ['Paid'], 'url': 'https://gopluslabs.io'},
    {'id': 'viem', 'name': 'Viem', 'description': 'TypeScript interface for Ethereum.', 'tags': ['OSS'], 'url': 'https://viem.sh'},
    {'id': 'wagmi', 'name': 'Wagmi', 'description': 'React Hooks for Ethereum.', 'tags': ['OSS'], 'url': 'https://wagmi.sh'},
    {'id': 'blockscout', 'name': 'Blockscout', 'description': 'Open source blockchain explorer.', 'tags': ['OSS'], 'url': 'https://www.blockscout.com'},
    {'id': 'hardhat', 'name': 'Hardhat', 'description': 'Ethereum development environment for professionals.', 'tags': ['OSS'], 'url': 'https://hardhat.org'}
]

replacement = ''
for t in missing_tools:
    replacement += f'''          {{
            "id": "{t['id']}",
            "name": "{t['name']}",
            "description": "{t['description']}",
            "tags": {json.dumps(t['tags'])},
            "url": "{t['url']}"
          }},
'''

content = content.replace('"tools": [', '"tools": [\n' + replacement, 1)

with open('client/src/lib/toolsDataArticle.ts', 'w', encoding='utf-8') as f:
    f.write(content)
