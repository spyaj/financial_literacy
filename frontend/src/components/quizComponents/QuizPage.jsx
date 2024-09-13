import React, { useState, useContext } from "react";
import DataContext from "../../context/dataContext";
import CancelModel from "../CancelModel";
import axios from "axios"; // Add axios for API call

const QuizPage = ({ quiz }) => {
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

  // Check if quiz data is available
  // if (!showQuiz || quizs.length === 0) {
  //   return <div>Loading...</div>; // Show a loading state or message
  // }

  const [showModal, setShowModal] = useState(false);
  const [answers, setAnswers] = useState({}); // State to hold user's answers
  const [submissionResult, setSubmissionResult] = useState(null); // To store result after submission
  
  const handleAnswerSelection = (item) => {
    setAnswers({
      ...answers,
      [question._id]: item,
    });
    checkAnswer(item); // Pass item directly, not event
  };

  // Function to submit quiz answers to the backend
  const handleQuizSubmission = async () => {
    // try {
    //   const response = await axios.post(`/api/quiz/${quiz.level}/submit`, {
    //     answers,
    //   });
    //   setSubmissionResult(response.data); // Store the submission result
    //   showTheResult(); // Show result page after submission
    // } catch (error) {
    //   console.error("Error submitting quiz:", error);
    // }
    showTheResult();
  };

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
                    {questionIndex + 1}
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
                    onClick={() => handleAnswerSelection(item)}
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
                  onClick={handleQuizSubmission} // Call handleQuizSubmission here
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

      {/* Optionally render submission result here */}
      {submissionResult && (
        <div className="result">
          <h3>Quiz Submitted Successfully</h3>
          <p>Correct Answers: {submissionResult.correctAnswers}</p>
          <p>Total Questions: {submissionResult.totalQuestions}</p>
          <p>XP Gained: {submissionResult.xpGained}</p>
        </div>
      )}
    </section>
  );
};

export default QuizPage;
