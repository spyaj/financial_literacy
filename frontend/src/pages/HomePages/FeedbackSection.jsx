import React from "react";

import * as Images from "../../assets/images";


const FeedbackSection = () => {
  const Testimonials = [
    {
      id: 1,
      image: Images.FirstFeedback,
      title: "Alex Rando",
      description:
        "In tempus rutrum magna sed lacinia dem. Morbi non urna et odio rutrum gravida nec in dui.",
      job: "Coffee Shop Owner",
    },
    {
      id: 2,
      image: Images.SecondFeedback,
      title: "Amy Danilla",
      description:
        "In tempus rutrum magna sed lacinia dem. Morbi non urna et odio rutrum gravida nec in dui.",
      job: "Hospital Doctor",
    },
  ];
  return (
    <>
      <div className=" bg-[#E5E5E5] clipped-content-feedback ">
        <div className=" container py-28 px-10 grid grid-cols-1 gap-16 lg:grid-cols-2 ">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="grid gap-6 place-items-center  lg:mx-auto "
          >
            {Testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col items-center md:flex-row gap-8  bg-[#F4F4F4]  border-b-4 border-secondary py-10 pl-10 pr-16"
              >
                <div className="overflow-hidden">
                  <img
                    src={testimonial.image}
                    className="object-cover w-40 md:w-60 rounded-full"
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className=" text-5xl font-extrabold text-primary">
                    "
                  </span>
                  <span className="text-gray-500 text-lg">
                    " {testimonial.description} "
                  </span>
                  <p className=" font-semibold text-xl">{testimonial.title}</p>
                  <span className="text-secondary-dark">{testimonial.job}</span>
                </div>
              </div>
            ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            className="flex flex-col items-start lg:justify-center text-start gap-4"
          >
            <h1 className="text-black text-3xl md:text-5xl font-bold">
              Feedback and Reviews from Our Clients
            </h1>
            <span className="text-secondary-light text-sm font-light lg:font-normal">
              --- TESTIMONIAL
            </span>
            <div className="text-gray-600 text-sm md:text-base grid gap-4 mt-4">
              <p>
                In tempus rutrum magna sed lacinia. Morbi non urna et odio
                rutrum gravida nec in dui. Nunc vitae faucibus tellus, ac mattis
                massa. In ornare nisi est, sed congue metus sedo. Phasellus
                magna turpis, egestas eu egestas eu pretium.
              </p>
              <p>
                In ornare nisi est, sed congue metus scelerisque sed. Phasellus
                magna turpis et egestas eu egestas eu, pretium ac augue nullam
                porta dui.
              </p>
            </div>
            <button className="bg-blue hover:bg-blue-light mt-4 px-4 py-3 text-white font-semibold ">
              VIEW ALL TESTIMONIAL
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackSection;
