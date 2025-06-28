import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Global error handlers
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Prevent the default browser behavior
  event.preventDefault();
});

// Handle message channel errors specifically
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'error') {
    console.error('Message channel error:', event.data);
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/karo-language-app/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
