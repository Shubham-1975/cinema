import React, { useEffect, useState } from "react";

const ThirdSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 9000;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / end), 1);
    const interval = setInterval(() => {
      start += 50;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, stepTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white text-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="md:col-span-1 text-center md:text-left space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            A family of{" "}
            <span className="text-yellow-500">{count.toLocaleString()}+</span>{" "}
            Members
          </h2>
          <p className="text-lg font-medium text-gray-600">
            and still growing!
          </p>
          <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
            JOIN ACTADCO NOW!
          </button>
        </div>

        {/* Right: Image spans 2/3 */}
        <div className="md:col-span-2">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPFGLtZMRDYEqM5yjX2f5DuNB8_Dkzg4_9B7dMvkGLjQx0-v9Z_HCAjLO_hBRC8AarjeejLhbr62VEhyphenhyphenOPJ7LpfcCr3INH3vz0Fe51f_4Z7M7hyK1CJhqs1iJnKpkOHS4O2ErPXzC27nM/s1600/Bollywood+Actors+Date+Of+Birth.jpg"
            alt="ACTADCO Members"
            className="w-full h-auto rounded-xl shadow-lg object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
