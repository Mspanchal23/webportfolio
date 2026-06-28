import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Apply saved theme before first paint to avoid a flash
const savedTheme = localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
