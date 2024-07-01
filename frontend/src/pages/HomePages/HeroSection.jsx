import React, { useState, useEffect } from "react";
import * as Images from "../../assets/images";
// import * as Icons from "../../assets/icons";
// import { ReactComponent as Time } from '../../assets/icons/time-management.svg';
// import { ReactComponent as Waste } from '../../assets/icons/waste-recycle.svg';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const backgroundImages = [

    Images.HomeImgOne,
    Images.HomeImgTwo,
    Images.HomeImgThree,
    // Add more image URLs here
  ];
  const backgroundImage = backgroundImages[currentImageIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <>
      <div
        className="bg-gray-light relative h-full lg:h-screen"
        style={{ minHeight: "700px" }}
      >
        <div
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            height: "80vh",
          }}
          className="bg-cover absolute inset-0 clipped-content-home bg-center "
        >
          {/* Dark overlay with customizable opacity */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60 z-10" />
        </div>

        <div className=" flex flex-col gap-10 h-full justify-between container pt-20 z-20">
          <div  data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000" className=" flex flex-col justify-center gap-6 text-white mt-6 z-20">
            <div className="text-yellow-400">
              Global Trek Express Trading LLC
            </div>
            <div className="text-white  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
              Nature Needs <br /> Something in Return
            </div>
            <div>
              Quisque porta maximus malesuada, ut lacus ipsum, placerat id velit
              nec. Fermentum lobortis tortor class aptent taciti sociosqu.
            </div>
            <div className="flex gap-28">
              <button className="bg-blue-400 py-3 px-6 font-semibold">
                Get Started
              </button>
              {/* Video section  */}
              {/* <button className="font-semibold" onClick={handlePlayVideo}>
                Play Video
              </button>
              {showVideo && (
                <div
                  className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-5 flex items-center justify-center"
                  onClick={handleCloseVideo}
                >
                  <iframe
                    width="846"
                    height="476"
                    src="https://www.youtube.com/embed/VhBl3dHT5SY"
                    title="The Best Addon for Elementor that will make your website building experience wow | Elementskit"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              )} */}
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="3000"
            className="flex flex-col lg:flex-row lg:justify-end lg:items-end gap-4 z-20 "
          >
            <div className="flex text-white flex-col bg-primary py-8 px-8 lg:py-14 lg:px-14 gap-2">
              {/* <Time className="w-12 h-12" /> */}
              <p className=" text-lg font-semibold">Scheduled Pickup</p>
              <span>
                Class aptent taciti sociosqu ad <br></br> litora torquent per
                conubia nostra.
              </span>
            </div>
            <div className="flex  text-white flex-col bg-secondary py-8 px-8 lg:py-14 lg:px-14 gap-2">
              {/* <Waste className="w-12 h-12" /> */}
              <p className=" text-lg font-semibold">Recycling Information</p>
              <span>
                Class aptent taciti sociosqu ad <br></br> litora torquent per
                conubia nostra.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
