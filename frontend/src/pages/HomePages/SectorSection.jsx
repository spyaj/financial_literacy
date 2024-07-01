import React from "react";
import * as Images from "../../assets/images";


const SectorSection = () => {
  const Partners = [
    {
      id: 1,
      image: Images.Hospital,
      title: "Healthcare Sector",
    },
    {
      id: 2,
      image: Images.Retail,
      title: "Retail and Distribution",
    },
    {
      id: 3,
      image: Images.Logistic,
      title: "Transport and LOgistics",
    },
  ];
  return (
    <>
      <div id="sectorsection" >
        <div className="   clipped-content-sector">
          <div className="container pt-48 pb-20">
            <div className="grid gap-16">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="2000"
                className="flex flex-col items-center text-center gap-4"
              >
                <h1 className="text-black text-3xl md:text-5xl font-bold">
                  Partnering with Various Sectors
                </h1>
                <span className="text-secondary-light text-sm font-light lg:font-normal">
                  --- SECTOR ---
                </span>
                <p className="text-slat-400 text-sm md:text-base  mt-4">
                  Fusce porta lorem erat, sed faucibus enim convallis vitae. Sed
                  nec metus tellus. Nullam in magna vitae feugiat metus velit
                  eget sem.
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-duration="1000"
                className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {Partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="w-auto h-96 lg:h-[460px] group relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${partner.image})` }}
                  >
                    <div className="absolute hidden inset-0 bg-gradient-to-b from-transparent to-black opacity-75 group-hover:flex group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
                      <div className="text-white hidden flex-col gap-4 items-center text-center absolute inset-0 z-10 group-hover:flex group-hover:justify-end group-hover:bottom-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className=" size-10"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        <h3 className="text-2xl font-bold">{partner.title}</h3>
                        <button className="bg-blue hover:bg-blue-light  px-4 py-3 text-white font-semibold ">
                          READ MORE
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectorSection;
