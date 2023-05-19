import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import NavMenu from './NavMenu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ScrollToTop from './ScrollToTop';


  
  
export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <ScrollToTop />


        <Routes>

          <Route index path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
            
          <Route path="/projects" element={<Projects />} />
          
          <Route path="/contact"element={ <Contact />} />
            
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
