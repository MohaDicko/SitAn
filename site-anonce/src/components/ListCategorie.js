import Slider from "react-slick";
import Categorie from "./Categorie";

export default function ListCategorie() {
  
    const categories = [
      "Immobilier ", "Automobile", "Electronique", "Marche", "Travail"
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
              dots: true
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


      return (<div className="w-full max-w-screen-lg mx-auto">
        <Slider {...settings}>
          {categories.map((title, index) => (
            <div key={index} className="p-2">
              <Categorie title={title} />
            </div>
          ))}
        </Slider>
        
      </div>)

    }