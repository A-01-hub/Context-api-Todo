import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; // 👈 Import this


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* 👈 Wrap your app with BrowserRouter */}
      <App />
    </BrowserRouter> {/* 👈 Close BrowserRouter */}

  </StrictMode>,
)
