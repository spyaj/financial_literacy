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
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import QuizPage from "./quizComponents/QuizPage";
// import ResultPage from "./quizComponents/ResultPage";

// const QuizList = ({ level }) => {
//   const [quiz, setQuiz] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       // if (isNaN(level)) {
//       //   console.error("Invalid level format");
//       //   return;
//       // }
//       const numericLevel = Number(level); // Convert level to number if it’s not already
//       console.log("Selected level (before sending):", numericLevel); // Log to verify
//       try {
//         const res = await axios.get(`/api/quiz/${level}`);
//         setQuiz(res.data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//       }
//     };
//     fetchQuiz();
//   }, [level]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!quiz) {
//     return <div>No quiz found for this level.</div>;
//   }

//   return (
//     <>
//       <QuizPage quiz={quiz} />
//       <ResultPage />
//     </>
//   );
// };

// export default QuizList;
