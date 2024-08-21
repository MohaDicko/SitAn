import React from "react";

import FiltreCategorieImmobilier from "../components/FiltreCategorieImmobilier";
import { useParams } from "react-router-dom";
import SearchBar from "../components/layout/header/SearchBar";
import {
  Breadcrumbs,
  
  Typography,
} from "@material-tailwind/react";
import ListeAnnonces from "../components/ListeAnnonces";


export default function TravailPage() {
  let params = useParams();
  console.log("travail sous categorie", params.categorie);

  return (
    <>
      <SearchBar search_categorie={`travail_${params.categorie ?? ""}`} />
      <Breadcrumbs className="my-2">
        <a href="/" className="opacity-60">
          Accueil
        </a>
        <a href="/travail" className={params.categorie ? "opacity-60" : ""}>
          Immobiliers
        </a>
        {params.categorie ? (
          <a href={`/travail/${params.categorie}`}>{params.categorie}</a>
        ) : (
          ""
        )}
      </Breadcrumbs>
      <FiltreCategorieImmobilier></FiltreCategorieImmobilier>
      <ListeAnnonces />
    </>
  );
}
