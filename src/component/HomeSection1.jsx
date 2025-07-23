import React from "react";

const HomeSection1 = () => {
  return (
  <div className="relative w-full h-[60vh] sm:h-[80vh] lg:h-[110vh] md:h-[160vh] bg-black bg-opacity-60">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://www.shutterstock.com/image-photo/director-photography-camera-his-hands-600nw-2322694091.jpg"
          alt="CINTAA Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-blac bg-opacity-40"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-6 sm:px-10 lg:px-20 py-20 sm:py-28">
        {/* Left Section - Title */}
        <div className="text-center lg:text-left max-w-2xl space-y-4 mt-40 md:mt-7 lg:mt-30">
          <h2 className="text-xl sm:text-2xl tracking-widest uppercase font-semibold text-green-300">
            Welcome To
          </h2>
          <h1 className="text-xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
            Association of Cine and Television Art Directors and Costume
            Designers
          </h1>
          <h3 className="text-lg sm:text-xl font-medium text-green-100">
            (ACTADCO)
          </h3>
        </div>

        {/* Right Section - Contact Info */}
        <div className="w-full max-w-sm bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-center text-white text-sm sm:text-base">
          <p className="mb-2 font-semibold">
            📧{" "}
            <span className="text-green-200">alliedmazdoorunion@gmail.com</span>
          </p>
          <p className="font-semibold">
            📞 <span className="text-green-200">+91 8104611156</span>
          </p>
        </div>
      </div>

      {/* Bottom Shape/Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>
  );
};

export default HomeSection1;
