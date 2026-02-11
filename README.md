# Tech Abyss - Corporate Profile Website

A modern, responsive corporate profile website built with React, TypeScript, and cutting-edge web technologies.

## 🚀 Features

- **Responsive Design**: Mobile-first approach ensuring perfect display on all devices
- **Smooth Animations**: Powered by Framer Motion for elegant page transitions and scroll animations
- **Modern UI**: Built with Tailwind CSS and Mantine UI components
- **Type-Safe**: Full TypeScript implementation for robust code
- **Routing**: React Router for seamless navigation
- **Legal Pages**: Comprehensive Terms & Conditions and Privacy Policy pages
- **Error Handling**: Custom 404 and error pages

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Mantine UI
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React + Tabler Icons
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tech-abyss.git
cd tech-abyss
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
tech-abyss/
├── src/
│   ├── components/
│   │   ├── landing/          # Landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CustomerSatisfaction.tsx
│   │   │   ├── ConsultingService.tsx
│   │   │   ├── PerformanceMarketing.tsx
│   │   │   ├── Introsection.tsx
│   │   │   ├── CalltoAction.tsx
│   │   │   └── Footer.tsx
│   │   ├── shared/           # Reusable components
│   │   │   ├── Layout.tsx
│   │   │   ├── PageTransition.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── MobileMenuButton.tsx
│   │   └── partials/         # Partial components
│   │       └── TovNav.tsx
│   ├── pages/                # Page components
│   │   ├── Home.tsx
│   │   ├── Terms.tsx
│   │   ├── Privacy.tsx
│   │   ├── NotFound.tsx
│   │   └── Error.tsx
│   ├── utils/                # Utility functions
│   │   └── animations.ts     # Framer Motion variants
│   ├── hooks/                # Custom React hooks
│   │   └── useScrollAnimation.ts
│   ├── assets/               # Static assets
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── App.css               # Global styles
├── public/                   # Public assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Key Components

### Pages
- **Home**: Main landing page with all sections
- **Terms & Conditions**: Comprehensive legal terms
- **Privacy Policy**: GDPR-compliant privacy information
- **404 Page**: Creative not found page
- **Error Page**: Generic error handling page

### Shared Components
- **Layout**: Wrapper component with shared footer
- **PageTransition**: Smooth page transition animations
- **MobileMenu**: Responsive mobile navigation
- **MobileMenuButton**: Animated hamburger menu button

### Landing Sections
- **HeroSection**: Eye-catching hero with gradient text and animations
- **CustomerSatisfaction**: Statistics and achievements showcase
- **ConsultingService**: Services overview
- **PerformanceMarketing**: Marketing solutions
- **IntroSection**: Company introduction
- **CallToAction**: Conversion-focused CTA section
- **Footer**: Site footer with links and information

## 🎭 Animations

The project uses Framer Motion for smooth, performant animations:

- **Page Transitions**: Fade and slide effects between routes
- **Scroll Animations**: Elements animate on scroll using Intersection Observer
- **Hover Effects**: Interactive button and link animations
- **Stagger Effects**: Sequential animation of child elements

Animation variants are centralized in `src/utils/animations.ts` for consistency.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Mobile-first approach ensures optimal performance on all devices.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚧 Development Status

### ✅ Completed
- [x] Project setup and configuration
- [x] React Router integration
- [x] All page components (Home, Terms, Privacy, Error, 404)
- [x] Shared components (Layout, PageTransition, MobileMenu)
- [x] Animation utilities and custom hooks
- [x] Responsive HeroSection with mobile menu
- [x] Footer with legal page links and animations

### 🔄 In Progress
- [ ] Responsive design for remaining landing sections
- [ ] Additional Framer Motion animations
- [ ] Performance optimizations
- [ ] SEO improvements

### 📋 Planned
- [ ] Blog section
- [ ] Contact form
- [ ] Dark/Light mode toggle
- [ ] Accessibility improvements (WCAG 2.1 AA)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

Tech Abyss
- Location: Sanepa, Lalitpur, Nepal
- Website: [Coming Soon]
- Email: [Coming Soon]

---

Built with ❤️ by Tech Abyss Team
