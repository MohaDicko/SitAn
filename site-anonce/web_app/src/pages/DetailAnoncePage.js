import { Breadcrumbs } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import React from "react";
import { DetailAnnonceCard } from "../components/DetailAnnonceCard";
import NouvelleAnnonceListe from "../components/NouvelleAnnonceListe";

export function DetailAnnoncePage() {
  let recommandations = [
    {
      id: 1,
      nom: "Toyota Hilux Diesel Manuelle 2020 à Casablanca",
      prix: "340 000 DH",
      localisation: "Casablanca, Maroc",
      description:
        "Si tu aimes les 4x4 robustes comme le Mitsubishi L200, le Toyota Hilux 2020 est une excellente alternative. Modèle diesel, très fiable, idéal pour les terrains difficiles et les aventures tout-terrain.",
      lien: "https://example.com",
      imageUrl: "https://img.linemedia.com/img/s/automobile-pick-up-Toyota-Hilux-2-4-D-4D-DC-Executive---1720625084494354045_common--24071018244029776300.jpg",
    },
    {
      id: 2,
      nom: "Nissan Navara Diesel Automatique 2021 à Rabat",
      prix: "375 000 DH",
      localisation: "Rabat, Maroc",
      description:
        "Pour un pick-up tout aussi performant mais en version automatique, le Nissan Navara 2021 pourrait te plaire. Diesel, puissant et confortable, il est prêt à affronter tous types de routes avec style.",
      lien: "https://example.com",
      imageUrl: "https://bluesky.cdn.imgeng.in/cogstock-images/1fa2a9e4-9dcd-4707-99d7-a93c91952ef5.jpg?imgeng=/w_1200/",
    },
    
    {
      id: 4,
      nom: "Isuzu D-Max Diesel Manuelle 2021 à Tanger",
      prix: "350 000 DH",
      localisation: "Tanger, Maroc",
      description:
        "Envie de découvrir un autre pick-up fiable et performant ? L’Isuzu D-Max 2021 est un excellent choix. Moteur diesel, boîte manuelle, il est reconnu pour sa durabilité et ses performances en tout-terrain.",
      lien: "https://example.com",
      imageUrl: "https://www.moteur.ma/media/photos/neufs/resized/moteur.ma-isuzu-d-max-359769_.jpg",
    },
    {
      id: 5,
      nom: "Volkswagen Amarok Diesel Automatique 2020 à Fès",
      prix: "390 000 DH",
      localisation: "Fès, Maroc",
      description:
        "Si tu cherches un pick-up alliant luxe et puissance, le Volkswagen Amarok 2020 est une belle alternative. Véhicule diesel avec boîte automatique, il offre un confort haut de gamme tout en restant ultra performant.",
      lien: "https://example.com",
      imageUrl: "https://www.carexpert.com.au/app/uploads/2020/09/2020-Volkswagen-Amarok-TDI550-Sportline-01-DSC00079.jpg",
    },
    {
      id: 3,
      nom: "Ford Ranger Diesel Manuelle 2020 à Agadir",
      prix: "320 000 DH",
      localisation: "Agadir, Maroc",
      description:
        "Tu cherches un véhicule similaire au Mitsubishi L200 avec un design moderne ? Le Ford Ranger 2020 est parfait pour toi. Puissance, robustesse et confort, tout y est.",
      lien: "https://example.com",
      imageUrl: "https://transportmedia.be/wp-content/uploads/2019/09/ford-ranger-1-1024x438-1024x438.jpg",
    },
  ];

  return (
    <>
      <Breadcrumbs className="my-2">
        <a href="/" className="opacity-60">
          Accueil
        </a>
        <a href="/automobile">Automobile</a>
      </Breadcrumbs>
      <div class="flex flex-col md:flex-row lg:flex-row">
        <div class="lg:w-3/4 md:w-2/3 w-full pr-2 order-2 md:order-none lg:order-none">
          <DetailAnnonceCard></DetailAnnonceCard>
        </div>
        <div class="lg:w-1/4 md:w-1/3 w-full  order-1 md:order-none lg:order-none mb-4 lg:mb-0  ">
          <div className="lg:sticky lg:top-[5rem] md:sticky md:top-[4rem]">
            <div className="m-2 mb-4">
              <img
                src="https://corsicacom.cc/wp-content/uploads/2017/07/img_2831.jpg"
                alt="ui/ux review check"
              />
            </div>
            <div className="m-2 mb-4">
              <img
                src="https://new-game-plus.fr/wp-content/uploads/2020/07/Illustration-Publicite.jpg"
                alt="ui/ux review check"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 ">
        <NouvelleAnnonceListe
          title={"Recommandations"}
          see_more={false}
          produits={recommandations}
        />
      </div>
    </>
  );
}
