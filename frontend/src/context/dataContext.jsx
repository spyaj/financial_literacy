// DataContext.js

import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
  const [quizs, setQuizs] = useState([]);
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [marks, setMarks] = useState(0);

  // Display Controlling States
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Load JSON Data based on chapter
  const loadQuiz = (chapterId) => {
    fetch(`quiz_chapter_${chapterId}.json`)
      .then((res) => res.json())
      .then((data) => {
        setQuizs(data); // Load the quiz data
        setQuestion(data[0]); // Set the first question as default
      })
      .catch((error) => console.error("Error loading quiz:", error));
  };
  // Set a Single Question
  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuestion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex]);

  // Start Quiz for the selected chapter
  const startQuiz = (chapterId) => {
    loadQuiz(chapterId); // Load quiz for the selected chapter
    setQuestionIndex(0); // Reset question index
    setCorrectAnswer("");
    setSelectedAnswer("");
    setShowStart(false);
    setShowQuiz(true);
  };

  // Check Answer
  const checkAnswer = (selected) => {
    if (!selectedAnswer) {
      setCorrectAnswer(question.answer);
      setSelectedAnswer(selected);

      // Log selected and correct answers for debugging
      console.log("Selected answer:", selected);
      console.log("Correct answer:", question.answer);

      // Update marks based on the selected answer
      if (selected === question.answer) {
        setMarks((prevMarks) => {
          console.log("Adding 5 marks. Previous marks:", prevMarks);
          return prevMarks + 5;
        });
      }
    }
  };

  // Next Question
  const nextQuestion = () => {
    setCorrectAnswer("");
    setSelectedAnswer("");
    const wrongBtn = document.querySelector("button.bg-danger");
    wrongBtn?.classList.remove("bg-danger");
    const rightBtn = document.querySelector("button.bg-success");
    rightBtn?.classList.remove("bg-success");
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Show Result
  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  };

  // Start Over
  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer("");
    setSelectedAnswer("");
    setQuestionIndex(0);
    setMarks(0);
    const wrongBtn = document.querySelector("button.bg-danger");
    wrongBtn?.classList.remove("bg-danger");
    const rightBtn = document.querySelector("button.bg-success");
    rightBtn?.classList.remove("bg-success");
  };

  // Cancel Quiz with Confirmation
  const cancelQuiz = () => {
    setShowStart(true);
    setShowResult(false);
    setShowQuiz(false);
    setCorrectAnswer("");
    setSelectedAnswer("");
    setQuestionIndex(0);
    setMarks(0);
    const wrongBtn = document.querySelector("button.bg-danger");
    wrongBtn?.classList.remove("bg-danger");
    const rightBtn = document.querySelector("button.bg-success");
    rightBtn?.classList.remove("bg-success");
    return true; // Return true if quiz is canceled
  };

  // New state for leaderboard
  const [leaderboard, setLeaderboard] = useState([]);

  // Function to update leaderboard
  const updateLeaderboard = (user, score) => {
    setLeaderboard((prevLeaderboard) => [
      ...prevLeaderboard,
      { user, score },
    ]);
  };
    
  return (
    <DataContext.Provider
      value={{
        startQuiz,
        showStart,
        showQuiz,
        question,
        quizs,
        checkAnswer,
        correctAnswer,
        selectedAnswer,
        questionIndex,
        nextQuestion,
        showTheResult,
        showResult,
        marks,
        startOver,
        cancelQuiz,
        updateLeaderboard,
        leaderboard,
        marks,
        setMarks, 
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
