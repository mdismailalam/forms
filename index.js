import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Portfolio from './Portfolio';
import reportWebVitals from './reportWebVitals';
import AdmitCard from './components/AdmitCard';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path='/home' element={<Home />} />
        <Route path="/admitcard" element={<AdmitCard />} />


      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
