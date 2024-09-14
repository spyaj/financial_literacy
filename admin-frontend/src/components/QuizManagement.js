import React, { useState, useEffect } from "react";
import { instance } from "./api";
import { Link } from "react-router-dom";
const QuizManagement = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [error, setError] = useState(null);
  const [newQuiz, setNewQuiz] = useState({
    chapter: "",
    questions: [{ question: "", options: ["", "", "", ""], answer: "" }],
  });

  // Fetch all quizzes
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const { data } = await instance.get("/quizzes");
        setQuizzes(data);
      } catch (error) {
        setError("Failed to load quizzes");
      }
    };
    fetchQuizzes();
  }, []);

  // Add a new quiz
  const addQuiz = async () => {
    try {
      await instance.post("/quizzes", newQuiz);
      setNewQuiz({
        chapter: "",
        questions: [{ question: "", options: ["", "", "", ""], answer: "" }],
      });
      setQuizzes([...quizzes, newQuiz]);
    } catch (error) {
      setError("Failed to add quiz");
    }
  };

  //Delete a quiz
  const deleteQuiz = async (quizId) => {
    if (!quizId) {
      console.error("No ID provided for deletion");
      return;
    }

    if (window.confirm("Are you sure you want to delete this quiz?")) {
      try {
        await instance.delete(`/quizzes/${quizId}`);
        setQuizzes(quizzes.filter((quiz) => quiz._id !== quizId));
      } catch (error) {
        console.error("Failed to delete quiz", error);
        setError("Failed to delete quiz");
      }
    }
  };

  // Handle input changes for new quiz
  const handleInputChange = (e, index, field) => {
    const updatedQuestions = [...newQuiz.questions];
    if (field === "question") {
      updatedQuestions[index].question = e.target.value;
    } else if (field === "answer") {
      updatedQuestions[index].answer = e.target.value;
    } else {
      updatedQuestions[index].options[field] = e.target.value;
    }
    setNewQuiz({ ...newQuiz, questions: updatedQuestions });
  };

  // Add a new question to the quiz form
  const addQuestion = () => {
    setNewQuiz({
      ...newQuiz,
      questions: [
        ...newQuiz.questions,
        { question: "", options: ["", "", "", ""], answer: "" },
      ],
    });
  };

  // Remove a question from the quiz form
  const removeQuestion = (index) => {
    const updatedQuestions = newQuiz.questions.filter(
      (q, qIndex) => qIndex !== index
    );
    setNewQuiz({ ...newQuiz, questions: updatedQuestions });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-4">Quiz Management</h2>
      <div className=" flex gap-5 my-6">
        <Link
          to="/dashboard"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Dashboard
        </Link>
        <Link
          to="/dashboard/users"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Manage Users
        </Link>
        <Link
          to="/dashboard/videos"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Manage Videos
        </Link>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Quiz Form */}
      <div className="bg-white p-6 mb-6 rounded shadow-md w-full max-w-4xl">
        <h3 className="text-xl font-semibold mb-4">Add New Quiz</h3>
        <div className="mb-4">
          <label>Chapter:</label>
          <input
            type="text"
            value={newQuiz.chapter}
            onChange={(e) =>
              setNewQuiz({ ...newQuiz, chapter: e.target.value })
            }
            className="border p-2 w-full"
          />
        </div>
        {newQuiz.questions.map((question, index) => (
          <div key={index} className="mb-4">
            <label>Question {index + 1}:</label>
            <input
              type="text"
              value={question.question}
              onChange={(e) => handleInputChange(e, index, "question")}
              className="border p-2 w-full"
            />
            <div className="mt-2">
              <label>Options:</label>
              {question.options.map((option, optIndex) => (
                <input
                  key={optIndex}
                  type="text"
                  value={option}
                  onChange={(e) => handleInputChange(e, index, optIndex)}
                  className="border p-2 w-full mt-1"
                />
              ))}
            </div>
            <div className="mt-2">
              <label>Answer:</label>
              <input
                type="text"
                value={question.answer}
                onChange={(e) => handleInputChange(e, index, "answer")}
                className="border p-2 w-full"
              />
            </div>
            {newQuiz.questions.length > 1 && (
              <button
                onClick={() => removeQuestion(index)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 mt-2"
              >
                Remove Question
              </button>
            )}
          </div>
        ))}
        <div className=" flex gap-5 my-6">
          <button
            onClick={addQuestion}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
          >
            Add Another Question
          </button>
          <button
            onClick={addQuiz}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add Quiz
          </button>
        </div>
      </div>

      {/* Quiz Table */}
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <h3 className="text-xl font-semibold mb-4">Existing Quizzes</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Chapter</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr key={quiz._id}>
                <td className="border px-4 py-2">{quiz.chapter}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => deleteQuiz(quiz._id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuizManagement;
