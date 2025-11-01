# Genrec AI Website

Privacy-first, performance-optimized Next.js website for Genrec AI.

## Tech Stack

- **Framework:** Next.js 14+ with TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Performance:** Static-first with selective server functions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

### Type Check

```bash
npm run type-check
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── products/           # Product pages
│   ├── case-studies/       # Case study pages
│   ├── about/              # About page
│   ├── blog/               # Blog page
│   ├── contact/            # Contact form
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   ├── cookie-policy/      # Cookie policy
│   ├── api/
│   │   └── contact/        # Contact form API route
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
└── components/
    ├── global/             # Header, Footer, CookieConsent
    ├── home/               # Home page sections
    └── products/           # Product components
```

## Performance Targets

- Lighthouse Performance: ≥95
- Lighthouse Accessibility: ≥96
- Lighthouse Best Practices: ≥95
- Lighthouse SEO: ≥95

## Key Features

- ✅ Privacy-first design with GDPR-compliant cookie consent
- ✅ Accessibility-first (WCAG 2.1 AA+)
- ✅ SEO optimized with metadata, JSON-LD, sitemap
- ✅ Animations with `prefers-reduced-motion` support
- ✅ Working contact form with validation & rate limiting
- ✅ Mobile-first responsive design
- ✅ Fast loading (AVIF/WebP images, font optimization)

## Environment Variables

Create a `.env.local` file:

```env
# Optional: Add for production email sending
# SENDGRID_API_KEY=your_key_here
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import in Vercel
3. Deploy (zero config needed)

### Custom Server

```bash
npm run build
npm start
```

## Content Updates

### Update Stats/Metrics

Edit `src/components/home/Stats.tsx` and add source documentation in `/proofs` directory.

### Add Case Studies

1. Create new page in `src/app/case-studies/[slug]/page.tsx`
2. Add to index in `src/app/case-studies/page.tsx`
3. Update sitemap in `src/app/sitemap.ts`

### Modify Products

Edit pages in `src/app/products/[product]/page.tsx`

## Maintenance

- All metrics should have verifiable sources
- Update OG image: `public/og-image.png` (1200x630px)
- Add favicon: `public/favicon.ico`
- Legal pages reviewed annually

## Contact

For questions: contact@genrecai.com

## License

Proprietary - Genrec AI
