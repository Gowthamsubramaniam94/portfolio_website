# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing professional experience, projects, and technical expertise.

## Features

- 🎨 Modern and responsive design
- 🌓 Dark/light mode support
- ⚡ Fast loading with optimized assets
- 📱 Mobile-first approach
- ♿ WCAG accessibility compliant
- 🔍 SEO optimized
- 🎭 Smooth animations with Framer Motion
- 📊 Interactive project showcase
- 📝 Contact form with validation

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Vite

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Gowthamsubramaniam94/portfolio_website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Layout/        # Layout components
│   ├── Sections/      # Main page sections
│   └── UI/            # Reusable UI components
├── data/              # Static data and types
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── App.tsx           # Main application component
```

## Customization

### Updating Content

Edit the data files in `src/data/` to update:
- Personal information (`profile.ts`)
- Project showcase (`projects.ts`)

### Styling

- Modify `tailwind.config.js` for theme customization
- Update global styles in `src/index.css`

## Deployment

The site is configured for deployment on Netlify with continuous integration.

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)

## License

MIT License - feel free to use this template for your own portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
