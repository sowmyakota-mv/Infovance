import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  TrendingUp,
  Globe,
  Lightbulb,
  BarChart3,
  Building2,
  Rocket,
} from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CorporateUpskilling() {
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
    <section id="/trainings/corporate-upskilling" className="w-full min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-800 overflow-hidden">
        {/* ===== HERO SECTION ===== */}
      <div
        ref={sectionRef}
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* 🎥 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          src="/upskilling-hero.mp4"
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
            {"Corporate Upskilling".split("").map((letter, i) => (
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
            Corporate Upskilling Programs
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Empower your workforce with cutting-edge skills in technology,
            analytics, and leadership. We help organizations stay competitive in
            the digital era through customized corporate learning experiences.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={600}>
          <button onClick={()=>navigate("/connect")} className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full">
            Partner With Us
          </button>
        </ScrollAnimation>
      </div>

      {/* ===== PROGRAM PILLARS ===== */}
      <div className="py-20 px-6 md:px-20 bg-white">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-orange-900 mb-12">
            The Pillars of Our Corporate Learning
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Lightbulb className="w-10 h-10 text-orange-600" />,
              title: "Customized Learning Paths",
              desc: "Tailored programs that match your organization’s goals, industry, and team structure.",
            },
            {
              icon: <Users className="w-10 h-10 text-orange-600" />,
              title: "Hands-On Upskilling",
              desc: "Interactive, project-based training designed for real-world problem-solving and innovation.",
            },
            {
              icon: <TrendingUp className="w-10 h-10 text-orange-600" />,
              title: "ROI-Driven Outcomes",
              desc: "Measure progress and performance with data-driven insights and continuous skill tracking.",
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

      {/* ===== INDUSTRY-SPECIFIC TRACKS ===== */}
      <div className="py-12 px-6 md:px-20 bg-orange-50">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-orange-900 mb-12">
            Industry-Specific Upskilling Tracks
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Briefcase className="w-10 h-10 text-orange-600" />,
              title: "Technology & IT Teams",
              desc: "Enhance your developers’ skills in full-stack, AI, data engineering, and DevOps tools.",
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-orange-600" />,
              title: "Business & Analytics Teams",
              desc: "Boost analytical thinking and decision-making with Excel, Power BI, and SQL training.",
            },
            {
              icon: <Building2 className="w-10 h-10 text-orange-600" />,
              title: "Leadership & Management",
              desc: "Develop future-ready leaders with programs in communication, strategy, and change management.",
            },
          ].map((item, i) => (
            <ScrollAnimation key={i} delay={300 + i * 100}>
              <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-500 border border-orange-100 text-center">
                <div className="flex justify-center mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-orange-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* ===== GLOBAL IMPACT SECTION ===== */}
      <div className="py-12 px-6 md:px-20 text-center">
        <ScrollAnimation delay={200}>
          <Globe className="w-14 h-14 text-orange-600 mx-auto mb-6" />
        </ScrollAnimation>
        <ScrollAnimation delay={300}>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-900 mb-6">
            Trusted by Global Enterprises
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            We’ve partnered with top organizations to deliver impactful
            learning solutions that boost innovation, productivity, and
            long-term growth.
          </p>
        </ScrollAnimation>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {["Microsoft", "Accenture", "TCS", "Cognizant", "Amazon", "Capgemini"].map(
            (company, i) => (
              <div
                key={i}
                className="bg-white border border-orange-100 rounded-xl shadow-sm px-6 py-3 text-gray-700 font-medium hover:bg-orange-100/50 transition-all"
              >
                {company}
              </div>
            )
          )}
        </motion.div>
      </div>

      {/* ===== CTA ===== */}
      <div className="py-12 bg-orange-300 text-center">
        <ScrollAnimation delay={200}>
          <Rocket className="w-12 h-12 mx-auto mb-4" />
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Upskill Your Teams for the Future
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={600}>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Partner with us to design training programs that fit your workforce
            and business goals. Let’s future-proof your organization together.
          </p>
        </ScrollAnimation>
        <button onClick={()=>navigate("/connect")} className="bg-white text-orange-700 hover:bg-orange-100 text-lg px-8 py-6 rounded-full">
          Schedule a Consultation
        </button>
      </div>
    </section>
  );
}
