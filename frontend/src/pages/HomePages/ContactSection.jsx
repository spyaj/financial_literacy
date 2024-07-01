import React from "react";
import * as Images from "../../assets/images";

const ContactSection = () => {
  const backgroundImages = [
    Images.ContactImg,
  ];

  return (
    <>
      <div  id="contactsection"
        className="bg-fixed bg-cover bg-center px-16 py-28 m-auto relative group"
        style={{ backgroundImage: `url('${backgroundImages}')` }}
      >
        {/* Black overlay with opacity (hidden initially) */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75  z-10"/>

        <div className="flex flex-col items-center text-center gap-4 z-40">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Ready to Optimize Your Waste Management?
            <hr/> Contact Us Now!
          </h1>
          <p className="text-white text-sm md:text-base mt-4">
            Nunc mattis interdum turpis, in varius est. Morbi imperdiet magna et
            mauris rhoncus, id iaculis odio auctor. Mauris at felis, rhoncus nibh
            non, aliquet tellus. Aenean cursus eu nunc vel lacinia.
          </p>
          <button className="bg-blue hover:bg-blue-light px-4 py-3 text-white font-semibold ">
            Contact Us Now
          </button>
        </div> */}
        {/* Dark overlay with customizable opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50 z-10" />
        <div className="container">
          {/* Content container with white text color */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            className="flex flex-col items-center text-center gap-4 relative z-20"
          >
            <h1 className="text-white  text-3xl md:4xl lg:text-5xl font-bold">
            Contact Us Now!
            </h1>
            <p className="text-white text-sm md:text-base mt-4">
            We would love to hear from you! Whether you have questions, feedback, or need assistance with any of our resources, our team at Finance Literacy is here to help.
            </p>
            <button className="bg-blue px-5 py-3 mt-4 hover:bg-blue-light text-white font-semibold ">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
