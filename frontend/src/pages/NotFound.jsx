import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/Animation - 1740482461153.json"; // Add an animated 404 Lottie file

export default function NotFound() {
  const navigate = useNavigate();
  const [dots, setDots] = useState("");

  // Simulates searching effect (adds dots dynamically)
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Animated 404 */}
      <div className="w-72 h-72">
        <Lottie animationData={notFoundAnimation} loop={true} />
      </div>

      <h1 className="text-4xl font-bold mt-4">Oops! Page Not Found</h1>
      <p className="text-gray-400 mt-2 text-lg">We searched everywhere{dots} but couldn't find this page!</p>

      {/* Fake Job Search Bar */}
      <div className="relative mt-6 w-80">
        <input
          type="text"
          className="w-full px-4 py-3 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-500"
          placeholder="Search for jobs..."
          disabled
        />
        <FaSearch className="absolute right-4 top-4 text-gray-500" />
      </div>

      {/* Go Back Home Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-lg font-semibold transition-all duration-300"
      >
        🔍 Explore Jobs
      </button>
    </div>
  );
}
