import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ListeProduit() {
  const produits = [
    {
      id: 1,
      nom: "UI/UX Review Check",
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <Slider {...settings}>
        {produits.map((produit) => (
          <a key={produit.id} href={produit.lien} className="block relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:shadow-lg transition-shadow duration-300">
           <div className="relative h-56 mx-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 flex items-center justify-center mt-5">
              <img
                src={produit.imageUrl}
                alt="card-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {produit.nom}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {produit.localisation}
              </p>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Prix: {produit.prix}
              </p>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
}