# 🥦 Selora – E-Commerce Platform for Vegetables, Fruits & Cooking Products  

**Selora** is a full-stack **Next.js e-commerce application** designed to sell fresh vegetables, fruits, and cooking products.  
It includes modern features like **authentication, protected routes, product management (CRUD), a checkout/booking flow, and a secure dashboard**.  

This project was developed as part of a **Full-Stack Next.js Assignment (4 Days)** and is fully portfolio-ready.  

---

## 🌐 Live Demo & Repository  

- 🚀 **Live URL** → [https://selora.vercel.app](https://selora.vercel.app)  
- 📂 **GitHub Repository** → [https://github.com/fahimhasan-dev/sellora1.0](https://github.com/fahimhasan-dev/sellora1.0)  
 

---

## 🚀 Tech Stack  

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)  
- **Backend**: Next.js API Routes (`/api`)  
- **Database**: MongoDB + Prisma/Mongoose  
- **Authentication**: NextAuth.js (Google OAuth +GitHub OAuth + Credentials) / JWT  
- **UI & Styling**: Tailwind CSS + Shadcn UI (with responsive design & animations)  
- **State & Data Fetching**: React Query (TanStack Query) / SWR  
- **Deployment**: [Vercel](https://vercel.com/)  

---

## ✨ Features  

### 🔐 Authentication  
- Login & Signup via **NextAuth (Google OAuth +GitHub OAuth + Credentials)**  
- Passwords hashed with **bcrypt** (if using credentials)  
- Protected pages (dashboard, checkout, booking history)  
- Conditional UI based on auth status  

### 🛒 E-Commerce & Landing Page  
- Landing page with **7+ sections**: Hero, Features, Testimonials, FAQ, CTA, About, Contact  
- SEO optimized with metadata & Open Graph tags  
- Smooth animations (scroll reveal, hover effects, fade-in)  
- **Public product listing pages** (vegetables, fruits, cooking essentials)  

### 📊 Dashboard (CRUD System)  
- Manage products: **Create, Edit, Delete, and View**  
- Dynamic product pages → `/product/[id]`  
- API routes and server actions for form submissions  
- Dashboard available only to authenticated users  

### 🧾 Checkout & Booking Flow  
- Simple **checkout/booking form** (no payment required)  
- Orders stored securely in the database  
- Logged-in users can view their **order/booking history**  

### 🎨 Styling & UI  
- Optimized images with **next/image**  
- Custom typography via **next/font**  
- Responsive across **mobile, tablet, and desktop**  
- Consistent UI powered by **Shadcn UI + Tailwind**  

### ⚡ Backend & Database  
- REST-style API routes in `/api/`  
- Integrated with **MongoDB** using Prisma/Mongoose  
- Secure `.env.local` for API keys and secrets  

### 🔄 Data Fetching & Optimization  
- **Server-side rendering (SSR)** and **ISR** for products  
- **Client-side fetching** with React Query / SWR for live updates  
- Smart caching & revalidation  

### 🛠 Advanced Features  
- ✅ Middleware for route protection & redirects  
- ✅ Pagination & Search filter for product lists  
- ✅ Intercepting routes for modals (e.g., quick product view)  
- ✅ Custom `loading.js` and `error.js`  

---

## 📂 Project Structure  

