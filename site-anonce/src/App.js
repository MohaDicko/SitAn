import React from 'react';

import SearchBar from "./components/layout/header/SearchBar";
import { TopNavbar } from "./components/layout/header/TopNavbar";
import VendreBtn from "./components/layout/header/VendreBtn";


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Footer } from './components/Footer';
import  NouvelleAnnonce from './components/NouvelleAnnonce';
import ListCategorie from './components/ListCategorie';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/HomePage';
import ListCategoriePage from './pages/ImmobilierPage';
import ImmobilierPage from './pages/ImmobilierPage';
import { DetailAnnoncePage } from './pages/DetailAnoncePage';


export default function App() {
  
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/immobiliers/:categorie?" element={<ImmobilierPage   />} />
        <Route path="/detail_categories" element={<DetailAnnoncePage   />} />
        {/* <Route path="/automobiles/:categorie?" element={<AutomobilePage   />} />
        <Route path="/marches/:categorie?" element={<MarchePage   />} />
        <Route path="/travails/:categorie?" element={<TravailPage   />} />
        <Route path="/electroniques/:categorie?" element={<ElectroniquePage   />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
   
  );
}