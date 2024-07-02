import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import * as Images from "../assets/images";
import AboutSection from "./HomePages/AboutSection";
import SectorSection from "./HomePages/SectorSection";
import ContactSection from "./HomePages/ContactSection";

const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const homeVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const routes = [
    {
      path: "/",
      name: "Home",
      sectionName: "/",
    },
    {
      path: "/#aboutSection",
      name: "About",
      sectionName: "#aboutsection",
    },
    {
      path: "/contact",
      name: "Contact Us",
      sectionName: "#contactsection",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="homeContainer pb-10 px-1">
        <motion.div
          variants={homeVariant}
          initial="initial"
          animate="animate"
          className="min-h-screen max-w-[1400px] mx-auto"
        >
          <div className="flex justify-between items-center py-4 px-2">
            <div>
              <h1 className="gradientOverlay md:text-[20px] sm:text-[16px] text-[13px]">
                Finance Literacy
              </h1>
            </div>

            {userInfo ? (
              <div className="flex space-x-3">
                <Link to="/dashboard">
                  <button className="btn btn-outline btn-success md:text-[16px] text-[12px]">
                    Dashboard
                  </button>
                </Link>
              </div>
            ) : (
              <div className="container flex justify-end items-center space-x-3">
                <div className="flex gap-4">
                  <div className="hidden md:flex gap-2 ">
                    {routes.map((route) => (
                      <a
                        className="btn btn-outline btn-info md:text-[14px] text-[12px]"
                        href={`${route.sectionName}`}
                        key={route.name}
                      >
                        {route.name}
                      </a>
                    ))}
                  </div>
                  <Link to="/login">
                    <button className="btn btn-outline btn-success md:text-[14px] text-[12px]">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="btn btn-outline btn-success md:text-[14px] text-[12px]">
                      Sign Up
                    </button>
                  </Link>
                  <button
                    className="btn btn-outline btn-info md:hidden text-[12px]"
                    onClick={handleMenuToggle}
                  >
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="">
            <div>
              <div className="flex flex-col lg:flex-row justify-center items-center p-3 rounded-md lg:text-start text-center mb-6 lg:space-y-0 space-y-6 md:my-10 my-6">
                <section className="w-full space-y-3 md:space-y-6">
                  <h1 className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[22px] font-semibold">
                    Managing Finance Made
                    <strong className="text-green-500">Simple</strong> &{" "}
                    <strong className="text-green-500">Insightful!</strong>
                  </h1>

                  <p className="text-[12px] md:text-[16px] text-slate-400">
                    Empower individuals and families to take control of their
                    finances, make informed decisions, and achieve financial
                    well-being through graphical data visualization
                  </p>
                </section>

                <section className="w-full md:p-10">
                  <img src={Images.LaptopScreen} alt="laptop" />
                </section>
              </div>

            </div>
            <AboutSection />
            <SectorSection />
            <ContactSection />
          </div>
        </motion.div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#28272D] p-6 rounded-lg shadow-lg w-3/4 max-w-md">
            <button
              className="btn btn-outline btn-info absolute top-4 right-7 text-[12px]"
              onClick={handleMenuToggle}
            >
              <i className="fa-solid fa-times"></i>
            </button>
            <div className="flex flex-col space-y-3">
              {routes.map((route) => (
                <a
                  className="btn btn-outline btn-info text-[16px] w-full"
                  href={`${route.sectionName}`}
                  key={route.name}
                  onClick={handleMenuToggle}
                >
                  {route.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
