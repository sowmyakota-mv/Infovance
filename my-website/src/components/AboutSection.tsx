// src/components/AboutSection.tsx
import React from "react";
import { ArrowRight, Cloud, Quote, Zap } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useNavigate } from "react-router-dom";

const AboutSection: React.FC = () => {
  const navigate=useNavigate()
  return (
    <ScrollAnimation delay={300}>
    <section className="w-full bg-white py-12 -mb-10 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
      {/* --- Left Side: Image --- */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/Vision In Action.png"
          alt="About Infovance"
          className="rounded-3xl shadow-xl w-full max-w-md object-cover"
        />
      </div>

      {/* --- Right Side: Content --- */}
      <div className="w-full md:w-1/2 flex flex-col space-y-2 text-left">
        {/* About Title */}
        <div>
            <ScrollAnimation delay={500}>
          <h4 className="text-orange-500 font-semibold uppercase tracking-wide">
            About Infovance
          </h4></ScrollAnimation>
          <ScrollAnimation delay={700}>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mt-2">
            Crafting Digital Futures with Purpose & Precision
          </h2></ScrollAnimation>
          <ScrollAnimation delay={900}>
         <p className="text-gray-700 text-sm mt-3 line-clamp-2">
  At <span className="font-semibold text-orange-900">Infovance</span>, we fuse creativity and technology to accelerate your digital transformation journey. Our team crafts innovative solutions that deliver measurable impact, elevate experiences, and drive sustainable growth.
</p></ScrollAnimation>
        </div>
     <div className="flex flex-col md:flex-row items-start gap-4 mt-8">
  {/* --- Left Column: Two Boxes --- */}
  
  <div className="flex flex-col gap-4 md:w-3/5">
    {/* Our Services Box */}
    
    <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-md w-full">
     <ScrollAnimation delay={1100}> <div className="w-10 h-10 rounded-full bg-[#fdba02] flex items-center justify-center mt-4 -ml-4">
        <Cloud className="w-10 h-5 text-white" />
      </div></ScrollAnimation>
      <div>
        <ScrollAnimation delay={1300}>
        <h3 className="font-bold text-lg text-orange-900 -ml-2">Our Services</h3>
        </ScrollAnimation>
        <ScrollAnimation delay={1500}><p className="text-gray-700 text-sm -ml-2 line-clamp-2">
  End-to-end digital solutions tailored to your business needs.
</p></ScrollAnimation>
      </div>
    </div>

    {/* Innovation & Strategy Box */}
    <div className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-md w-full">
      <ScrollAnimation delay={1700}> <div className="w-10 h-10 rounded-full bg-[#fdba02] flex items-center justify-center mt-4 -ml-4">
        <Zap className="w-10 h-5 text-white" />
      </div></ScrollAnimation>
      <div>
        <ScrollAnimation delay={1900}>
        <h3 className="font-bold text-lg text-orange-900 -ml-2">Innovation & Strategy</h3>
        </ScrollAnimation>
        <ScrollAnimation delay={2100}><p className="text-gray-700 text-sm -ml-2 line-clamp-2">
  Driving smart, creative solutions that accelerate business growth.
</p></ScrollAnimation>
      </div>
    </div>
  </div>

  {/* --- Right Column: Review Box --- */}
<div className="relative md:w-2/5 mt-4">
  <div className="bg-purple-50 rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
    <ScrollAnimation delay={2300}><div className="flex-1">
      <p className="text-gray-800 italic">
        “Infovance completely transformed our digital presence. Their team
        truly understands innovation and customer experience!”
      </p>
    </div></ScrollAnimation>

    {/* Quote Icon Circle */}
    <ScrollAnimation delay={2500}>
    <div className="absolute right-4 -bottom-10 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shadow-md">
      <Quote className="w-6 h-6 text-purple-600" />
    </div></ScrollAnimation>
  </div>
</div>
</div>

        {/* --- Curved Rectangular Box: Learn More --- */}
        <ScrollAnimation delay={2700}>
        <div onClick={()=>navigate("/about-infovance")} className="w-[250px] md:w-1/2 bg-orange-500 text-white rounded-2xl px-6 py-4 flex items-center justify-between hover:bg-orange-600 transition-all duration-300 cursor-pointer shadow-md">
          <ScrollAnimation delay={2900}><span className="font-semibold text-lg">Learn More About Us</span>
         </ScrollAnimation>
         <ScrollAnimation delay={3100}> <ArrowRight className="w-6 h-6" /></ScrollAnimation>
        </div></ScrollAnimation>
      </div>
    </section></ScrollAnimation>
  );
};

export default AboutSection;
