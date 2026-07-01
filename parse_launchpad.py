import json
import re

with open('lyra-launchpad.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

steps = []
current_step = None
current_desc = []
state = "NONE"

for line in lines:
    line = line.strip()
    
    if line.startswith("## ") and " — " in line:
        if current_step:
            current_step["description"] = " ".join(current_desc)
            steps.append(current_step)
        
        # Parse "## 01 — 💡 Idea"
        header = line.replace("## ", "").strip()
        parts = header.split(" — ")
        step_id = parts[0].strip()
        emoji_and_title = parts[1].strip()
        
        # Handle emoji (assumes emoji is first word if present)
        emoji_match = re.search(r'^[^\w\s]+', emoji_and_title)
        emoji = emoji_match.group(0).strip() if emoji_match else ""
        title = emoji_and_title.replace(emoji, "").strip() if emoji else emoji_and_title

        current_step = {
            "id": step_id,
            "emoji": emoji,
            "title": title,
            "description": "",
            "options": []
        }
        current_desc = []
        state = "DESC"
        
    elif state == "DESC" and line.startswith(">"):
        clean = line.replace("> ", "").replace(">", "").strip()
        if clean == "**What is this step?**":
            continue
        if clean:
            current_desc.append(clean)
            
    elif current_step and line.startswith("|") and not line.startswith("| I need to") and not line.startswith("|---"):
        parts = [p.strip() for p in line.split("|")]
        if len(parts) >= 4:
            current_step["options"].append({
                "need": parts[1],
                "startHere": parts[2],
                "alternative": parts[3]
            })

if current_step:
    current_step["description"] = " ".join(current_desc)
    steps.append(current_step)

with open('client/src/lib/launchpadData.json', 'w', encoding='utf-8') as f:
    json.dump(steps, f, indent=2, ensure_ascii=False)

print(f"Generated {len(steps)} steps.")
