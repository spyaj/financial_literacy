// import ExpenseList from "../components/ExpenseList";
import React, { useState, useEffect } from "react";
import DashboardList from "../components/DashboardList";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import QuizList from "../components/QuizList";
// import axios from "axios";
// import { useGetQuizQuery } from "../features/api/expense/expenseSlice";

const dashboardVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Quiz = () => {
  // const [chapters, setChapters] = useState([]);
  // const [selectedLevel, setSelectedLevel] = useState(null);
  // const [leaderboard, setLeaderboard] = useState([]);
  // const [timeframe, setTimeframe] = useState("daily"); // Default to daily leaderboard


  // const { data: quizList, isLoading, error } = useGetQuizQuery();
  // console.log(`quizList`, quizList);
  // console.log(`error`, error);
  // Fetch chapters and levels
  // useEffect(() => {
  //   const fetchChapters = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:8001/api/quiz/chapters");  // Fetch chapters and levels
  //       setChapters(res.data);  // Set the response data
  //     } catch (error) {
  //       console.error(error.response ? error.response.data : error.message);  // Log the error
  //     }
  //   };
  //   fetchChapters();
  // }, []);

  // // Fetch leaderboard based on selected timeframe
  // useEffect(() => {
  //   const fetchLeaderboard = async () => {
  //     try {
  //       const res = await axios.get(`/api/quiz/leaderboard/${timeframe}`);
  //       setLeaderboard(res.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchLeaderboard();
  // }, [timeframe]);

  // const handleLevelClick = (level) => {
  //   setSelectedLevel(Number(level));
  // };
  return (
    <>
      <div>
        <div className="dashboardContainer">
          <motion.div
            variants={dashboardVariant}
            initial="initial"
            animate="animate"
            className=" p-6 max-w-[1600px] h-screen mx-auto"
          >
            <Navbar />
            <QuizList />
            {/* {!selectedLevel ? (
              <div className="chapter-level-container">
                <h2>Select Chapter and Level</h2>
                {chapters.map((chapter, index) => (
                  <div key={index} className="chapter">
                    <h3>{chapter.name}</h3>
                    <div className="levels">
                      {chapter.levels.map((level) => (
                        <button
                          key={level}
                          onClick={() => handleLevelClick(level)}
                          className="level-btn"
                        >
                          Level {level}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <QuizList level={selectedLevel} />
            )}

            <div className="leaderboard-container">
              <h2>Leaderboard</h2>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="leaderboard-select"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
              <ul>
                {leaderboard.map((user, index) => (
                  <li key={index}>
                    {user.name} - XP: {user.xp}
                  </li>
                ))}
              </ul>
            </div> */}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
