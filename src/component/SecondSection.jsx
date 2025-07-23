import React from "react";

const SecondSection = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://www.shutterstock.com/image-photo/director-photography-camera-his-hands-600nw-2322694091.jpg"
            alt="About ACTADCO"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold border-b-2 border-green-500 inline-block pb-2">
            About ACTADCO
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            Cine and TV Artistes Association, popularly known as{" "}
            <span className="text-green-400 font-semibold">ACTADCO</span> is an
            autonomous body registered under the Indian Trade Union Act.
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            Strictly governed by its constitution, an elected Executive
            Committee manages its day-to-day affairs. From a very humble
            beginning way back in 1958, ACTADCO stands tall as a formidable
            force to reckon with.
          </p>

          <button className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow transition duration-300">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
