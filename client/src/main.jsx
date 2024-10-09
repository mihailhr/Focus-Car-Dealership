import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.jsx';
const rootElement=document.getElementById("root")
const root=createRoot(rootElement)
root.render(
  
    <BrowserRouter>
    <ScrollToTop/>
    <App />
    </BrowserRouter>
  
)
