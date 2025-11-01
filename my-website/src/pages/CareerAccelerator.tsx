import { motion } from "framer-motion";
import {
  UserCheck,
  Briefcase,
  Target,
  Lightbulb,
  Users,
  BarChart,
  Award,
} from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CareerAccelerator() {
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
    <section id="/trainings/career-accelerator" className="w-full min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-800 overflow-hidden">
            {/* ===== HERO SECTION ===== */}
          <div
            ref={sectionRef}
            className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden"
          >
            {/* 🎥 Background Video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
              src="/career-hero2.mp4"
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
                className="text-3xl md:text-5xl font-extrabold text-white mt-72 tracking-wide flex flex-wrap justify-center"
                style={{ fontFamily: "'PT Serif', serif" }}
              >
                {"Start Your Professional  Journey with Infovance".split("").map((letter, i) => (
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
            Career Accelerator Program
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Empower your professional journey with career-driven training,
            mentorship, and hands-on experience. Our Career Accelerator is
            designed to prepare you for high-growth roles in the modern tech world.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={600}>
          <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full">
            Enroll Now
          </button>
        </ScrollAnimation>
      </div>

      {/* ===== PROGRAM BENEFITS ===== */}
      <div className="py-12 px-6 md:px-20 bg-white">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-orange-900 mb-12">
            What You’ll Gain from the Program
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Lightbulb className="w-10 h-10 text-orange-600" />,
              title: "Personalized Mentorship",
              desc: "Get guided by experts who tailor your learning and career roadmap to your goals.",
            },
            {
              icon: <BarChart className="w-10 h-10 text-orange-600" />,
              title: "Career Growth Framework",
              desc: "Develop the technical, communication, and leadership skills needed to excel in your field.",
            },
            {
              icon: <UserCheck className="w-10 h-10 text-orange-600" />,
              title: "Job-Ready Portfolio",
              desc: "Build real-world projects and certifications to strengthen your career credibility.",
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
            Program Journey
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Target className="w-8 h-8 text-orange-600" />,
              title: "Phase 1: Skill Assessment",
              desc: "Identify your strengths and areas of improvement through personalized evaluation.",
            },
            {
              icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
              title: "Phase 2: Upskilling & Projects",
              desc: "Work on hands-on projects and build a professional portfolio showcasing your expertise.",
            },
            {
              icon: <Users className="w-8 h-8 text-orange-600" />,
              title: "Phase 3: Soft Skills & Interview Prep",
              desc: "Get trained in communication, resume writing, and mock interviews with HR experts.",
            },
            {
              icon: <Briefcase className="w-8 h-8 text-orange-600" />,
              title: "Phase 4: Placement Support",
              desc: "Access exclusive hiring opportunities, job fairs, and placement drives through our network.",
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
          <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-900 mb-6">
            Become a Job-Ready Professional
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={600}>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            The Career Accelerator helps you transition seamlessly from learning
            to employment. Our team ensures that you are not just skilled, but
            also confident, connected, and career-ready.
          </p>
        </ScrollAnimation>
        <button onClick={()=>navigate("/connect")} className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-full">
          Start Your Journey
        </button>
      </div>

      {/* ===== COMPANY PARTNERS ===== */}
      <div className="py-16 px-6 md:px-20 bg-orange-100">
        <ScrollAnimation delay={200}>
          <h3 className="text-2xl md:text-4xl font-bold text-center text-orange-900 mb-10">
            Trusted by Hiring Partners
          </h3>
        </ScrollAnimation>
        <div className="flex flex-wrap justify-center gap-8 opacity-80">
          {["Google", "Microsoft", "TCS", "Infosys", "Accenture", "Amazon"].map((company, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-white px-6 py-3 rounded-full shadow-md border border-orange-200 text-orange-700 font-semibold"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
