import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Target,
  Rocket,
  Building,
  CheckCircle,
  Laptop,
  BookOpen,
} from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GraduateInternship() {
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
    <section id="trainings/graduate-internship" className="w-full min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-800 overflow-hidden">
        {/* ===== HERO SECTION ===== */}
      <div
        ref={sectionRef}
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* 🎥 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          src="/internship-hero.mp4"
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
            className="text-5xl md:text-5xl font-extrabold text-white mt-72 tracking-wide flex flex-wrap justify-center"
            style={{ fontFamily: "'PT Serif', serif" }}
          >
            {"Start Your Professional Journey with Infovance".split("").map((letter, i) => (
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
            Graduate Internship Program
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Launch your career with hands-on experience, real-world projects,
            and mentorship from industry professionals. Gain the skills and
            confidence to succeed in today’s tech-driven world.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={600}>
          <button onClick={()=>navigate("/connect")} className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full">
            Apply Now
          </button>
        </ScrollAnimation>
      </div>

      {/* ===== WHY JOIN US ===== */}
      <div className="py-12 px-6 md:px-20 bg-white">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-orange-900 mb-12">
            Why Join Our Internship Program?
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Laptop className="w-10 h-10 text-orange-600" />,
              title: "Practical Learning",
              desc: "Work on live projects that simulate real-world challenges and learn by doing.",
            },
            {
              icon: <Users className="w-10 h-10 text-orange-600" />,
              title: "Expert Mentorship",
              desc: "Receive personalized guidance and skill-building support from industry experts.",
            },
            {
              icon: <Target className="w-10 h-10 text-orange-600" />,
              title: "Career Acceleration",
              desc: "Gain the technical and professional edge needed to secure your first job faster.",
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

      {/* ===== PROGRAM STRUCTURE ===== */}
      <div className="py-12 px-6 md:px-20 bg-orange-50">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-orange-900 mb-12">
            Internship Structure
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <BookOpen className="w-8 h-8 text-orange-600" />,
              title: "Phase 1: Learning & Orientation",
              desc: "Understand tools, workflows, and best practices through hands-on training.",
            },
            {
              icon: <Briefcase className="w-8 h-8 text-orange-600" />,
              title: "Phase 2: Real-Time Projects",
              desc: "Apply your knowledge to solve actual business problems using modern technologies.",
            },
            {
              icon: <Building className="w-8 h-8 text-orange-600" />,
              title: "Phase 3: Industry Exposure",
              desc: "Gain insights from guest lectures, company interactions, and corporate sessions.",
            },
            {
              icon: <CheckCircle className="w-8 h-8 text-orange-600" />,
              title: "Phase 4: Certification & Placement Support",
              desc: "Earn a verified internship certificate and career guidance to secure your role.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg border border-orange-100 transition-all duration-500"
            >
              <div className="flex justify-center mb-3">{step.icon}</div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== OUTCOME SECTION ===== */}
      <div className="py-12 px-6 md:px-20 bg-white text-center">
        <ScrollAnimation delay={200}>
          <Rocket className="w-12 h-12 text-orange-600 mx-auto mb-4" />
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-900 mb-6">
            Unlock Your Career Potential
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={600}>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Our internship program transforms graduates into skilled professionals.
            From technical mastery to communication and teamwork - we prepare you
            for success in every dimension.
          </p>
        </ScrollAnimation>
        <button onClick={()=>navigate("/connect")} className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-full">
          Join the Internship
        </button>
      </div>
    </section>
  );
}
