import React from "react";
import * as Images from "../../assets/images";


const BlogSection = () => {
  const BlogDetails = [
    {
      id: 1,
      image:
        Images.BlogImgOne,
      title: "The Social Impact of Responsible Waste Pickup and Management",
      date: "June 13, 2023",
      comment: 0,
      description:
        "Lorem ipsum dolor sit amet elit. Aenean eleifend lobortis diam ac blandit. Pellentesque laoreet quis turpis quis aliquet. Curabitur…",
    },
    {
      id: 2,
      image:
        Images.BlogImgTwo,
      title: "Our Plastic Pollution Crisis Is Too Big for Recycling…",
      date: "June 13, 2023",
      comment: 0,
      description:
        "Lorem ipsum dolor sit amet elit. Aenean eleifend lobortis diam ac blandit. Pellentesque laoreet quis turpis quis aliquet. Curabitur…",
    },
    {
      id: 3,
      image:
        Images.BlogImgThree,
      title:
        "Sustainable Solutions: Innovations in Waste Pickup and Management",
      date: "June 13, 2023",
      comment: 0,
      description:
        "Lorem ipsum dolor sit amet elit. Aenean eleifend lobortis diam ac blandit. Pellentesque laoreet quis turpis quis aliquet. Curabitur…",
    },
  ];
  return (
    <>
      <div id="blogsection" className="bg-white">
        <div className="container pt-14 pb-32  grid gap-20">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="3000"
            className="flex flex-col items-center text-center gap-4"
          >
            <h1 className="text-black text-3xl md:text-5xl font-bold">
              Stay Informed with Our Blog
            </h1>
            <span className="text-secondary-light text-sm font-light lg:font-normal">
              --- BLOG ---
            </span>
            <p className="text-gray-600 text-sm md:text-base  lg:w-1/2 mt-4">
              Fusce porta lorem erat, sed faucibus enim convallis vitae. Sed nec
              metus tellus. Nullam in magna vitae feugiat metus velit eget sem.
            </p>
          </div>
          <div
           
            className="grid gap-6 place-items-center md:grid-cols-2 lg:grid-cols-3  "
          >
            {BlogDetails.map((blog) => (
              <div
                key={blog.id}
                className="grid group relative border-b-4 border-secondary text-black bg-gray "
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    className="object-cover group-hover:scale-110 transition duration-300 ease-in-out"
                    alt=""
                  />
                </div>
                <div className="px-4 py-6 grid gap-4">
                  <p className="text-lg font-semibold">{blog.title}</p>
                  <div className="flex text-primary gap-8">
                    <div>🗓️{blog.date}</div>
                    <div>💬{blog.comment}</div>
                  </div>
                  <span className="text-gray-600">{blog.description}</span>
                  <button className="flex gap-2 items-center font-semibold text-blue-500">
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
