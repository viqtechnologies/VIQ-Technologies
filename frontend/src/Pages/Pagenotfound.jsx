import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0b0b14] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Glitchy 404 Text */}
      <h1 className="relative text-[120px] md:text-[180px] font-black text-white leading-none tracking-tighter animate-glitch">
        404
      </h1>

      {/* Jagged "not found" text */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight opacity-90 italic">
        not found
      </h2>

      {/* Message */}
      <p className="text-gray-400 text-lg md:text-xl font-medium mb-10 max-w-md">
        Oops.. this page doesn't exist.
      </p>

      {/* Action Button */}
      <Link
        to="/"
        className="group flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-blue-600 hover:text-white shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
      >
        <ArrowLeft
          size={20}
          className="transition-transform group-hover:-translate-x-1"
        />
        Go back to home
      </Link>

      {/* Custom CSS for the Glitch Effect */}
      <style jsx>{`
        @keyframes glitch {
          0% {
            text-shadow:
              2px 0 #00d261,
              -2px 0 #ff00c1;
            transform: translate(0);
          }
          20% {
            text-shadow:
              -2px 0 #00d261,
              2px 0 #ff00c1;
            transform: translate(-2px, 2px);
          }
          40% {
            text-shadow:
              2px 0 #00d261,
              -2px 0 #ff00c1;
            transform: translate(-2px, -2px);
          }
          60% {
            text-shadow:
              -2px 0 #00d261,
              2px 0 #ff00c1;
            transform: translate(2px, 2px);
          }
          80% {
            text-shadow:
              2px 0 #00d261,
              -2px 0 #ff00c1;
            transform: translate(2px, -2px);
          }
          100% {
            text-shadow:
              -2px 0 #00d261,
              2px 0 #ff00c1;
            transform: translate(0);
          }
        }
        .animate-glitch {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
            infinite;
          /* Replicating the jagged font look */
          filter: contrast(150%) brightness(120%);
          font-family: "Courier New", Courier, monospace;
        }
      `}</style>
    </div>
  );
};

export default NotFound;
