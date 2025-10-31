// src/components/ServicesSection.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const services = [
  {
    title: "Cloud Infrastructure & Scalability",
    desc: "Build adaptive, high-performance cloud ecosystems that evolve seamlessly with your business demands. Our team architects cloud-native solutions that are optimized for cost, performance, and resilience helping you scale effortlessly while maintaining top-tier security and reliability.",
  },
  {
    title: "AI-Powered Transformation",
    desc: "Reimagine your workflows with intelligent automation and predictive insights that accelerate innovation. From AI-driven analytics to smart chatbots, we bring advanced machine learning capabilities to unlock hidden value and drive data-informed decisions across your enterprise.",
  },
  {
    title: "Digital Platforms & Experience Engineering",
    desc: "Design and develop intuitive, scalable digital platforms that deliver seamless user experiences. We merge creativity, usability, and technology to build solutions that not only engage customers but also empower organizations to grow in a digital-first world.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-transparent">
      {/* Section Header */}
      <div className="text-center mb-14">
        <ScrollAnimation delay={100}>
        <h4 className="text-orange-600 font-semibold uppercase tracking-widest">
          What We Do
        </h4></ScrollAnimation>
        <ScrollAnimation delay={300}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-orange-900 mt-3 leading-tight">
          Transforming Ideas Into Intelligent Digital Realities
        </h2></ScrollAnimation>
        <ScrollAnimation delay={500}>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
          We craft future-ready solutions that merge design, technology, and
          strategy empowering organizations to lead with innovation and agility.
        </p></ScrollAnimation>
      </div>

      {/* Service Cards */}
      <ScrollAnimation delay={700}>
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-orange-50 to-white border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between rounded-b-[5px] overflow-hidden hover:-translate-y-[6%]"
          >
            <div>
                <ScrollAnimation delay={900}>
              <h3 className="text-xl font-semibold text-orange-900 mb-3">
                {service.title}
              </h3></ScrollAnimation>
              <ScrollAnimation delay={1100}>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {service.desc}
              </p></ScrollAnimation>
            </div>

            {/* Centered Rounded Button */}
            {/* <div className="flex justify-center">
                <ScrollAnimation delay={1300}>
              <button className="flex items-center gap-2 text-orange-600 border border-orange-600 px-5 py-2 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button></ScrollAnimation>
            </div> */}

            {/* Bottom Rectangular Box */}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-500 rounded-b-[5px]" />
          </div>
        ))}
      </div></ScrollAnimation>
    </section>
  );
};

export default ServicesSection;
