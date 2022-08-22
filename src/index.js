import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, WebSolution, MobileSolution, CustomSolution, BusinessIntelligence, ProductSolution, SimanisApp, OranyeApp, LemonApp, EasybiApp, ManageService } from "./pages/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/websolution" element={<WebSolution />} />
      <Route path="/mobilesolution" element={<MobileSolution />} />
      <Route path="/customsolution" element={<CustomSolution />} />
      <Route path="/bisolution" element={<BusinessIntelligence />} />
      <Route path="/productsolution" element={<ProductSolution />} />
      <Route path="/simanisapp" element={<SimanisApp />} />
      <Route path="/oranyeapp" element={<OranyeApp />} />
      <Route path="/lemonapp" element={<LemonApp />} />
      <Route path="/easybiapp" element={<EasybiApp />} />
      <Route path="/manageservice" element={<ManageService />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
