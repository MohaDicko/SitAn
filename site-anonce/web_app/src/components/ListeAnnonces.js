import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Pagination } from "./Pagination";
import { Produit } from "./Produit";
import { ProduitPremium } from "./ProduitPremium";

export default function ListeAnnonces() {
  let filteredProduits = [
    {
      id: 1,
      nom: "Mitsubishi L200 Diesel Manuelle 2021 à Marrakech",
      prix: "Non spécifié",
      localisation: "Marrakech, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://content.avito.ma/classifieds/images/10123923096?t=card",
    },
    {
      id: 2,
      nom: "Hyundai Tucson Diesel Automatique 2021 à Rabat",
      prix: "278 000 DH",
      localisation: "Rabat, Maroc",
      lien: "https://example.com",
      imageUrl: "https://www.zylinders.com/photos/Hyundai%20Tucson%202021.jpg",
    },
    {
      id: 3,
      nom: "Ford Focus Titanium 2017 Diesel",
      prix: "167 000 DH",
      localisation: "Meknès, Maroc",
      lien: "https://content.avito.ma/classifieds/images/10126883536?t=images",
      imageUrl: "https://i.redd.it/gyil2vavatf41.jpg",
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
      id: 6,
      nom: "Toyota Land Cruiser Diesel Automatique 2022 à Agadir",
      prix: "700 000 DH",
      localisation: "Agadir, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://tmoreautomachinery.com/wp-content/uploads/2022/06/prd-tmore-15.jpg",
    },
    {
      id: 7,
      nom: "Renault Clio Essence Manuelle 2018 à Fès",
      prix: "120 000 DH",
      localisation: "Fès, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://www.turbo.fr/sites/default/files/styles/content_img/public/2018-11/Clio%204%203.jpg?itok=T93Rj9vJ",
    },
    {
      id: 8,
      nom: "Peugeot 208 Diesel Manuelle 2019 à Oujda",
      prix: "130 000 DH",
      localisation: "Oujda, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://autoconseil.ma/storage/img/galery/autoconseil.ma-peugeot-208-231338_.jpg",
    },
    {
      id: 9,
      nom: "Dacia Duster Diesel Manuelle 2020 à Nador",
      prix: "160 000 DH",
      localisation: "Nador, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://www.moteur.ma/media/photos/neufs/resized/moteur.ma-dacia-duster-905859_.jpeg",
    },
   /*  {
      id: 10,
      nom: "Mercedes-Benz GLC Diesel Automatique 2021 à Kénitra",
      prix: "500 000 DH",
      localisation: "Kénitra, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://cdnmdj3lv0.execute-api.eu-west-3.amazonaws.com/prod/voptmblimg/presentationduvehicule1_expertise_1727719107065_301926",
    },
    {
      id: 11,
      nom: "BMW Série 3 Diesel Automatique 2021 à Tanger",
      prix: "600 000 DH",
      localisation: "Tanger, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://content.avito.ma/classifieds/images/10123547772?t=images",
    },
    {
      id: 12,
      nom: "Audi Q3 Diesel Automatique 2020 à Casablanca",
      prix: "550 000 DH",
      localisation: "Casablanca, Maroc",
      lien: "https://example.com",
      imageUrl: "https://www.audi.ma/content/dam/nemo/models/q3/q3/my-2021/1920x1080-gallery/1920x1080-audi-q3-virtual-cockpit-my2021-181018_1.jpg?utm_medium=undefined&utm_source=undefined&utm_campaign=undefined",
    },
    {
      id: 13,
      nom: "Nissan Qashqai Essence Automatique 2022 à Marrakech",
      prix: "320 000 DH",
      localisation: "Marrakech, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://www.moteur.ma/media/photos/neufs/resized/moteur.ma-nissan-qashqai-314593_.jpg",
    },
    {
      id: 14,
      nom: "Jeep Compass Diesel Manuelle 2019 à Fès",
      prix: "250 000 DH",
      localisation: "Fès, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://d1es0atrrt5rcy.cloudfront.net/fit-in/1024x768/filters:quality(70)/kavo/originals/PMW7yHqhv0vKWAMdoJKWO3qobEcUqjLHQf4Icp6E.jpg",
    },
    {
      id: 15,
      nom: "Skoda Octavia Diesel Manuelle 2021 à Rabat",
      prix: "280 000 DH",
      localisation: "Rabat, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://globaloccaz.com/wp-content/uploads/2024/08/d716483f-caad-450f-aab9-a4bdb17bb6bd.jpeg.webp",
    },
    {
      id: 16,
      nom: "Citroën C3 Essence Manuelle 2020 à Meknès",
      prix: "150 000 DH",
      localisation: "Meknès, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://takecars.com/media/thumbs/cars/2023/09/5fb482e3-2508-4177-aef6-9224bf01ece6.jpg.325x265_q85_crop-30%2C50.jpg.webp",
    },
    {
      id: 17,
      nom: "Kia Sportage Diesel Automatique 2022 à Agadir",
      prix: "360 000 DH",
      localisation: "Agadir, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://www.wandaloo.com/files/2022/09/kia-maroc-devoile-la-cinquieme-generation-du-kia-sportage-2022-suv-compact-front.jpg",
    },
    {
      id: 18,
      nom: "Mazda CX-5 Essence Automatique 2021 à Tanger",
      prix: "420 000 DH",
      localisation: "Tanger, Maroc",
      lien: "https://example.com",
      imageUrl:
        "https://cloud.leparking.fr/2024/06/12/00/42/mazda-cx-5-2021-2-0l-skyactiv-g-165-ch-4x2-elegance_9103686185.jpg",
    }, */
  ];

  let premiums = [
    {
      id: 1,
      nom: "Land Rover Range Rover Diesel Automatique 2022 à Rabat",
      prix: "1 200 000 DH",
      localisation: "Rabat, Maroc",
      lien: "https://example.com",
      imageUrl: "https://carmax.ma/wp-content/uploads/2015/12/IMG_0757-min.jpg",
    },
    {
      id: 2,
      nom: "Mercedes-Benz GLC Diesel Automatique 2021 à Kénitra",
      prix: "500 000 DH",
      localisation: "Kénitra, Maroc",
      lien: "https://example.com",
      imageUrl: "https://cdn.autohaus.de/thumb_1200x675/media/5172/mercedes-glc-coupe-5.jpg",
    },
  ];

  return (
    <div className="my-4">
      <div className="w-100 mb-4">
        <Typography variant="small">200000 résultats</Typography>
        <Typography variant="h5">
          Annonces dans immobiliers : Mali/Bamako
        </Typography>
      </div>
      <div class="flex flex-col md:flex-row lg:flex-row">
        <div class="lg:w-3/4 md:w-2/3 w-full pr-2 order-2 md:order-none lg:order-none">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 liste_annonces">
            {filteredProduits.map((produit) => (
              <Produit
                key={produit.id}
                imageUrl={produit.imageUrl}
                title={produit.nom}
                prix={produit.prix}
                location={produit.localisation}
              />
            ))}
          </div>
          <Pagination></Pagination>
        </div>
        <div class="lg:w-1/4 md:w-1/3 w-full  order-1 md:order-none lg:order-none mb-4 lg:mb-0  ">
          <div className="lg:sticky lg:top-[5rem] md:sticky md:top-[4rem]">
            {premiums.map((produit) => (
              <ProduitPremium
              
                key={produit.id}
                imageUrl={produit.imageUrl}
                title={produit.nom}
                prix={produit.prix}
                location={produit.localisation}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
