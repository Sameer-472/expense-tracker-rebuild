import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
import swDev from './service-worker';




ReactDOM.render(
  <React.StrictMode>
  <div className="container">
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
swDev();
  
// ServiceWorker.register();