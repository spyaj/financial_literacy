// ResultPage.jsx

import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link component
import DataContext from "../../context/dataContext";

const ResultPage = () => {
  const { showResult, quizs, marks, cancelQuiz } = useContext(DataContext);

  return (
    <section
      className="bg-dark text-white min-h-screen flex items-center justify-center"
      style={{
        height: `calc(100vh - 129px)`, // Adjusted for navbar height
        display: `${showResult ? "flex" : "none"}`,
      }}
    >
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-6">
            <div className="text-center p-5 rounded-lg bg-gray-800">
              <h1 className="text-4xl mb-4 font-bold text-white">
                {marks > (quizs.length * 5) / 2 ? "Awesome!" : "Oops!"}
              </h1>
              <h3 className="text-xl mb-6 font-bold text-white">
                Your score is {marks} out of {quizs.length * 5}
              </h3>

              <button
                onClick={cancelQuiz}
                className="btn py-2 px-4 bg-gray-300 text-gray-800 font-bold rounded-lg hover:bg-gray-400"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultPage;
