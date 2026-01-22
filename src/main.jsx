import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import empty from'./empty.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <empty/>
  </StrictMode>,
)
