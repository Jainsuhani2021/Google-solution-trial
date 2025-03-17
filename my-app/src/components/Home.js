import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      {/* Header */}
      <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg">
        Learning Harbour
      </h1>

      {/* Card Container */}
      <div className="bg-white text-gray-800 shadow-2xl rounded-2xl p-8 w-80 flex flex-col items-center">
        <p className="text-lg font-medium mb-6 text-center">
          Select Your Dashboard
        </p>

        {/* Buttons */}
        <Link to="/teacher-dashboard" className="w-full">
          <button className="w-full mb-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-transform transform hover:scale-105">
            👨‍🏫 Teacher Dashboard
          </button>
        </Link>
        
        <Link to="/student-dashboard" className="w-full">
          <button className="w-full px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-transform transform hover:scale-105">
            🎓 Student Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
