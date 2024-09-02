import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Typography } from '@material-tailwind/react';
import NouvelleAnnonceListe from './NouvelleAnnonceListe';

export default function NouvelleAnnonce() {
  const produits = [
    {
      id: 1,
      nom: "UI/UX Review UX design YU YUej ejheuheu euhjeneu",
      prix: "50€",
      localisation: "Barcelone, Espagne",
      lien: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    // Ajoutez ici les autres produits (total de 12 produits)
    {
      id: 2,
      nom: "Product 2",
      prix: "60€",
      localisation: "Paris, France",
      lien: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      nom: "Product 3",
      prix: "70€",
      localisation: "Londres, Royaume-Uni",
      lien: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      nom: "Product 4",
      prix: "80€",
      localisation: "Berlin, Allemagne",
      lien: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      nom: "Product 5",
      prix: "90€",
      localisation: "Madrid, Espagne",
      lien: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      nom: "Product 6",
      prix: "100€",
      localisation: "Rome, Italie",
      lien: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      nom: "Product 7",
      prix: "110€",
      localisation: "Lisbonne, Portugal",
      lien: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      nom: "Product 8",
      prix: "120€",
      localisation: "Amsterdam, Pays-Bas",
      lien: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      nom: "Product 9",
      prix: "130€",
      localisation: "Bruxelles, Belgique",
      lien: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      nom: "Product 10",
      prix: "140€",
      localisation: "Vienne, Autriche",
      lien: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      nom: "Product 11",
      prix: "150€",
      localisation: "Prague, République Tchèque",
      lien: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 12,
      nom: "Product 12",
      prix: "160€",
      localisation: "Budapest, Hongrie",
      lien: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="w-full  mb-12 ">
      <Typography className="mb-4" variant="h4">
        Nouvelles annonces
      </Typography>

      
    <NouvelleAnnonceListe  title={'Location de voiture'} produits={produits} />

    
    <NouvelleAnnonceListe title={'Ventes immobilières'} produits={produits} />


    <NouvelleAnnonceListe title={'Montres & Bijoux'} produits={produits} />



    
      
    </div>
  );
}