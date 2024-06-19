import { useState } from "react";
import Spinner from "../components/Spinner";
import ExpenseTable from "./ExpenseTable";
import AddExpense from "./AddExpense";
import { useGetExpenseQuery } from "../features/api/expense/expenseSlice";
import { motion, AnimatePresence } from "framer-motion";
import CategoryChart from "./chartComponents/CategoryChart";
import DateChart from "./chartComponents/DateChart";
import PaymentPie from "./chartComponents/PaymentPie";
import Stats from "./Stats";
import DateTotalMonth from "./chartComponents/DateTotalMonth";
import Navbar from "./Navbar";
import FilteredCalendar from "./FilteredCalendar";
import "react-datepicker/dist/react-datepicker.css";

const itemsPerPage = 5;

const ExpenseList = () => {
  const { data: expenseList, isLoading, error } = useGetExpenseQuery();

  const [currentPage, setCurrentPage] = useState(1);
  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the todos to display only the items for the current page
  const currentExpenses = expenseList?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(expenseList?.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className=" h-screen">
        <div>
          <Stats expenseList={expenseList} />
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-3 mt-6">
            <div className="w-full bg-[#28272D] rounded-md p-3 shadow-[0_3px_10px_rgb(0,0,0,1)] flex justify-center">
              <DateTotalMonth
                expenseList={expenseList}
                isLoading={isLoading}
                error={error}
              />
            </div>
            <div className="w-full bg-[#28272D] rounded-md p-3 shadow-[0_3px_10px_rgb(0,0,0,1)]">
              <CategoryChart
                expenseList={expenseList}
                isLoading={isLoading}
                error={error}
              />
            </div>

            <div className="w-full bg-[#28272D] rounded-md p-3 shadow-[0_3px_10px_rgb(0,0,0,1)]">
              <DateChart
                expenseList={expenseList}
                isLoading={isLoading}
                error={error}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
