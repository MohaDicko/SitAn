import Slider from "react-slick";
import Categorie from "./Categorie";
import { Typography } from "@material-tailwind/react";
import { HomeIcon, TruckIcon, ComputerDesktopIcon, BuildingStorefrontIcon, BriefcaseIcon } from "@heroicons/react/24/solid";

export default function ListCategorie() {

    const categories = [
      {
        title: 'Immobilier', icon: (<HomeIcon className="h-12 w-12 text-blue-500 mb-4" />)
      },
      {
        title: 'Automobile', icon: (<TruckIcon className="h-12 w-12 text-green-500 mb-4" />)
      },
      {
        title: 'Electronique', icon: (<ComputerDesktopIcon className="h-12 w-12 text-yellow-500 mb-4" />)
      },
      {
        title: 'Marche', icon: (<BuildingStorefrontIcon className="h-12 w-12 text-brown-500 mb-4" />)
      },
      {
        title: 'Travail', icon: (<BriefcaseIcon className="h-12 w-12 text-red-500 mb-4" />)
      },
     
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };


      return (<div className="w-full mt-6 ">
        <Typography className="mb-2" variant="h4">
          Que cherchez-vous ?
        </Typography>
        <Slider {...settings}>
          {categories.map((cat, index) => (
            <div key={index} className="p-2">
              <Categorie title={cat.title} icon={cat.icon} />
            </div>
          ))}
        </Slider>
        
      </div>)

    }