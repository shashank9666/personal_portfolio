my-3d-portfolio/
├─ app/
│  ├─ layout.js              // Root layout: fonts, global providers
│  ├─ page.js                // Landing page redirecting or showing hero
│  ├─ (portfolio)/
│  │  ├─ layout.js           // Site shell: header, footer, nav
│  │  ├─ page.js             // Home: hero, highlight projects, reel teaser
│  │  ├─ about/
│  │  │  └─ page.js          // Bio, skills, tools, resume link
│  │  ├─ projects/
│  │  │  ├─ page.js          // Projects grid (filters: env, character, props)
│  │  │  └─ [slug]/
│  │  │     └─ page.js       // Project case study (images, wires, breakdown)
│  │  ├─ reel/
│  │  │  └─ page.js          // Embedded demo reel (YouTube/Vimeo, R3F preview)
│  │  └─ contact/
│  │     └─ page.js          // Contact form + social links
│  ├─ api/
│  │  └─ contact/
│  │     └─ route.ts          // POST handler to send emails or store messages
│  └─ favicon.ico
│
├─ components/
│  ├─ layout/
│  │  ├─ Header.js
│  │  ├─ Footer.js
│  │  └─ MainNav.js
│  ├─ ui/                     // Generic, reusable UI primitives
│  │  ├─ Button.js
│  │  ├─ Badge.js
│  │  ├─ Card.js
│  │  ├─ Grid.js
│  │  └─ Modal.js
│  ├─ home/
│  │  ├─ Hero.js
│  │  └─ FeaturedProjects.js
│  ├─ projects/
│  │  ├─ ProjectCard.js
│  │  ├─ ProjectFilters.js
│  │  ├─ ProjectGallery.js
│  │  └─ ProjectDetails.js
│  ├─ reel/
│  │  └─ ReelPlayer.js
│  └─ contact/
│     └─ ContactForm.js
│
├─ lib/
│  ├─ projects.ts             // Load/filter projects from data or CMS
│  ├─ metadata.ts             // SEO helpers for metadata() in routes
│  └─ mail.ts                 // Email sending logic for /api/contact
│
├─ data/
│  └─ projects.json           // Project list: slug, title, role, images, tags
│
├─ public/
│  ├─ images/
│  │  ├─ projects/
│  │  │  ├─ project-1/
│  │  │  │  ├─ thumb.jpg
│  │  │  │  ├─ beauty-1.jpg
│  │  │  │  └─ wire-1.jpg
│  │  │  └─ project-2/ ...
│  │  └─ avatar.jpg
│  └─ reel-poster.jpg
│
├─ styles/
│  ├─ globals.css             // Base styles or Tailwind imports
│  └─ theme.css               // Custom theme tokens if not using Tailwind
│
├─ next.config.mjs
├─ tsconfig.json              // TypeScript config (recommended)
├─ postcss.config.mjs         // If using Tailwind or PostCSS
├─ tailwind.config.mjs        // If using Tailwind
├─ package.json
└─ README.md