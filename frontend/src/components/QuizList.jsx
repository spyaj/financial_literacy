import React from "react";
import StartPage from "./quizComponents/StartPage";
import QuizPage from "./quizComponents/QuizPage";
import ResultPage from "./quizComponents/ResultPage";
import { DataProvider } from "../context/dataContext";

const QuizList = () => {
  return (
    <>
      <DataProvider>
        <StartPage />
        <QuizPage />
        <ResultPage />
      </DataProvider>
    </>
  );
};

export default QuizList;
