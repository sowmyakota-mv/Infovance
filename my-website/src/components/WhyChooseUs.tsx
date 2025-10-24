// src/components/WhyChooseUs.tsx
import React from "react";
import { ShieldCheck, Users, Rocket, ThumbsUp } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const features = [
  {
    icon: ShieldCheck,
    title: "Proven Expertise",
    desc: "Our team brings years of cross-industry experience, ensuring every solution we deliver meets enterprise standards.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    desc: "We collaborate closely with clients, adapting to their vision, goals, and timelines for unmatched satisfaction.",
  },
  {
    icon: Rocket,
    title: "Innovation-Driven",
    desc: "We embrace emerging technologies and creative thinking to craft future-ready, scalable digital solutions.",
  },
  {
    icon: ThumbsUp,
    title: "Quality & Reliability",
    desc: "Our quality assurance practices ensure every product we deliver is dependable, secure, and high-performing.",
  },
];

// Card background colors
const cardColors = ["#f9eae0ff", "#e7f4f9ff", "#ecfae7ff", "#faf4f7ff"];
// Icon & border colors for contrast
const iconColors = ["#FF6B00", "#0077B6", "#00965B", "#E91E63"];

const WhyChooseUs: React.FC = () => {
  return (
    <ScrollAnimation delay={100}>
    <section className="w-full bg-white py-4 px-6 md:px-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <ScrollAnimation delay={200}>
        <h4 className="text-orange-600 font-semibold uppercase tracking-widest">
          What Sets Us Apart
        </h4></ScrollAnimation>
        <ScrollAnimation delay={300}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-900 mt-2 leading-tight">
          Driving Meaningful Digital Impact
        </h2></ScrollAnimation>
        <ScrollAnimation delay={400}>
        <p className="text-gray-700 mt-4 max-w-4xl mx-auto text-lg">
          At <span className="font-semibold text-orange-600">Infovance</span>, we don’t just deliver technology — we create impactful solutions. Discover why leading businesses trust <span className="font-semibold text-orange-600">Infovance</span> to accelerate innovation, streamline operations, and transform their digital journeys.
        </p></ScrollAnimation>
      </div>

      {/* Feature Cards */}
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 text-center flex flex-col items-center"
              style={{ backgroundColor: cardColors[index] }}
            >
              {/* Circular Icon with white background and border */}
              <ScrollAnimation delay={800}><div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 bg-white"
                style={{ borderColor: iconColors[index] }}
              >
                <IconComponent className="w-8 h-8" style={{ color: iconColors[index] }} />
              </div></ScrollAnimation>
              <ScrollAnimation delay={1000}>
              <h3 className="text-lg font-semibold text-orange-900 mb-2 mt-4">
                {feature.title}
              </h3></ScrollAnimation>
              <ScrollAnimation delay={1100}>
              <p className="text-gray-700 text-sm">{feature.desc}</p>
            </ScrollAnimation></div>
          );
        })}
      </div>
    </section></ScrollAnimation>
  );
};

export default WhyChooseUs;
