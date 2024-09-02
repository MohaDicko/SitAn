import { Button } from "@material-tailwind/react";




const FiltreCategorieImmobilier = () => {
  

  return (
    <>
       <div className="flex w-max gap-4 my-2">
      <Button variant="outlined">Prix</Button>
      <Button variant="outlined">Surface habitable</Button>
      <Button>Filtre</Button>
    </div>
    </>
  );
};

export default FiltreCategorieImmobilier;