# Scandi Commerce Company Website

A modern Next.js website built from Figma design for Scandi Commerce.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
scandicommerce-company-website/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Tailwind
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions and helpers
├── public/               # Static assets (images, icons, etc.)
├── types/                # TypeScript type definitions
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Converting Figma Design

### Steps to convert your Figma design:

1. **Extract Design Tokens**:
   - Colors: Add to `tailwind.config.ts` under `theme.extend.colors`
   - Fonts: Add to `tailwind.config.ts` under `theme.extend.fontFamily`
   - Spacing: Use Tailwind's default spacing or customize in config

2. **Create Components**:
   - Break down the Figma design into reusable components
   - Place layout components in `components/layout/`
   - Place UI components in `components/ui/`

3. **Build Pages**:
   - Create new pages in the `app/` directory
   - Use Next.js App Router conventions

4. **Add Assets**:
   - Place images in `public/` directory
   - Reference them using `/image-name.png`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📦 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

## 🎯 Next Steps

1. Review the Figma design and extract design tokens (colors, fonts, spacing)
2. Create components based on the design
3. Build out pages and sections
4. Add animations and interactions
5. Optimize for performance and SEO

## 📝 Notes

- All components are set up with TypeScript
- Tailwind CSS is configured and ready to use
- The project follows Next.js 14 App Router conventions
- Responsive design utilities from Tailwind are available

## 🤝 Contributing

This is a private project. Follow the existing code structure and conventions when adding new features.

