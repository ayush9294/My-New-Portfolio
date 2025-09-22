// ProfilePhoto.jsx
import React from "react";

export default function ProfilePhoto() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative group">
        {/* Profile Image */}
        <img
          src="/profile.jpg" // <-- replace with your actual photo path
          alt="Aayush Chaturvedi"
          className="w-52 h-52 rounded-full object-cover shadow-lg 
                     transition-transform duration-500 
                     group-hover:scale-105 group-hover:rotate-2"
        />

        {/* Glow Effect */}
        <div
          className="absolute inset-0 rounded-full border-4 border-blue-500 
                     opacity-50 blur-md transition-all duration-500
                     group-hover:opacity-100 group-hover:blur-xl"
        ></div>
      </div>
    </div>
  );
}
