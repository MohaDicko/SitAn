import React from 'react';




import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import VendreBtn from '../components/layout/header/VendreBtn';
import ListCategorie from '../components/ListCategorie';
import NouvelleAnnonce from '../components/NouvelleAnnonce';
import SearchBar from '../components/layout/header/SearchBar';


export default function HomePage() {
  
  return (
    <>
    
        <SearchBar></SearchBar>
        <VendreBtn />
        <ListCategorie />
        <NouvelleAnnonce></NouvelleAnnonce>
       
    
    </>
  );
}