// import ExpenseList from "../components/ExpenseList";
import DashboardList from "../components/DashboardList";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import QuizList from "../components/QuizList";

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
  return (
    <>
      <div>
        <div className="dashboardContainer">
          <motion.div
            variants={dashboardVariant}
            initial="initial"
            animate="animate"
            className=" p-6 max-w-[1600px] mx-auto"
          >
            <Navbar />
            <QuizList />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
