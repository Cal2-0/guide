import json
import re

with open('client/src/lib/toolsDataArticle.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# match export const categories: Category[] = [ ... ];
match = re.search(r'export const categories: Category\[\] = (\[.*\]);', content, re.DOTALL)
if match:
    # Very hacky, let's just find all "name": "..." in the file using regex that correspond to the top-level categories
    lines = content.split('\n')
    cats = []
    for line in lines:
        if line.startswith('    "name":'):
            cats.append(line.strip())
    
    with open('cats.txt', 'w', encoding='utf-8') as out:
        out.write('\n'.join(cats))
else:
    print("No match")
