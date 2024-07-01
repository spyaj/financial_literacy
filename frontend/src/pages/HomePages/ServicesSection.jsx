import * as Images from "../../assets/images";
import * as Icons from "../../assets/icons";

const ServicesSection = () => {
  const backgroundImages = [Images.RecycleImg];
  const ProductDatas = [
    {
      id: 1,
      image: Images.ProductOne,
      title: "Jasmine Rice",
      rating: "4.5",
      description:
        "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
    },
    {
      id: 2,
      image: Images.ProductTwo,
      title: "Basmati Rice",
      rating: "4.9",
      description:
        "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
    },
    {
      id: 3,
      image: Images.ProductThree,
      title: "Pepper",
      rating: "3.9",
      description:
        "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
    },
    {
      id: 4,
      image: Images.ProductFour,
      title: "Vegetable",
      rating: "4.0",
      description:
        "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
    },
    {
      id: 5,
      image: Images.ProductFive,
      title: "Chickpea",
      rating: "4.5",
      description:
        "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
    },
    {
      id: 6,
      image: Images.ProductSix,
      title: "Tomato",
      rating: "3.5",
      description:
        "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
    },
    {
      id: 7,
      image: Images.ProductOne,
      title: "Jasmine Rice",
      rating: "4.5",
      description:
        "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
    },
    {
      id: 8,
      image: Images.ProductTwo,
      title: "Basmati Rice",
      rating: "4.9",
      description:
        "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
    }
  ];
  // const ServiceDatas = [
  //   {
  //     id: 1,
  //     image: Images.ProductOne,
  //     title: "Jasmine Rice",
  //     description:
  //       "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
  //   },
  //   {
  //     id: 2,
  //     image: Images.ProductTwo,
  //     title: "Basmati Rice",
  //     description:
  //       "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
  //   },
  //   {
  //     id: 3,
  //     image: Images.ProductThree,
  //     title: "Pepper",
  //     description:
  //       "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
  //   },
  //   {
  //     id: 4,
  //     image: Images.ProductFour,
  //     title: "Vegetable",
  //     description:
  //       "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
  //   },
  //   {
  //     id: 5,
  //     image: Images.ProductFive,
  //     title: "Chickpea",
  //     description:
  //       "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
  //   },
  //   {
  //     id: 6,
  //     image: Images.ProductSix,
  //     title: "Tomato",
  //     description:
  //       "Aenean cursus eu nunc veloce in hac platea dictumst. Morbi euismod ipsum id vitae set feugiat metus velit eget drac.",
  //   },
  // ];
  return (
    <>
      <div id="productssection" className="bg-gray-light">
        <div className="clipped-content-service">
          <div className="bg-gray">
            <div className="container pt-40 pb-32 px-8 grid gap-20">
              <div
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-duration="2000"
                className="flex flex-col items-center text-center gap-4"
              >
                <h1 className="text-black text-3xl md:text-5xl font-bold">
                  Comprehensive Products Available
                </h1>
                <span className="text-secondary-light text-sm font-light lg:font-normal">
                  --- PRODUCTS ---
                </span>
                <p className="text-gray-600 text-sm md:text-base mt-4">
                  Fusce porta lorem erat, sed faucibus enim convallis vitae. Sed
                  nec metus tellus. Nullam in magna vitae feugiat metus velit
                  eget sem.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="500"
                data-aos-duration="1000"
                className="grid gap-6 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  "
              >
                {ProductDatas.map((product) => (
                  <div
                    key={product.id}
                    className="grid gap-4 group relative transition-colors duration-300 ease-in-out  hover:text-white text-black hover:bg-primary bg-white border-b-4 border-secondary"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={product.image}
                        className="object-cover h-60 w-96 group-hover:scale-110 transition duration-300 ease-in-out"
                        alt=""
                      />
                    </div>
                    <hr />
                    <div className="px-4 pb-3 flex  items-center flex-col gap-2">
                      <p className=" text-lg font-semibold text-center">
                        {product.title}
                      </p>
                      <div className="flex text-sm gap-3 text-start ">
                        <Icons.Star className="h-5 w-5" />
                        <span className="text-gray-500 group-hover:text-gray">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Services data  */}
                {/* <div className="grid gap-4 group relative transition-colors duration-300 ease-in-out  border-b-4 border-secondary text-white hover:text-black bg-primary hover:bg-white px-4 py-4">
                  <p className=" text-lg font-semibold">Waste Collection</p>
                  <span className=" group-hover:text-gray-500">
                    Aenean cursus eu nunc veloce in hac platea dictumst. Morbi
                    euismod ipsum id vitae set feugiat metus velit eget drac.
                  </span>
                  <button className="flex gap-2 items-center font-semibold group-hover:text-blue-500">
                    READ MORE
                    <Icons.ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                {ServiceDatas.map((service) => (
                  <div
                    key={service.id}
                    className="grid gap-4 group relative transition-colors duration-300 ease-in-out  hover:text-white text-black hover:bg-primary bg-white px-4 border-b-4 border-secondary py-4"
                  >
                    <p className=" text-lg font-semibold">{service.title}</p>
                    <span className="text-gray-500 group-hover:text-gray">
                      {service.description}
                    </span>
                    <button className="flex gap-2 items-center font-semibold group-hover:text-white text-blue-500">
                      READ MORE
                      <Icons.ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-scroll bg-cover bg-center px-16 py-28 m-auto relative"
        style={{ backgroundImage: `url('${backgroundImages}')` }}
      >
        {/* Dark overlay with customizable opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75 z-10" />
        <div className="container">
          {/* Content container with white text color */}
          <div
            data-aos="fade-right"
            data-aos-offset="500"
            data-aos-duration="2000"
            className="flex flex-col items-start gap-4 lg:w-1/2 relative z-20"
          >
            <h1 className="text-white text-3xl md:text-5xl font-bold">
              Join The Green Movement
            </h1>
            <span className="text-secondary-dark text-sm font-light lg:font-normal">
              --- RECYCLING PROGRAM
            </span>
            <p className="text-white text-sm md:text-base mt-4">
              Praesent velit massa, vehicula ac interdum vel, semper at felis.
              In a ligula nec nulla accumsan pulvinar id eget urna. Praesent
              elementum, tellus vitae iaculis ornare, justo massa congue sapien,
              vitae feugiat metus velit eget sem.
            </p>
            <button className="bg-blue px-5 py-3 mt-4 hover:bg-blue-light text-white font-semibold ">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
