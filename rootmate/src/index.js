import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Wraper } from 'react-router-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Wraper future={{
    v7_relativeSplatPath: true,
  }}>
     <App />
  </Wraper>
    
  </React.StrictMode>
);
