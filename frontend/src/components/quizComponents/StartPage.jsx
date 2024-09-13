// StartPage.jsx

import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link component
import DataContext from "../../context/dataContext";
import Dashboard from "../../pages/Dashboard";
import Leaderboard from "../../pages/Leaderboard";

const StartPage = () => {
  const { startQuiz, showStart } = useContext(DataContext);
  const QuizChapetrs = [
    {
      id: 1,
      title: "SIP",
      url: "www.facebook.com",
    },
    {
      id: 2,
      title: "Nepse",
      url: "www.facebook.com",
    },
    {
      id: 3,
      title: "Mutual Fund",
      url: "www.facebook.com",
    },
  ];
  return (
    <section
      className="text-white text-center h-full bg-dark"
      style={{
        height: `calc(100vh - 129px)`, // Adjusted for navbar height
        display: `${showStart ? "flex" : "none"}`,
      }}
    >
      <div className="container">
        {/* <Leaderboard/> */}
        <div className="grid gap-5 mt-10">
          {QuizChapetrs.map((chapter) => (
            <div className="border-2 px-4 py-4">
              <div
                key={chapter.id}
                className=" bg-[#13CAA4] flex justify-start border border-[#13CAA4] w-fit px-6 py-2 "
              >
                Chapter : <p> &nbsp; {chapter.title}</p>
              </div>
              <div className="flex justify-between mt-10">
                <div className="">
                  <Link to="/quiz">
                    <button
                      key={chapter.id}
                      onClick={() => startQuiz(chapter.id)} // Pass chapter ID
                      className="button px-4 py-2 bg-light text-dark font-bold rounded-lg hover:bg-gray-400"
                    >
                      Start Quiz
                    </button>
                  </Link>
                </div>
                <div className="">
                  <a
                    key={chapter.id}
                    href={`https://${chapter.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="button px-4 py-2 bg-light text-dark font-bold rounded-lg hover:bg-gray-400">
                      Resources
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartPage;
