import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FaMoon, FaSun } from 'react-icons/fa'
import { BrowserRouter } from 'react-router-dom'

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.body.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button className="theme-toggle" onClick={() => setDark((d) => !d)} aria-label="Alternar tema">
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeToggle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
