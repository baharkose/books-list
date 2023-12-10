import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />
  
);

