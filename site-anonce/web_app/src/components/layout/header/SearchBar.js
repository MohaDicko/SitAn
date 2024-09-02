import React from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

export default function SearchBar({search_categorie}) {
  return ( 
    <Card className="">
      <CardBody>
        <form className=" flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Search
            </Typography>
            <Input
              type="text"
              placeholder="Search"
             
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="flex-1">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Categories
            </Typography>
            <Input
             
              icon={
                <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
              }
              value={search_categorie}
              placeholder="Categories"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <div className="flex-1">
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Ou?
            </Typography>
            <Input
              maxLength={19}
              icon={
                <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
              }
              placeholder="Ou?"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button size="lg" className="mt-4 md:mt-0">
            Rechercher
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}