import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApptPage from './Components/ApptPage/ApptPage';
import { ApptProvider } from "./Components/context/ApptContext";
import About from './Components/AboutPage/About';
import Error from './Components/Error';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApptProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/flat/:id" element={<ApptPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ApptProvider>
  </React.StrictMode>
);
