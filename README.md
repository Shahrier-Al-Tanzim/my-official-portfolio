# Shahrier Al Tanzim - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring dark mode, smooth animations, and elegant design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🌓 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 🎨 **Modern Design** - Beautiful gradient effects, glassmorphism, and vibrant colors
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Framer Motion for buttery-smooth transitions
- 🚀 **Performance Optimized** - Built with Next.js 14 App Router
- 🎯 **SEO Ready** - Proper meta tags and semantic HTML
- 💫 **Smooth Scrolling** - Elegant navigation between sections

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes
- **Deployment**: Vercel

## 📋 Sections

1. **Hero** - Introduction with profile image and contact buttons
2. **Education** - Academic background and achievements
3. **Skills** - Categorized technical skills with icons
4. **Experience** - Professional work experience
5. **Projects** - Portfolio of projects with links
6. **Achievements** - Programming contest awards
7. **Extracurricular** - Competitive programming and mentorship
8. **Contact** - Social links and contact information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Shahrier-Al-Tanzim/my-official-portfolio.git
cd my-official-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment to Vercel

### Method 1: GitHub Integration (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit: Portfolio website"
git push origin main
```

2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Method 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment

## 🎨 Customization

### Update Profile Image

Replace `/public/image.png` with your own professional photo.

### Modify Content

Edit the following files to update your information:
- `components/Hero.tsx` - Personal introduction
- `components/Education.tsx` - Academic details
- `components/Skills.tsx` - Technical skills
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Project portfolio
- `components/Achievements.tsx` - Awards and honors
- `components/Extracurricular.tsx` - Additional activities

### Change Colors

Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: {
    light: '#3b82f6',
    dark: '#60a5fa',
  },
  // Add more custom colors
}
```

## 📱 Responsive Design

The website is fully responsive and tested on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1920px+)

## 🎯 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shahrier Al Tanzim**
- Email: shahrier@iut-dhaka.edu
- GitHub: [@Shahrier-Al-Tanzim](https://github.com/Shahrier-Al-Tanzim)
- LinkedIn: [shahrier-tanzim](https://linkedin.com/in/shahrier-tanzim)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

Made with ❤️ using Next.js & Tailwind CSS
