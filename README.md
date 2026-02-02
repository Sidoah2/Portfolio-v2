
# ⚡ Ahmed Bouacheri - Modern Portfolio

A high-performance, professional portfolio built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.
Features a dark premium theme, smooth animations, and a fully responsive design.

## 🚀 Key Features

- **Modern Tech Stack**: Built with React & Next.js (App Router).
- **Smooth Animations**: Powered by Framer Motion for scroll reveals and interactions.
- **Glassmorphism UI**: High-end design aesthetic with blur effects and gradients.
- **Responsive**: Perfect mobile, tablet, and desktop experience.
- **SEO Optimized**: Semantic HTML and performance optimizations.
- **Centralized Data**: Easily update skills, projects, and content in `app/data.ts`.

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/`
  - `page.tsx`: Main entry point (One-page layout).
  - `data.ts`: **Content Center** - Edit your bio, skills, and projects here.
  - `globals.css`: Global styles and Tailwind configuration.
- `components/`: Modular UI components (Hero, Skills, Projects, Navbar, etc.).
- `public/assets/`: Place your images here.

## 📦 Deployment to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Add your remote origin
   git bg-primary main
   ```

2. **Deploy**:
   - Go to [Vercel](https://vercel.com).
   - Click "Add New > Project".
   - Import your GitHub repository.
   - Click **Deploy**.

That's it! Your portfolio will be live instantly.
