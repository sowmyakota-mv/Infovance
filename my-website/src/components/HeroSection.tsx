import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";

const HeroSection: React.FC = () => {
  return (
    <ScrollAnimation delay={300}>
    <section
  className="relative w-screen h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 overflow-hidden mt-0"
  style={{
    backgroundImage: 'url("/Hero BG.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      {/* --- Left Content (Text) --- */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 z-10 order-first">
        {/* Tagline with Image */}
        <div className="flex items-center gap-2 justify-center md:justify-start mt-4 md:mt-0">
          <ScrollAnimation delay={600}><img
            src="/waving.png"
            alt="Waving Hand"
            className="w-7 h-7 animate-bounce"
          /></ScrollAnimation>
          <ScrollAnimation delay={900}>
          <h4 className="text-[#fdba02] font-medium tracking-wide uppercase">
            We’re Here to Help You Grow
          </h4></ScrollAnimation>
        </div>

        {/* Title */}
        <ScrollAnimation delay={1200}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3A8A] leading-snug md:leading-tight">
          Turning Vision Into <span className="text-orange-500">Digital Reality</span>
        </h1></ScrollAnimation>

        {/* Paragraph */}
        <ScrollAnimation delay={1500}>
        <p className="text-sm sm:text-base md:text-lg text-[#1E40AF] max-w-sm md:max-w-md leading-relaxed">
          At <span className="font-semibold text-orange-600">Infovance</span>, we help you transform ideas into impactful digital experiences. Let’s innovate, create, and grow together in a world driven by change.
        </p></ScrollAnimation>

        {/* Button */}
        <ScrollAnimation delay={1800}>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-5 sm:py-3 sm:px-4 rounded-full transition-all duration-300">
          Let’s Get Started
        </button></ScrollAnimation>
      </div>

      {/* --- Right Hero Image (Below text on mobile) --- */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 order-last md:order-last md:mt-72">
        <ScrollAnimation delay={1000}><img
          src="/hero-img.png"
          alt="Digital innovation at Infovance"
          className="w-3/4 sm:w-2/3 md:w-full max-w-md rounded-2xl shadow-lg"
        /></ScrollAnimation>
      </div>

      {/* --- Sloped Bottom Shape --- */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-white [clip-path:polygon(0%_40%,100%_100%,100%_100%,0_100%)]"></div>
    </section></ScrollAnimation>
  );
};

export default HeroSection;
