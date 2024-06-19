// QuizPage.jsx

import React, { useContext, useState } from "react";
import DataContext from "../../context/dataContext";
import CancelModel from "../CancelModel";

const QuizPage = () => {
  const {
    showQuiz,
    question,
    quizs,
    checkAnswer,
    correctAnswer,
    selectedAnswer,
    questionIndex,
    nextQuestion,
    showTheResult,
    cancelQuiz,
  } = useContext(DataContext);

  const [showModal, setShowModal] = useState(false);

  const handleCancelQuiz = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirmCancel = () => {
    if (cancelQuiz()) {
      setShowModal(false);
    }
    // Optionally handle cancel confirmation logic here
  };

  return (
    <section
      className="bg-dark text-white min-h-screen flex items-center justify-center"
      style={{
        display: `${showQuiz ? "flex" : "none"}`,
      }}
    >
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <div className="card p-4 bg-gray-800 text-white rounded-lg shadow-lg">
              <div className="flex justify-between mb-3">
                <h5 className="text-lg font-medium">{question?.question}</h5>
                <div className="text-right">
                  <span className="text-green-500 mr-2">
                    {quizs.indexOf(question) + 1}
                  </span>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-400 ml-2">{quizs.length}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {question?.options?.map((item, index) => (
                  <button
                    key={index}
                    className={`text-left py-3 px-4 rounded-lg bg-gray-700 text-white ${
                      correctAnswer === item ? "bg-green-500" : ""
                    } ${
                      selectedAnswer === item && correctAnswer !== item
                        ? "bg-red-500"
                        : ""
                    }`}
                    onClick={(event) => checkAnswer(event, item)}
                    disabled={!!selectedAnswer}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {questionIndex + 1 !== quizs.length ? (
                <button
                  className="btn py-2 w-full mt-4 bg-blue-500 text-white font-semibold hover:bg-blue-600"
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                >
                  Next Question
                </button>
              ) : (
                <button
                  className="btn py-2 w-full mt-4 bg-blue-500 text-white font-semibold hover:bg-blue-600"
                  onClick={showTheResult}
                  disabled={!selectedAnswer}
                >
                  Show Result
                </button>
              )}

              <button
                className="btn py-2 w-full mt-4 bg-gray-400 text-white font-semibold hover:bg-gray-500"
                onClick={handleCancelQuiz}
              >
                Cancel Quiz
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Cancel Confirmation */}
      {showModal && (
        <CancelModel onCancel={handleCancel} onConfirm={handleConfirmCancel} />
      )}
    </section>
  );
};

export default QuizPage;
