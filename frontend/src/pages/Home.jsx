import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

// import * as Icons from "../assets/icons";
import * as Images from "../assets/images";
// import HeroSection from "./HomePages/HeroSection"
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
          className="min-h-screen  max-w-[1400px] mx-auto"
        >
          <div className="flex justify-between items-center py-4 px-2">
            <div>
              <h1 className="gradientOverlay md:text-[28px] sm:text-[20px] text-[13px]">
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
              <div className=" container justify-end flex">
                <div className="flex space-x-3">
                  {routes.map((route) => (
                    <button
                      
                      key={route.name}
                    >
                      <a className="btn btn-outline btn-info md:text-[16px] text-[12px]" href={`${route.sectionName}`}>{route.name}</a>
                    </button>
                  ))}
                  <Link to="/login">
                    <button className="btn btn-outline btn-success md:text-[16px] text-[12px]">
                      Sign In
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="btn btn-outline btn-success md:text-[16px] text-[12px]">
                      Sign Up
                    </button>
                  </Link>
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

              <div className="flex flex-col lg:flex-row items-center lg:space-x-6 m-3"></div>
            </div>
            {/* <HeroSection /> */}
            <AboutSection/>
            <SectorSection />
            <ContactSection/>
            
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
