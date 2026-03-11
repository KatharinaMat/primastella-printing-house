**Primastella Website (Nuxt Rebuild)**

Modern rebuild of the Primastella printing house website using Nuxt and Vue.

The goal of this project was to modernize the existing website architecture while preserving the brand identity and content of the original site.

Primastella is a small printing house in Tallinn offering services such as business cards, NCR forms, flyers, stickers, and calendars.

**Live Website:**

https://primastella.ee

**Project Goals**

This project was created to improve the original website in several areas:

-modern frontend architecture
-better SEO structure
-reusable component system
-improved responsiveness
-optimized image handling
-easier maintainability for future updates

**Technologies Used**
- Nuxt 4
- Vue 3
- JavaScript
- CSS
- WebP image optimization
- Open Graph / Twitter metadata
- i18n JSON localization

**Key Features**
Bilingual structure: the site supports Estonian and English versions using separate locale JSON files.

locales/
  et.json
  en.json
Component-based layout

Reusable components were created for:

-hero sections
-service pages
-galleries
-footer

This makes it easy to extend the site with new services.

**SEO configuration**

The site includes structured metadata for better search and social previews:

- Open Graph metadata
- Twitter card previews
- canonical URLs
- hreflang language tags
- optimized preview image (1200×630)


**Project Structure**
primastella-printing-house/
├─ app/
│  ├─ components/
│  ├─ pages/
│  ├─ locales/
│  └─ assets/
├─ public/
├─ nuxt.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md
  
**Running the Project**

Install dependencies:

npm install
Run development server:
npm run dev
Build production version:
npm run build
Preview production build:
npm run preview

**Deployment**
The project can be deployed as a static build.

**Typical hosting platforms:**
Vercel
Netlify
static hosting on a custom domain

**Author**
Katharina Matkevits


GitHub:
https://github.com/KatharinaMat
