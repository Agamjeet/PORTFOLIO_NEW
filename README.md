# Agamjeet Singh Padda - Portfolio Website

A modern, interactive portfolio website showcasing AI development and data science expertise. Built with Next.js and featuring advanced animations, interactive project cards, and comprehensive SEO optimization.

## 🌟 Features

- **Interactive Project Cards**: Animated card deck with drag-and-drop functionality
- **Custom Card Types**: Specialized cards for different project categories (AI, Search, Vision, Creative, Analytics)
- **Advanced Animations**: GSAP-powered animations and Framer Motion transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS and DaisyUI
- **SEO Optimized**: Complete SEO setup with structured data, sitemaps, and metadata
- **Performance Focused**: Static export for optimal loading times

## 🛠️ Technologies & Libraries

### Core Framework
- **Next.js 15.4.6**: React framework for production with App Router
- **React 19.1.0**: Latest React with concurrent features
- **React DOM 19.1.0**: React rendering library

### Styling & UI
- **Tailwind CSS 4.1.11**: Utility-first CSS framework for rapid UI development
- **DaisyUI 5.0.50**: Component library built on Tailwind CSS for pre-built UI components
- **PostCSS 4.1.11**: CSS post-processor for modern CSS features

### Animations
- **Framer Motion 12.23.12**: Production-ready motion library for React animations
- **GSAP 3.13.0**: Professional animation library for complex animations and interactions

### Development Tools
- **ESLint 9**: Code linting for consistent code quality
- **ESLint Config Next 15.4.6**: Next.js specific ESLint rules

### Deployment
- **@netlify/plugin-nextjs 5.12.1**: Netlify plugin for Next.js optimization

## 📁 Project Structure

```
bday/
├── app/                          # Next.js App Router
│   ├── components/              # React components
│   │   ├── About.jsx           # About section component
│   │   ├── AICard.jsx          # AI project card component
│   │   ├── AnalyticsCard.jsx   # Analytics project card
│   │   ├── AnimatedBackground.jsx # Background animations
│   │   ├── Card.jsx            # Base card component
│   │   ├── Contact.jsx         # Contact section
│   │   ├── CreativeCard.jsx    # Creative project card
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── GsapButton.jsx      # GSAP animated button
│   │   ├── Hero.jsx            # Hero section
│   │   ├── LifeStats.jsx       # Life statistics component
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Projects.jsx        # Main projects showcase
│   │   ├── SearchCard.jsx      # Search project card
│   │   ├── Skills.jsx          # Skills section
│   │   └── VisionCard.jsx      # Vision project card
│   ├── globals.css             # Global styles
│   ├── layout.js               # Root layout with metadata
│   ├── page.js                 # Home page
│   └── favicon.ico             # Site favicon
├── public/                      # Static assets
│   ├── .well-known/            # Well-known directory for standards
│   │   └── security.txt        # Security contact information
│   ├── robots.txt              # Search engine crawling rules
│   ├── sitemap.xml             # Site structure for search engines
│   ├── manifest.json           # PWA manifest
│   ├── humans.txt              # Human-readable site info
│   └── [images]                # Image assets
└── [config files]              # Various configuration files
```

## 🔍 SEO & Performance Files

### robots.txt
**Purpose**: Controls search engine crawling behavior
- Allows all search engines to crawl the site
- Provides sitemap location
- Blocks AI training bots to protect content
- Sets crawl delays for respectful crawling

### sitemap.xml
**Purpose**: Helps search engines understand site structure
- Lists all important pages with priorities
- Includes last modification dates
- Specifies change frequencies
- Improves search engine indexing

### manifest.json
**Purpose**: Progressive Web App (PWA) configuration
- Enables mobile app-like experience
- Defines app icons and colors
- Configures standalone display mode
- Improves mobile user experience

### security.txt
**Purpose**: Security researcher contact information
- Provides contact details for vulnerability reports
- Follows RFC 9116 standard
- Located in .well-known directory
- Enhances security transparency

### humans.txt
**Purpose**: Human-readable site information
- Credits developers and technologies used
- Provides contact information
- Documents development tools
- Fun way to share project details

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Agamjeet/bday.git
cd bday
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## 📱 Component Breakdown

### Interactive Project Cards
- **Projects.jsx**: Main container with card dealing animation
- **Card Types**: Specialized components for different project categories
  - AICard.jsx: AI/ML projects with circuit board effects
  - SearchCard.jsx: Search/RAG projects with search animations
  - VisionCard.jsx: Computer vision projects with eye tracking
  - CreativeCard.jsx: Creative AI projects with color gradients
  - AnalyticsCard.jsx: Data analytics with chart animations

### Animation System
- **GSAP**: Complex timeline animations and interactive elements
- **Framer Motion**: Page transitions and component animations
- **AnimatedBackground**: Dynamic background effects

### Responsive Design
- **Tailwind CSS**: Utility-first styling approach
- **DaisyUI**: Pre-built components for rapid development
- **Mobile-first**: Optimized for all device sizes

## 🌐 Deployment

### Netlify (Recommended)
The site is configured for Netlify deployment:
- Automatic builds from Git
- Next.js optimization plugin
- Static export for best performance
- Custom domain support

### Configuration Files
- `netlify.toml`: Netlify-specific build settings
- `next.config.mjs`: Next.js configuration with static export

## 🔧 Customization

### Adding New Project Cards
1. Create a new card component in `components/`
2. Add the project data to the `projects` array in `Projects.jsx`
3. Update the `renderCustomCard` function to include your new card type

### Modifying Animations
- GSAP animations: Edit individual card components
- Framer Motion: Update motion props in components
- Background effects: Modify `AnimatedBackground.jsx`

### SEO Updates
- Metadata: Update `app/layout.js`
- Sitemap: Modify `public/sitemap.xml`
- Robots: Edit `public/robots.txt`

## 📊 Performance Features

- **Static Export**: Pre-rendered pages for instant loading
- **Image Optimization**: Next.js image optimization (disabled for static export)
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Components load as needed
- **Optimized Fonts**: Google Fonts with Next.js font optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: paddaagamjeetsingh@gmail.com
- **LinkedIn**: [Agamjeet Singh Padda](https://www.linkedin.com/in/agamjeet-padda/)
- **Twitter**: [@Agam_io](https://twitter.com/Agam_io)
- **GitHub**: [Agamjeet](https://github.com/Agamjeet)

---

Built with ❤️ by Agamjeet Singh Padda