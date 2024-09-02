import { Card, CardBody, Typography } from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid"; // Importer l'icône Star de la version 2

export default function Categorie({ title, icon, color }) {
  return (
    <Card className=" w-full max-w-xs mx-auto bg-gray-100">
      
      <CardBody className="flex flex-col items-center justify-center text-center p-6">
        {icon} {/* Utiliser l'icône Star */}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}