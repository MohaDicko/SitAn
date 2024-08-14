import React from 'react';
import Categorie from "./components/Categorie";
import SearchBar from "./components/layout/header/SearchBar";
import { TopNavbar } from "./components/layout/header/TopNavbar";
import VendreBtn from "./components/layout/header/VendreBtn";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Footer } from './components/Footer';
import  ListeProduit from './components/ListeProduit';

export default function App() {
  
  const categories = [
    "LOCATION DE VACANCES ", "VOITURE D'OCCASION", "VENTE IMMOBILIERES", "LOCATION IMMOBILIERE", "MAISON ET JARDIN", "INFORMATIQUE ET MULTIMEDIA", 
    "MOTO", "HABILLEMENT ET MODE"
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <TopNavbar />
      <SearchBar />
      <VendreBtn />
      <div className="w-full max-w-screen-lg mx-auto">
        <Slider {...settings}>
          {categories.map((title, index) => (
            <div key={index} className="p-2">
              <Categorie title={title} />
            </div>
          ))}
        </Slider>
        
      </div>
      <ListeProduit></ListeProduit>
      <Footer></Footer>
    </>
  );
}