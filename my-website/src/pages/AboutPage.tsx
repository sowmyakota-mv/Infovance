import React, { useEffect, useRef, useState } from "react";
import { Lightbulb, Target, Users, Rocket } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(false); // reset before re-trigger
            setTimeout(() => setAnimate(true), 50);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const title = "About Infovance";
  const paragraph =
    "We’re  forward-thinking technology company empowering businesses to the innovate, transform, and scale in the digital era.";

  return (
    <section id="about-infovance" className="mt-16 w-full relative text-gray-900">
      {/* ===== HERO SECTION ===== */}
      <div
        ref={sectionRef}
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* 🎥 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          src="/about-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-[2]"></div>

        {/* Animated Heading and Paragraph */}
        <div className="relative z-[3] px-6">
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-wide flex flex-wrap justify-center"
            style={{ fontFamily: "'PT Serif', serif" }}
          >
            {title.split("").map((letter, i) => (
              <span
                key={i}
                className="inline-block opacity-0"
                style={{
                  animation: animate ? `letterEnter 0.6s forwards` : "none",
                  animationDelay: animate ? `${i * 0.08}s` : "0s",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
            {paragraph.split("").map((letter, i) => (
  <span
    key={i}
    className="inline-block opacity-0"
    style={{
      animation: animate ? `fadeIn 0.02s forwards` : "none",
      animationDelay: animate ? `${i * 0.01}s` : "0s",
    }}
  >
    {letter === " " ? "\u00A0" : letter}
  </span>
))}
          </p>
        </div>
      </div>

      {/* ===== OUR STORY ===== */}
      <div className="w-full px-6 md:px-16">
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/about-journey.jpg"
            alt="Our Story"
            className="rounded-3xl shadow-lg w-90 h-[260px] object-cover ml-24"
          />
          <ScrollAnimation delay={200}>
            <div>
              <h2 className="text-3xl font-bold text-left text-orange-900 mb-4">
                Our Journey of Innovation
              </h2>
              <p className="text-gray-700 text-left leading-relaxed mb-4">
                Founded with the belief that technology can create meaningful
                impact, Infovance has been helping global businesses reimagine
                their processes through innovation, strategy, and design.
              </p>
              <p className="text-gray-700 text-left leading-relaxed">
                We combine creativity and technical expertise to deliver
                solutions that not only meet but exceed expectations driving
                measurable growth and digital excellence.
              </p>
            </div>
          </ScrollAnimation>
        </div>

        {/* ===== MISSION, VISION, VALUES ===== */}
<div className="mt-20 text-center">
  <h2 className="text-3xl font-bold text-orange-900 mb-10">
    Our Purpose and Principles
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {[ 
      {
        icon: <Target className="w-10 h-10 text-orange-600 mx-auto mb-4" />,
        title: "Our Mission",
        text: "To empower organizations with innovative digital solutions that accelerate transformation and sustainable success."
      },
      {
        icon: <Rocket className="w-10 h-10 text-orange-600 mx-auto mb-4" />,
        title: "Our Vision",
        text: "To become a global leader in innovation and digital transformation by redefining how technology drives growth."
      },
      {
        icon: <Users className="w-10 h-10 text-orange-600 mx-auto mb-4" />,
        title: "Our Values",
        text: "Collaboration, Integrity, Excellence, and Customer-Centric Innovation define everything we do."
      }
    ].map((item, i) => (
      <ScrollAnimation delay={i * 100} key={i}>
        <div className="bg-orange-50 rounded-3xl p-8 shadow-md hover:scale-105 transition-all flex flex-col justify-between h-full min-h-[250px]">
          <div>
            {item.icon}
            <h3 className="text-xl font-semibold text-orange-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.text}</p>
          </div>
        </div>
      </ScrollAnimation>
    ))}
  </div>
</div>
        {/* ===== WHY CHOOSE US ===== */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-orange-900 mb-10">
            Why Choose Infovance?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[ 
              { icon: <Lightbulb className="w-8 h-8 text-orange-600" />, title: "Innovation-First" },
              { icon: <Users className="w-8 h-8 text-orange-600" />, title: "Client-Focused" },
              { icon: <Rocket className="w-8 h-8 text-orange-600" />, title: "Agile Execution" },
              { icon: <Target className="w-8 h-8 text-orange-600" />, title: "Result-Oriented" },
            ].map((item, i) => (
              <ScrollAnimation delay={i * 100} key={i}>
                <div className="bg-white rounded-3xl p-8 shadow-md border border-orange-100 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-orange-900">
                    {item.title}
                  </h3>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* ===== CTA SECTION ===== */}
        <ScrollAnimation delay={300}>
          <div className="text-center mt-24 bg-gradient-to-r from-orange-100 to-orange-300 text py-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Discover Our Innovation</h2>
            <p className="text-lg mb-6">
              Learn how our innovative mindset turns ideas into scalable success.
            </p>
            <button
              onClick={() => (window.location.href = "/innovation")}
              className="bg-white text-orange-700 font-semibold px-8 py-3 rounded-full hover:bg-orange-100 transition-all duration-300"
            >
              Explore Innovation
            </button>
          </div>
        </ScrollAnimation>
      </div>

      {/* ===== CSS Animations ===== */}
      <style>{`
        @keyframes letterEnter {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default About;
