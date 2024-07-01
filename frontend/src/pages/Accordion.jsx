import React, { useState } from "react";
// import * as Icons from '../../assets/icons';

const Accordion = ({ title, content, initiallyOpen = false }) => {
  const [isActive, setIsActive] = useState(initiallyOpen);

  const handleClick = () => {
    // Check if any other accordion is already open
    const anyOpen =
      document.querySelectorAll(".accordion-item.active").length > 0;

    // Only toggle state if no other accordion is open or if this is the initially open one
    setIsActive(!isActive || (anyOpen && initiallyOpen));
  };

  return (
    <div className="accordion-item " onClick={handleClick}>
      <div
        className={`accordion-title ${
          isActive ? "active" : ""
        } flex w-full justify-between px-5 py-3 text-white bg-secondary`}
      >
        <div className=" text-xl font-bold">{title}</div>
        <div className="text-2xl font-bold">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content px-2 py-4 text-slate-400 transition duration-500  ease-in-out">{content}</div>}  
    </div>
  );
};

export default Accordion;
