import React from "react";
import BackGroundHome from "../assets/photo-1506748686214-e9df14d4d9d0.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const Navigate = useNavigate();
  return (
    <main className="w-full">
      <section
        id="HeroSection"
        className="relative w-full h-screen"
        style={{
          backgroundImage: `url(${BackGroundHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Image */}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gray-100 space-y-8">
          <h1 className="capitalize text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-teal-400">
            Discover Your Next Adventure
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl leading-relaxed text-gray-300">
            Keep track of your travels effortlessly. WorldWise makes it simple
            to plan, organize, and relive your journeys with ease.
          </p>
          <button
            onClick={() => Navigate("/Login")}
            className="px-6 py-3 rounded-full bg-teal-500 text-gray-900 font-semibold text-lg hover:bg-teal-400 hover:text-gray-800 hover:shadow-lg transition-all"
          >
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
