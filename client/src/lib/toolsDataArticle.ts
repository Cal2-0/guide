export interface Tool {
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

export const categories: Category[] = [
  {
    "name": "Ideas & Startup Discovery",
    "subcategories": [
      {
        "name": "Startup Discovery",
        "tools": [
          {
            "id": "react-email",
            "name": "React Email",
            "description": "Build and send emails using React.",
            "tags": ["OSS"],
            "url": "https://react.email"
          },
          {
            "id": "t3-app",
            "name": "T3 Stack",
            "description": "The best way to start a full-stack, typesafe Next.js app.",
            "tags": ["OSS"],
            "url": "https://create.t3.gg/"
          },
          {
            "id": "expo",
            "name": "Expo",
            "description": "An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.",
            "tags": ["OSS"],
            "url": "https://expo.dev"
          },
          {
            "id": "expo-router",
            "name": "Expo Router",
            "description": "File-based routing for React Native and web applications.",
            "tags": ["OSS"],
            "url": "https://docs.expo.dev/router/introduction/"
          },
          {
            "id": "nativewind",
            "name": "NativeWind",
            "description": "Tailwind CSS for React Native.",
            "tags": ["OSS"],
            "url": "https://www.nativewind.dev"
          },
          {
            "id": "mmkv",
            "name": "MMKV",
            "description": "An efficient, small mobile key-value storage framework.",
            "tags": ["OSS"],
            "url": "https://github.com/Tencent/MMKV"
          },
          {
            "id": "eas-build",
            "name": "EAS Build",
            "description": "Cloud builds for Expo and React Native apps.",
            "tags": ["Paid"],
            "url": "https://expo.dev/eas"
          },
          {
            "id": "revenuecat",
            "name": "RevenueCat",
            "description": "In-app subscriptions made easy.",
            "tags": ["Paid"],
            "url": "https://www.revenuecat.com"
          },
          {
            "id": "alchemy",
            "name": "Alchemy",
            "description": "The web3 development platform.",
            "tags": ["Paid"],
            "url": "https://www.alchemy.com"
          },
          {
            "id": "etherscan",
            "name": "Etherscan API",
            "description": "Ethereum block explorer and API.",
            "tags": ["Paid"],
            "url": "https://etherscan.io"
          },
          {
            "id": "defillama",
            "name": "DefiLlama API",
            "description": "Open and transparent DeFi analytics.",
            "tags": ["Free"],
            "url": "https://defillama.com"
          },
          {
            "id": "goplus",
            "name": "GoPlus",
            "description": "Open, permissionless, user-driven security network.",
            "tags": ["Paid"],
            "url": "https://gopluslabs.io"
          },
          {
            "id": "viem",
            "name": "Viem",
            "description": "TypeScript interface for Ethereum.",
            "tags": ["OSS"],
            "url": "https://viem.sh"
          },
          {
            "id": "wagmi",
            "name": "Wagmi",
            "description": "React Hooks for Ethereum.",
            "tags": ["OSS"],
            "url": "https://wagmi.sh"
          },
          {
            "id": "blockscout",
            "name": "Blockscout",
            "description": "Open source blockchain explorer.",
            "tags": ["OSS"],
            "url": "https://www.blockscout.com"
          },
          {
            "id": "hardhat",
            "name": "Hardhat",
            "description": "Ethereum development environment for professionals.",
            "tags": ["OSS"],
            "url": "https://hardhat.org"
          },

          {
            "id": "product-hunt",
            "name": "Product Hunt",
            "description": "The industry-standard launchpad for new software products.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.producthunt.com"
          },
          {
            "id": "indie-hackers",
            "name": "Indie Hackers",
            "description": "A community of founders sharing revenue and building in public.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.indiehackers.com"
          },
          {
            "id": "github-trending",
            "name": "GitHub Trending",
            "description": "Track trending repositories and open-source packages daily.",
            "tags": [
              "OSS"
            ],
            "url": "https://github.com/trending"
          },
          {
            "id": "exploding-topics",
            "name": "Exploding Topics",
            "description": "Find trending topics and industries before they take off.",
            "tags": [
              "Paid"
            ],
            "url": "https://explodingtopics.com"
          },
          {
            "id": "yc-requests-for-startups",
            "name": "YC Requests for Startups",
            "description": "List of high-value problems Y Combinator wants to fund.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.ycombinator.com/rfs"
          },
          {
            "id": "manus-ai",
            "name": "Manus AI",
            "description": "Generalist AI agent that autonomously researches startup ideas and validates them.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://manus.im"
          },
          {
            "id": "vibecoder-blog",
            "name": "VibeCoder Blog",
            "description": "Curated insights on building AI apps and startup ideas.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://blog.vibecoder.me"
          }
        ]
      },
      {
        "name": "Idea Validation",
        "tools": [
          {
            "id": "gummysearch",
            "name": "GummySearch",
            "description": "Audience research and idea validation tool via Reddit.",
            "tags": [
              "Paid"
            ],
            "url": "https://gummysearch.com"
          },
          {
            "id": "google-trends",
            "name": "Google Trends",
            "description": "Analyze search term popularity and geographic trends.",
            "tags": [
              "Paid"
            ],
            "url": "https://trends.google.com"
          },
          {
            "id": "answerthepublic",
            "name": "AnswerThePublic",
            "description": "Search query visualization tool discovering what questions users ask.",
            "tags": [
              "Paid"
            ],
            "url": "https://answerthepublic.com"
          },
          {
            "id": "glimpse",
            "name": "Glimpse",
            "description": "Browser extension that enhances Google Trends with rich data.",
            "tags": [
              "Paid"
            ],
            "url": "https://meetglimpse.com"
          },
          {
            "id": "typeform",
            "name": "Typeform",
            "description": "Beautiful surveys for validating ideas and collecting user feedback.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.typeform.com"
          },
          {
            "id": "maze",
            "name": "Maze",
            "description": "Rapid usability testing and idea validation with real users.",
            "tags": [
              "Paid"
            ],
            "url": "https://maze.co"
          }
        ]
      },
      {
        "name": "Competitor Research",
        "tools": [
          {
            "id": "similarweb",
            "name": "SimilarWeb",
            "description": "Website traffic analysis and competitive intelligence platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.similarweb.com"
          },
          {
            "id": "semrush",
            "name": "SEMrush",
            "description": "All-in-one marketing toolkit with competitor research features.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.semrush.com"
          },
          {
            "id": "crunchbase",
            "name": "Crunchbase",
            "description": "Business information platform for startup funding and competitor data.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.crunchbase.com"
          },
          {
            "id": "spyfu",
            "name": "SpyFu",
            "description": "Competitor keyword research and PPC spy tool.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.spyfu.com"
          }
        ]
      }
    ]
  },
  {
    "name": "UI & UX Design",
    "subcategories": [
      {
        "name": "UI Inspiration",
        "tools": [
          {
            "id": "mobbin",
            "name": "Mobbin",
            "description": "The definitive catalog of mobile and web interface flows.",
            "tags": [
              "Paid"
            ],
            "url": "https://mobbin.com"
          },
          {
            "id": "refero",
            "name": "Refero",
            "description": "Massive UI search engine filterable by design patterns.",
            "tags": [
              "Paid"
            ],
            "url": "https://refero.design"
          },
          {
            "id": "land-book",
            "name": "Land-book",
            "description": "Curated collection of the web's best landing pages.",
            "tags": [
              "Paid"
            ],
            "url": "https://land-book.com"
          },
          {
            "id": "godly",
            "name": "Godly",
            "description": "Showcases websites with advanced animations and layouts.",
            "tags": [
              "Paid"
            ],
            "url": "https://godly.website"
          },
          {
            "id": "dribbble",
            "name": "Dribbble",
            "description": "Design community showcasing shots from world-class designers.",
            "tags": [
              "Paid"
            ],
            "url": "https://dribbble.com"
          },
          {
            "id": "behance",
            "name": "Behance",
            "description": "Adobe's portfolio platform showcasing creative work.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.behance.net"
          },
          {
            "id": "awwwards",
            "name": "Awwwards",
            "description": "Award-winning website designs and digital experiences.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.awwwards.com"
          },
          {
            "id": "uiverse",
            "name": "UIverse",
            "description": "Community library of open-source CSS and HTML elements.",
            "tags": [
              "OSS"
            ],
            "url": "https://uiverse.io"
          },
          {
            "id": "collectui",
            "name": "CollectUI",
            "description": "Daily UI challenge inspiration gallery.",
            "tags": [
              "Paid"
            ],
            "url": "https://collectui.com"
          },
          {
            "id": "lapa-ninja",
            "name": "Lapa Ninja",
            "description": "Landing page design inspiration with free resources.",
            "tags": [
              "Free"
            ],
            "url": "https://www.lapa.ninja"
          },
          {
            "id": "flowrift",
            "name": "Flowrift",
            "description": "Curated UI patterns with Tailwind code.",
            "tags": [
              "Paid"
            ],
            "url": "https://flowrift.com"
          }
        ]
      },
      {
        "name": "Landing Page Builders",
        "tools": [
          {
            "id": "framer",
            "name": "Framer",
            "description": "AI-powered visual web builder for animated landing pages.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.framer.com"
          },
          {
            "id": "webflow",
            "name": "Webflow",
            "description": "Professional visual web design tool with CMS.",
            "tags": [
              "Paid"
            ],
            "url": "https://webflow.com"
          },
          {
            "id": "carrd",
            "name": "Carrd",
            "description": "Simple, minimal one-page site builder for cheap.",
            "tags": [
              "Paid"
            ],
            "url": "https://carrd.co"
          },
          {
            "id": "dorik",
            "name": "Dorik",
            "description": "AI-powered website builder with clean templates.",
            "tags": [
              "Paid"
            ],
            "url": "https://dorik.com"
          },
          {
            "id": "typedream",
            "name": "Typedream",
            "description": "Notion-like page builder for beautiful microsites.",
            "tags": [
              "Paid"
            ],
            "url": "https://typedream.com"
          },
          {
            "id": "motionsites-ai",
            "name": "MotionSites.ai",
            "description": "High-end animated website prompts for Claude/Cursor.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://motionsites.ai"
          },
          {
            "id": "cruip",
            "name": "Cruip",
            "description": "Beautifully designed HTML/React landing page templates.",
            "tags": [
              "Paid"
            ],
            "url": "https://cruip.com"
          }
        ]
      },
      {
        "name": "Component Libraries",
        "tools": [
          {
            "id": "21st-dev",
            "name": "21st.dev",
            "description": "Shadcn UI marketplace for ready-to-use React components.",
            "tags": [
              "Paid"
            ],
            "url": "https://21st.dev"
          },
          {
            "id": "magic-ui",
            "name": "Magic UI",
            "description": "Stunning animated components to level up landing pages.",
            "tags": [
              "Paid"
            ],
            "url": "https://magicui.design"
          },
          {
            "id": "aceternity-ui",
            "name": "Aceternity UI",
            "description": "Premium animated components using Framer Motion and Tailwind.",
            "tags": [
              "Paid"
            ],
            "url": "https://ui.aceternity.com"
          },
          {
            "id": "shadcn-ui",
            "name": "Shadcn UI",
            "description": "Copy-paste React components built on Radix with full styling control.",
            "tags": [
              "Paid"
            ],
            "url": "https://ui.shadcn.com"
          },
          {
            "id": "radix-ui",
            "name": "Radix UI",
            "description": "Accessible, unstyled React primitives for custom design systems.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.radix-ui.com"
          },
          {
            "id": "mantine",
            "name": "Mantine",
            "description": "Full-featured React component library with hooks.",
            "tags": [
              "Paid"
            ],
            "url": "https://mantine.dev"
          },
          {
            "id": "material-ui-mui",
            "name": "Material UI (MUI)",
            "description": "Mature Material Design React component library.",
            "tags": [
              "Paid"
            ],
            "url": "https://mui.com"
          },
          {
            "id": "chakra-ui",
            "name": "Chakra UI",
            "description": "Accessible, composable React component library.",
            "tags": [
              "Paid"
            ],
            "url": "https://chakra-ui.com"
          },
          {
            "id": "ant-design",
            "name": "Ant Design",
            "description": "Enterprise-class UI design language and React components.",
            "tags": [
              "Paid"
            ],
            "url": "https://ant.design"
          },
          {
            "id": "nextui",
            "name": "NextUI",
            "description": "Modern defaults for product interfaces with Next.js.",
            "tags": [
              "Paid"
            ],
            "url": "https://nextui.org"
          },
          {
            "id": "flowbite",
            "name": "Flowbite",
            "description": "Open-source Tailwind CSS component library.",
            "tags": [
              "OSS"
            ],
            "url": "https://flowbite.com"
          },
          {
            "id": "daisyui",
            "name": "DaisyUI",
            "description": "Tailwind CSS component classes for rapid UI building.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://daisyui.com"
          },
          {
            "id": "tailwind-ui",
            "name": "Tailwind UI",
            "description": "Official pre-designed HTML and React templates from Tailwind team.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://tailwindui.com"
          },
          {
            "id": "hyperui",
            "name": "HyperUI",
            "description": "Free open-source Tailwind CSS blocks.",
            "tags": [
              "Free"
            ],
            "url": "https://www.hyperui.dev"
          },
          {
            "id": "langui",
            "name": "LangUI",
            "description": "Tailwind components specifically designed for AI apps.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.langui.dev"
          },
          {
            "id": "neobrutalism-components",
            "name": "Neobrutalism Components",
            "description": "Bold neobrutalist visual style components.",
            "tags": [
              "Paid"
            ],
            "url": "https://neobrutalism.dev"
          },
          {
            "id": "primereact",
            "name": "PrimeReact",
            "description": "Enterprise-grade React component suite.",
            "tags": [
              "Paid"
            ],
            "url": "https://primereact.org"
          }
        ]
      },
      {
        "name": "Icons",
        "tools": [
          {
            "id": "lucide",
            "name": "Lucide",
            "description": "Beautiful and consistent 1500+ icon library",
            "tags": [
              "Paid"
            ],
            "url": "Feather fork). (https://lucide.dev"
          },
          {
            "id": "phosphor-icons",
            "name": "Phosphor Icons",
            "description": "Flexible icon family with 9,000+ icons across 6 weights.",
            "tags": [
              "Paid"
            ],
            "url": "https://phosphoricons.com"
          },
          {
            "id": "heroicons",
            "name": "Heroicons",
            "description": "Hand-crafted SVG icons from the Tailwind team.",
            "tags": [
              "Paid"
            ],
            "url": "https://heroicons.com"
          },
          {
            "id": "tabler-icons",
            "name": "Tabler Icons",
            "description": "3800+ free SVG icons for web design.",
            "tags": [
              "Free"
            ],
            "url": "https://tabler.io/icons"
          },
          {
            "id": "hugeicons",
            "name": "Hugeicons",
            "description": "4000+ icons in multiple styles â€” stroke, bulk, duotone.",
            "tags": [
              "Paid"
            ],
            "url": "https://hugeicons.com"
          },
          {
            "id": "remix-icon",
            "name": "Remix Icon",
            "description": "2800+ open-source neutral-style icons.",
            "tags": [
              "OSS"
            ],
            "url": "https://remixicon.com"
          },
          {
            "id": "boxicons",
            "name": "Boxicons",
            "description": "1600+ premium icons for web design.",
            "tags": [
              "Paid"
            ],
            "url": "https://boxicons.com"
          },
          {
            "id": "feather-icons",
            "name": "Feather Icons",
            "description": "Simply beautiful, minimal open-source icons.",
            "tags": [
              "OSS"
            ],
            "url": "https://feathericons.com"
          },
          {
            "id": "streamline-icons",
            "name": "Streamline Icons",
            "description": "Premium 100,000+ icon library for professional UI.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.streamlinehq.com"
          }
        ]
      },
      {
        "name": "Fonts & Typography",
        "tools": [
          {
            "id": "google-fonts",
            "name": "Google Fonts",
            "description": "1500+ open-source web fonts, free to use.",
            "tags": [
              "Free"
            ],
            "url": "https://fonts.google.com"
          },
          {
            "id": "fontshare",
            "name": "Fontshare",
            "description": "Quality modern fonts by Indian Type Foundry, all free.",
            "tags": [
              "Free"
            ],
            "url": "https://www.fontshare.com"
          },
          {
            "id": "fontsource",
            "name": "Fontsource",
            "description": "Self-host Google Fonts via npm for zero latency.",
            "tags": [
              "Paid"
            ],
            "url": "https://fontsource.org"
          },
          {
            "id": "adobe-fonts",
            "name": "Adobe Fonts",
            "description": "Thousands of professional typefaces via Adobe CC.",
            "tags": [
              "Paid"
            ],
            "url": "https://fonts.adobe.com"
          },
          {
            "id": "bunny-fonts",
            "name": "Bunny Fonts",
            "description": "GDPR-compliant, privacy-first Google Fonts alternative.",
            "tags": [
              "Paid"
            ],
            "url": "https://fonts.bunny.net"
          },
          {
            "id": "pangram-pangram",
            "name": "Pangram Pangram",
            "description": "High-quality premium typefaces for premium projects.",
            "tags": [
              "Paid"
            ],
            "url": "https://pangrampangram.com"
          },
          {
            "id": "velvetyne",
            "name": "Velvetyne",
            "description": "Experimental open-source fonts for creative projects.",
            "tags": [
              "OSS"
            ],
            "url": "https://velvetyne.fr"
          }
        ]
      },
      {
        "name": "SVGs, Backgrounds & Patterns",
        "tools": [
          {
            "id": "haikei",
            "name": "Haikei",
            "description": "Generate unique SVG shapes, backgrounds and blobs.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://haikei.app"
          },
          {
            "id": "hero-patterns",
            "name": "Hero Patterns",
            "description": "Repeatable SVG patterns for backgrounds.",
            "tags": [
              "Paid"
            ],
            "url": "https://heropatterns.com"
          },
          {
            "id": "pattern-monster",
            "name": "Pattern Monster",
            "description": "Customizable SVG pattern generator.",
            "tags": [
              "Paid"
            ],
            "url": "https://pattern.monster"
          },
          {
            "id": "svgrepo",
            "name": "SVGRepo",
            "description": "Massive library of 500,000+ open-licensed SVG icons.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.svgrepo.com"
          },
          {
            "id": "shape-divider",
            "name": "Shape Divider",
            "description": "Generate CSS section separators and wave shapes.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.shapedivider.app"
          },
          {
            "id": "get-waves",
            "name": "Get Waves",
            "description": "Generate smooth SVG wave backgrounds.",
            "tags": [
              "Paid"
            ],
            "url": "https://getwaves.io"
          },
          {
            "id": "bgjar",
            "name": "BGJar",
            "description": "Free SVG background generator with many styles.",
            "tags": [
              "Free"
            ],
            "url": "https://bgjar.com"
          },
          {
            "id": "meshgradients",
            "name": "MeshGradients",
            "description": "Beautiful mesh gradient backgrounds for UI.",
            "tags": [
              "Paid"
            ],
            "url": "https://meshgradient.in"
          },
          {
            "id": "cool-backgrounds",
            "name": "Cool Backgrounds",
            "description": "Collection of tools to create compelling backgrounds.",
            "tags": [
              "Paid"
            ],
            "url": "https://coolbackgrounds.io"
          },
          {
            "id": "patternpad",
            "name": "PatternPad",
            "description": "Create seamless patterns for backgrounds and mockups.",
            "tags": [
              "Paid"
            ],
            "url": "https://patternpad.com"
          },
          {
            "id": "toptal-subtle-patterns",
            "name": "Toptal Subtle Patterns",
            "description": "Subtle, tileable texture patterns for web.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.toptal.com/designers/subtlepatterns"
          },
          {
            "id": "geopattern",
            "name": "GeoPattern",
            "description": "Geometric pattern generator from strings.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/btmills/geopattern"
          }
        ]
      },
      {
        "name": "Gradients & Colors",
        "tools": [
          {
            "id": "uigradients",
            "name": "uiGradients",
            "description": "Beautiful color gradients for design and code.",
            "tags": [
              "Paid"
            ],
            "url": "https://uigradients.com"
          },
          {
            "id": "coolors",
            "name": "Coolors",
            "description": "Fast color scheme generator and palette explorer.",
            "tags": [
              "Paid"
            ],
            "url": "https://coolors.co"
          },
          {
            "id": "css-gradient",
            "name": "CSS Gradient",
            "description": "CSS gradient generator with live preview.",
            "tags": [
              "Paid"
            ],
            "url": "https://cssgradient.io"
          },
          {
            "id": "gradient-hunt",
            "name": "Gradient Hunt",
            "description": "Platform for discovering and sharing beautiful gradients.",
            "tags": [
              "Paid"
            ],
            "url": "https://gradienthunt.com"
          },
          {
            "id": "color-hunt",
            "name": "Color Hunt",
            "description": "Curated color palettes for designers.",
            "tags": [
              "Paid"
            ],
            "url": "https://colorhunt.co"
          },
          {
            "id": "khroma",
            "name": "Khroma",
            "description": "AI color tool trained on popular designer palettes.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.khroma.co"
          },
          {
            "id": "happy-hues",
            "name": "Happy Hues",
            "description": "Curated color palette inspiration for UI design.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.happyhues.co"
          },
          {
            "id": "webgradients",
            "name": "WebGradients",
            "description": "180 linear gradients as background or cover.",
            "tags": [
              "Paid"
            ],
            "url": "https://webgradients.com"
          }
        ]
      },
      {
        "name": "Illustrations & Avatars",
        "tools": [
          {
            "id": "undraw",
            "name": "Undraw",
            "description": "Open-source illustrations for any concept or idea.",
            "tags": [
              "OSS"
            ],
            "url": "https://undraw.co"
          },
          {
            "id": "humaaans",
            "name": "Humaaans",
            "description": "Mix-and-match people illustration library.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.humaaans.com"
          },
          {
            "id": "open-peeps",
            "name": "Open Peeps",
            "description": "Hand-drawn people illustration library by Pablo Stanley.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.openpeeps.com"
          },
          {
            "id": "storyset",
            "name": "Storyset",
            "description": "Customizable animated story illustrations.",
            "tags": [
              "Paid"
            ],
            "url": "https://storyset.com"
          },
          {
            "id": "absurd-design",
            "name": "Absurd Design",
            "description": "Surrealist illustrations for unique projects.",
            "tags": [
              "Paid"
            ],
            "url": "https://absurd.design"
          },
          {
            "id": "blush",
            "name": "Blush",
            "description": "Customizable illustrations via Figma plugin.",
            "tags": [
              "Paid"
            ],
            "url": "https://blush.design"
          },
          {
            "id": "manypixels",
            "name": "Manypixels",
            "description": "Royalty-free isometric and flat illustrations.",
            "tags": [
              "Free"
            ],
            "url": "https://www.manypixels.co"
          },
          {
            "id": "ira-design",
            "name": "IRA Design",
            "description": "Free-to-use illustration library with gradient styles.",
            "tags": [
              "Free"
            ],
            "url": "https://iradesign.io"
          }
        ]
      },
      {
        "name": "Motion & Animation",
        "tools": [
          {
            "id": "framer-motion",
            "name": "Framer Motion",
            "description": "Production-ready React animation library.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.framer.com/motion"
          },
          {
            "id": "motion-one",
            "name": "Motion One",
            "description": "Next-generation web animations library, tiny footprint.",
            "tags": [
              "Paid"
            ],
            "url": "https://motion.dev"
          },
          {
            "id": "gsap",
            "name": "GSAP",
            "description": "Industry-standard JavaScript animation library.",
            "tags": [
              "Paid"
            ],
            "url": "https://gsap.com"
          },
          {
            "id": "autoanimate",
            "name": "AutoAnimate",
            "description": "One-line drop-in smooth animations for React/Vue.",
            "tags": [
              "Paid"
            ],
            "url": "https://auto-animate.formkit.com"
          },
          {
            "id": "rive",
            "name": "Rive",
            "description": "Real-time interactive animations for web and mobile.",
            "tags": [
              "Paid"
            ],
            "url": "https://rive.app"
          },
          {
            "id": "lottiefiles",
            "name": "LottieFiles",
            "description": "Lightweight JSON animation player for web/mobile.",
            "tags": [
              "Paid"
            ],
            "url": "https://lottiefiles.com"
          },
          {
            "id": "anime-js",
            "name": "Anime.js",
            "description": "Lightweight JavaScript animation library.",
            "tags": [
              "Paid"
            ],
            "url": "https://animejs.com"
          },
          {
            "id": "react-spring",
            "name": "React Spring",
            "description": "Spring physics based React animation library.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.react-spring.dev"
          }
        ]
      },
      {
        "name": "3D Web Design",
        "tools": [
          {
            "id": "spline",
            "name": "Spline",
            "description": "3D web design tool for interactive landing pages.",
            "tags": [
              "Paid"
            ],
            "url": "https://spline.design"
          },
          {
            "id": "three-js",
            "name": "Three.js",
            "description": "The standard 3D graphics library for the web.",
            "tags": [
              "Paid"
            ],
            "url": "https://threejs.org"
          },
          {
            "id": "babylon-js",
            "name": "Babylon.js",
            "description": "Powerful, beautiful, simple 3D engine by Microsoft.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.babylonjs.com"
          },
          {
            "id": "rive",
            "name": "Rive",
            "description": "Interactive real-time animations with state machines.",
            "tags": [
              "Paid"
            ],
            "url": "https://rive.app"
          }
        ]
      },
      {
        "name": "Charts & Data Viz",
        "tools": [
          {
            "id": "chart-js",
            "name": "Chart.js",
            "description": "Simple yet flexible JavaScript charting library.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.chartjs.org"
          },
          {
            "id": "recharts",
            "name": "Recharts",
            "description": "Composable charting library built on React and D3.",
            "tags": [
              "Paid"
            ],
            "url": "https://recharts.org"
          },
          {
            "id": "d3-js",
            "name": "D3.js",
            "description": "The gold standard library for data-driven visualizations.",
            "tags": [
              "Paid"
            ],
            "url": "https://d3js.org"
          },
          {
            "id": "apache-echarts",
            "name": "Apache ECharts",
            "description": "Powerful charting library with rich interactive charts.",
            "tags": [
              "Paid"
            ],
            "url": "https://echarts.apache.org"
          },
          {
            "id": "apexcharts",
            "name": "ApexCharts",
            "description": "Modern JavaScript charting library for web.",
            "tags": [
              "Paid"
            ],
            "url": "https://apexcharts.com"
          },
          {
            "id": "plotly",
            "name": "Plotly",
            "description": "Interactive scientific charting library.",
            "tags": [
              "Paid"
            ],
            "url": "https://plotly.com"
          }
        ]
      },
      {
        "name": "Forms & Tables",
        "tools": [
          {
            "id": "react-hook-form",
            "name": "React Hook Form",
            "description": "Performant, flexible form validation with minimal re-renders.",
            "tags": [
              "Paid"
            ],
            "url": "https://react-hook-form.com"
          },
          {
            "id": "formik",
            "name": "Formik",
            "description": "Build forms in React without the tears.",
            "tags": [
              "Paid"
            ],
            "url": "https://formik.org"
          },
          {
            "id": "zod",
            "name": "Zod",
            "description": "TypeScript-first schema validation library.",
            "tags": [
              "Paid"
            ],
            "url": "https://zod.dev"
          },
          {
            "id": "tanstack-table",
            "name": "TanStack Table",
            "description": "Headless UI for building powerful tables and datagrids.",
            "tags": [
              "Paid"
            ],
            "url": "https://tanstack.com/table"
          },
          {
            "id": "ag-grid",
            "name": "AG Grid",
            "description": "The leading data grid for React, Angular, Vue.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.ag-grid.com"
          },
          {
            "id": "tabulator",
            "name": "Tabulator",
            "description": "Interactive table library with powerful filtering.",
            "tags": [
              "Paid"
            ],
            "url": "https://tabulator.info"
          }
        ]
      },
      {
        "name": "Accessibility",
        "tools": [
          {
            "id": "axe-devtools",
            "name": "Axe DevTools",
            "description": "Industry-standard accessibility testing browser extension.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.deque.com/axe/devtools"
          },
          {
            "id": "wave",
            "name": "WAVE",
            "description": "Free web accessibility evaluation tool by WebAIM.",
            "tags": [
              "Free"
            ],
            "url": "https://wave.webaim.org"
          },
          {
            "id": "lighthouse",
            "name": "Lighthouse",
            "description": "Google's automated tool for improving web quality.",
            "tags": [
              "Paid"
            ],
            "url": "https://developer.chrome.com/docs/lighthouse"
          },
          {
            "id": "stark",
            "name": "Stark",
            "description": "Accessibility plugin for Figma, Sketch, and browser.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.getstark.co"
          },
          {
            "id": "color-oracle",
            "name": "Color Oracle",
            "description": "Free color blindness simulator for any OS.",
            "tags": [
              "Free"
            ],
            "url": "https://colororacle.org"
          }
        ]
      },
      {
        "name": "Figma Plugins",
        "tools": [
          {
            "id": "iconify-for-figma",
            "name": "Iconify for Figma",
            "description": "Access 200,000+ icons directly in Figma.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.figma.com/community/plugin/735098390272716381/iconify"
          },
          {
            "id": "unsplash-for-figma",
            "name": "Unsplash for Figma",
            "description": "Insert beautiful, free images directly into Figma.",
            "tags": [
              "Free"
            ],
            "url": "https://www.figma.com/community/plugin/738454987945972471/unsplash"
          },
          {
            "id": "autoflow",
            "name": "Autoflow",
            "description": "Draw flows and user journeys in Figma.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.figma.com/community/plugin/733902567826686738/autoflow"
          },
          {
            "id": "content-reel",
            "name": "Content Reel",
            "description": "Pull text strings, images and icons into Figma.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.figma.com/community/plugin/731627216655469013/content-reel"
          },
          {
            "id": "blush-plugin",
            "name": "Blush Plugin",
            "description": "Create and customize illustrations in Figma.",
            "tags": [
              "Paid"
            ],
            "url": "https://blush.design/figma-plugin"
          }
        ]
      },
      {
        "name": "Prototyping & Wireframing",
        "tools": [
          {
            "id": "figma",
            "name": "Figma",
            "description": "Industry-standard collaborative interface design tool.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.figma.com"
          },
          {
            "id": "penpot",
            "name": "Penpot",
            "description": "Open-source Figma alternative, self-hostable.",
            "tags": [
              "OSS"
            ],
            "url": "https://penpot.app"
          },
          {
            "id": "excalidraw",
            "name": "Excalidraw",
            "description": "Collaborative whiteboard with hand-drawn feel.",
            "tags": [
              "Paid"
            ],
            "url": "https://excalidraw.com"
          },
          {
            "id": "visily",
            "name": "Visily",
            "description": "AI-assisted mockup generation from screenshots.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.visily.ai"
          }
        ]
      }
    ]
  },
  {
    "name": "Vibe Coding",
    "subcategories": [
      {
        "name": "AI Coding Assistants",
        "tools": [
          {
            "id": "claude-code",
            "name": "Claude Code",
            "description": "Terminal-native AI agent from Anthropic that writes, runs and fixes code.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://claude.ai/code"
          },
          {
            "id": "cursor",
            "name": "Cursor",
            "description": "AI-first code editor",
            "tags": [
              "Paid"
            ],
            "url": "VSCode fork) with inline completions. (https://www.cursor.com"
          },
          {
            "id": "windsurf",
            "name": "Windsurf",
            "description": "Agentic IDE by Codeium with Cascade AI flows.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://codeium.com/windsurf"
          },
          {
            "id": "aider",
            "name": "Aider",
            "description": "Open-source AI pair programmer in your terminal.",
            "tags": [
              "OSS",
              "AI"
            ],
            "url": "https://aider.chat"
          },
          {
            "id": "continue-dev",
            "name": "Continue.dev",
            "description": "Open-source AI code assistant for any IDE.",
            "tags": [
              "OSS",
              "AI"
            ],
            "url": "https://continue.dev"
          },
          {
            "id": "github-copilot",
            "name": "GitHub Copilot",
            "description": "AI pair programmer by GitHub and OpenAI.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://github.com/features/copilot"
          },
          {
            "id": "codeium",
            "name": "Codeium",
            "description": "Free AI code completions for 70+ programming languages.",
            "tags": [
              "Free",
              "AI"
            ],
            "url": "https://codeium.com"
          },
          {
            "id": "tabnine",
            "name": "Tabnine",
            "description": "Privacy-first AI code completion trained on your codebase.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.tabnine.com"
          },
          {
            "id": "amazon-codewhisperer",
            "name": "Amazon CodeWhisperer",
            "description": "AWS AI coding companion with security scanning.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://aws.amazon.com/codewhisperer"
          },
          {
            "id": "zed",
            "name": "Zed",
            "description": "Lightning-fast collaborative code editor with AI built-in.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://zed.dev"
          },
          {
            "id": "replit-ghostwriter",
            "name": "Replit Ghostwriter",
            "description": "AI coding assistant inside Replit's browser IDE.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://replit.com/ai"
          }
        ]
      },
      {
        "name": "Full-Stack AI App Builders",
        "tools": [
          {
            "id": "bolt-new",
            "name": "Bolt.new",
            "description": "Browser-based AI scaffolding with GitHub and Supabase integration.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://bolt.new"
          },
          {
            "id": "lovable",
            "name": "Lovable",
            "description": "Generates full-stack TypeScript and React apps from prompts.",
            "tags": [
              "Paid"
            ],
            "url": "https://lovable.dev"
          },
          {
            "id": "v0-by-vercel",
            "name": "v0 by Vercel",
            "description": "AI-generated React/Next.js UI blocks with shadcn/UI.",
            "tags": [
              "Paid"
            ],
            "url": "https://v0.dev"
          },
          {
            "id": "emergent",
            "name": "Emergent",
            "description": "Multi-agent AI builder for startup apps. Free/paid hybrid.",
            "tags": [
              "Free",
              "AI"
            ],
            "url": "https://emergent.sh"
          },
          {
            "id": "meku",
            "name": "Meku",
            "description": "Convert Figma designs into React and Tailwind code.",
            "tags": [
              "Paid"
            ],
            "url": "https://meku.dev"
          },
          {
            "id": "replit",
            "name": "Replit",
            "description": "AI-powered browser IDE with instant deployment.",
            "tags": [
              "Paid"
            ],
            "url": "https://replit.com"
          },
          {
            "id": "open-design",
            "name": "Open Design",
            "description": "Open-source Claude Design clone â€” generates UI artifacts locally.",
            "tags": [
              "OSS"
            ],
            "url": "https://github.com/nexu-io/open-design"
          },
          {
            "id": "openhands",
            "name": "OpenHands",
            "description": "Open-source autonomous software engineering agent.",
            "tags": [
              "OSS"
            ],
            "url": "https://github.com/All-Hands-AI/OpenHands"
          },
          {
            "id": "graphify",
            "name": "Graphify",
            "description": "Turns your codebase into a knowledge graph for AI context.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://github.com/safishamsi/graphify"
          }
        ]
      },
      {
        "name": "Prompt Engineering",
        "tools": [
          {
            "id": "promptlayer",
            "name": "PromptLayer",
            "description": "Track, version and analyze your LLM prompts.",
            "tags": [
              "Paid"
            ],
            "url": "https://promptlayer.com"
          },
          {
            "id": "flowgpt",
            "name": "FlowGPT",
            "description": "Community-shared prompts for coding, design and startups.",
            "tags": [
              "Paid"
            ],
            "url": "https://flowgpt.com"
          },
          {
            "id": "promptbase",
            "name": "PromptBase",
            "description": "Marketplace to buy and sell quality prompts.",
            "tags": [
              "Paid"
            ],
            "url": "https://promptbase.com"
          },
          {
            "id": "prompthub",
            "name": "PromptHub",
            "description": "Prompt management and collaboration platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.prompthub.us"
          },
          {
            "id": "learnprompting",
            "name": "LearnPrompting",
            "description": "Free open-source guide to prompt engineering.",
            "tags": [
              "Free"
            ],
            "url": "https://learnprompting.org"
          }
        ]
      }
    ]
  },
  {
    "name": "Frontend Development",
    "subcategories": [
      {
        "name": "Frameworks & Meta-Frameworks",
        "tools": [
          {
            "id": "react",
            "name": "React",
            "description": "The dominant UI library for building component-based applications.",
            "tags": [
              "Paid"
            ],
            "url": "https://react.dev"
          },
          {
            "id": "next-js",
            "name": "Next.js",
            "description": "The React meta-framework for server-side rendering.",
            "tags": [
              "Paid"
            ],
            "url": "https://nextjs.org"
          },
          {
            "id": "vue-js",
            "name": "Vue.js",
            "description": "Progressive JavaScript framework with gentle learning curve.",
            "tags": [
              "Paid"
            ],
            "url": "https://vuejs.org"
          },
          {
            "id": "svelte",
            "name": "Svelte",
            "description": "Compiler-based framework with no virtual DOM overhead.",
            "tags": [
              "Paid"
            ],
            "url": "https://svelte.dev"
          },
          {
            "id": "solid-js",
            "name": "Solid.js",
            "description": "Reactive UI library with fine-grained updates and no VDOM.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.solidjs.com"
          },
          {
            "id": "astro",
            "name": "Astro",
            "description": "Content-focused framework with zero-JS by default.",
            "tags": [
              "Paid"
            ],
            "url": "https://astro.build"
          },
          {
            "id": "angular",
            "name": "Angular",
            "description": "Google's comprehensive enterprise web framework.",
            "tags": [
              "Paid"
            ],
            "url": "https://angular.io"
          },
          {
            "id": "nuxt-js",
            "name": "Nuxt.js",
            "description": "The intuitive Vue meta-framework for SSR and SSG.",
            "tags": [
              "Paid"
            ],
            "url": "https://nuxt.com"
          },
          {
            "id": "htmx",
            "name": "HTMX",
            "description": "HTML-driven interactivity without heavy JavaScript.",
            "tags": [
              "Paid"
            ],
            "url": "https://htmx.org"
          },
          {
            "id": "alpine-js",
            "name": "Alpine.js",
            "description": "Minimal JavaScript framework for adding interactivity to HTML.",
            "tags": [
              "Paid"
            ],
            "url": "https://alpinejs.dev"
          },
          {
            "id": "remix",
            "name": "Remix",
            "description": "Full-stack React framework focused on web fundamentals.",
            "tags": [
              "Paid"
            ],
            "url": "https://remix.run"
          }
        ]
      },
      {
        "name": "State Management",
        "tools": [
          {
            "id": "zustand",
            "name": "Zustand",
            "description": "Minimal state management with hooks-based API.",
            "tags": [
              "Paid"
            ],
            "url": "https://zustand-demo.pmnd.rs"
          },
          {
            "id": "tanstack-query",
            "name": "TanStack Query",
            "description": "Powerful server state management and caching.",
            "tags": [
              "Paid"
            ],
            "url": "https://tanstack.com/query"
          },
          {
            "id": "redux-toolkit",
            "name": "Redux Toolkit",
            "description": "The official toolset for efficient Redux development.",
            "tags": [
              "Paid"
            ],
            "url": "https://redux-toolkit.js.org"
          },
          {
            "id": "jotai",
            "name": "Jotai",
            "description": "Primitive and flexible state management for React.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://jotai.org"
          },
          {
            "id": "valtio",
            "name": "Valtio",
            "description": "Proxy-based state management for React.",
            "tags": [
              "Paid"
            ],
            "url": "https://valtio.dev"
          },
          {
            "id": "recoil",
            "name": "Recoil",
            "description": "Facebook's experimental state management library for React.",
            "tags": [
              "Paid"
            ],
            "url": "https://recoiljs.org"
          },
          {
            "id": "mobx",
            "name": "MobX",
            "description": "Simple, scalable state management with observables.",
            "tags": [
              "Paid"
            ],
            "url": "https://mobx.js.org"
          }
        ]
      },
      {
        "name": "Build Tools & Bundlers",
        "tools": [
          {
            "id": "vite",
            "name": "Vite",
            "description": "Lightning-fast dev server and build tool using native ESM.",
            "tags": [
              "Paid"
            ],
            "url": "https://vitejs.dev"
          },
          {
            "id": "esbuild",
            "name": "esbuild",
            "description": "Extremely fast JavaScript/TypeScript bundler written in Go.",
            "tags": [
              "Paid"
            ],
            "url": "https://esbuild.github.io"
          },
          {
            "id": "turbopack",
            "name": "Turbopack",
            "description": "Rust-powered successor to Webpack by Vercel.",
            "tags": [
              "Paid"
            ],
            "url": "https://turbo.build/pack"
          },
          {
            "id": "rspack",
            "name": "Rspack",
            "description": "High-performance Rust-based bundler compatible with Webpack.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.rspack.dev"
          },
          {
            "id": "rollup",
            "name": "Rollup",
            "description": "Module bundler optimized for JavaScript libraries.",
            "tags": [
              "Paid"
            ],
            "url": "https://rollupjs.org"
          },
          {
            "id": "parcel",
            "name": "Parcel",
            "description": "Zero-configuration web application bundler.",
            "tags": [
              "Paid"
            ],
            "url": "https://parceljs.org"
          },
          {
            "id": "webpack",
            "name": "Webpack",
            "description": "The battle-tested module bundler for complex apps.",
            "tags": [
              "Paid"
            ],
            "url": "https://webpack.js.org"
          }
        ]
      },
      {
        "name": "CSS & Styling",
        "tools": [
          {
            "id": "tailwind-css",
            "name": "Tailwind CSS",
            "description": "Utility-first CSS framework for rapid UI development.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://tailwindcss.com"
          },
          {
            "id": "typescript",
            "name": "TypeScript",
            "description": "Typed JavaScript superset improving developer productivity.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.typescriptlang.org"
          },
          {
            "id": "sass-scss",
            "name": "Sass/SCSS",
            "description": "CSS preprocessor with variables, nesting and mixins.",
            "tags": [
              "Paid"
            ],
            "url": "https://sass-lang.com"
          },
          {
            "id": "styled-components",
            "name": "Styled Components",
            "description": "CSS-in-JS library for component-scoped styles.",
            "tags": [
              "Paid"
            ],
            "url": "https://styled-components.com"
          },
          {
            "id": "unocss",
            "name": "UnoCSS",
            "description": "Instant on-demand atomic CSS engine.",
            "tags": [
              "Paid"
            ],
            "url": "https://unocss.dev"
          }
        ]
      },
      {
        "name": "Linting & Formatting",
        "tools": [
          {
            "id": "eslint",
            "name": "ESLint",
            "description": "The standard JavaScript linter with extensive plugins.",
            "tags": [
              "Paid"
            ],
            "url": "https://eslint.org"
          },
          {
            "id": "prettier",
            "name": "Prettier",
            "description": "Opinionated code formatter for consistent style.",
            "tags": [
              "Paid"
            ],
            "url": "https://prettier.io"
          },
          {
            "id": "biome",
            "name": "Biome",
            "description": "Rust-powered linter and formatter, 10x faster than ESLint.",
            "tags": [
              "Paid"
            ],
            "url": "https://biomejs.dev"
          },
          {
            "id": "husky",
            "name": "Husky",
            "description": "Git hooks to run linters before commits.",
            "tags": [
              "Paid"
            ],
            "url": "https://typicode.github.io/husky"
          },
          {
            "id": "stylelint",
            "name": "Stylelint",
            "description": "Linter for CSS and SCSS files.",
            "tags": [
              "Paid"
            ],
            "url": "https://stylelint.io"
          }
        ]
      },
      {
        "name": "Runtimes & Package Managers",
        "tools": [
          {
            "id": "pnpm",
            "name": "pnpm",
            "description": "Fast, disk-efficient package manager.",
            "tags": [
              "Paid"
            ],
            "url": "https://pnpm.io"
          },
          {
            "id": "bun",
            "name": "Bun",
            "description": "All-in-one JavaScript runtime and package manager.",
            "tags": [
              "Paid"
            ],
            "url": "https://bun.sh"
          },
          {
            "id": "node-js",
            "name": "Node.js",
            "description": "Standard JavaScript server runtime environment.",
            "tags": [
              "Paid"
            ],
            "url": "https://nodejs.org"
          },
          {
            "id": "yarn",
            "name": "Yarn",
            "description": "Fast, reliable JavaScript package manager.",
            "tags": [
              "Paid"
            ],
            "url": "https://yarnpkg.com"
          }
        ]
      }
    ]
  },
  {
    "name": "Backend Development",
    "subcategories": [
      {
        "name": "BaaS & Backend Platforms",
        "tools": [
          {
            "id": "supabase",
            "name": "Supabase",
            "description": "Open-source Firebase alternative with Postgres, auth and storage.",
            "tags": [
              "OSS"
            ],
            "url": "https://supabase.com"
          },
          {
            "id": "pocketbase",
            "name": "PocketBase",
            "description": "Open-source backend with embedded SQLite, auth and realtime.",
            "tags": [
              "OSS"
            ],
            "url": "https://pocketbase.io"
          },
          {
            "id": "appwrite",
            "name": "Appwrite",
            "description": "Self-hostable Firebase alternative with full API suite.",
            "tags": [
              "Paid"
            ],
            "url": "https://appwrite.io"
          },
          {
            "id": "firebase",
            "name": "Firebase",
            "description": "Google's full-featured realtime backend platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://firebase.google.com"
          },
          {
            "id": "convex",
            "name": "Convex",
            "description": "Real-time backend with serverless functions and sync.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.convex.dev"
          },
          {
            "id": "nocodb",
            "name": "NocoDB",
            "description": "Open-source Airtable alternative with spreadsheet UI.",
            "tags": [
              "OSS"
            ],
            "url": "https://nocodb.com"
          }
        ]
      },
      {
        "name": "Frameworks",
        "tools": [
          {
            "id": "fastapi",
            "name": "FastAPI",
            "description": "High-performance Python API framework with automatic docs.",
            "tags": [
              "Paid"
            ],
            "url": "https://fastapi.tiangolo.com"
          },
          {
            "id": "nestjs",
            "name": "NestJS",
            "description": "Scalable Node.js framework with TypeScript and Angular-inspired architecture.",
            "tags": [
              "Paid"
            ],
            "url": "https://nestjs.com"
          },
          {
            "id": "express",
            "name": "Express",
            "description": "Minimal and flexible Node.js web framework.",
            "tags": [
              "Paid"
            ],
            "url": "https://expressjs.com"
          },
          {
            "id": "django",
            "name": "Django",
            "description": "The web framework for perfectionists with deadlines.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.djangoproject.com"
          },
          {
            "id": "spring-boot",
            "name": "Spring Boot",
            "description": "Java enterprise framework for rapid application development.",
            "tags": [
              "Paid"
            ],
            "url": "https://spring.io/projects/spring-boot"
          },
          {
            "id": "ruby-on-rails",
            "name": "Ruby on Rails",
            "description": "Convention over configuration full-stack web framework.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://rubyonrails.org"
          },
          {
            "id": "hono",
            "name": "Hono",
            "description": "Ultra-fast, lightweight web framework for edge runtimes.",
            "tags": [
              "Paid"
            ],
            "url": "https://hono.dev"
          }
        ]
      },
      {
        "name": "Databases â€” SQL",
        "tools": [
          {
            "id": "postgresql",
            "name": "PostgreSQL",
            "description": "The world's most advanced open-source relational database.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.postgresql.org"
          },
          {
            "id": "mysql",
            "name": "MySQL",
            "description": "The world's most popular open-source SQL database.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.mysql.com"
          },
          {
            "id": "mariadb",
            "name": "MariaDB",
            "description": "Community-driven MySQL fork with extra features.",
            "tags": [
              "Paid"
            ],
            "url": "https://mariadb.org"
          },
          {
            "id": "sqlite",
            "name": "SQLite",
            "description": "Lightweight embedded SQL database for local and edge apps.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.sqlite.org"
          },
          {
            "id": "cockroachdb",
            "name": "CockroachDB",
            "description": "Distributed SQL database with built-in geo-partitioning.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.cockroachlabs.com"
          },
          {
            "id": "planetscale",
            "name": "PlanetScale",
            "description": "Serverless MySQL with database branching workflow.",
            "tags": [
              "Paid"
            ],
            "url": "https://planetscale.com"
          }
        ]
      },
      {
        "name": "Databases â€” NoSQL",
        "tools": [
          {
            "id": "mongodb",
            "name": "MongoDB",
            "description": "The leading document database for modern applications.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.mongodb.com"
          },
          {
            "id": "redis",
            "name": "Redis",
            "description": "In-memory data store used as cache, queue and pubsub.",
            "tags": [
              "Paid"
            ],
            "url": "https://redis.io"
          },
          {
            "id": "couchdb",
            "name": "CouchDB",
            "description": "HTTP API document database with offline sync.",
            "tags": [
              "Paid"
            ],
            "url": "https://couchdb.apache.org"
          },
          {
            "id": "valkey",
            "name": "Valkey",
            "description": "Open-source Redis fork maintained by Linux Foundation.",
            "tags": [
              "OSS"
            ],
            "url": "https://valkey.io"
          },
          {
            "id": "dragonflydb",
            "name": "DragonflyDB",
            "description": "Redis-compatible cache with 25x more throughput.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.dragonflydb.io"
          }
        ]
      },
      {
        "name": "Vector Databases",
        "tools": [
          {
            "id": "qdrant",
            "name": "Qdrant",
            "description": "High-performance vector search engine for AI apps.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://qdrant.tech"
          },
          {
            "id": "weaviate",
            "name": "Weaviate",
            "description": "Open-source vector database with multi-modal support.",
            "tags": [
              "OSS"
            ],
            "url": "https://weaviate.io"
          },
          {
            "id": "chromadb",
            "name": "ChromaDB",
            "description": "Lightweight open-source embeddings database.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.trychroma.com"
          },
          {
            "id": "milvus",
            "name": "Milvus",
            "description": "Scalable open-source vector database for enterprise AI.",
            "tags": [
              "OSS"
            ],
            "url": "https://milvus.io"
          },
          {
            "id": "pinecone",
            "name": "Pinecone",
            "description": "Managed vector database with developer-friendly API.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.pinecone.io"
          },
          {
            "id": "pgvector",
            "name": "pgvector",
            "description": "Postgres extension for vector similarity search.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/pgvector/pgvector"
          }
        ]
      },
      {
        "name": "Graph Databases",
        "tools": [
          {
            "id": "neo4j",
            "name": "Neo4j",
            "description": "The world's leading graph database platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://neo4j.com"
          },
          {
            "id": "memgraph",
            "name": "Memgraph",
            "description": "In-memory graph database for real-time analytics.",
            "tags": [
              "Paid"
            ],
            "url": "https://memgraph.com"
          }
        ]
      },
      {
        "name": "ORMs & Query Builders",
        "tools": [
          {
            "id": "prisma",
            "name": "Prisma",
            "description": "Next-generation TypeScript ORM with type-safe queries.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.prisma.io"
          },
          {
            "id": "typeorm",
            "name": "TypeORM",
            "description": "ORM for TypeScript and JavaScript using decorators.",
            "tags": [
              "Paid"
            ],
            "url": "https://typeorm.io"
          },
          {
            "id": "drizzle-orm",
            "name": "Drizzle ORM",
            "description": "Lightweight, TypeScript-first ORM with SQL-like syntax.",
            "tags": [
              "Paid"
            ],
            "url": "https://orm.drizzle.team"
          },
          {
            "id": "sequelize",
            "name": "Sequelize",
            "description": "Promise-based Node.js ORM for Postgres and MySQL.",
            "tags": [
              "Paid"
            ],
            "url": "https://sequelize.org"
          },
          {
            "id": "mongoose",
            "name": "Mongoose",
            "description": "MongoDB object modeling tool for Node.js.",
            "tags": [
              "Paid"
            ],
            "url": "https://mongoosejs.com"
          }
        ]
      },
      {
        "name": "Authentication",
        "tools": [
          {
            "id": "clerk",
            "name": "Clerk",
            "description": "Drop-in authentication and user management for modern stacks.",
            "tags": [
              "Paid"
            ],
            "url": "https://clerk.com"
          },
          {
            "id": "better-auth",
            "name": "Better Auth",
            "description": "TypeScript-native open-source auth library.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.better-auth.com"
          },
          {
            "id": "auth0",
            "name": "Auth0",
            "description": "Enterprise-grade identity management as a service.",
            "tags": [
              "Paid"
            ],
            "url": "https://auth0.com"
          },
          {
            "id": "nextauth-js",
            "name": "NextAuth.js",
            "description": "The standard authentication library for Next.js.",
            "tags": [
              "Paid"
            ],
            "url": "https://next-auth.js.org"
          },
          {
            "id": "keycloak",
            "name": "Keycloak",
            "description": "Open-source identity and access management server.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.keycloak.org"
          },
          {
            "id": "magic-link",
            "name": "Magic.link",
            "description": "Passwordless authentication via email magic links.",
            "tags": [
              "Paid"
            ],
            "url": "https://magic.link"
          },
          {
            "id": "ory",
            "name": "Ory",
            "description": "Open-source identity infrastructure for cloud-native apps.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.ory.sh"
          }
        ]
      },
      {
        "name": "Payments",
        "tools": [
          {
            "id": "stripe",
            "name": "Stripe",
            "description": "The most developer-friendly payments API on the planet.",
            "tags": [
              "Paid"
            ],
            "url": "https://stripe.com"
          },
          {
            "id": "lemon-squeezy",
            "name": "Lemon Squeezy",
            "description": "All-in-one SaaS billing, licensing and merchant of record.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.lemonsqueezy.com"
          },
          {
            "id": "razorpay",
            "name": "Razorpay",
            "description": "India's most popular payment gateway.",
            "tags": [
              "Paid"
            ],
            "url": "https://razorpay.com"
          },
          {
            "id": "paddle",
            "name": "Paddle",
            "description": "Merchant of record for SaaS subscription management.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.paddle.com"
          },
          {
            "id": "braintree",
            "name": "Braintree",
            "description": "PayPal-owned payment platform with broad coverage.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.braintreepayments.com"
          },
          {
            "id": "adyen",
            "name": "Adyen",
            "description": "Enterprise global payment platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.adyen.com"
          }
        ]
      },
      {
        "name": "Email Services",
        "tools": [
          {
            "id": "resend",
            "name": "Resend",
            "description": "Developer-first email API with React Email templates.",
            "tags": [
              "Paid"
            ],
            "url": "https://resend.com"
          },
          {
            "id": "postmark",
            "name": "Postmark",
            "description": "Fast, reliable transactional email delivery.",
            "tags": [
              "Paid"
            ],
            "url": "https://postmarkapp.com"
          },
          {
            "id": "sendgrid",
            "name": "SendGrid",
            "description": "Large-scale email delivery and marketing platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://sendgrid.com"
          },
          {
            "id": "mailgun",
            "name": "Mailgun",
            "description": "Powerful email API for developers.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.mailgun.com"
          },
          {
            "id": "amazon-ses",
            "name": "Amazon SES",
            "description": "Cost-effective bulk email service by AWS.",
            "tags": [
              "Paid"
            ],
            "url": "https://aws.amazon.com/ses"
          }
        ]
      },
      {
        "name": "SMS & Push Notifications",
        "tools": [
          {
            "id": "twilio",
            "name": "Twilio",
            "description": "The standard cloud communications platform for SMS, voice and more.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.twilio.com"
          },
          {
            "id": "vonage",
            "name": "Vonage",
            "description": "Programmable communications API platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.vonage.com"
          },
          {
            "id": "plivo",
            "name": "Plivo",
            "description": "Fast and reliable SMS and voice API.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.plivo.com"
          },
          {
            "id": "sinch",
            "name": "Sinch",
            "description": "Customer communications platform with SMS and WhatsApp.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.sinch.com"
          }
        ]
      },
      {
        "name": "CMS",
        "tools": [
          {
            "id": "strapi",
            "name": "Strapi",
            "description": "Leading open-source headless CMS with admin panel.",
            "tags": [
              "OSS"
            ],
            "url": "https://strapi.io"
          },
          {
            "id": "sanity",
            "name": "Sanity",
            "description": "Flexible real-time content platform with GROQ query language.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.sanity.io"
          },
          {
            "id": "contentful",
            "name": "Contentful",
            "description": "Enterprise headless CMS platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.contentful.com"
          },
          {
            "id": "directus",
            "name": "Directus",
            "description": "Open-source data platform wrapping any SQL database.",
            "tags": [
              "OSS"
            ],
            "url": "https://directus.io"
          },
          {
            "id": "ghost",
            "name": "Ghost",
            "description": "Open-source publishing platform for blogs and newsletters.",
            "tags": [
              "OSS"
            ],
            "url": "https://ghost.org"
          },
          {
            "id": "keystonejs",
            "name": "KeystoneJS",
            "description": "Node.js headless CMS with GraphQL API.",
            "tags": [
              "Paid"
            ],
            "url": "https://keystonejs.com"
          }
        ]
      },
      {
        "name": "Search Engines",
        "tools": [
          {
            "id": "meilisearch",
            "name": "Meilisearch",
            "description": "Lightning-fast, typo-tolerant search engine.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.meilisearch.com"
          },
          {
            "id": "typesense",
            "name": "Typesense",
            "description": "Open-source, instant search engine.",
            "tags": [
              "OSS"
            ],
            "url": "https://typesense.org"
          },
          {
            "id": "algolia",
            "name": "Algolia",
            "description": "Hosted search with powerful developer tools.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.algolia.com"
          },
          {
            "id": "elasticsearch",
            "name": "Elasticsearch",
            "description": "Distributed search and analytics engine.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.elastic.co"
          }
        ]
      },
      {
        "name": "Queues & Background Jobs",
        "tools": [
          {
            "id": "bullmq",
            "name": "BullMQ",
            "description": "Redis-based queue for Node.js with concurrency support.",
            "tags": [
              "Paid"
            ],
            "url": "https://bullmq.io"
          },
          {
            "id": "rabbitmq",
            "name": "RabbitMQ",
            "description": "Open-source message broker with AMQP support.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.rabbitmq.com"
          },
          {
            "id": "apache-kafka",
            "name": "Apache Kafka",
            "description": "Distributed event streaming platform for high-throughput.",
            "tags": [
              "Paid"
            ],
            "url": "https://kafka.apache.org"
          },
          {
            "id": "temporal",
            "name": "Temporal",
            "description": "Durable workflow execution for long-running processes.",
            "tags": [
              "Paid"
            ],
            "url": "https://temporal.io"
          },
          {
            "id": "celery",
            "name": "Celery",
            "description": "Distributed task queue for Python applications.",
            "tags": [
              "Paid"
            ],
            "url": "https://docs.celeryq.dev"
          },
          {
            "id": "aws-sqs",
            "name": "AWS SQS",
            "description": "Fully managed message queuing service by Amazon.",
            "tags": [
              "Paid"
            ],
            "url": "https://aws.amazon.com/sqs"
          }
        ]
      },
      {
        "name": "Realtime",
        "tools": [
          {
            "id": "socket-io",
            "name": "Socket.io",
            "description": "Bidirectional event-based communication for web.",
            "tags": [
              "Paid"
            ],
            "url": "https://socket.io"
          },
          {
            "id": "ably",
            "name": "Ably",
            "description": "Managed realtime messaging with global edge delivery.",
            "tags": [
              "Paid"
            ],
            "url": "https://ably.com"
          },
          {
            "id": "pusher",
            "name": "Pusher",
            "description": "Hosted WebSocket API with Channels and Beams.",
            "tags": [
              "Paid"
            ],
            "url": "https://pusher.com"
          },
          {
            "id": "liveblocks",
            "name": "Liveblocks",
            "description": "APIs for collaborative, multiplayer apps.",
            "tags": [
              "Paid"
            ],
            "url": "https://liveblocks.io"
          }
        ]
      },
      {
        "name": "Storage",
        "tools": [
          {
            "id": "aws-s3",
            "name": "AWS S3",
            "description": "Industry-standard object storage from Amazon.",
            "tags": [
              "Paid"
            ],
            "url": "https://aws.amazon.com/s3"
          },
          {
            "id": "supabase-storage",
            "name": "Supabase Storage",
            "description": "S3-compatible storage with Postgres row-level security.",
            "tags": [
              "Paid"
            ],
            "url": "https://supabase.com/storage"
          },
          {
            "id": "minio",
            "name": "MinIO",
            "description": "High-performance, S3-compatible self-hosted object storage.",
            "tags": [
              "Paid"
            ],
            "url": "https://min.io"
          },
          {
            "id": "cloudflare-r2",
            "name": "Cloudflare R2",
            "description": "Zero-egress-fee S3-compatible object storage.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.cloudflare.com/products/r2"
          },
          {
            "id": "backblaze-b2",
            "name": "Backblaze B2",
            "description": "Low-cost cloud object storage.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.backblaze.com/cloud-storage"
          }
        ]
      },
      {
        "name": "APIs & Gateways",
        "tools": [
          {
            "id": "hasura",
            "name": "Hasura",
            "description": "Instant GraphQL APIs over Postgres with subscriptions.",
            "tags": [
              "Paid"
            ],
            "url": "https://hasura.io"
          },
          {
            "id": "rapidapi",
            "name": "RapidAPI",
            "description": "The world's largest API marketplace.",
            "tags": [
              "Paid"
            ],
            "url": "https://rapidapi.com"
          },
          {
            "id": "kong",
            "name": "Kong",
            "description": "Open-source API gateway and service mesh.",
            "tags": [
              "OSS"
            ],
            "url": "https://konghq.com"
          },
          {
            "id": "tyk",
            "name": "Tyk",
            "description": "Open-source API gateway with rich analytics.",
            "tags": [
              "OSS"
            ],
            "url": "https://tyk.io"
          },
          {
            "id": "postgrest",
            "name": "PostgREST",
            "description": "Automatically generate REST APIs from Postgres schemas.",
            "tags": [
              "Paid"
            ],
            "url": "https://postgrest.org"
          }
        ]
      }
    ]
  },
  {
    "name": "AI & LLM",
    "subcategories": [
      {
        "name": "AI Models â€” Commercial",
        "tools": [
          {
            "id": "openai-gpt-4o",
            "name": "OpenAI GPT-4o",
            "description": "State-of-the-art multimodal model from OpenAI.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://openai.com"
          },
          {
            "id": "anthropic-claude",
            "name": "Anthropic Claude",
            "description": "Safe, capable AI model excelling at coding and analysis.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://anthropic.com"
          },
          {
            "id": "google-gemini",
            "name": "Google Gemini",
            "description": "Google's multimodal AI model with 1M context window.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://ai.google.dev"
          },
          {
            "id": "cohere",
            "name": "Cohere",
            "description": "Enterprise NLP platform with embeddings and generation.",
            "tags": [
              "Paid"
            ],
            "url": "https://cohere.com"
          }
        ]
      },
      {
        "name": "AI Models â€” Open Source",
        "tools": [
          {
            "id": "meta-llama",
            "name": "Meta Llama",
            "description": "Meta's open-weight LLM family, widely used for fine-tuning.",
            "tags": [
              "Paid"
            ],
            "url": "https://llama.meta.com"
          },
          {
            "id": "mistral-ai",
            "name": "Mistral AI",
            "description": "Compact, high-performance open models from France.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://mistral.ai"
          },
          {
            "id": "google-gemma",
            "name": "Google Gemma",
            "description": "Lightweight open models from Google DeepMind.",
            "tags": [
              "Paid"
            ],
            "url": "https://ai.google.dev/gemma"
          },
          {
            "id": "alibaba-qwen",
            "name": "Alibaba Qwen",
            "description": "High-quality open-source multilingual models from Alibaba.",
            "tags": [
              "OSS"
            ],
            "url": "https://huggingface.co/Qwen"
          },
          {
            "id": "deepseek",
            "name": "DeepSeek",
            "description": "Powerful open-source coding and reasoning model.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.deepseek.com"
          },
          {
            "id": "microsoft-phi",
            "name": "Microsoft Phi",
            "description": "Small but highly capable models for on-device AI.",
            "tags": [
              "Paid"
            ],
            "url": "https://azure.microsoft.com/en-us/products/phi"
          },
          {
            "id": "nvidia-nemotron",
            "name": "NVIDIA Nemotron",
            "description": "High-performance models for enterprise AI deployments.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://developer.nvidia.com/nemotron"
          }
        ]
      },
      {
        "name": "Free API Providers",
        "tools": [
          {
            "id": "openrouter",
            "name": "OpenRouter",
            "description": "Free tier with 20+ models, multi-provider fallback, no credit card.",
            "tags": [
              "Free"
            ],
            "url": "https://openrouter.ai"
          },
          {
            "id": "google-ai-studio",
            "name": "Google AI Studio",
            "description": "Free Gemini and Gemma models with up to 1M token context.",
            "tags": [
              "Free",
              "AI"
            ],
            "url": "https://aistudio.google.com"
          },
          {
            "id": "groq",
            "name": "Groq",
            "description": "Free tier running LLaMA 3.3 70B at 320 tokens/sec.",
            "tags": [
              "Free"
            ],
            "url": "https://groq.com"
          },
          {
            "id": "cerebras",
            "name": "Cerebras",
            "description": "Free tier with LLaMA 3.3, up to 1M token context.",
            "tags": [
              "Free"
            ],
            "url": "https://inference.cerebras.ai"
          },
          {
            "id": "cloudflare-workers-ai",
            "name": "Cloudflare Workers AI",
            "description": "Free-tier serverless AI inference at the edge.",
            "tags": [
              "Free",
              "AI"
            ],
            "url": "https://developers.cloudflare.com/workers-ai"
          },
          {
            "id": "github-models",
            "name": "GitHub Models",
            "description": "Free access to GPT-4o, Claude and Llama via GitHub.",
            "tags": [
              "Free"
            ],
            "url": "https://github.com/marketplace/models"
          }
        ]
      },
      {
        "name": "Agent Frameworks",
        "tools": [
          {
            "id": "langgraph",
            "name": "LangGraph",
            "description": "Graph-based agent framework for stateful multi-agent apps.",
            "tags": [
              "Paid"
            ],
            "url": "https://langchain-ai.github.io/langgraph"
          },
          {
            "id": "crewai",
            "name": "CrewAI",
            "description": "Role-based multi-agent orchestration framework.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.crewai.com"
          },
          {
            "id": "autogen",
            "name": "AutoGen",
            "description": "Microsoft's multi-agent conversation framework.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/microsoft/autogen"
          },
          {
            "id": "pydantic-ai",
            "name": "Pydantic AI",
            "description": "Type-safe agent framework from the Pydantic team.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://ai.pydantic.dev"
          },
          {
            "id": "openai-agents-sdk",
            "name": "OpenAI Agents SDK",
            "description": "OpenAI's official SDK for building tool-calling agents.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://openai.github.io/openai-agents-python"
          },
          {
            "id": "semantic-kernel",
            "name": "Semantic Kernel",
            "description": "Microsoft's LLM orchestration framework for .NET and Python.",
            "tags": [
              "Paid"
            ],
            "url": "https://learn.microsoft.com/semantic-kernel"
          },
          {
            "id": "langchain",
            "name": "LangChain",
            "description": "The most popular LLM orchestration framework.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.langchain.com"
          },
          {
            "id": "haystack",
            "name": "Haystack",
            "description": "Open-source NLP framework for production RAG pipelines.",
            "tags": [
              "OSS"
            ],
            "url": "https://haystack.deepset.ai"
          },
          {
            "id": "magentic-one",
            "name": "Magentic-One",
            "description": "Microsoft's high-performance multi-agent system for web tasks.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/microsoft/autogen/tree/main/python/packages/autogen-magentic-one"
          }
        ]
      },
      {
        "name": "AI App Platforms",
        "tools": [
          {
            "id": "dify",
            "name": "Dify",
            "description": "Production-ready platform for building LLM apps with visual workflow.",
            "tags": [
              "Paid"
            ],
            "url": "https://dify.ai"
          },
          {
            "id": "flowise",
            "name": "Flowise",
            "description": "Visual drag-and-drop builder for LangChain pipelines.",
            "tags": [
              "Paid"
            ],
            "url": "https://flowiseai.com"
          },
          {
            "id": "langflow",
            "name": "Langflow",
            "description": "Visual multi-agent and RAG builder with drag-and-drop UI.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.langflow.org"
          },
          {
            "id": "anythingllm",
            "name": "AnythingLLM",
            "description": "All-in-one desktop AI app supporting multiple LLMs.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://anythingllm.com"
          },
          {
            "id": "open-webui",
            "name": "Open WebUI",
            "description": "Self-hosted ChatGPT-like interface for local and API models.",
            "tags": [
              "Paid"
            ],
            "url": "https://openwebui.com"
          }
        ]
      },
      {
        "name": "RAG & Embeddings",
        "tools": [
          {
            "id": "llamaindex",
            "name": "LlamaIndex",
            "description": "The leading data framework for RAG and LLM applications.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.llamaindex.ai"
          },
          {
            "id": "openai-embeddings",
            "name": "OpenAI Embeddings",
            "description": "State-of-the-art text-embedding-3 models.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://platform.openai.com/docs/guides/embeddings"
          },
          {
            "id": "sentence-transformers",
            "name": "Sentence Transformers",
            "description": "HuggingFace library for semantic text embeddings.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.sbert.net"
          },
          {
            "id": "cohere-embeddings",
            "name": "Cohere Embeddings",
            "description": "Multilingual and code embedding models from Cohere.",
            "tags": [
              "Paid"
            ],
            "url": "https://cohere.com/embed"
          },
          {
            "id": "litellm",
            "name": "LiteLLM",
            "description": "Gateway SDK for 100+ LLM APIs with unified interface.",
            "tags": [
              "Paid"
            ],
            "url": "https://litellm.ai"
          },
          {
            "id": "vllm",
            "name": "vLLM",
            "description": "High-throughput LLM serving engine for self-hosted models.",
            "tags": [
              "Paid"
            ],
            "url": "https://vllm.ai"
          }
        ]
      },
      {
        "name": "Local AI",
        "tools": [
          {
            "id": "ollama",
            "name": "Ollama",
            "description": "Run open-source LLMs locally with a simple CLI.",
            "tags": [
              "OSS"
            ],
            "url": "https://ollama.com"
          },
          {
            "id": "lm-studio",
            "name": "LM Studio",
            "description": "Desktop app to discover and run local LLMs with a UI.",
            "tags": [
              "Paid"
            ],
            "url": "https://lmstudio.ai"
          },
          {
            "id": "gpt4all",
            "name": "GPT4All",
            "description": "Free, local large language model ecosystem.",
            "tags": [
              "Free"
            ],
            "url": "https://gpt4all.io"
          },
          {
            "id": "jan",
            "name": "Jan",
            "description": "Open-source desktop app running LLMs locally.",
            "tags": [
              "OSS"
            ],
            "url": "https://jan.ai"
          },
          {
            "id": "koboldai",
            "name": "KoboldAI",
            "description": "Browser-based frontend for local AI-powered text generation.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://github.com/KoboldAI/KoboldAI-Client"
          },
          {
            "id": "llama-cpp",
            "name": "llama.cpp",
            "description": "Run LLaMA models on CPU/GPU with minimal dependencies.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/ggerganov/llama.cpp"
          }
        ]
      },
      {
        "name": "Speech & Audio AI",
        "tools": [
          {
            "id": "openai-whisper",
            "name": "OpenAI Whisper",
            "description": "Open-source speech recognition model with broad language support.",
            "tags": [
              "OSS",
              "AI"
            ],
            "url": "https://openai.com/research/whisper"
          },
          {
            "id": "deepgram",
            "name": "Deepgram",
            "description": "Real-time speech recognition API with noise cancellation.",
            "tags": [
              "Paid"
            ],
            "url": "https://deepgram.com"
          },
          {
            "id": "assemblyai",
            "name": "AssemblyAI",
            "description": "Accurate speech-to-text and audio intelligence API.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.assemblyai.com"
          },
          {
            "id": "elevenlabs",
            "name": "ElevenLabs",
            "description": "Ultra-realistic AI voice cloning and text-to-speech.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://elevenlabs.io"
          },
          {
            "id": "speechmatics",
            "name": "Speechmatics",
            "description": "High-accuracy speech recognition with speaker diarization.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.speechmatics.com"
          }
        ]
      },
      {
        "name": "OCR & Vision",
        "tools": [
          {
            "id": "gpt-4o-vision",
            "name": "GPT-4o Vision",
            "description": "OpenAI multimodal model for image understanding.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://openai.com"
          },
          {
            "id": "tesseract-ocr",
            "name": "Tesseract OCR",
            "description": "The leading open-source OCR engine.",
            "tags": [
              "OSS"
            ],
            "url": "https://github.com/tesseract-ocr/tesseract"
          },
          {
            "id": "paddleocr",
            "name": "PaddleOCR",
            "description": "Multilingual OCR toolkit by Baidu.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/PaddlePaddle/PaddleOCR"
          },
          {
            "id": "easyocr",
            "name": "EasyOCR",
            "description": "Ready-to-use OCR for 80+ languages.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/JaidedAI/EasyOCR"
          },
          {
            "id": "roboflow",
            "name": "Roboflow",
            "description": "Computer vision platform for labeling, training and deploying models.",
            "tags": [
              "Paid"
            ],
            "url": "https://roboflow.com"
          },
          {
            "id": "google-cloud-vision",
            "name": "Google Cloud Vision",
            "description": "Powerful image recognition REST API by Google.",
            "tags": [
              "Paid"
            ],
            "url": "https://cloud.google.com/vision"
          }
        ]
      },
      {
        "name": "Image Generation",
        "tools": [
          {
            "id": "stable-diffusion",
            "name": "Stable Diffusion",
            "description": "Open-source foundation model for image generation.",
            "tags": [
              "OSS"
            ],
            "url": "https://stability.ai"
          },
          {
            "id": "midjourney",
            "name": "MidJourney",
            "description": "Premium AI art generation with stunning quality.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.midjourney.com"
          },
          {
            "id": "dall-e-3",
            "name": "DALL-E 3",
            "description": "OpenAI's image generation model with prompt adherence.",
            "tags": [
              "Paid"
            ],
            "url": "https://openai.com/dall-e-3"
          },
          {
            "id": "comfyui",
            "name": "ComfyUI",
            "description": "Powerful node-based UI for Stable Diffusion workflows.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/comfyanonymous/ComfyUI"
          },
          {
            "id": "fooocus",
            "name": "Fooocus",
            "description": "Simplified Stable Diffusion UI requiring minimal setup.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/lllyasviel/Fooocus"
          },
          {
            "id": "leonardo-ai",
            "name": "Leonardo AI",
            "description": "AI image generation platform for creatives.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://leonardo.ai"
          },
          {
            "id": "runwayml",
            "name": "RunwayML",
            "description": "AI creative platform for image and video generation.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://runwayml.com"
          }
        ]
      },
      {
        "name": "Video AI",
        "tools": [
          {
            "id": "runway-gen-2",
            "name": "Runway Gen-2",
            "description": "Text-to-video and image-to-video generation model.",
            "tags": [
              "Paid"
            ],
            "url": "https://runwayml.com"
          },
          {
            "id": "pika-labs",
            "name": "Pika Labs",
            "description": "AI video generation with motion and style control.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://pika.art"
          },
          {
            "id": "ltx-studio",
            "name": "LTX Studio",
            "description": "AI-powered video creation and editing platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://ltx.studio"
          },
          {
            "id": "synthesia",
            "name": "Synthesia",
            "description": "AI video generation with virtual presenters.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.synthesia.io"
          },
          {
            "id": "luma-ai",
            "name": "Luma AI",
            "description": "AI video generation with photorealistic results.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://lumalabs.ai"
          },
          {
            "id": "hunyuan-video",
            "name": "Hunyuan Video",
            "description": "Open-source video generation model by Tencent.",
            "tags": [
              "OSS"
            ],
            "url": "https://github.com/Tencent/HunyuanVideo"
          }
        ]
      },
      {
        "name": "Music AI",
        "tools": [
          {
            "id": "aiva",
            "name": "AIVA",
            "description": "AI composer creating soundtrack music for games and films.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.aiva.ai"
          },
          {
            "id": "soundraw",
            "name": "Soundraw",
            "description": "AI music generator for royalty-free tracks.",
            "tags": [
              "Free",
              "AI"
            ],
            "url": "https://soundraw.io"
          },
          {
            "id": "suno",
            "name": "Suno",
            "description": "AI music creation platform generating full songs from prompts.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.suno.ai"
          },
          {
            "id": "udio",
            "name": "Udio",
            "description": "AI music generation with high-quality audio output.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.udio.com"
          }
        ]
      },
      {
        "name": "AI Safety & Guardrails",
        "tools": [
          {
            "id": "openai-moderation-api",
            "name": "OpenAI Moderation API",
            "description": "Free API to detect harmful content in text.",
            "tags": [
              "Free",
              "AI"
            ],
            "url": "https://platform.openai.com/docs/guides/moderation"
          },
          {
            "id": "perspective-api",
            "name": "Perspective API",
            "description": "Google's toxicity detection API for online conversations.",
            "tags": [
              "Paid"
            ],
            "url": "https://perspectiveapi.com"
          },
          {
            "id": "nemo-guardrails",
            "name": "NeMo Guardrails",
            "description": "NVIDIA's toolkit for adding guardrails to LLM applications.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://github.com/NVIDIA/NeMo-Guardrails"
          }
        ]
      },
      {
        "name": "MCP Servers",
        "tools": [
          {
            "id": "awesome-mcp-servers",
            "name": "Awesome MCP Servers",
            "description": "Curated list of MCP servers for all major tools.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/punkpeye/awesome-mcp-servers"
          },
          {
            "id": "mcp-filesystem-server",
            "name": "MCP Filesystem Server",
            "description": "Give Claude/AI agents direct filesystem access.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://github.com/modelcontextprotocol/servers"
          },
          {
            "id": "mcp-browser-tools",
            "name": "MCP Browser Tools",
            "description": "Browser automation and scraping via MCP protocol.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/modelcontextprotocol/servers"
          }
        ]
      }
    ]
  },
  {
    "name": "DevOps & Cloud",
    "subcategories": [
      {
        "name": "Hosting & Deployment",
        "tools": [
          {
            "id": "vercel",
            "name": "Vercel",
            "description": "Zero-config frontend and serverless function hosting.",
            "tags": [
              "Paid"
            ],
            "url": "https://vercel.com"
          },
          {
            "id": "netlify",
            "name": "Netlify",
            "description": "Jamstack deployment platform with edge functions.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.netlify.com"
          },
          {
            "id": "railway",
            "name": "Railway",
            "description": "Zero-config infra and deployment platform.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://railway.app"
          },
          {
            "id": "render",
            "name": "Render",
            "description": "Simple cloud hosting with automatic deploys from git.",
            "tags": [
              "Paid"
            ],
            "url": "https://render.com"
          },
          {
            "id": "fly-io",
            "name": "Fly.io",
            "description": "Deploy app servers close to users globally.",
            "tags": [
              "Paid"
            ],
            "url": "https://fly.io"
          },
          {
            "id": "digitalocean",
            "name": "DigitalOcean",
            "description": "Simple VPS and cloud infrastructure.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.digitalocean.com"
          },
          {
            "id": "aws",
            "name": "AWS",
            "description": "Amazon's comprehensive cloud computing platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://aws.amazon.com"
          },
          {
            "id": "google-cloud",
            "name": "Google Cloud",
            "description": "Google's global cloud computing services.",
            "tags": [
              "Paid"
            ],
            "url": "https://cloud.google.com"
          },
          {
            "id": "microsoft-azure",
            "name": "Microsoft Azure",
            "description": "Microsoft's enterprise cloud platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://azure.microsoft.com"
          },
          {
            "id": "hetzner",
            "name": "Hetzner",
            "description": "Budget-friendly European VPS and dedicated servers.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.hetzner.com"
          }
        ]
      },
      {
        "name": "Self-Hosted Deployment",
        "tools": [
          {
            "id": "coolify",
            "name": "Coolify",
            "description": "Open-source self-hostable Heroku/Netlify alternative.",
            "tags": [
              "OSS"
            ],
            "url": "https://coolify.io"
          },
          {
            "id": "dokploy",
            "name": "Dokploy",
            "description": "Free self-hosted deployment platform.",
            "tags": [
              "Free"
            ],
            "url": "https://dokploy.com"
          },
          {
            "id": "caprover",
            "name": "CapRover",
            "description": "Easy-to-use self-hosted PaaS built on Docker.",
            "tags": [
              "Paid"
            ],
            "url": "https://caprover.com"
          },
          {
            "id": "kamal",
            "name": "Kamal",
            "description": "Zero-downtime deployment tool by 37signals.",
            "tags": [
              "Paid"
            ],
            "url": "https://kamal-deploy.org"
          }
        ]
      },
      {
        "name": "CI/CD",
        "tools": [
          {
            "id": "github-actions",
            "name": "GitHub Actions",
            "description": "CI/CD automation built directly into GitHub repositories.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/features/actions"
          },
          {
            "id": "gitlab-ci-cd",
            "name": "GitLab CI/CD",
            "description": "Integrated CI/CD pipeline in GitLab.",
            "tags": [
              "Paid"
            ],
            "url": "https://docs.gitlab.com/ee/ci"
          },
          {
            "id": "circleci",
            "name": "CircleCI",
            "description": "Fast CI/CD with Docker support.",
            "tags": [
              "Paid"
            ],
            "url": "https://circleci.com"
          },
          {
            "id": "drone-ci",
            "name": "Drone CI",
            "description": "Container-native CI/CD platform you can self-host.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.drone.io"
          },
          {
            "id": "buildkite",
            "name": "Buildkite",
            "description": "Hybrid CI/CD using your own agents.",
            "tags": [
              "Paid"
            ],
            "url": "https://buildkite.com"
          }
        ]
      },
      {
        "name": "Containers & Orchestration",
        "tools": [
          {
            "id": "docker",
            "name": "Docker",
            "description": "The standard container platform for development and deployment.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.docker.com"
          },
          {
            "id": "kubernetes",
            "name": "Kubernetes",
            "description": "Open-source container orchestration system.",
            "tags": [
              "OSS"
            ],
            "url": "https://kubernetes.io"
          },
          {
            "id": "docker-compose",
            "name": "Docker Compose",
            "description": "Define multi-container apps in a single YAML file.",
            "tags": [
              "Paid"
            ],
            "url": "https://docs.docker.com/compose"
          },
          {
            "id": "orbstack",
            "name": "OrbStack",
            "description": "Fast, lightweight Docker Desktop alternative for Mac.",
            "tags": [
              "Paid"
            ],
            "url": "https://orbstack.dev"
          }
        ]
      },
      {
        "name": "Monitoring & Observability",
        "tools": [
          {
            "id": "sentry",
            "name": "Sentry",
            "description": "Application monitoring and error tracking platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://sentry.io"
          },
          {
            "id": "grafana",
            "name": "Grafana",
            "description": "Open-source dashboarding and metrics visualization.",
            "tags": [
              "OSS"
            ],
            "url": "https://grafana.com"
          },
          {
            "id": "prometheus",
            "name": "Prometheus",
            "description": "Open-source systems monitoring and alerting toolkit.",
            "tags": [
              "OSS"
            ],
            "url": "https://prometheus.io"
          },
          {
            "id": "datadog",
            "name": "Datadog",
            "description": "Full-stack observability platform with AI analytics.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.datadoghq.com"
          },
          {
            "id": "new-relic",
            "name": "New Relic",
            "description": "Observability platform for full-stack engineers.",
            "tags": [
              "Paid"
            ],
            "url": "https://newrelic.com"
          },
          {
            "id": "better-stack",
            "name": "Better Stack",
            "description": "Modern logging and uptime monitoring platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://betterstack.com"
          },
          {
            "id": "highlight-io",
            "name": "Highlight.io",
            "description": "Open-source full-stack monitoring with session replay.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.highlight.io"
          },
          {
            "id": "posthog",
            "name": "PostHog",
            "description": "Open-source product analytics and session replay.",
            "tags": [
              "OSS"
            ],
            "url": "https://posthog.com"
          }
        ]
      },
      {
        "name": "Secrets & Environment Variables",
        "tools": [
          {
            "id": "doppler",
            "name": "Doppler",
            "description": "Universal secrets manager syncing env variables everywhere.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.doppler.com"
          },
          {
            "id": "infisical",
            "name": "Infisical",
            "description": "Open-source end-to-end encrypted secrets manager.",
            "tags": [
              "OSS"
            ],
            "url": "https://infisical.com"
          },
          {
            "id": "hashicorp-vault",
            "name": "HashiCorp Vault",
            "description": "Secrets management for any environment.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.vaultproject.io"
          },
          {
            "id": "1password-secrets",
            "name": "1Password Secrets",
            "description": "Developer secrets management built on 1Password.",
            "tags": [
              "Paid"
            ],
            "url": "https://1password.com/secrets"
          }
        ]
      },
      {
        "name": "Infrastructure as Code",
        "tools": [
          {
            "id": "terraform",
            "name": "Terraform",
            "description": "The gold standard infrastructure-as-code tool.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.terraform.io"
          },
          {
            "id": "pulumi",
            "name": "Pulumi",
            "description": "IaC using real programming languages",
            "tags": [
              "Paid"
            ],
            "url": "TypeScript/Python). (https://www.pulumi.com"
          },
          {
            "id": "ansible",
            "name": "Ansible",
            "description": "Agentless automation for configuration management.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.ansible.com"
          }
        ]
      },
      {
        "name": "CDN & Edge",
        "tools": [
          {
            "id": "cloudflare",
            "name": "Cloudflare",
            "description": "Global CDN, DDoS protection and edge computing.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.cloudflare.com"
          },
          {
            "id": "aws-cloudfront",
            "name": "AWS CloudFront",
            "description": "Amazon's global CDN for content delivery.",
            "tags": [
              "Paid"
            ],
            "url": "https://aws.amazon.com/cloudfront"
          },
          {
            "id": "bunnycdn",
            "name": "BunnyCDN",
            "description": "Budget-friendly CDN with excellent performance.",
            "tags": [
              "Paid"
            ],
            "url": "https://bunny.net"
          }
        ]
      }
    ]
  },
  {
    "name": "Startup & Growth",
    "subcategories": [
      {
        "name": "Landing Pages & Waitlists",
        "tools": [
          {
            "id": "framer",
            "name": "Framer",
            "description": "AI-powered landing page builder with animations.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.framer.com"
          },
          {
            "id": "webflow",
            "name": "Webflow",
            "description": "Professional website builder with CMS for startups.",
            "tags": [
              "Paid"
            ],
            "url": "https://webflow.com"
          },
          {
            "id": "carrd",
            "name": "Carrd",
            "description": "Simple $19/year one-page site builder.",
            "tags": [
              "Paid"
            ],
            "url": "https://carrd.co"
          },
          {
            "id": "viral-loops",
            "name": "Viral Loops",
            "description": "Referral campaign platform for viral waitlists.",
            "tags": [
              "Paid"
            ],
            "url": "https://viral-loops.com"
          },
          {
            "id": "prefinery",
            "name": "Prefinery",
            "description": "Referral-based waitlist and beta invitation tool.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.prefinery.com"
          },
          {
            "id": "earlybird",
            "name": "EarlyBird",
            "description": "Simple waitlist builder with referral mechanics.",
            "tags": [
              "Paid"
            ],
            "url": "https://earlybird.com"
          },
          {
            "id": "launchlist",
            "name": "LaunchList",
            "description": "Simple viral waitlist builder for pre-launch apps.",
            "tags": [
              "Paid"
            ],
            "url": "https://launchlist.net"
          }
        ]
      },
      {
        "name": "Analytics",
        "tools": [
          {
            "id": "posthog",
            "name": "PostHog",
            "description": "Open-source product analytics with feature flags and session replay.",
            "tags": [
              "OSS"
            ],
            "url": "https://posthog.com"
          },
          {
            "id": "plausible",
            "name": "Plausible",
            "description": "Privacy-friendly, lightweight Google Analytics alternative.",
            "tags": [
              "Paid"
            ],
            "url": "https://plausible.io"
          },
          {
            "id": "umami",
            "name": "Umami",
            "description": "Self-hosted, GDPR-compliant website analytics.",
            "tags": [
              "Paid"
            ],
            "url": "https://umami.is"
          },
          {
            "id": "mixpanel",
            "name": "Mixpanel",
            "description": "Powerful product analytics for understanding user behavior.",
            "tags": [
              "Paid"
            ],
            "url": "https://mixpanel.com"
          },
          {
            "id": "amplitude",
            "name": "Amplitude",
            "description": "Enterprise product analytics and growth platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://amplitude.com"
          },
          {
            "id": "google-analytics-4",
            "name": "Google Analytics 4",
            "description": "Free web analytics from Google.",
            "tags": [
              "Free"
            ],
            "url": "https://analytics.google.com"
          },
          {
            "id": "hotjar",
            "name": "Hotjar",
            "description": "Heatmaps, session recordings and user feedback.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.hotjar.com"
          },
          {
            "id": "heap",
            "name": "Heap",
            "description": "Auto-capture analytics without manual event tracking.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.heap.io"
          }
        ]
      },
      {
        "name": "SEO",
        "tools": [
          {
            "id": "ahrefs",
            "name": "Ahrefs",
            "description": "The most comprehensive backlink and keyword research tool.",
            "tags": [
              "Paid"
            ],
            "url": "https://ahrefs.com"
          },
          {
            "id": "semrush",
            "name": "SEMrush",
            "description": "All-in-one digital marketing and SEO toolkit.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.semrush.com"
          },
          {
            "id": "moz",
            "name": "Moz",
            "description": "SEO software for link building and rank tracking.",
            "tags": [
              "Paid"
            ],
            "url": "https://moz.com"
          },
          {
            "id": "surferseo",
            "name": "SurferSEO",
            "description": "AI-driven content optimization for SEO.",
            "tags": [
              "Paid"
            ],
            "url": "https://surferseo.com"
          },
          {
            "id": "google-search-console",
            "name": "Google Search Console",
            "description": "Free Google tool to monitor search performance.",
            "tags": [
              "Free"
            ],
            "url": "https://search.google.com/search-console"
          },
          {
            "id": "ubersuggest",
            "name": "Ubersuggest",
            "description": "Free SEO keyword research and site audit tool.",
            "tags": [
              "Free"
            ],
            "url": "https://neilpatel.com/ubersuggest"
          },
          {
            "id": "screaming-frog",
            "name": "Screaming Frog",
            "description": "Website crawler for technical SEO audits.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.screamingfrog.co.uk"
          }
        ]
      },
      {
        "name": "Email Marketing",
        "tools": [
          {
            "id": "mailchimp",
            "name": "Mailchimp",
            "description": "The most popular email marketing and automation platform.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://mailchimp.com"
          },
          {
            "id": "convertkit",
            "name": "ConvertKit",
            "description": "Email marketing platform built for creators.",
            "tags": [
              "Paid"
            ],
            "url": "https://convertkit.com"
          },
          {
            "id": "beehiiv",
            "name": "Beehiiv",
            "description": "Newsletter platform built for growth with monetization.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.beehiiv.com"
          },
          {
            "id": "mailerlite",
            "name": "MailerLite",
            "description": "Simple email marketing with generous free tier.",
            "tags": [
              "Free",
              "AI"
            ],
            "url": "https://www.mailerlite.com"
          },
          {
            "id": "activecampaign",
            "name": "ActiveCampaign",
            "description": "Advanced email marketing with CRM automation.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.activecampaign.com"
          },
          {
            "id": "klaviyo",
            "name": "Klaviyo",
            "description": "Email and SMS marketing platform for e-commerce.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.klaviyo.com"
          }
        ]
      },
      {
        "name": "CRM & Customer Support",
        "tools": [
          {
            "id": "hubspot-crm",
            "name": "HubSpot CRM",
            "description": "Free CRM with marketing and sales tools.",
            "tags": [
              "Free"
            ],
            "url": "https://www.hubspot.com"
          },
          {
            "id": "intercom",
            "name": "Intercom",
            "description": "AI-powered customer messaging platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.intercom.com"
          },
          {
            "id": "crisp",
            "name": "Crisp",
            "description": "Free live chat and CRM for small businesses.",
            "tags": [
              "Free"
            ],
            "url": "https://crisp.chat"
          },
          {
            "id": "tawk-to",
            "name": "Tawk.to",
            "description": "100% free live chat widget for websites.",
            "tags": [
              "Free"
            ],
            "url": "https://www.tawk.to"
          },
          {
            "id": "zendesk",
            "name": "Zendesk",
            "description": "Enterprise customer service and ticketing platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.zendesk.com"
          },
          {
            "id": "chatwoot",
            "name": "Chatwoot",
            "description": "Open-source Intercom alternative, self-hostable.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.chatwoot.com"
          },
          {
            "id": "freshdesk",
            "name": "Freshdesk",
            "description": "Cloud-based helpdesk software.",
            "tags": [
              "Paid"
            ],
            "url": "https://freshdesk.com"
          }
        ]
      },
      {
        "name": "Social Media & Scheduling",
        "tools": [
          {
            "id": "buffer",
            "name": "Buffer",
            "description": "Simple social media scheduling with analytics.",
            "tags": [
              "Paid"
            ],
            "url": "https://buffer.com"
          },
          {
            "id": "hootsuite",
            "name": "Hootsuite",
            "description": "Enterprise social media management platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://hootsuite.com"
          },
          {
            "id": "later",
            "name": "Later",
            "description": "Visual social media scheduling platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://later.com"
          },
          {
            "id": "metricool",
            "name": "Metricool",
            "description": "Social media analytics and scheduling tool.",
            "tags": [
              "Paid"
            ],
            "url": "https://metricool.com"
          },
          {
            "id": "socialbee",
            "name": "SocialBee",
            "description": "Social media scheduling with category-based queuing.",
            "tags": [
              "Paid"
            ],
            "url": "https://socialbee.com"
          }
        ]
      },
      {
        "name": "Product Feedback & Roadmaps",
        "tools": [
          {
            "id": "canny",
            "name": "Canny",
            "description": "User feedback and feature voting platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://canny.io"
          },
          {
            "id": "productboard",
            "name": "Productboard",
            "description": "Product management platform for roadmaps and prioritization.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.productboard.com"
          },
          {
            "id": "nolt",
            "name": "Nolt",
            "description": "Simple feedback board for products.",
            "tags": [
              "Paid"
            ],
            "url": "https://nolt.io"
          },
          {
            "id": "productplan",
            "name": "ProductPlan",
            "description": "Visual product roadmap software.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.productplan.com"
          }
        ]
      },
      {
        "name": "Documentation",
        "tools": [
          {
            "id": "docusaurus",
            "name": "Docusaurus",
            "description": "Meta's open-source tool for building documentation sites.",
            "tags": [
              "OSS"
            ],
            "url": "https://docusaurus.io"
          },
          {
            "id": "gitbook",
            "name": "GitBook",
            "description": "Beautiful documentation and wiki platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.gitbook.com"
          },
          {
            "id": "readme",
            "name": "ReadMe",
            "description": "Interactive API documentation platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://readme.com"
          },
          {
            "id": "mkdocs",
            "name": "MkDocs",
            "description": "Static site generator for project documentation.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.mkdocs.org"
          },
          {
            "id": "mintlify",
            "name": "Mintlify",
            "description": "Beautiful, AI-powered documentation for developer products.",
            "tags": [
              "Paid"
            ],
            "url": "https://mintlify.com"
          },
          {
            "id": "notion",
            "name": "Notion",
            "description": "Flexible wiki and docs platform for teams.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.notion.so"
          }
        ]
      },
      {
        "name": "Pricing & Monetization",
        "tools": [
          {
            "id": "chartmogul",
            "name": "ChartMogul",
            "description": "Subscription analytics platform for MRR and churn.",
            "tags": [
              "Paid"
            ],
            "url": "https://chartmogul.com"
          },
          {
            "id": "baremetrics",
            "name": "Baremetrics",
            "description": "One-click Stripe subscription analytics.",
            "tags": [
              "Paid"
            ],
            "url": "https://baremetrics.com"
          },
          {
            "id": "profitwell",
            "name": "ProfitWell",
            "description": "Free subscription financial metrics platform.",
            "tags": [
              "Free"
            ],
            "url": "https://www.profitwell.com"
          }
        ]
      }
    ]
  },
  {
    "name": "Developer Tools",
    "subcategories": [
      {
        "name": "Boilerplates & Starter Kits",
        "tools": [
          {
            "id": "t3-stack",
            "name": "T3 Stack",
            "description": "Full-stack Next.js + tRPC + Prisma + NextAuth boilerplate.",
            "tags": [
              "Paid"
            ],
            "url": "https://create.t3.gg"
          },
          {
            "id": "next-js-boilerplate",
            "name": "Next.js Boilerplate",
            "description": "Next.js production-ready template with best practices.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/ixartz/Next-js-Boilerplate"
          },
          {
            "id": "open-saas",
            "name": "Open SaaS",
            "description": "Free, open-source SaaS boilerplate with Wasp.",
            "tags": [
              "Free"
            ],
            "url": "https://opensaas.sh"
          },
          {
            "id": "saas-pegasus",
            "name": "SaaS Pegasus",
            "description": "Django SaaS boilerplate with auth and payments.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.saaspegasus.com"
          },
          {
            "id": "blitz-js",
            "name": "Blitz.js",
            "description": "Full-stack React framework with code scaffolding.",
            "tags": [
              "Paid"
            ],
            "url": "https://blitzjs.com"
          },
          {
            "id": "redwoodjs",
            "name": "RedwoodJS",
            "description": "Full-stack JavaScript framework for startups.",
            "tags": [
              "Paid"
            ],
            "url": "https://redwoodjs.com"
          }
        ]
      },
      {
        "name": "Testing",
        "tools": [
          {
            "id": "playwright",
            "name": "Playwright",
            "description": "Reliable end-to-end testing across all browsers.",
            "tags": [
              "Paid"
            ],
            "url": "https://playwright.dev"
          },
          {
            "id": "cypress",
            "name": "Cypress",
            "description": "Frontend testing framework for web applications.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.cypress.io"
          },
          {
            "id": "jest",
            "name": "Jest",
            "description": "Delightful JavaScript unit testing framework.",
            "tags": [
              "Paid"
            ],
            "url": "https://jestjs.io"
          },
          {
            "id": "vitest",
            "name": "Vitest",
            "description": "Blazingly fast unit testing powered by Vite.",
            "tags": [
              "Paid"
            ],
            "url": "https://vitest.dev"
          },
          {
            "id": "testcafe",
            "name": "TestCafe",
            "description": "Easy-to-set-up end-to-end testing framework.",
            "tags": [
              "Paid"
            ],
            "url": "https://testcafe.io"
          },
          {
            "id": "postman",
            "name": "Postman",
            "description": "API testing and collection management platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.postman.com"
          },
          {
            "id": "pytest",
            "name": "pytest",
            "description": "The standard testing framework for Python.",
            "tags": [
              "Paid"
            ],
            "url": "https://pytest.org"
          }
        ]
      },
      {
        "name": "API Clients",
        "tools": [
          {
            "id": "bruno",
            "name": "Bruno",
            "description": "Open-source, offline-first API client. Git-friendly.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.usebruno.com"
          },
          {
            "id": "insomnia",
            "name": "Insomnia",
            "description": "API design and testing client by Kong.",
            "tags": [
              "Paid"
            ],
            "url": "https://insomnia.rest"
          },
          {
            "id": "hoppscotch",
            "name": "Hoppscotch",
            "description": "Open-source, lightweight API testing tool.",
            "tags": [
              "OSS"
            ],
            "url": "https://hoppscotch.io"
          },
          {
            "id": "thunder-client",
            "name": "Thunder Client",
            "description": "Lightweight REST API client in VS Code.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.thunderclient.com"
          }
        ]
      },
      {
        "name": "Code Snippets & Sharing",
        "tools": [
          {
            "id": "carbon",
            "name": "Carbon",
            "description": "Create and share beautiful images of source code.",
            "tags": [
              "Paid"
            ],
            "url": "https://carbon.now.sh"
          },
          {
            "id": "codesandbox",
            "name": "CodeSandbox",
            "description": "Online code editor for rapid prototyping.",
            "tags": [
              "Paid"
            ],
            "url": "https://codesandbox.io"
          },
          {
            "id": "jsfiddle",
            "name": "JSFiddle",
            "description": "Online playground for JavaScript, HTML and CSS.",
            "tags": [
              "Paid"
            ],
            "url": "https://jsfiddle.net"
          },
          {
            "id": "stackblitz",
            "name": "StackBlitz",
            "description": "Online IDE for web apps with instant npm packages.",
            "tags": [
              "Paid"
            ],
            "url": "https://stackblitz.com"
          }
        ]
      },
      {
        "name": "Architecture & System Design",
        "tools": [
          {
            "id": "excalidraw",
            "name": "Excalidraw",
            "description": "Open-source whiteboard for hand-drawn diagrams.",
            "tags": [
              "OSS"
            ],
            "url": "https://excalidraw.com"
          },
          {
            "id": "draw-io",
            "name": "Draw.io",
            "description": "Free diagramming tool for architecture and flowcharts.",
            "tags": [
              "Free"
            ],
            "url": "https://app.diagrams.net"
          },
          {
            "id": "lucidchart",
            "name": "Lucidchart",
            "description": "Intelligent diagramming for architecture and org charts.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.lucidchart.com"
          },
          {
            "id": "system-design-primer",
            "name": "System Design Primer",
            "description": "GitHub repo teaching how to design scalable systems.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/donnemartin/system-design-primer"
          },
          {
            "id": "bytebytego",
            "name": "ByteByteGo",
            "description": "Visual system design articles and newsletter.",
            "tags": [
              "Paid"
            ],
            "url": "https://bytebytego.com"
          }
        ]
      }
    ]
  },
  {
    "name": "Build Ecosystem",
    "subcategories": [
      {
        "name": "Browsers for Developers",
        "tools": [
          {
            "id": "arc",
            "name": "Arc",
            "description": "Next-gen browser by The Browser Company with sidebar tabs.",
            "tags": [
              "Paid"
            ],
            "url": "https://arc.net"
          },
          {
            "id": "zen-browser",
            "name": "Zen Browser",
            "description": "Privacy-first, Firefox-based browser with Arc-like UI.",
            "tags": [
              "Paid"
            ],
            "url": "https://zen-browser.app"
          },
          {
            "id": "brave",
            "name": "Brave",
            "description": "Privacy-focused browser with built-in ad blocking.",
            "tags": [
              "Paid"
            ],
            "url": "https://brave.com"
          },
          {
            "id": "chrome-devtools",
            "name": "Chrome DevTools",
            "description": "The gold standard browser developer tools.",
            "tags": [
              "Paid"
            ],
            "url": "https://developer.chrome.com/docs/devtools"
          },
          {
            "id": "sigmaos",
            "name": "SigmaOS",
            "description": "Browser built for productivity with workspaces.",
            "tags": [
              "Paid"
            ],
            "url": "https://sigmaos.com"
          }
        ]
      },
      {
        "name": "IDEs & Code Editors",
        "tools": [
          {
            "id": "vs-code",
            "name": "VS Code",
            "description": "Microsoft's free, open-source code editor with massive ecosystem.",
            "tags": [
              "Free"
            ],
            "url": "https://code.visualstudio.com"
          },
          {
            "id": "cursor",
            "name": "Cursor",
            "description": "AI-first code editor forked from VS Code.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.cursor.com"
          },
          {
            "id": "windsurf",
            "name": "Windsurf",
            "description": "Agentic AI IDE by Codeium.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://codeium.com/windsurf"
          },
          {
            "id": "zed",
            "name": "Zed",
            "description": "Lightning-fast collaborative code editor.",
            "tags": [
              "Paid"
            ],
            "url": "https://zed.dev"
          },
          {
            "id": "jetbrains-ides",
            "name": "JetBrains IDEs",
            "description": "Professional IDEs for every language.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.jetbrains.com"
          }
        ]
      },
      {
        "name": "Terminals",
        "tools": [
          {
            "id": "warp",
            "name": "Warp",
            "description": "AI-native terminal with command completion and history.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.warp.dev"
          },
          {
            "id": "ghostty",
            "name": "Ghostty",
            "description": "Fast, feature-rich terminal built in Zig.",
            "tags": [
              "Paid"
            ],
            "url": "https://ghostty.org"
          },
          {
            "id": "iterm2",
            "name": "iTerm2",
            "description": "The most feature-complete macOS terminal.",
            "tags": [
              "Paid"
            ],
            "url": "https://iterm2.com"
          },
          {
            "id": "windows-terminal",
            "name": "Windows Terminal",
            "description": "Modern, multi-tab terminal for Windows.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/microsoft/terminal"
          },
          {
            "id": "hyper",
            "name": "Hyper",
            "description": "Electron-based terminal with plugin ecosystem.",
            "tags": [
              "Paid"
            ],
            "url": "https://hyper.is"
          }
        ]
      },
      {
        "name": "Git Clients",
        "tools": [
          {
            "id": "lazygit",
            "name": "LazyGit",
            "description": "Terminal UI for git with powerful keyboard shortcuts.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/jesseduffield/lazygit"
          },
          {
            "id": "github-desktop",
            "name": "GitHub Desktop",
            "description": "Simple, official Git client by GitHub.",
            "tags": [
              "Paid"
            ],
            "url": "https://desktop.github.com"
          },
          {
            "id": "gitkraken",
            "name": "GitKraken",
            "description": "Cross-platform Git GUI with merge conflict editor.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.gitkraken.com"
          },
          {
            "id": "fork",
            "name": "Fork",
            "description": "Fast and friendly git client for Mac and Windows.",
            "tags": [
              "Paid"
            ],
            "url": "https://git-fork.com"
          },
          {
            "id": "sourcetree",
            "name": "Sourcetree",
            "description": "Free Git GUI for Mac and Windows by Atlassian.",
            "tags": [
              "Free"
            ],
            "url": "https://www.sourcetreeapp.com"
          }
        ]
      },
      {
        "name": "Database GUIs",
        "tools": [
          {
            "id": "tableplus",
            "name": "TablePlus",
            "description": "Native, fast database management GUI.",
            "tags": [
              "Paid"
            ],
            "url": "https://tableplus.com"
          },
          {
            "id": "dbeaver",
            "name": "DBeaver",
            "description": "Free universal database tool for SQL and NoSQL.",
            "tags": [
              "Free"
            ],
            "url": "https://dbeaver.io"
          },
          {
            "id": "beekeeper-studio",
            "name": "Beekeeper Studio",
            "description": "Open-source SQL editor and manager.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.beekeeperstudio.io"
          },
          {
            "id": "pgadmin",
            "name": "pgAdmin",
            "description": "The official PostgreSQL management tool.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.pgadmin.org"
          },
          {
            "id": "mongodb-compass",
            "name": "MongoDB Compass",
            "description": "Official GUI for exploring MongoDB data.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.mongodb.com/products/compass"
          }
        ]
      },
      {
        "name": "SSH Clients",
        "tools": [
          {
            "id": "termius",
            "name": "Termius",
            "description": "Cross-platform SSH client with cloud sync.",
            "tags": [
              "Paid"
            ],
            "url": "https://termius.com"
          },
          {
            "id": "putty",
            "name": "PuTTY",
            "description": "Classic, lightweight SSH client for Windows.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.putty.org"
          },
          {
            "id": "tabby",
            "name": "Tabby",
            "description": "Modern, highly configurable terminal/SSH client.",
            "tags": [
              "Paid"
            ],
            "url": "https://tabby.sh"
          },
          {
            "id": "mobaxterm",
            "name": "MobaXterm",
            "description": "Enhanced terminal with SSH, X11, and many tools.",
            "tags": [
              "Paid"
            ],
            "url": "https://mobaxterm.mobatek.net"
          }
        ]
      },
      {
        "name": "Local Development",
        "tools": [
          {
            "id": "docker-desktop",
            "name": "Docker Desktop",
            "description": "GUI for Docker with container management.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.docker.com/products/docker-desktop"
          },
          {
            "id": "orbstack",
            "name": "OrbStack",
            "description": "Fast, lightweight Docker Desktop alternative for Mac.",
            "tags": [
              "Paid"
            ],
            "url": "https://orbstack.dev"
          },
          {
            "id": "devbox",
            "name": "Devbox",
            "description": "Instant, isolated dev environments via Nix.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.jetify.com/devbox"
          },
          {
            "id": "nix",
            "name": "Nix",
            "description": "Reproducible, declarative package manager.",
            "tags": [
              "Paid"
            ],
            "url": "https://nixos.org"
          },
          {
            "id": "distrobox",
            "name": "Distrobox",
            "description": "Run any Linux distribution inside a container.",
            "tags": [
              "Paid"
            ],
            "url": "https://distrobox.it"
          }
        ]
      }
    ]
  },
  {
    "name": "Security & OSINT",
    "subcategories": [
      {
        "name": "OSINT Tools",
        "tools": [
          {
            "id": "awesome-osint",
            "name": "Awesome OSINT",
            "description": "The definitive GitHub list of OSINT tools and resources.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/jivoi/awesome-osint"
          },
          {
            "id": "maltego",
            "name": "Maltego",
            "description": "Link-analysis tool for mapping relationships visually.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.maltego.com"
          },
          {
            "id": "spiderfoot",
            "name": "SpiderFoot",
            "description": "Automated OSINT reconnaisance tool integrating 100+ sources.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/smicallef/spiderfoot"
          },
          {
            "id": "sherlock",
            "name": "Sherlock",
            "description": "Find a username across 300+ social networks instantly.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/sherlock-project/sherlock"
          },
          {
            "id": "theharvester",
            "name": "theHarvester",
            "description": "OSINT tool for emails, hosts, IPs and domains.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/laramies/theHarvester"
          },
          {
            "id": "recon-ng",
            "name": "Recon-ng",
            "description": "Full-featured web reconnaissance framework.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/lanmaster53/recon-ng"
          },
          {
            "id": "shodan",
            "name": "Shodan",
            "description": "Search engine for internet-connected devices.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.shodan.io"
          },
          {
            "id": "censys",
            "name": "Censys",
            "description": "Internet-wide scanning and attack surface discovery.",
            "tags": [
              "Paid"
            ],
            "url": "https://censys.io"
          },
          {
            "id": "holehe",
            "name": "Holehe",
            "description": "Check if an email is registered on 120+ services.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/megadose/holehe"
          },
          {
            "id": "facecheck-id",
            "name": "FaceCheck.ID",
            "description": "Reverse image search for face recognition across the web.",
            "tags": [
              "Paid"
            ],
            "url": "https://facecheck.id"
          },
          {
            "id": "pimeyes",
            "name": "PimEyes",
            "description": "Face recognition search engine for digital footprint mapping.",
            "tags": [
              "Paid"
            ],
            "url": "https://pimeyes.com"
          },
          {
            "id": "intelx",
            "name": "IntelX",
            "description": "Search engine for breach data and intelligence.",
            "tags": [
              "Paid"
            ],
            "url": "https://intelx.io"
          },
          {
            "id": "ghunt",
            "name": "GHunt",
            "description": "Investigate Google accounts from email addresses.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/mxrch/GHunt"
          }
        ]
      },
      {
        "name": "Penetration Testing",
        "tools": [
          {
            "id": "metasploit-framework",
            "name": "Metasploit Framework",
            "description": "The world's most used penetration testing framework.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/rapid7/metasploit-framework"
          },
          {
            "id": "nmap",
            "name": "Nmap",
            "description": "Network exploration and security auditing tool.",
            "tags": [
              "Paid"
            ],
            "url": "https://nmap.org"
          },
          {
            "id": "gobuster",
            "name": "Gobuster",
            "description": "Directory/file and DNS brute-forcing tool.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/OJ/gobuster"
          },
          {
            "id": "owasp-juice-shop",
            "name": "OWASP Juice Shop",
            "description": "Intentionally vulnerable web application for security training.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/juice-shop/juice-shop"
          },
          {
            "id": "burp-suite",
            "name": "Burp Suite",
            "description": "The leading web application security testing platform.",
            "tags": [
              "Paid"
            ],
            "url": "https://portswigger.net/burp"
          }
        ]
      },
      {
        "name": "Security Monitoring",
        "tools": [
          {
            "id": "wazuh",
            "name": "Wazuh",
            "description": "Open-source security monitoring and SIEM platform.",
            "tags": [
              "OSS"
            ],
            "url": "https://wazuh.com"
          },
          {
            "id": "security-onion",
            "name": "Security Onion",
            "description": "Open-source Linux distro for threat hunting.",
            "tags": [
              "OSS"
            ],
            "url": "https://securityonion.net"
          },
          {
            "id": "exiftool",
            "name": "ExifTool",
            "description": "Read, write and edit metadata in image/video files.",
            "tags": [
              "Paid"
            ],
            "url": "https://exiftool.org"
          },
          {
            "id": "trivy",
            "name": "Trivy",
            "description": "Container and filesystem vulnerability scanner.",
            "tags": [
              "Paid"
            ],
            "url": "https://aquasecurity.github.io/trivy"
          }
        ]
      },
      {
        "name": "Secrets Scanning & SAST",
        "tools": [
          {
            "id": "trufflehog",
            "name": "TruffleHog",
            "description": "Scan git history for leaked secrets and API keys.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/trufflesecurity/trufflehog"
          },
          {
            "id": "gitleaks",
            "name": "Gitleaks",
            "description": "Detect secrets and credentials in git repos.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/gitleaks/gitleaks"
          },
          {
            "id": "semgrep",
            "name": "Semgrep",
            "description": "Static analysis for finding security issues in code.",
            "tags": [
              "Paid"
            ],
            "url": "https://semgrep.dev"
          },
          {
            "id": "snyk",
            "name": "Snyk",
            "description": "Developer security platform for code, deps and containers.",
            "tags": [
              "Paid"
            ],
            "url": "https://snyk.io"
          }
        ]
      }
    ]
  },
  {
    "name": "Learning & Roadmaps",
    "subcategories": [
      {
        "name": "Documentation & References",
        "tools": [
          {
            "id": "mdn-web-docs",
            "name": "MDN Web Docs",
            "description": "The absolute standard for HTML, CSS and Web APIs.",
            "tags": [
              "Paid"
            ],
            "url": "https://developer.mozilla.org"
          },
          {
            "id": "devdocs",
            "name": "DevDocs",
            "description": "All developer documentation in one searchable interface.",
            "tags": [
              "Paid"
            ],
            "url": "https://devdocs.io"
          },
          {
            "id": "w3schools",
            "name": "W3Schools",
            "description": "Beginner-friendly reference for web technologies.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.w3schools.com"
          },
          {
            "id": "roadmap-sh",
            "name": "Roadmap.sh",
            "description": "Community-driven developer learning roadmaps.",
            "tags": [
              "Paid"
            ],
            "url": "https://roadmap.sh"
          }
        ]
      },
      {
        "name": "Courses & Learning Platforms",
        "tools": [
          {
            "id": "frontend-masters",
            "name": "Frontend Masters",
            "description": "Expert-level frontend and JavaScript video courses.",
            "tags": [
              "Paid"
            ],
            "url": "https://frontendmasters.com"
          },
          {
            "id": "udemy",
            "name": "Udemy",
            "description": "Massive marketplace of affordable courses.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.udemy.com"
          },
          {
            "id": "coursera",
            "name": "Coursera",
            "description": "University-backed online courses and certifications.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.coursera.org"
          },
          {
            "id": "educative",
            "name": "Educative",
            "description": "Interactive text-based courses for developers.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.educative.io"
          },
          {
            "id": "pluralsight",
            "name": "Pluralsight",
            "description": "Technology skills platform for enterprise developers.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.pluralsight.com"
          },
          {
            "id": "edx",
            "name": "edX",
            "description": "Online courses from MIT, Harvard and other institutions.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.edx.org"
          },
          {
            "id": "freecodecamp",
            "name": "freeCodeCamp",
            "description": "Free coding bootcamp with certifications.",
            "tags": [
              "Free"
            ],
            "url": "https://www.freecodecamp.org"
          }
        ]
      },
      {
        "name": "Cheat Sheets",
        "tools": [
          {
            "id": "overapi",
            "name": "OverAPI",
            "description": "Collecting cheat sheets for almost every language.",
            "tags": [
              "Paid"
            ],
            "url": "https://overapi.com"
          },
          {
            "id": "devhints",
            "name": "DevHints",
            "description": "Handcrafted developer cheat sheets.",
            "tags": [
              "Paid"
            ],
            "url": "https://devhints.io"
          },
          {
            "id": "cheat-sh",
            "name": "Cheat.sh",
            "description": "The only cheat sheet you need â€” access via curl.",
            "tags": [
              "Paid"
            ],
            "url": "https://cheat.sh"
          },
          {
            "id": "learn-x-in-y-minutes",
            "name": "Learn X in Y Minutes",
            "description": "Quick syntax primers for any programming language.",
            "tags": [
              "Paid"
            ],
            "url": "https://learnxinyminutes.com"
          }
        ]
      },
      {
        "name": "YouTube Channels",
        "tools": [
          {
            "id": "fireship",
            "name": "Fireship",
            "description": "Fast-paced developer tutorials â€” '100 Seconds of Code' format.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.youtube.com/@Fireship"
          },
          {
            "id": "traversy-media",
            "name": "Traversy Media",
            "description": "Full-stack development crash courses.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.youtube.com/@TraversyMedia"
          },
          {
            "id": "the-net-ninja",
            "name": "The Net Ninja",
            "description": "Beginner-friendly web dev tutorial series.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.youtube.com/@NetNinja"
          },
          {
            "id": "techworld-with-nana",
            "name": "TechWorld with Nana",
            "description": "DevOps and Kubernetes tutorials.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.youtube.com/@TechWorldwithNana"
          },
          {
            "id": "academind",
            "name": "Academind",
            "description": "In-depth Angular, React and full-stack tutorials.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.youtube.com/@academind"
          },
          {
            "id": "programming-with-mosh",
            "name": "Programming with Mosh",
            "description": "High-quality beginner to advanced programming courses.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.youtube.com/@programmingwithmosh"
          }
        ]
      },
      {
        "name": "Newsletters",
        "tools": [
          {
            "id": "tldr-newsletter",
            "name": "TLDR Newsletter",
            "description": "Daily 5-minute digest of dev, AI and startup news.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://tldr.tech"
          },
          {
            "id": "bytes-dev",
            "name": "Bytes.dev",
            "description": "Entertaining weekly JavaScript newsletter.",
            "tags": [
              "Paid"
            ],
            "url": "https://bytes.dev"
          },
          {
            "id": "javascript-weekly",
            "name": "JavaScript Weekly",
            "description": "Weekly JavaScript news and articles.",
            "tags": [
              "Paid"
            ],
            "url": "https://javascriptweekly.com"
          },
          {
            "id": "pointer",
            "name": "Pointer",
            "description": "Curated reading list for engineering leaders.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.pointer.io"
          },
          {
            "id": "the-rundown-ai",
            "name": "The Rundown AI",
            "description": "Daily AI news for builders and founders.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://www.therundown.ai"
          },
          {
            "id": "devops-weekly",
            "name": "DevOps Weekly",
            "description": "Weekly DevOps and infrastructure news.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.devopsweekly.com"
          }
        ]
      },
      {
        "name": "Podcasts",
        "tools": [
          {
            "id": "syntax-fm",
            "name": "Syntax.fm",
            "description": "Tasty web development treats by Wes Bos and Scott Tolinski.",
            "tags": [
              "Paid"
            ],
            "url": "https://syntax.fm"
          },
          {
            "id": "software-engineering-daily",
            "name": "Software Engineering Daily",
            "description": "Daily interviews with software engineers.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://softwareengineeringdaily.com"
          },
          {
            "id": "the-changelog",
            "name": "The Changelog",
            "description": "Open source and developer community podcast.",
            "tags": [
              "OSS"
            ],
            "url": "https://changelog.com"
          },
          {
            "id": "indie-hackers-podcast",
            "name": "Indie Hackers Podcast",
            "description": "Founder stories and lessons building in public.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.indiehackers.com/podcast"
          },
          {
            "id": "coding-blocks",
            "name": "Coding Blocks",
            "description": "Design patterns and software development best practices.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.codingblocks.net"
          }
        ]
      },
      {
        "name": "Blogs & Communities",
        "tools": [
          {
            "id": "dev-to",
            "name": "Dev.to",
            "description": "Community of software developers sharing ideas.",
            "tags": [
              "Paid"
            ],
            "url": "https://dev.to"
          },
          {
            "id": "hackernoon",
            "name": "HackerNoon",
            "description": "Technology stories from real practitioners.",
            "tags": [
              "Paid"
            ],
            "url": "https://hackernoon.com"
          },
          {
            "id": "smashing-magazine",
            "name": "Smashing Magazine",
            "description": "Web design and development articles for professionals.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.smashingmagazine.com"
          },
          {
            "id": "css-tricks",
            "name": "CSS-Tricks",
            "description": "Daily articles and tips about web design.",
            "tags": [
              "Paid"
            ],
            "url": "https://css-tricks.com"
          },
          {
            "id": "martin-fowler-blog",
            "name": "Martin Fowler Blog",
            "description": "Architecture and software patterns by Martin Fowler.",
            "tags": [
              "Paid"
            ],
            "url": "https://martinfowler.com"
          },
          {
            "id": "hacker-news",
            "name": "Hacker News",
            "description": "Y Combinator's tech news and discussion board.",
            "tags": [
              "Paid"
            ],
            "url": "https://news.ycombinator.com"
          }
        ]
      },
      {
        "name": "Interview & DSA Prep",
        "tools": [
          {
            "id": "leetcode",
            "name": "LeetCode",
            "description": "The #1 platform for coding interview preparation.",
            "tags": [
              "Paid"
            ],
            "url": "https://leetcode.com"
          },
          {
            "id": "neetcode",
            "name": "NeetCode",
            "description": "Curated LeetCode roadmap with video explanations.",
            "tags": [
              "Paid"
            ],
            "url": "https://neetcode.io"
          },
          {
            "id": "algoexpert",
            "name": "AlgoExpert",
            "description": "Structured DSA course with 170+ curated problems.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.algoexpert.io"
          },
          {
            "id": "hackerrank",
            "name": "HackerRank",
            "description": "Coding challenges for developers and companies.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.hackerrank.com"
          },
          {
            "id": "tech-interview-handbook",
            "name": "Tech Interview Handbook",
            "description": "Free, comprehensive guide to technical interviews.",
            "tags": [
              "Free"
            ],
            "url": "https://www.techinterviewhandbook.org"
          },
          {
            "id": "coding-interview-university",
            "name": "Coding Interview University",
            "description": "Self-study plan for software engineer interviews.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/jwasham/coding-interview-university"
          }
        ]
      }
    ]
  },
  {
    "name": "Project Inspiration & GitHub",
    "subcategories": [
      {
        "name": "Build Guides",
        "tools": [
          {
            "id": "build-your-own-x",
            "name": "Build Your Own X",
            "description": "Recreate your favourite technology from scratch.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/codecrafters-io/build-your-own-x"
          },
          {
            "id": "project-based-learning",
            "name": "Project Based Learning",
            "description": "Project tutorials grouped by programming language.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/practical-tutorials/project-based-learning"
          },
          {
            "id": "developer-roadmap",
            "name": "Developer Roadmap",
            "description": "Community roadmaps for different developer roles.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/kamranahmedse/developer-roadmap"
          },
          {
            "id": "karan-projects",
            "name": "Karan Projects",
            "description": "List of over 500 practical programming project ideas.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/karan/Projects"
          }
        ]
      },
      {
        "name": "GitHub Awesome Lists",
        "tools": [
          {
            "id": "awesome-self-hosted",
            "name": "Awesome Self-Hosted",
            "description": "The definitive list of self-hostable open-source software.",
            "tags": [
              "OSS"
            ],
            "url": "https://github.com/awesome-selfhosted/awesome-selfhosted"
          },
          {
            "id": "awesome-ai-agents",
            "name": "Awesome AI Agents",
            "description": "Master list of autonomous AI agents and tools.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://github.com/e2b-dev/awesome-ai-agents"
          },
          {
            "id": "awesome-llm-apps",
            "name": "Awesome LLM Apps",
            "description": "Curated list of LLM apps across categories.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/Shubhamsaboo/awesome-llm-apps"
          },
          {
            "id": "awesome-osint",
            "name": "Awesome OSINT",
            "description": "Massive list of OSINT tools and resources.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/jivoi/awesome-osint"
          },
          {
            "id": "awesome-oss-alternatives",
            "name": "Awesome OSS Alternatives",
            "description": "Open-source alternatives to popular SaaS products.",
            "tags": [
              "OSS"
            ],
            "url": "https://github.com/RunaCapital/awesome-oss-alternatives"
          },
          {
            "id": "awesome-generative-ai",
            "name": "Awesome Generative AI",
            "description": "Curated list of modern generative AI projects.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://github.com/steven2358/awesome-generative-ai"
          },
          {
            "id": "awesome-public-datasets",
            "name": "Awesome Public Datasets",
            "description": "List of free, high-quality public datasets.",
            "tags": [
              "Free"
            ],
            "url": "https://github.com/awesomedata/awesome-public-datasets"
          },
          {
            "id": "awesome-indie",
            "name": "Awesome Indie",
            "description": "Resources for independent developers and founders.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/mezod/awesome-indie"
          }
        ]
      },
      {
        "name": "Hackathon Resources",
        "tools": [
          {
            "id": "devpost",
            "name": "Devpost",
            "description": "Platform for discovering and entering hackathons.",
            "tags": [
              "Paid"
            ],
            "url": "https://devpost.com"
          },
          {
            "id": "mlh",
            "name": "MLH",
            "description": "Major League Hacking â€” the official hackathon organizer.",
            "tags": [
              "Paid"
            ],
            "url": "https://mlh.io"
          },
          {
            "id": "lablab-ai",
            "name": "Lablab.ai",
            "description": "AI hackathons with prizes and mentorship.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://lablab.ai"
          },
          {
            "id": "buildspace",
            "name": "Buildspace",
            "description": "Guided hackathon-style builds for startup ideas.",
            "tags": [
              "Paid"
            ],
            "url": "https://buildspace.so"
          }
        ]
      },
      {
        "name": "Open Source Startups",
        "tools": [
          {
            "id": "posthog",
            "name": "PostHog",
            "description": "Open-source product analytics â€” study their growth.",
            "tags": [
              "OSS"
            ],
            "url": "https://posthog.com"
          },
          {
            "id": "plausible-analytics",
            "name": "Plausible Analytics",
            "description": "Privacy-first analytics â€” great OSS SaaS example.",
            "tags": [
              "Paid"
            ],
            "url": "https://plausible.io"
          },
          {
            "id": "cal-com",
            "name": "Cal.com",
            "description": "Open-source Calendly. Study their whole stack.",
            "tags": [
              "OSS"
            ],
            "url": "https://cal.com"
          },
          {
            "id": "chatwoot",
            "name": "Chatwoot",
            "description": "Open-source Intercom alternative built in Ruby.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.chatwoot.com"
          },
          {
            "id": "n8n",
            "name": "n8n",
            "description": "Open-source workflow automation â€” huge community.",
            "tags": [
              "OSS"
            ],
            "url": "https://n8n.io"
          }
        ]
      }
    ]
  },
  {
    "name": "Resources & Free APIs",
    "subcategories": [
      {
        "name": "Free & Public APIs",
        "tools": [
          {
            "id": "public-apis",
            "name": "Public APIs",
            "description": "The ultimate list of free APIs for software development.",
            "tags": [
              "Free"
            ],
            "url": "https://github.com/public-apis/public-apis"
          },
          {
            "id": "openweather-api",
            "name": "OpenWeather API",
            "description": "Current weather and forecasts for any location.",
            "tags": [
              "Paid"
            ],
            "url": "https://openweathermap.org/api"
          },
          {
            "id": "newsapi",
            "name": "NewsAPI",
            "description": "Search news articles from 80,000+ sources.",
            "tags": [
              "Paid"
            ],
            "url": "https://newsapi.org"
          },
          {
            "id": "coingecko-api",
            "name": "CoinGecko API",
            "description": "Free cryptocurrency prices and market data.",
            "tags": [
              "Free"
            ],
            "url": "https://www.coingecko.com/en/api"
          },
          {
            "id": "tmdb-api",
            "name": "TMDB API",
            "description": "Free movie and TV show database API.",
            "tags": [
              "Free"
            ],
            "url": "https://www.themoviedb.org/documentation/api"
          },
          {
            "id": "rapidapi-hub",
            "name": "RapidAPI Hub",
            "description": "Marketplace of 50,000+ APIs across all categories.",
            "tags": [
              "Paid"
            ],
            "url": "https://rapidapi.com/hub"
          }
        ]
      },
      {
        "name": "Free Images & Media",
        "tools": [
          {
            "id": "unsplash",
            "name": "Unsplash",
            "description": "Beautiful free images and royalty-free stock photos.",
            "tags": [
              "Free"
            ],
            "url": "https://unsplash.com"
          },
          {
            "id": "pexels",
            "name": "Pexels",
            "description": "Free stock photos and videos by talented creators.",
            "tags": [
              "Free"
            ],
            "url": "https://www.pexels.com"
          },
          {
            "id": "pixabay",
            "name": "Pixabay",
            "description": "Free images, videos, and music for commercial use.",
            "tags": [
              "Free"
            ],
            "url": "https://pixabay.com"
          },
          {
            "id": "coverr",
            "name": "Coverr",
            "description": "Free stock videos for website backgrounds.",
            "tags": [
              "Free"
            ],
            "url": "https://coverr.co"
          }
        ]
      },
      {
        "name": "Datasets",
        "tools": [
          {
            "id": "hugging-face-datasets",
            "name": "Hugging Face Datasets",
            "description": "Largest collection of AI/ML datasets.",
            "tags": [
              "Paid"
            ],
            "url": "https://huggingface.co/datasets"
          },
          {
            "id": "kaggle",
            "name": "Kaggle",
            "description": "Data science competitions and free datasets.",
            "tags": [
              "Free"
            ],
            "url": "https://www.kaggle.com/datasets"
          },
          {
            "id": "google-dataset-search",
            "name": "Google Dataset Search",
            "description": "Search engine for datasets across the web.",
            "tags": [
              "Paid"
            ],
            "url": "https://datasetsearch.research.google.com"
          },
          {
            "id": "awesome-public-datasets",
            "name": "Awesome Public Datasets",
            "description": "Curated list of high-quality open datasets.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/awesomedata/awesome-public-datasets"
          }
        ]
      }
    ]
  },
  {
    "name": "Workflow Automation",
    "subcategories": [
      {
        "name": "Automation Platforms",
        "tools": [
          {
            "id": "n8n",
            "name": "n8n",
            "description": "Fair-code workflow automation you can self-host.",
            "tags": [
              "Paid"
            ],
            "url": "https://n8n.io"
          },
          {
            "id": "zapier",
            "name": "Zapier",
            "description": "The standard integration platform connecting 7,000+ apps.",
            "tags": [
              "Paid"
            ],
            "url": "https://zapier.com"
          },
          {
            "id": "make-integromat",
            "name": "Make (Integromat)",
            "description": "Visual drag-and-drop workflow mapper.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.make.com"
          },
          {
            "id": "activepieces",
            "name": "Activepieces",
            "description": "Open-source Zapier alternative.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.activepieces.com"
          }
        ]
      },
      {
        "name": "Browser & Web Automation",
        "tools": [
          {
            "id": "playwright",
            "name": "Playwright",
            "description": "Reliable browser automation by Microsoft.",
            "tags": [
              "Paid"
            ],
            "url": "https://playwright.dev"
          },
          {
            "id": "puppeteer",
            "name": "Puppeteer",
            "description": "Headless Chrome automation by Google.",
            "tags": [
              "Paid"
            ],
            "url": "https://pptr.dev"
          },
          {
            "id": "firecrawl",
            "name": "Firecrawl",
            "description": "Web scraping API that converts websites to LLM-ready data.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.firecrawl.dev"
          },
          {
            "id": "bright-data",
            "name": "Bright Data",
            "description": "Enterprise web scraping and proxy network.",
            "tags": [
              "Paid"
            ],
            "url": "https://brightdata.com"
          }
        ]
      }
    ]
  },
  {
    "name": "AI Knowledge",
    "subcategories": [
      {
        "name": "Prompt Collections",
        "tools": [
          {
            "id": "awesome-chatgpt-prompts",
            "name": "Awesome ChatGPT Prompts",
            "description": "The most popular open-source prompt collection.",
            "tags": [
              "OSS"
            ],
            "url": "https://github.com/f/awesome-chatgpt-prompts"
          },
          {
            "id": "leaked-system-prompts",
            "name": "Leaked System Prompts",
            "description": "Community-sourced collection of AI system prompts.",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://github.com/jujumilk3/leaked-system-prompts"
          },
          {
            "id": "prompt-engineering-guide",
            "name": "Prompt Engineering Guide",
            "description": "Comprehensive guide to prompt engineering techniques.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.promptingguide.ai"
          }
        ]
      },
      {
        "name": "Cursor & IDE Rules",
        "tools": [
          {
            "id": "cursor-rules",
            "name": "Cursor Rules",
            "description": "Community repository of .cursorrules for better code.",
            "tags": [
              "Paid"
            ],
            "url": "https://cursor.directory"
          },
          {
            "id": "windsurf-rules",
            "name": "Windsurf Rules",
            "description": "Rules and configurations for Windsurf IDE.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/nicholasgasior/windsurf-rules"
          },
          {
            "id": "claude-md-templates",
            "name": "CLAUDE.md Templates",
            "description": "CLAUDE.md project context templates for Claude Code.",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/search?q=CLAUDE.md"
          }
        ]
      }
    ]
  },
  {
    "name": "Productivity",
    "subcategories": [
      {
        "name": "Note-Taking & Knowledge Management",
        "tools": [
          {
            "id": "notion",
            "name": "Notion",
            "description": "All-in-one workspace for notes, wikis and tasks.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.notion.so"
          },
          {
            "id": "obsidian",
            "name": "Obsidian",
            "description": "Local-first markdown notes with graph view.",
            "tags": [
              "Paid"
            ],
            "url": "https://obsidian.md"
          },
          {
            "id": "logseq",
            "name": "Logseq",
            "description": "Privacy-first open-source knowledge management.",
            "tags": [
              "OSS"
            ],
            "url": "https://logseq.com"
          },
          {
            "id": "roam-research",
            "name": "Roam Research",
            "description": "Note-taking tool for networked thought.",
            "tags": [
              "Paid"
            ],
            "url": "https://roamresearch.com"
          }
        ]
      },
      {
        "name": "Project Management",
        "tools": [
          {
            "id": "linear",
            "name": "Linear",
            "description": "The issue tracker that makes software development faster.",
            "tags": [
              "Paid"
            ],
            "url": "https://linear.app"
          },
          {
            "id": "jira",
            "name": "Jira",
            "description": "Industry-standard agile project management by Atlassian.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.atlassian.com/software/jira"
          },
          {
            "id": "notion-projects",
            "name": "Notion Projects",
            "description": "Project management built into Notion.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.notion.so/product/projects"
          },
          {
            "id": "trello",
            "name": "Trello",
            "description": "Visual Kanban board for task management.",
            "tags": [
              "Paid"
            ],
            "url": "https://trello.com"
          }
        ]
      },
      {
        "name": "Screen Recording & Screenshots",
        "tools": [
          {
            "id": "loom",
            "name": "Loom",
            "description": "Async video messaging for developers and teams.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.loom.com"
          },
          {
            "id": "cleanshot-x",
            "name": "CleanShot X",
            "description": "Best-in-class screenshot and screen recording for Mac.",
            "tags": [
              "Paid"
            ],
            "url": "https://cleanshot.com"
          },
          {
            "id": "screenpipe",
            "name": "Screenpipe",
            "description": "Open-source, local-first screen and mic recording for AI.",
            "tags": [
              "OSS"
            ],
            "url": "https://github.com/mediar-ai/screenpipe"
          }
        ]
      }
    ]
  },
  {
    "name": "Curated Stacks",
    "subcategories": [
      {
        "name": "Starter Stacks",
        "tools": [
          {
            "id": "beginner-saas-stack",
            "name": "Beginner SaaS Stack",
            "description": "Next.js + Supabase + Clerk + Stripe + Resend + Vercel + PostHog",
            "tags": [
              "Paid"
            ],
            "url": "https://nextjs.org"
          },
          {
            "id": "ai-saas-stack",
            "name": "AI SaaS Stack",
            "description": "Next.js + OpenRouter/Groq + Qdrant + LangGraph + Stripe + Vercel",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://bolt.new"
          },
          {
            "id": "blockchain-forensics-stack",
            "name": "Blockchain Forensics Stack",
            "description": "Next.js + PostgreSQL + Redis + Alchemy + Etherscan + DefiLlama + Neo4j",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://ethereum.org"
          },
          {
            "id": "osint-platform-stack",
            "name": "OSINT Platform Stack",
            "description": "FastAPI + PostgreSQL + Sherlock + SpiderFoot + Neo4j + Maltego",
            "tags": [
              "Paid"
            ],
            "url": "https://github.com/jivoi/awesome-osint"
          },
          {
            "id": "landing-page-stack",
            "name": "Landing Page Stack",
            "description": "Framer/Webflow + MotionSites.ai + 21st.dev + Magic UI + Resend",
            "tags": [
              "Paid",
              "AI"
            ],
            "url": "https://framer.com"
          },
          {
            "id": "mobile-app-stack",
            "name": "Mobile App Stack",
            "description": "React Native + Expo + Supabase + Clerk + Stripe",
            "tags": [
              "Paid"
            ],
            "url": "https://expo.dev"
          }
        ]
      }
    ]
  },
  {
    "name": "Open Source & Alternatives",
    "subcategories": [
      {
        "name": "OSS Alternatives",
        "tools": [
          {
            "id": "perplexica",
            "name": "Perplexica",
            "description": "Open-source search engine alternative to Perplexity AI.",
            "tags": [
              "OSS"
            ],
            "url": "https://github.com/ItzCrazyKns/Perplexica"
          },
          {
            "id": "librechat",
            "name": "LibreChat",
            "description": "ChatGPT-like interface supporting multiple API providers.",
            "tags": [
              "Paid"
            ],
            "url": "https://www.librechat.ai"
          },
          {
            "id": "dify",
            "name": "Dify",
            "description": "LangSmith alternative for LLM app management.",
            "tags": [
              "Paid"
            ],
            "url": "https://dify.ai"
          },
          {
            "id": "cal-com",
            "name": "Cal.com",
            "description": "Open-source Calendly for scheduling.",
            "tags": [
              "OSS"
            ],
            "url": "https://cal.com"
          },
          {
            "id": "plausible",
            "name": "Plausible",
            "description": "Privacy-first open-source Google Analytics alternative.",
            "tags": [
              "OSS"
            ],
            "url": "https://plausible.io"
          },
          {
            "id": "posthog",
            "name": "PostHog",
            "description": "Open-source Mixpanel and Hotjar replacement.",
            "tags": [
              "OSS"
            ],
            "url": "https://posthog.com"
          },
          {
            "id": "supabase",
            "name": "Supabase",
            "description": "Open-source Firebase with Postgres.",
            "tags": [
              "OSS"
            ],
            "url": "https://supabase.com"
          },
          {
            "id": "meilisearch",
            "name": "Meilisearch",
            "description": "Open-source Algolia alternative for fast search.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.meilisearch.com"
          },
          {
            "id": "chatwoot",
            "name": "Chatwoot",
            "description": "Open-source Intercom alternative for customer support.",
            "tags": [
              "OSS"
            ],
            "url": "https://www.chatwoot.com"
          },
          {
            "id": "n8n",
            "name": "n8n",
            "description": "Open-source Zapier alternative you can self-host.",
            "tags": [
              "OSS"
            ],
            "url": "https://n8n.io"
          },
          {
            "id": "coolify",
            "name": "Coolify",
            "description": "Open-source Heroku/Vercel for self-hosting.",
            "tags": [
              "OSS"
            ],
            "url": "https://coolify.io"
          },
          {
            "id": "penpot",
            "name": "Penpot",
            "description": "Open-source Figma alternative, self-hostable.",
            "tags": [
              "OSS"
            ],
            "url": "https://penpot.app"
          },
          {
            "id": "twenty-crm",
            "name": "Twenty CRM",
            "description": "Open-source Salesforce alternative CRM.",
            "tags": [
              "OSS"
            ],
            "url": "https://twenty.com"
          },
          {
            "id": "gitea",
            "name": "Gitea",
            "description": "Self-hosted Git service like GitHub.",
            "tags": [
              "Paid"
            ],
            "url": "https://gitea.io"
          }
        ]
      }
    ]
  },
  {
    "name": "Newly Added Tools",
    "subcategories": [
      {
        "name": "Latest Additions",
        "tools": [
          {
            "id": "neon",
            "name": "Neon",
            "description": "Serverless Postgres built for the cloud.",
            "url": "https://neon.tech",
            "tags": ["Database"]
          },
          {
            "id": "clerk",
            "name": "Clerk",
            "description": "Complete authentication and user management.",
            "url": "https://clerk.com",
            "tags": ["Auth"]
          },
          {
            "id": "shadcn-ui",
            "name": "shadcn/ui",
            "description": "Beautifully designed components that you can copy and paste into your apps.",
            "url": "https://ui.shadcn.com",
            "tags": ["UI"]
          },
          {
            "id": "aceternity-ui",
            "name": "Aceternity UI",
            "description": "Copy paste the most trending components and use them in your websites without having to worry about styling and animations.",
            "url": "https://ui.aceternity.com",
            "tags": ["UI"]
          },
          {
            "id": "n8n",
            "name": "n8n",
            "description": "Free and open node based Workflow Automation Tool. Easily automate tasks across different services.",
            "url": "https://n8n.io",
            "tags": ["Automation"]
          }
        ]
      }
    ]
  }
];
