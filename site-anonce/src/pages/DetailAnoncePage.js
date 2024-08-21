import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import { DetailAnnonceCard } from "../components/DetailAnnonceCard";

export function DetailAnnoncePage() {
  
    return (
        <>
      <Breadcrumbs className="my-2">
        <a href="/" className="opacity-60">
          Accueil
        </a>
        <a href="/immobiliers">
          Immobiliers
        </a>
       
     
      </Breadcrumbs>
      <div class="flex flex-col md:flex-row lg:flex-row">
        <div class="lg:w-3/4 md:w-2/3 w-full pr-2 order-2 md:order-none lg:order-none">
          
        <DetailAnnonceCard></DetailAnnonceCard>

        </div>
        <div class="lg:w-1/4 md:w-1/3 w-full bg-orange-400 order-1 md:order-none lg:order-none mb-4 lg:mb-0  ">
           
        </div>
      </div>

  
    

        </>



    );
  
}