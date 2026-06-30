const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'BuilderOS_Master_List.txt');
const outputPath = path.join(__dirname, 'client', 'src', 'lib', 'toolsDataArticle.ts');

let text = fs.readFileSync(inputPath, 'utf8');
if (text.charCodeAt(0) === 0xFEFF) {
    text = text.slice(1);
}

const lines = text.split(/\r?\n/);

// Find top-level categories (they are followed within 2 lines by another ###)
const headers = [];
for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith('###')) {
        headers.push({ index: i, text: lines[i].trim() });
    }
}

const topCategories = new Set();
for (let j = 0; j < headers.length - 1; j++) {
    if (headers[j+1].index - headers[j].index <= 2) {
        topCategories.add(headers[j].text.replace(/^#+\s*/, '').trim());
    }
}
// Manually add the last one if we missed it, though usually they have subcategories.
// Actually, "Open Source & Alternatives" was caught.

const categories = [];
let currentCategory = null;
let currentSubcategory = null;

for (let line of lines) {
  line = line.trim();
  if (!line || line.startsWith('=')) continue;
  if (line.startsWith('Builder OS')) continue;

  if (line.startsWith('###')) {
    const title = line.replace(/^#+\s*/, '').trim();
    
    if (topCategories.has(title)) {
        currentCategory = {
            name: title,
            subcategories: []
        };
        categories.push(currentCategory);
        currentSubcategory = null;
    } else {
        if (!currentCategory) {
            currentCategory = { name: "General", subcategories: [] };
            categories.push(currentCategory);
        }
        currentSubcategory = {
            name: title,
            tools: []
        };
        currentCategory.subcategories.push(currentSubcategory);
    }
    continue;
  }

  // Parse tool
  if (line.startsWith('-')) {
    const match = line.match(/^-\s*(.*?):\s*(.*?)\s*\((.*?)\)$/);
    if (match && currentSubcategory) {
        const name = match[1].trim();
        const description = match[2].trim();
        const url = match[3].trim();
        
        const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        
        const tags = [];
        if (description.toLowerCase().includes('free') || name.toLowerCase().includes('free')) {
            tags.push('Free');
        } else if (description.toLowerCase().includes('open-source') || description.toLowerCase().includes('open source')) {
            tags.push('OSS');
        } else {
            tags.push('Paid'); 
        }
        if (description.toLowerCase().includes('ai ') || name.toLowerCase().includes('ai')) {
            tags.push('AI');
        }

        currentSubcategory.tools.push({
            id,
            name,
            description,
            tags,
            url
        });
    }
  }
}

const fileContent = `export interface Tool {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
}

export interface Subcategory {
  name: string;
  tools: Tool[];
}

export interface Category {
  name: string;
  subcategories: Subcategory[];
}

export const categories: Category[] = ${JSON.stringify(categories, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent, 'utf8');
console.log('Successfully generated toolsDataArticle.ts');
console.log('Total categories:', categories.length);
console.log('Total subcategories:', categories.reduce((acc, cat) => acc + cat.subcategories.length, 0));
console.log('Total tools:', categories.reduce((acc, cat) => acc + cat.subcategories.reduce((a, sub) => a + sub.tools.length, 0), 0));
