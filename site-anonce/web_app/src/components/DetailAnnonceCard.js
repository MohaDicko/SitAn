import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function DetailAnnonceCard() {
  const data = [
    {
      imgelink:
        "https://content.avito.ma/classifieds/images/10123923096?t=card",
    },
    {
      imgelink:
        "https://www.mitsubishi-motors.ma/sites/mitsubishi/files/2021-03/pre_6_2.jpg",
    },
    {
      imgelink:
        "https://www.mitsubishi-motors.ma/sites/mitsubishi/files/styles/large/public/2021-03/pre_4.jpg?itok=JMC8Qw9C",
    },
    {
      imgelink:
        "https://cloud.leparking.fr/2024/08/23/00/34/mitsubishi-l200-mitsubishi-l200-sportero-2-5-superlujo-noir_9155448029.jpg",
    },
  ];

  const [active, setActive] = React.useState(
    "https://cloud.leparking.fr/2024/08/23/00/34/mitsubishi-l200-mitsubishi-l200-sportero-2-5-superlujo-noir_9155448029.jpg"
  );

  return (
    <Card className="mb-8">
      <CardBody>
        <div>
          <div className="grid mb-12 gap-4">
            <div>
              <img
                className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                src={active}
                alt=""
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              {data.map(({ imgelink }, index) => (
                <div key={index}>
                  <img
                    onClick={() => setActive(imgelink)}
                    src={imgelink}
                    className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                    alt="gallery-image"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <Typography variant="h5" color="blue-gray" className="">
                Mitsubishi L200 Diesel Manuelle 2021 à Marrakech
              </Typography>
              <Typography variant="small" color="blue" className="font-bold">
                Prix: non spécifié
              </Typography>
            </div>

            <Typography variant="small" color="gray">
              Il y'a 5mn
            </Typography>
          </div>
          <div className="divide-y divide-gray-500">
            <div className="flex items-center justify-between pb-3 pt-3 last:pb-0">
              <div className="flex items-center gap-x-3">
                <Avatar
                  size="sm"
                  src={
                    "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg"
                  }
                />
                <div>
                  <Typography color="blue-gray" variant="h6">
                    Ahmed Benkadda
                  </Typography>
                  <Typography variant="small" color="gray">
                    Marrakech, Maroc
                  </Typography>
                </div>
              </div>
              <div>
                <Button className="mr-2">WhatsApp</Button>
                <Button>Contacter l'annonceur</Button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Typography color="gray" variant="h6">
              Description
            </Typography>
            <Typography color="gray">
              Bonjour à tous, je mets en vente mon Mitsubishi L200 2021, modèle
              diesel et boîte manuelle. C’est un véhicule parfait pour ceux qui
              recherchent un pick-up robuste et fiable. Première main, très bien
              entretenu, et prêt à partir à l’aventure ! Idéal pour le transport
              de charges ou pour des escapades hors route. Il dispose de toutes
              les options nécessaires pour un confort optimal.
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
