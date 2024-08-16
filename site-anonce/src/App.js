import React from 'react';

import SearchBar from "./components/layout/header/SearchBar";
import { TopNavbar } from "./components/layout/header/TopNavbar";
import VendreBtn from "./components/layout/header/VendreBtn";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Footer } from './components/Footer';
import  ListeProduit from './components/ListeProduit';
import ListCategorie from './components/ListCategorie';

export default function App() {
  
  

  return (
    <>
      <TopNavbar />
      <SearchBar />
      <VendreBtn />
      <ListCategorie />
      <ListeProduit></ListeProduit>
      <Footer></Footer>
    </>
  );
}