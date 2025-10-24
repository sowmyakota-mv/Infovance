import React from "react";
import ScrollAnimation from "../animation/ScrollAnimation";

const stats = [
  {
    number: "500+",
    label: "Successful Projects",
    desc: "Delivered innovative solutions that drive measurable business outcomes.",
    colors: ["#FF6B00", "#FFA64D", "#FFD9B3"],
  },
  {
    number: "200+",
    label: "Global Clients",
    desc: "Trusted by organizations across industries and continents.",
    colors: ["#0077B6", "#3399CC", "#99CCE5"],
  },
  {
    number: "10+",
    label: "Years of Experience",
    desc: "Proven expertise in digital transformation and technology innovation.",
    colors: ["#00965B", "#33B87C", "#99E0C1"],
  },
  {
    number: "15+",
    label: "Industry Awards",
    desc: "Recognized for excellence in innovation, delivery, and design.",
    colors: ["#E91E63", "#F47B9D", "#F9C0D1"],
  },
];

const StatsSection: React.FC = () => {
  const size = 180;
  const strokeWidth = 8;
  const gapPx = 6;

  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
        
      <div className="text-center mb-12"><ScrollAnimation delay={100}>
        <h4 className="text-orange-600 font-semibold uppercase tracking-wide">
          Key Achievements
        </h4></ScrollAnimation>
        <ScrollAnimation delay={300}>
        <h2 className="text-3xl md:text-4xl font-extrabold text-orange-900 mt-2">
          Transforming Businesses, One Milestone at a Time
        </h2></ScrollAnimation>
        <ScrollAnimation delay={500}>
        <p className="text-gray-700 mt-3 max-w-5xl mx-auto text-lg">
          Infovance empowers global organizations with forward-thinking digital solutions, delivering measurable impact, operational efficiency, and unparalleled innovation.
        </p></ScrollAnimation>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
        {stats.map((item, index) => {
          const radius = size / 2 - strokeWidth / 2;
          const circumference = 2 * Math.PI * radius;

          // Gap in fraction of circumference
          const gapFraction = gapPx / circumference;

          // Arc fractions with gaps
          const arcFractions = [0.25, 0.5, 0.25].map((f) => f - gapFraction);

          // Cumulative offsets for each arc
          const offsets = [
            0,
            circumference * (arcFractions[0] + gapFraction),
            circumference * (arcFractions[0] + arcFractions[1] + 2 * gapFraction),
          ];

          return (

            <div key={index} className="flex flex-col items-center">
              <div className="relative flex items-center justify-center mb-6">
                <ScrollAnimation delay={700}>
                <svg width={size} height={size}>
                  {item.colors.map((color, i) => (
                    <circle
                      key={i}
                      r={radius}
                      cx={size / 2}
                      cy={size / 2}
                      stroke={color}
                      strokeWidth={strokeWidth}
                      fill="transparent"
                      strokeDasharray={`${circumference * arcFractions[i]} ${circumference}`}
                      strokeDashoffset={-offsets[i]}
                      transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    />
                  ))}
                </svg></ScrollAnimation>

                {/* Center Number */}
                <div className="absolute flex flex-col items-center justify-center text-center">
                    <ScrollAnimation delay={900}>
                  <h3 className="text-3xl font-bold text-orange-900">{item.number}</h3>
                 </ScrollAnimation>
                 <ScrollAnimation delay={1100}> <p className="text-2xs font-semibold text-gray-700">{item.label}</p>
                </ScrollAnimation></div>
              </div>
              <ScrollAnimation delay={1300}>
              <p className="text-center text-gray-700 text-sm max-w-xs">{item.desc}</p>
            </ScrollAnimation></div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;
