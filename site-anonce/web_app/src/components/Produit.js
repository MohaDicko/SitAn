import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
   
  export function Produit({title, location, prix, imageUrl}) {
    return (
        <Card className="m-2 max-w-[26rem] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <img
            src={imageUrl}
            alt="ui/ux review check"
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        </CardHeader>
        <CardBody className="h-[9rem]">
          <div className="mb-3 flex flex-col justify-between h-full">
            <p  className="antialiased tracking-normal font-sans text-md leading-snug text-blue-gray-900 font-medium line-clamp-2">
              {title}
            </p>
      
            <div>
              <Typography variant="h6">Prix: {prix}</Typography>
              <Typography variant="small">{location}</Typography>
            </div>
          </div>
        </CardBody>
      </Card>
      
    );
  }