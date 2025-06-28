import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import AdultLearning from './pages/AdultLearning';
import Level1 from './pages/adult/Level1';
import Level2 from './pages/adult/Level2';
import Level3 from './pages/adult/Level3';
import { UserProvider } from './context/UserContext';

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
    <UserProvider>
    <BrowserRouter basename="/karo-language-app/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/adult-learning" element={<AdultLearning />} />
        <Route path="/adult-learning/level-1" element={<Level1 />} />
        <Route path="/adult-learning/level-2" element={<Level2 />} />
        <Route path="/adult-learning/level-3" element={<Level3 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
