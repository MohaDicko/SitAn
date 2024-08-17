import { Typography } from "@material-tailwind/react";
import Slider from "react-slick";
import { Produit } from "./Produit";



export default function  NouvelleAnnonceListe({produits, title}) {
    
    
    const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            
            
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
    <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
        <Typography  variant="h5">{title}</Typography>
        <a  className="hover:underline">
          Voir plus d’annonces
        </a>
      </div>
        <Slider {...settings}>
            {produits.map((produit) => (
            <Produit  key={produit.id} imageUrl={produit.imageUrl} title={produit.nom} prix={produit.prix} location={produit.localisation} />
            ))}
      </Slider>
    </div>
      
    )
}