import React from "react";
import { Link } from "react-router-dom"; // <-- import Link

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Welcome to the Student Attendance System
        </h1>
        <p className="text-gray-600 mb-6">
          Manage student and teacher information, take attendance, and generate
          reports all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Get Started button now links to /login */}
          <Link to="/login">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>

          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
