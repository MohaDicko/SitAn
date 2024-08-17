import {
    Card,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  export default function VendreBtn() {
    return (
      <Card className="mt-3 w-full  bg-brown-500">
        <CardBody className="flex flex-col md:flex-row md:items-center gap-4 text-white">
          <div className="flex-1">
            <Typography variant="h5" color="white" className="mb-2 md:mb-0">
              Commencez à gagner
            </Typography>
            <Typography className="mb-4">
              Donnez une seconde chance à vos biens d’occasion : vendez immédiatement ce que vous n’utilisez plus.
            </Typography>
          </div>
          <Button className="mt-4 md:mt-0">Deposer votre annonce</Button>
        </CardBody>
      </Card>
    );
  }