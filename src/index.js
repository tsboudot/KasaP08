import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApptPage from './Components/ApptPage';
import { ApptProvider } from "./Components/context/ApptContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApptProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/flat/:id" element={<ApptPage />} />
          <Route path="/about" element={<h1>Ceci est un about</h1>} />
          <Route path="*" element={<h1>404 Not found</h1>} />
        </Routes>
      </Router>
    </ApptProvider>
  </React.StrictMode>
);
