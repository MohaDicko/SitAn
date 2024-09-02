import React from "react";

import FiltreCategorieImmobilier from "../components/FiltreCategorieImmobilier";
import { useParams } from "react-router-dom";
import SearchBar from "../components/layout/header/SearchBar";
import {
  Breadcrumbs,
  
  Typography,
} from "@material-tailwind/react";
import ListeAnnonces from "../components/ListeAnnonces";


export default function ElectroniquePage() {
  let params = useParams();
  console.log("electronique sous categorie", params.categorie);

  return (
    <>
      <SearchBar search_categorie={`electronique_${params.categorie ?? ""}`} />
      <Breadcrumbs className="my-2">
        <a href="/" className="opacity-60">
          Accueil
        </a>
        <a href="/electronique" className={params.categorie ? "opacity-60" : ""}>
          Immobiliers
        </a>
        {params.categorie ? (
          <a href={`/electronique/${params.categorie}`}>{params.categorie}</a>
        ) : (
          ""
        )}
      </Breadcrumbs>
      <FiltreCategorieImmobilier></FiltreCategorieImmobilier>
      <ListeAnnonces />
    </>
  );
}
