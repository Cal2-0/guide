import json
import re

with open('client/src/lib/toolsDataArticle.ts', 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
ids = []
for line in lines:
    if '"id":' in line:
        id_str = line.split('"id":')[1].strip().strip('",')
        ids.append(id_str)

with open('ids.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(ids))
