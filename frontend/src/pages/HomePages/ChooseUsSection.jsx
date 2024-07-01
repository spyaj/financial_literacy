import React from "react";
import * as Images from "../../assets/images";
import * as Icons from "../../assets/icons";

const ChooseUsSection = () => {
  const Featues = [
    {
      id: 1,
      icon: <Icons.Bulb />,
      title: "Problem-Solving",
      description: "Aenean cursus nunc vel lacin. In hac habitasse platea.",
    },
    {
      id: 2,
      icon: <Icons.Time />,
      title: "Time Management",
      description: "Aenean cursus nunc vel lacin. In hac habitasse platea.",
    },
    {
      id: 3,
      icon: <Icons.Waste />,
      title: "Waste Reduction",
      description: "Aenean cursus nunc vel lacin. In hac habitasse platea.",
    },
    {
      id: 4,
      icon: <Icons.BusinessTeam />,
      title: "Teamwork",
      description: "Aenean cursus nunc vel lacin. In hac habitasse platea.",
    },
  ];
  return (
    <>
      <div className="bg-gray-light">
        <div className="container py-28 px-10">
          <div className="  grid grid-cols-1 gap-16 lg:grid-cols-2 ">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="3000"
              className="grid gap-6 place-items-center  lg:mx-auto "
            >
              <div className="bg-blue px-10 py-14 text-white text-2xl font-bold">
                <p>3,200 + Client Satisfaction</p>
              </div>
              <img
                src={Images.ChooseUS}
                alt=""
                className="object-cover w-full"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="3000"
              className="flex flex-col items-start lg:justify-center text-start gap-4"
            >
              <h1 className="text-black text-3xl md:text-5xl font-bold">
                Experience the Difference with Our Services
              </h1>
              <span className="text-secondary-light text-sm font-light lg:font-normal">
                WHY CHOOSE US
              </span>
              <div className="text-gray-600 text-sm md:text-base grid gap-4 mt-4">
                <p>
                  In tempus rutrum magna sed lacinia. Morbi non urna et odio
                  rutrum gravida nec in dui. Nunc vitae faucibus tellus, ac
                  mattis massa. In ornare nisi est, sed congue metus sedo.
                  Phasellus magna turpis, egestas eu egestas eu, pretium ac
                  augue.
                </p>
                <p>
                  In a ligula nec nulla accumsan pulvinar id eget urna. Praesent
                  elementum, tellus vitae iaculis ornare, justo massa congue
                  sapien, vitae feugiat metus velit eget sem.
                </p>
              </div>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-6">
                {Featues.map((feature) => (
                  <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="h-16 w-16">{feature.icon}</div>
                    <div className="grid gap-3">
                      <h3 className="text-2xl font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
            className="grid gap-10 mt-20 place-content-center place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* experience  */}
            <div className=" flex flex-col items-center ">
              <div className="flex gap-2 ">
                <p className="text-3xl font-bold">25</p>
                <span className="text-blue font-semibold text-lg">Th</span>
              </div>
              <div>
                <p className="text-xl font-semibold">Years of Experience</p>
              </div>
            </div>
            {/* Client Satisfaction */}
            <div className=" flex flex-col items-center ">
              <div className="flex gap-2 ">
                <p className="text-3xl font-bold">3,200</p>
                <span className="text-blue font-semibold text-lg">+</span>
              </div>
              <div>
                <p className="text-xl font-semibold">Client Satisfaction</p>
              </div>
            </div>
            {/* Active Worker  */}
            <div className=" flex flex-col items-center ">
              <div className="flex gap-2 ">
                <p className="text-3xl font-bold">100</p>
                <span className="text-blue font-semibold text-lg">+</span>
              </div>
              <div>
                <p className="text-xl font-semibold">Active Worker</p>
              </div>
            </div>
            {/* Served Amount  */}
            <div className=" flex flex-col items-center ">
              <div className="flex gap-2 ">
                <p className="text-3xl font-bold">175</p>
                <span className="text-blue font-semibold text-lg">+</span>
              </div>
              <div>
                <p className="text-xl font-semibold">Served Amount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUsSection;
