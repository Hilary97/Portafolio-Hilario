import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Imagen } from './Imgenes.jsx'
import {Logos} from './Logos.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Logos />
    <Imagen />
    
  </StrictMode>,
)
