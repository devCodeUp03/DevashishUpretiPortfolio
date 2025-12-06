# Devashish Upreti - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Software Engineer. Built with React, Vite, and Tailwind CSS, featuring smooth animations, dark mode support, and an interactive contact form.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Theme toggle with smooth transitions
- **Animated Rain Background** - Interactive particle effect background
- **Typing Effect** - Dynamic typing animation in hero section
- **Smooth Animations** - Framer Motion powered animations throughout
- **Contact Form** - Functional contact form integrated with EmailJS
- **Project Showcase** - Display of featured projects with live demos
- **Testimonials Section** - Client/colleague testimonials
- **Downloadable Resume** - Direct PDF download functionality
- **Social Media Integration** - Links to GitHub, LinkedIn, and WhatsApp

## 🚀 Tech Stack

### Frontend
- **React 19.2.0** - Modern UI library
- **Vite 7.2.4** - Next-generation frontend tooling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.23.25** - Animation library
- **Lucide React 0.556.0** - Beautiful icon library

### Additional Tools
- **EmailJS** - Email service for contact form
- **ESLint** - Code linting and quality
- **PostCSS & Autoprefixer** - CSS processing

## 📂 Project Structure

```
InternshipProjectsYugaYatra/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Reusable React components
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── HexagonImage.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── RainBackground.jsx
│   │   ├── SectionTitle.jsx
│   │   └── ServiceCard.jsx
│   ├── context/        # React Context (Theme)
│   │   └── ThemeContext.jsx
│   ├── data/           # Portfolio data
│   │   └── portfolio.js
│   ├── hooks/          # Custom React hooks
│   │   └── useTypingEffect.js
│   ├── sections/       # Page sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   ├── utils/          # Utility functions
│   │   └── animations.js
│   ├── App.jsx         # Main App component
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── .env                # Environment variables (not tracked)
├── .gitignore          # Git ignore rules
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── vercel.json         # Vercel deployment config
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/devCodeUp03/DevashishUpretiPortfolio.git
   cd DevashishUpretiPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the portfolio

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Update Personal Information

Edit `src/data/portfolio.js` to customize:
- Personal information (name, role, bio, contact)
- Skills and technologies
- Education details
- Work experience
- Projects portfolio
- Testimonials

### Modify Theme Colors

Update `tailwind.config.js` to change color schemes and design tokens.

### Add/Remove Sections

Modify `src/App.jsx` to add or remove sections from the portfolio.

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The `vercel.json` configuration is already included for proper routing.

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 📱 Sections Overview

1. **Hero** - Introduction with typing effect and CTA buttons
2. **About** - Personal bio, skills, education, and experience
3. **Services** - Services offered as a developer
4. **Projects** - Showcase of featured projects with live demos
5. **Testimonials** - Client and colleague testimonials
6. **Contact** - Contact form and social media links
7. **Footer** - Copyright and additional links

## 🔗 Live Demo

Visit the live portfolio: [Your Live URL Here]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Devashish Upreti**
- GitHub: [@devCodeUp03](https://github.com/devCodeUp03)
- LinkedIn: [Devashish Upreti](https://www.linkedin.com/in/devashish-upreti-427311235/)
- Email: devashup68@gmail.com

## 🙏 Acknowledgments

- Icons from [Lucide React](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Email service by [EmailJS](https://www.emailjs.com/)
- Deployed on [Vercel](https://vercel.com)

---

⭐ If you found this portfolio helpful, please consider giving it a star!
