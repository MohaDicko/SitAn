import { useState } from "react";
import { Typography } from "@material-tailwind/react";
import Slider from "react-slick";
import { Produit } from "./Produit";
// Assurez-vous que le chemin est correct

export default function NouvelleAnnonceListe({
  produits,
  title,
  see_more = true,
}) {
  const [filters, setFilters] = useState({});
  const [filteredProduits, setFilteredProduits] = useState(produits);

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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    const filtered = produits.filter((produit) => {
      // Appliquez vos critères de filtrage ici
      // Exemple : filtrer par prix minimum et maximum
      if (newFilters.priceMin && produit.prix < newFilters.priceMin)
        return false;
      if (newFilters.priceMax && produit.prix > newFilters.priceMax)
        return false;
      // Ajoutez d'autres critères de filtrage selon vos besoins
      return true;
    });
    setFilteredProduits(filtered);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <Typography variant="h5">{title}</Typography>
        {see_more ? (
          <a className="hover:underline">Voir plus d’annonces</a>
        ) : (
          ""
        )}
      </div>
      <Slider {...settings}>
        {filteredProduits.map((produit) => (
          <Produit
            key={produit.id}
            imageUrl={produit.imageUrl}
            title={produit.nom}
            prix={produit.prix}
            location={produit.localisation}
          />
        ))}
      </Slider>
    </div>
  );
}
