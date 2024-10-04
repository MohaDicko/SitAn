import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@material-tailwind/react";
import NouvelleAnnonceListe from "./NouvelleAnnonceListe";

export default function NouvelleAnnonce() {
  const produits_voitures = [
    {
      id: 1,
      nom: "Mitsubishi L200 Diesel Manuelle 2021 à Marrakech",
      prix: "Non spécifié",
      localisation: "Marrakech, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://content.avito.ma/classifieds/images/10123923096?t=card",
    },
    // Ajoutez ici les autres produits (total de 12 produits)
    {
      id: 2,
      nom: "Hyundai Tucson Diesel Automatique 2021 à Rabat",
      prix: "278 000 DH",
      localisation: "Rabat, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://www.zylinders.com/photos/Hyundai%20Tucson%202021.jpg",
    },
    {
      id: 3,
      nom: "Ford Focus Titanium 2017 Diesel",
      prix: "167 000 DH",
      localisation: "Meknès, Maroc",
      lien: "https://content.avito.ma/classifieds/images/10126883536?t=images",
      imageUrl:
        "https://i.redd.it/gyil2vavatf41.jpg",
    },
    {
      id: 5,
      nom: "Volkswagen Tiguan Diesel Automatique 2021 à Tanger",
      prix: "Non spécifié",
      localisation: "Tanger, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://cdnmdj3lv0.execute-api.eu-west-3.amazonaws.com/prod/voptmblimgdtlg/9xEcTljwaIyHOXESKPfLhYj2arqHsvdLIfVGIJf0",
    },
    {
      id: 4,
      nom: "Volkswagen Polo Diesel Manuelle 2004 à Casablanca",
      prix: "55 000 DH",
      localisation: "Casablanca, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/f/f0/2011_Volkswagen_Polo_S_60_1.2_Front.jpg",
    },
    
  ];

  const produits_immo = [
    {
      id: 1,
      nom: "Appartement neuf 105 m² à Ain sebaa",
      prix: "1 069 500 DH",
      localisation: "Casablanca, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://medias.maisonsetappartements.fr/pict/f400x267/3/8/6/9/ext_0_3869748.jpg?t=1725323189",
    },
    // Ajoutez ici les autres produits (total de 12 produits)
    {
      id: 2,
      nom: "Appartement Neuf a RTE D'imouzzar",
      prix: "7 270 DH",
      localisation: "Fes, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://www.century21casa.immo/wp-content/uploads/2022/04/photo_220f71278b13a580be225071122f500b.jpg",
    },
    {
      id: 3,
      nom: "Appartement à Marina Blanca",
      prix: "1 700 000 DH",
      localisation: "Dar Bouazza, Maroc",
      lien: "https://content.avito.ma/classifieds/images/10126883536?t=images",
      imageUrl:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/457429233.jpg?k=a4cbd50e90ca58d28f6e854cb67ef26c051e37429f0f7f61a3d79492ed1ca376&o=&hp=1",
    },
    {
      id: 4,
      nom: "Appartement à vendre 53 m² à errahma sans meubles",
      prix: "280 000 DH",
      localisation: "Casablanca, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/318125746.jpg?k=069b1ed06002a47bd68453413f2587fff5db1290e539c5bbb8d3534637b499a4&o=&hp=1",
    },
    {
      id: 5,
      nom: "Appartement à vendre 51 m² à côté de gare TGV",
      prix: "24 000 DH",
      localisation: "Tanger, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://content.avito.ma/classifieds/images/10118181690?t=card",
    },
  ];


  const produits_bijou = [
    {
      id: 1,
      nom: "Montre Santos Cartier CA3215",
      prix: "Non spécifié",
      localisation: "Casablanca, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://content.avito.ma/classifieds/images/10126875712?t=card",
    },
    {
      id: 1,
      nom: "Montre Homme Bulgari BV5644",
      prix: "Non spécifié",
      localisation: "Casablanca, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://content.avito.ma/classifieds/images/10126875680?t=card",
    },
    {
      id: 3,
      nom: "khewatem cadeaux ziyada",
      prix: "Non spécifié",
      localisation: "Dar Bouazza, Maroc",
      lien: "https://content.avito.ma/classifieds/images/10126883536?t=images",
      imageUrl:
        "https://img.freepik.com/photos-premium/coffret-cadeau-bague-fiancailles-or-diamant-fond-pastel-rose-concept-romantique-mariage_978921-4814.jpg",
    },
    {
      id: 4,
      nom: "Vend belle montre MICHAEL KORS",
      prix: "2 699 DH",
      localisation: "Casablanca, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://content.avito.ma/classifieds/images/10123440253?t=card",
    },
    {
      id: 5,
      nom: "Très belle montre rolex entièrement gravée *",
      prix: "850 DH",
      localisation: "Tanger, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://content.avito.ma/classifieds/images/10126353706?t=card",
    },
  ];

  return (
    <div className="w-full  mb-12 ">
      <Typography className="mb-4" variant="h4">
        Nouvelles annonces
      </Typography>

      <NouvelleAnnonceListe title={"Location de voiture"} produits={produits_voitures} />

      <NouvelleAnnonceListe title={"Ventes immobilières"} produits={produits_immo} />

      <NouvelleAnnonceListe title={"Montres & Bijoux"} produits={produits_bijou} />
    </div>
  );
}
