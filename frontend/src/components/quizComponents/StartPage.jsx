// StartPage.jsx

import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link component
import DataContext from "../../context/dataContext";

const StartPage = () => {
  const { startQuiz, showStart } = useContext(DataContext);

  return (
    <section
      className="text-white text-center bg-dark"
      style={{
        height: `calc(100vh - 129px)`, // Adjusted for navbar height
        display: `${showStart ? "flex" : "none"}`,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-4 text-4xl">Basic React JS Quiz</h1>
            <Link to="/quiz">
              <button
                onClick={startQuiz}
                className="btn px-4 py-2 bg-light text-dark font-bold rounded-lg hover:bg-gray-400"
              >
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartPage;
