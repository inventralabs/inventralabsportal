import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter  } from  "react-router-dom";
import VisitorCounter from './components/VisitorCounter';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Products from './components/products';
import Careers from './components/careers';
import Contact from './components/contact';
import Footer from './components/footer';


export default function App() {
  return (
    <HashRouter>
      <Header />
      <div style={{ padding: "20px" }}>
        <Routes>              
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Contact" element={<Contact />} />
           <Route path="*" element={<Home />} />
        </Routes>
      </div>
          <Footer/>
    </HashRouter>
  );
}