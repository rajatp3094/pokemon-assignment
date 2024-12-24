import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-100 pt-1  w-full">
      <App />
    </div>
  </React.StrictMode>
);

