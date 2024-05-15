import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/style/preset.css'
import '@/style/tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASENAME}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
