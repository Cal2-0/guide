import re

with open('client/src/lib/toolsDataArticle.ts', 'r', encoding='utf-8') as f:
    content = f.read()

new_tools = """
  {
    id: "neon",
    name: "Neon",
    description: "Serverless Postgres built for the cloud.",
    url: "https://neon.tech",
    tags: ["Database"]
  },
  {
    id: "clerk",
    name: "Clerk",
    description: "Complete authentication and user management.",
    url: "https://clerk.com",
    tags: ["Auth"]
  },
  {
    id: "shadcn-ui",
    name: "shadcn/ui",
    description: "Beautifully designed components that you can copy and paste into your apps.",
    url: "https://ui.shadcn.com",
    tags: ["UI"]
  },
  {
    id: "aceternity-ui",
    name: "Aceternity UI",
    description: "Copy paste the most trending components and use them in your websites without having to worry about styling and animations.",
    url: "https://ui.aceternity.com",
    tags: ["UI"]
  },
  {
    id: "n8n",
    name: "n8n",
    description: "Free and open node based Workflow Automation Tool. Easily automate tasks across different services.",
    url: "https://n8n.io",
    tags: ["Automation"]
  },
"""

content = content.replace('export const tools: Tool[] = [', 'export const tools: Tool[] = [\n' + new_tools)

with open('client/src/lib/toolsDataArticle.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Tools added successfully.")
