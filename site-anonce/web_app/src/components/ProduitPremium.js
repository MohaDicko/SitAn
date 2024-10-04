import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

export function ProduitPremium({ title, location, prix, imageUrl }) {
  return (
    <Card className="max-w-[24rem] m-2 mb-4 overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          style={{
            width: "auto",
            height: "170px",
          }}
          src={imageUrl}
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody className="h-[11rem]">
        <div className="mb-3 flex flex-col justify-between h-full">
          <div className="flex items-center mb-2 justify-between">
            <Typography
              className="font-medium  text-yellow-900"
              variant="small"
            >
              Premium
            </Typography>
            <Typography className="flex text-yellow-900 items-center gap-1.5 font-normal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-900"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
          </div>
          <p className="antialiased tracking-normal font-sans text-md leading-snug text-blue-gray-900 font-medium line-clamp-2">
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
