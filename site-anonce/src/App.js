import React from 'react';

import SearchBar from "./components/layout/header/SearchBar";
import { TopNavbar } from "./components/layout/header/TopNavbar";
import VendreBtn from "./components/layout/header/VendreBtn";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Footer } from './components/Footer';
import  NouvelleAnnonce from './components/NouvelleAnnonce';
import ListCategorie from './components/ListCategorie';

export default function App() {
  
  

  return (
    <>
      <TopNavbar />
      <div className="w-full max-w-screen-xl mx-auto">
      <SearchBar />
      <VendreBtn />
      <ListCategorie />
      <NouvelleAnnonce></NouvelleAnnonce>
        </div>
      

     
      <Footer></Footer>
    </>
  );
}