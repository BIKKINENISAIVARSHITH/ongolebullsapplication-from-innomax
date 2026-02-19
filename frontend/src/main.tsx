import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AdminLeads from './AdminLeads.tsx'

// Favicon from src/assets/favicon.jpg (production build gets correct hashed URL)
try {
  const faviconUrl = new URL('./assets/favicon.jpg', import.meta.url).href
  const link = document.querySelector<HTMLLinkElement>("link[rel*='icon']") ?? document.createElement('link')
  link.rel = 'icon'
  link.href = faviconUrl
  if (!document.querySelector("link[rel*='icon']")) document.head.appendChild(link)
} catch {
  // keep index.html fallback if any
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin-portal" element={<AdminLeads />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
