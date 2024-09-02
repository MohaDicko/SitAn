import React from "react";
import { Avatar, Button, Card, CardBody, Typography } from "@material-tailwind/react";

export function DetailAnnonceCard() {
  const data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
  ];

  const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  );


  const customers = [
    {
      name: "Tania Andrew",
      email: "tania@gmail.com",
      price: 400,
      image:
        "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    },
    {
      name: "John Micheal",
      email: "john@gmail.com",
      price: 420,
      image:
        "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
    },
    {
      name: "Alexa Liras",
      email: "alexa@gmail.com",
      price: 340,
      image:
        "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    },
    {
      name: "Richard Gran",
      email: "richard@gmail.com",
      price: 520,
      image:
        "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    },
    {
      name: "Micheal Levi",
      email: "levi@gmail.com",
      price: 780,
      image:
        "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    },
  ];

  return (
    <Card className="mb-8">
      <CardBody>
      <div >
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
            Titre Annonces
          </Typography>
          <Typography

            variant="small"
            color="blue"
            className="font-bold"
          >
            500 DH
          </Typography>
        </div>

        <Typography variant="small" color="gray">
                Il y'a 5mn
              </Typography>

      

      </div>
      <div className="divide-y divide-gray-500">
        
        <div

          className="flex items-center justify-between pb-3 pt-3 last:pb-0"
        >
          <div className="flex items-center gap-x-3">
            <Avatar size="sm" src={'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg'} />
            <div>
              <Typography color="blue-gray" variant="h6">
                Nom annonceur
              </Typography>
              <Typography variant="small" color="gray">
                Localisation
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
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </Typography>
        </div>
    </div>
      </CardBody>
    </Card>

  );
}