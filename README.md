# ELSS Tax Saving Landing Page

A high-conversion landing page for Ongolebulls Invest Pvt Ltd - An AMFI Registered Mutual Fund Distributor in India.

## Live Demo

**Website URL:** https://brdb6cwg6vmhi.ok.kimi.link

## Features

### Frontend (React + TypeScript + Tailwind CSS)

1. **Sticky Top Bar** - Urgency messaging with CTA buttons (Call & WhatsApp)
2. **Hero Section** - Main headline, trust badges, and primary CTAs
3. **What is ELSS** - Educational section about Equity Linked Saving Schemes
4. **Key Benefits** - Icon grid showcasing ELSS advantages
5. **Comparison Table** - ELSS vs Other 80C options (PPF, FD, LIC, NSC)
6. **ELSS Calculator** - Interactive calculator for returns and tax savings
7. **Top ELSS Funds** - Dynamic cards showing best performing funds
8. **Why Choose Us** - Company credentials and trust factors
9. **How It Works** - 4-step process visualization
10. **Testimonials** - Client success stories
11. **Lead Capture Form** - Form with validation and API integration
12. **FAQ Section** - Accordion-style frequently asked questions
13. **Sticky Bottom CTA** - Mobile-optimized floating action buttons
14. **Footer** - Contact details and compliance disclaimers

### Backend (Node.js + Express)

- **POST /api/leads** - Submit lead form data
- **GET /api/leads** - Retrieve all leads (for admin)
- **GET /api/health** - Health check endpoint
- Leads stored in JSON file (easily upgradable to MongoDB)

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend:** Node.js, Express.js, CORS
- **Design:** Mobile-first, responsive, SEO-optimized

## Project Structure

```
/mnt/okcomputer/output/app/
├── src/
│   ├── sections/           # All page sections as React components
│   │   ├── StickyTopBar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── WhatIsELSS.tsx
│   │   ├── KeyBenefits.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── CalculatorSection.tsx
│   │   ├── TopFunds.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── LeadForm.tsx
│   │   ├── FAQSection.tsx
│   │   ├── StickyBottomCTA.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── server/
│   ├── server.js           # Express server
│   ├── package.json
│   └── data/
│       └── leads.json      # Lead storage
├── dist/                   # Production build
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Color Theme

- **Trust Blue:** #1d4ed8 (Primary)
- **Wealth Green:** #16a34a (Secondary)
- **Clean White:** #ffffff (Background)
- **Urgency Red:** #dc2626 (Top bar)

## How to Run Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Step 1: Start the Backend Server

```bash
cd /mnt/okcomputer/output/app/server
npm install
npm start
```

Server will start on `http://localhost:5000`

API Endpoints:
- `POST http://localhost:5000/api/leads` - Submit lead
- `GET http://localhost:5000/api/leads` - Get all leads
- `GET http://localhost:5000/api/health` - Health check

### Step 2: Start the Frontend

```bash
cd /mnt/okcomputer/output/app
npm install
npm run dev
```

Frontend will start on `http://localhost:5173`

### Step 3: Build for Production

```bash
cd /mnt/okcomputer/output/app
npm run build
```

Production files will be in the `dist/` folder.

## Key Features for Conversion

1. **Sticky CTAs** - Always visible call-to-action buttons
2. **Urgency Messaging** - Countdown and limited-time offers
3. **Trust Badges** - AMFI registration, happy investors count
4. **Social Proof** - Testimonials from satisfied clients
5. **Interactive Calculator** - Engage users with personalized calculations
6. **Comparison Table** - Show ELSS superiority over alternatives
7. **Mobile-Optimized** - Sticky bottom bar for mobile users
8. **Fast Loading** - Optimized build with Vite

## Compliance

- AMFI Registration mentioned
- SEBI compliance statements
- Mutual fund risk disclaimers
- Contact information provided
- Privacy and security assurances

## Contact

**Ongolebulls Invest Pvt Ltd**
- Email: info@ongolebullsinvest.com
- Phone: +91-9281111730
- Address: Flat No. 805B, Manjeera Majestic Commercial Complex, Opposite JNTU, KPHB, Kukatpally, Hyderabad – 500072, Telangana, India.

---

**Note:** This is a demo landing page. For production use, please update the AMFI registration number and other compliance details with actual values.
