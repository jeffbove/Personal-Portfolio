import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import P1 from './pages/project1Page'
import P2 from './pages/project2Page'
import P3 from './pages/project3Page'
import P4 from './pages/project4Page'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App/>} />
      <Route path="/P1" element={<P1/>} />
      <Route path="/P2" element={<P2/>} />
      <Route path="/P3" element={<P3/>} />
      <Route path="/P4" element={<P4/>} />
 </Routes>
</BrowserRouter>
);

