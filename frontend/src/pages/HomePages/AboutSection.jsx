import React from "react";
import * as Images from "../../assets/images";
// import * as Icons from "../../assets/icons";

import Accordion from "../Accordion";

const AboutSection = () => {
  const accordionData = [
    {
      title: "Interactive Tools",
      content: `Calculators, quizzes, and other tools to help you manage your finances and plan for the future.`,
      initiallyOpen: true,
    },
    {
      title: "Educational Articles",
      content: `In-depth articles on various financial topics such as budgeting, saving, investing, retirement planning, and more.`,
    },
    {
      title: "Personal Finance Tips",
      content: `Practical advice and tips to help you navigate everyday financial decisions.
`,
    },
  ];
  const Partners = [
    {
      id: 1,
      image: Images.PartnerOne,
    },
    {
      id: 2,
      image: Images.PartnerTwo,
    },
    {
      id: 3,
      image: Images.PartnerThree,
    },
    {
      id: 4,
      image: Images.PartnerFour,
    },
  ];
  return (
    <>
      <div id="aboutsection">
        <div className="container py-28 px-10">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            className="  grid grid-cols-1 gap-16 lg:grid-cols-2 "
          >
            <div className="grid gap-6 lg:place-items-end place-items-start lg:mx-auto ">
              <img
                src={Images.AboutUs}
                alt=""
                className="object-cover w-full"
              />
              <div className="bg-blue flex items-center gap-3 px-10 py-3 text-white text-xl font-bold">
                {/* <Icons.Phone className="h-10 w-10 " /> */}
                <p>
                  Call Us Now <br /> +971561273920 | 0565841949
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start lg:justify-center text-start gap-4">
              <h1 className="text-black text-3xl md:text-5xl font-bold">
                Advancing Sustainability in Finance Services
              </h1>
              <span className="text-secondary-light text-sm font-light lg:font-normal">
                ---ABOUT US
              </span>
              <div className="text-slate-400 text-sm md:text-base grid gap-4 mt-4">
                <p>
                  We are a dedicated team of finance enthusiasts, educators, and
                  professionals with a shared passion for demystifying the world
                  of finance. Our diverse backgrounds in finance, economics,
                  education, and technology enable us to bring you
                  comprehensive, reliable, and up-to-date financial information.
                </p>
              </div>
              <div className="grid gap-8 w-full grid-cols-1 mt-6">
                <div className="accordion grid gap-4 w-full">
                  {accordionData.map((item, index) => (
                    <Accordion key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* center hr with text  */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            className="relative overflow-hidden py-4 mt-20"
          >
            <hr className="w-full  border-t border-blue py-4 md:py-0" />
            <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-4 py-4 bg-gray-light text-blue-light text-center">
              PARTNERS & ASSOCIATES
            </span>
          </div>
          {/* partners  */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            className="grid gap-10 mt-20 place-content-center place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          >
            {/* experience  */}
            {Partners.map((partner) => (
              <div key={partner.id} className=" flex flex-col items-center ">
                <img
                  src={partner.image}
                  alt=""
                  className="w-40 md:w-52 lg:w-58"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
