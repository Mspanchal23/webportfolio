import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 2000
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);
