import { motion } from "framer-motion";
import { BarChart3, PieChart, Database, LineChart, Brain, Cloud } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function DataAnalytics() {
     const sectionRef = useRef<HTMLDivElement>(null);
          const [animate, setAnimate] = useState(false);
          const navigate=useNavigate()
        
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
    
  return (
    <section id="/trainings/data-analytics" className="w-full min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-800 overflow-hidden">
        {/* ===== HERO SECTION ===== */}
      <div
        ref={sectionRef}
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* 🎥 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          src="/data-analytics-hero.mp4"
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
            {"Data Analytics & Power BI".split("").map((letter, i) => (
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
        </div>
      </div>
      {/* ===== HERO SECTION ===== */}
      <div className="text-center py-12 px-6 md:px-16">
        <ScrollAnimation delay={200}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-900 mb-4">
            Data Analytics & Power BI
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Turn raw data into powerful insights! Master tools and techniques
            used by top data professionals to make data-driven decisions using
            Excel, Power BI, and modern analytics platforms.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={600}>
          <button onClick={()=>navigate("/connect")} className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full">
            Enroll Now
          </button>
        </ScrollAnimation>
      </div>

      {/* ===== WHAT YOU WILL LEARN ===== */}
      <div className="py-12 px-6 md:px-20 bg-white">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-orange-900 mb-12">
            What You’ll Learn
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Database className="w-10 h-10 text-orange-600" />,
              title: "Data Analysis Fundamentals",
              desc: "Understand data collection, cleaning, transformation, and visualization techniques.",
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-orange-600" />,
              title: "Advanced Excel & Reporting",
              desc: "Use Excel functions, pivot tables, and dashboards for professional data reporting.",
            },
            {
              icon: <PieChart className="w-10 h-10 text-orange-600" />,
              title: "Power BI for Business Intelligence",
              desc: "Build stunning interactive dashboards and reports using Microsoft Power BI.",
            },
            {
              icon: <LineChart className="w-10 h-10 text-orange-600" />,
              title: "Data Visualization Techniques",
              desc: "Learn best practices for visual storytelling with data using charts and graphs.",
            },
            {
              icon: <Brain className="w-10 h-10 text-orange-600" />,
              title: "Data-Driven Decision Making",
              desc: "Interpret insights and build reports that support strategic business decisions.",
            },
            {
              icon: <Cloud className="w-10 h-10 text-orange-600" />,
              title: "Cloud & Big Data Integration",
              desc: "Connect Power BI with Azure, SQL, and cloud-based data sources for enterprise analytics.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-orange-50 rounded-3xl shadow-lg p-8 text-center border border-orange-100 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-orange-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== PROGRAM HIGHLIGHTS ===== */}
      <div className="py-20 px-6 md:px-20 text-center">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-900 mb-12">
            Why Choose This Program?
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Real-World Datasets",
              desc: "Work on business datasets to extract insights and create professional dashboards.",
            },
            {
              title: "Industry Tools",
              desc: "Gain expertise with Excel, SQL, Power BI, and Google Data Studio for analytics projects.",
            },
            {
              title: "Career-Ready Training",
              desc: "Get project guidance, resume reviews, and placement support to land data roles.",
            },
          ].map((item, i) => (
            <ScrollAnimation key={i} delay={400 + i * 100}>
              <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-500 border border-orange-100">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* ===== CALL TO ACTION ===== */}
      <div className="py-20 bg-orange-300  text-center">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Become a Data Analytics Professional
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Learn how to transform data into insights using the most powerful
            analytics and visualization tools. Start your journey today!
          </p>
        </ScrollAnimation>
        <button onClick={()=>navigate("/connect")} className="bg-white text-orange-700 hover:bg-orange-100 text-lg px-8 py-6 rounded-full">
          Apply Now
        </button>
      </div>
    </section>
  );
}
