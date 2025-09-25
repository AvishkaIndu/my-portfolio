# Cyberpunk Portfolio Website 🚀

A modern, cyberpunk-themed portfolio website built for software engineering undergraduates and full-stack developers. Features a dark background with neon green highlights, matrix-style animations, and futuristic UI components.

![Portfolio Preview](./public/preview.png)

## ✨ Features

- **Cyberpunk Design**: Dark theme with neon green (#00ff88) and cyber blue accents
- **Matrix Background Animation**: Animated matrix rain effect with cyber grid overlay
- **Responsive Design**: Fully responsive across all devices
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Interactive Animations**: Smooth page transitions, hover effects, and loading animations
- **Typewriter Effect**: Dynamic typing animation in hero section
- **Project Showcase**: Interactive project grid with detailed modal views
- **Contact Form**: Functional contact form with validation and status feedback
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance Optimized**: Dynamic imports and optimized assets

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## 🎨 Design Features

### Color Palette
- **Primary Background**: `#0a0a0a` (Cyber Dark)
- **Neon Green**: `#00ff88` (Primary accent)
- **Cyber Blue**: `#00d4ff` (Secondary accent)
- **Cyber Purple**: `#8b5cf6` (Tertiary accent)
- **Gray Tones**: Various shades for backgrounds and text

### Animations
- Matrix rain background effect
- Glitch text effects
- Neon glow animations
- Typewriter effect
- Smooth scroll navigation
- Hover animations on cards and buttons
- Loading states and transitions

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cyberpunk-portfolio.git
   cd cyberpunk-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx            # Main page component
├── components/
│   ├── BackgroundAnimation.tsx  # Matrix rain effect
│   ├── Navbar.tsx              # Navigation component
│   ├── Hero.tsx                # Hero section with typewriter
│   ├── About.tsx               # About section
│   ├── Skills.tsx              # Skills with animated bars
│   ├── Projects.tsx            # Project showcase
│   ├── Contact.tsx             # Contact form
│   └── Footer.tsx              # Footer component
└── lib/
    └── utils.ts                # Utility functions
```

## 🎯 Customization Guide

### 1. Personal Information
Update the following files with your information:

**Hero Section** (`src/components/Hero.tsx`):
- Replace `[Your Name]` with your actual name
- Update the typewriter sequences
- Add your profile image path
- Update social media links

**About Section** (`src/components/About.tsx`):
- Modify the personal story and journey
- Update education and experience timeline
- Change location and stats

**Contact Section** (`src/components/Contact.tsx`):
- Update contact information
- Replace social media links
- Modify email and phone details

### 2. Projects
Edit `src/components/Projects.tsx` to add your projects:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Brief project description',
    longDescription: 'Detailed project description...',
    technologies: ['Next.js', 'TypeScript', 'MongoDB'],
    category: 'fullstack',
    demoUrl: 'https://your-demo-url.com',
    githubUrl: 'https://github.com/username/project',
    featured: true,
    status: 'completed',
    year: '2024',
    // ... more properties
  }
]
```

### 3. Skills
Update your skills in `src/components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React/Next.js', level: 90 },
      // ... add your skills
    ]
  }
]
```

### 4. Colors and Theming
Modify colors in `tailwind.config.ts`:

```typescript
colors: {
  cyber: {
    green: '#00ff88',    // Your primary color
    blue: '#00d4ff',     // Your secondary color
    dark: '#0a0a0a',     // Background color
  }
}
```

### 5. Animations
Customize animations in `src/app/globals.css`:

```css
/* Add your custom animations */
@keyframes your-custom-animation {
  /* ... */
}
```

## 📝 Content Guidelines

### Hero Section
- Keep the main title concise and impactful
- Use dynamic typing effects for roles/skills
- Include a compelling subtitle
- Add clear call-to-action buttons

### About Section
- Tell your story in a personal way
- Highlight your journey and motivation
- Include relevant stats and achievements
- Mention your location and availability

### Skills Section
- Organize skills by categories
- Use realistic skill levels (0-100)
- Include brief descriptions for each skill
- Add relevant technologies you work with

### Projects Section
- Showcase your best work first
- Include live demos and GitHub links
- Write detailed project descriptions
- Mention technologies and key features
- Add project status and timeline

### Contact Section
- Provide multiple contact methods
- Include response time expectations
- Add social media links
- Make it clear you're available for work

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: `npm run build` → deploy `out` folder
- **GitHub Pages**: Enable GitHub Actions deployment
- **Traditional Hosting**: Build and upload `out` folder

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Performance Optimizations

- Dynamic imports for better loading
- Optimized images and assets
- Minimal bundle size
- Efficient animations
- SEO-friendly structure

## 🤝 Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- **Next.js** for the amazing React framework
- **Vercel** for seamless deployment

## 📞 Support

If you need help customizing this portfolio or have any questions:

- 📧 Email: your.email@example.com
- 🐦 Twitter: [@yourusername](https://twitter.com/yourusername)
- 💼 LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

---

**Made with ❤️ and ☕ by [Your Name]**

⭐ If this project helped you, please give it a star!
