import React from 'react';

import SearchBar from "./components/layout/header/SearchBar";
import { TopNavbar } from "./components/layout/header/TopNavbar";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Footer } from './components/Footer';
import FiltreDynamique from '/pages/FiltreDynamique';



export default function ListCategoriePage() {
  
  

  return (
    <>
      <TopNavbar />
      <div className="w-full max-w-screen-xl mx-auto">
      <SearchBar />
      <FiltreDynamique></FiltreDynamique>
        </div>
        
      <Footer></Footer>
    </>
  );
}