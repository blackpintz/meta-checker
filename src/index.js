import React from 'react';
import {hydrateRoot, createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const MyApp = (
  <BrowserRouter>
  <App />
</BrowserRouter>
)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, MyApp);
} else {
  root.render(MyApp);
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
