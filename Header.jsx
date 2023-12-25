import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import FurnitureSection from './Furnituresection';
import Aboutsection from './Aboutsection';
import SliderSection from './Slidersection';
import Blog from './Blog';
import Clientsection from './Clientsection';


const Header = () => {
  return (
    <>
      <Router>
      
        
        <div className="container-navbar">
        <span className='heading'> 
            Edgecut
          </span>

          <nav className='navbar'>
            <ul className='navbarssection'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/furniture">Furnitures</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contactus</Link></li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SliderSection />
               <FurnitureSection/>
               <Aboutsection/>
               <Blog/>
               
              </>
            }
          />
          <Route path="/" element={<SliderSection/>} />
          <Route path="/furniture" element={<FurnitureSection />} />
          <Route path="/about" element={<Aboutsection />} />
          <Route path="/blog" element={<Blog/>} />
        
        </Routes>
      </Router>
    </>
  );
};

export default Header;
