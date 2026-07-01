import json
import re

with open('build-intent-specialized.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

intents = {}
current_intent = None
current_desc = []
current_stack = []
current_tools = []
current_insight = ""

# Map markdown headers to route IDs
intent_id_map = {
    "01 — Build a Website / Landing Page": "website",
    "02 — Build an AI App": "ai",
    "03 — Build a SaaS / Startup": "saas",
    "04 — Build a Mobile App": "mobile",
    "05 — Build a Cybersecurity / OSINT Tool": "osint",
    "06 — Build a Blockchain / Web3 Project": "web3"
}

# Map tool names to IDs manually for tricky ones
tool_id_map = {
    "MotionSites.ai": "motionsites-ai",
    "Resend + React Email": "resend", # we'll just link resend
    "T3 Stack": "t3-app",
    "EAS Build": "eas-build",
    "Shodan API": "shodan",
    "Etherscan API": "etherscan",
    "DefiLlama API": "defillama",
    "GoPlus Security API": "goplus",
    "Fontsource": "fontsource",
    "AutoAnimate": "autoanimate",
    "Shape Divider": "shape-divider"
}

state = "NONE"

for line in lines:
    line = line.strip()
    if line.startswith("## "):
        header = line.replace("## ", "").strip()
        if header in intent_id_map:
            if current_intent:
                intents[current_intent]["description"] = " ".join(current_desc)
                intents[current_intent]["tools"] = current_tools
                intents[current_intent]["insight"] = current_insight
            
            current_intent = intent_id_map[header]
            intents[current_intent] = {
                "title": header.split(" — ")[1],
                "description": "",
                "stackNodes": [],
                "tools": [],
                "insight": ""
            }
            current_desc = []
            current_stack = []
            current_tools = []
            current_insight = ""
            state = "DESC"
    elif state == "DESC" and line.startswith(">"):
        clean = line.replace("> ", "").replace(">", "").strip()
        if clean.startswith("**If you're reading this as a beginner:**"):
            clean = clean.replace("**If you're reading this as a beginner:**", "").strip()
        current_desc.append(clean)
    elif line.startswith("**Recommended starting stack:**"):
        state = "STACK"
    elif state == "STACK" and "→" in line:
        nodes = [n.replace("`", "").strip() for n in line.split("→")]
        # clean up "(design + host)" etc from nodes
        clean_nodes = [re.sub(r'\(.*?\)', '', n).strip() for n in nodes]
        clean_nodes[-1] = clean_nodes[-1].replace("done.", "").strip()
        intents[current_intent]["stackNodes"] = clean_nodes
        state = "TOOLS"
    elif state == "TOOLS" and line.startswith("| **"):
        parts = [p.strip() for p in line.split("|") if p.strip()]
        if len(parts) >= 2:
            tool_name = parts[0].replace("**", "").split(" — ")[0].split(" + ")[0].strip()
            rationale = parts[1]
            
            tool_id = tool_id_map.get(tool_name, tool_name.lower().replace(" ", "-").replace(".", "-"))
            if tool_id == "material-ui-(mui)": tool_id = "material-ui-mui"
            
            current_tools.append({
                "id": tool_id,
                "rationale": rationale
            })
    elif line.startswith("**One thing nobody tells beginners:**"):
        current_insight = line.replace("**One thing nobody tells beginners:**", "").strip()

if current_intent:
    intents[current_intent]["description"] = " ".join(current_desc)
    intents[current_intent]["tools"] = current_tools
    intents[current_intent]["insight"] = current_insight

print(json.dumps(intents, indent=2))
