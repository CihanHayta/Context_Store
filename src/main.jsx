import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {ProuductProvider} from './context/ProuductContext.jsx';
import BasketProvider from './context/basketContext.jsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BasketProvider>  
    <ProuductProvider>
    <App />
    </ProuductProvider>
    </BasketProvider>
    <ToastContainer autoClose={2500} position="top-left" />

  </StrictMode>
)
