import React from 'react';




import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { TopNavbar } from './header/TopNavbar';
import SearchBar from './header/SearchBar';
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';


export default function Layout() {
  
  

  return (
    <>
    
      <TopNavbar />
        <div className="w-full max-w-screen-xl mx-auto">
          
            <Outlet />
        </div>
      <Footer></Footer>
    </>
  );
}