import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css' // Pointing exactly to your folder
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)