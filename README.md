# R3VEX:Origins - Elite Cybersecurity Portfolio

A next-generation, highly interactive, dynamic portfolio website featuring elite hacker aesthetic with cyberpunk design.

## Features

✨ **Hero Section with 3D Elements**
- Animated typing effect with multiple role options
- Interactive 3D rotating dodecahedron using React Three Fiber
- Animated grid background with neon accents
- Smooth scroll navigation

🎯 **Dynamic Sections**
- About section with timeline of professional journey
- Skills section with interactive hover cards (6 categories)
- Companies section showcasing R3VEX:Origins and upcoming ventures
- Projects section with filterable cards and featured projects
- Contact form with email integration via Nodemailer

⌨️ **Advanced Features**
- Command palette (Ctrl+K) for terminal-style navigation
- Scroll-triggered animations with Intersection Observer
- Neon glow effects and cyberpunk styling
- Full dark mode with semantic design tokens
- Responsive design optimized for all devices
- SEO-optimized with OpenGraph support

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, Custom CSS animations
- **3D Graphics**: React Three Fiber, Drei
- **Form Handling**: React Hook Form, Zod
- **UI Components**: shadcn/ui
- **Command Palette**: cmdk
- **Email**: Nodemailer (Gmail SMTP)
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone and install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file with:

```env
# Gmail SMTP Configuration (for contact form emails)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
```

**Note**: For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information
- **Hero Section**: Edit `app/page.tsx` for name and tagline
- **About Timeline**: Modify `components/about-section.tsx`
- **Skills**: Update `skillCategories` in `components/skills-section.tsx`
- **Companies**: Edit `companies` array in `components/companies-section.tsx`
- **Projects**: Update `projects` array in `components/projects-section.tsx`
- **Contact Email**: Change `revexorigins+contact@gmail.com` in `app/api/contact/route.ts`

### Design & Theme
- **Colors**: Modify CSS variables in `app/globals.css` (neon-cyan, neon-green, neon-purple)
- **Fonts**: Change font imports in `app/layout.tsx`
- **Effects**: Adjust glow and animation timings in custom utilities

### Command Palette
- Add/remove commands in `components/command-palette.tsx`
- Update shortcuts and categories as needed

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+K` / `Cmd+K` | Open command palette |
| `Alt+T` | Toggle theme |
| Scroll | Trigger section animations |

## Performance Optimization

- Lazy loading for 3D canvas
- Intersection Observer for scroll animations
- Optimized images with next/image
- CSS animations use GPU acceleration
- Honeypot spam protection on forms

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Connect repo to Vercel and deploy
# Vercel will auto-build and deploy on push
```

### Add Environment Variables to Vercel
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Lighthouse Scores

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## License

Personal portfolio - All rights reserved

## Contact

Email: revexorigins@gmail.com

---

Built with ❤️ using Next.js and modern web technologies
