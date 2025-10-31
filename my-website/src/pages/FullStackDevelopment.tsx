import { motion } from "framer-motion";
import { Code2, Layers, Database, MonitorSmartphone, Rocket, Users } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useEffect, useRef, useState } from "react";
import { FaAws, FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";


export default function FullStackDevelopment() {
    const sectionRef = useRef<HTMLDivElement>(null);
      const [animate, setAnimate] = useState(false);
      const techStack = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600 w-12 h-12" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 w-12 h-12" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 w-12 h-12" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 w-12 h-12" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-12 h-12" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-12 h-12" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 w-12 h-12" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500 w-12 h-12" /> },
];
    
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
    <section id="trainings/full-stack-development" className="w-full overflow-hidden bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-800">
        {/* ===== HERO SECTION ===== */}
      <div
        ref={sectionRef}
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* 🎥 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          src="/full-stack.mp4"
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
            className="text-3xl md:text-7xl font-extrabold text-white mb-6 tracking-wide flex flex-wrap justify-center"
            style={{ fontFamily: "'PT Serif', serif" }}
          >
            {"FullStack  Development".split("").map((letter, i) => (
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
      {/* ===== Hero Section ===== */}
      <div className="relative w-full py-16 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-orange-900"
        >
          Full Stack Development Program
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mt-6 leading-relaxed text-gray-700"
        >
          Become a job-ready Full Stack Developer by mastering both{" "}
          <span className="text-orange-700 font-semibold">front-end</span> and{" "}
          <span className="text-orange-700 font-semibold">back-end</span> technologies through real-world projects and expert guidance.
        </motion.p>
        <motion.a
          href="/connect"
          whileHover={{ scale: 1.08 }}
          className="mt-10 bg-orange-600 text-white px-8 py-3 rounded-full shadow-lg font-semibold hover:bg-orange-700 transition-all"
        >
          Enroll Now
        </motion.a>

        {/* Floating Glow */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-300/20 blur-3xl rounded-full animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-400/20 blur-3xl rounded-full animate-float-slower"></div>
      </div>

      {/* ===== Course Overview ===== */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-900 text-center mb-10">
            Why Choose Full Stack Development?
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Layers className="w-10 h-10 text-orange-500" />,
              title: "End-to-End Expertise",
              desc: "Gain complete knowledge of both client-side and server-side technologies to build robust applications.",
            },
            {
              icon: <Rocket className="w-10 h-10 text-orange-500" />,
              title: "Project-Based Learning",
              desc: "Learn through real-world projects and case studies that simulate modern tech industry challenges.",
            },
            {
              icon: <Users className="w-10 h-10 text-orange-500" />,
              title: "Career-Driven Curriculum",
              desc: "Get trained on tools, frameworks, and workflows that companies use today for high-demand roles.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 p-8 rounded-2xl shadow-md hover:shadow-xl text-center transition-all"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-orange-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Curriculum Highlights ===== */}
      <div className="bg-orange-50 py-24 px-6">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-900 text-center mb-16">
            What You’ll Learn
          </h2>
        </ScrollAnimation>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            {
              title: "Front-End Development",
              desc: "HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS - build beautiful and responsive UIs.",
            },
            {
              title: "Back-End Development",
              desc: "Node.js, Express.js, RESTful APIs, authentication, and server-side rendering.",
            },
            {
              title: "Database Management",
              desc: "Learn MongoDB and PostgreSQL to store, query, and manage application data efficiently.",
            },
            {
              title: "Version Control & Deployment",
              desc: "Git, GitHub, CI/CD, and deploying apps on AWS, Vercel, or Netlify.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-orange-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== Tools & Technologies ===== */}
      <div className="py-12 px-6 text-center max-w-6xl mx-auto">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-900 mb-12">
            Tools & Technologies You’ll Master
          </h2>
        </ScrollAnimation>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center mt-10">
  {techStack.map((tech, index) => (
    <div key={index} className="flex flex-col items-center">
      {tech.icon}
      <p className="mt-2 text-sm font-semibold text-gray-700">{tech.name}</p>
    </div>
  ))}
</div>
      </div>

      {/* ===== Career Outcomes ===== */}
      <div className="bg-gradient-to-r from-orange-100 to-white py-24 px-6 text-center">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-900 mb-8">
            Career Outcomes
          </h2>
        </ScrollAnimation>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-10">
          Become industry-ready for roles such as Full Stack Developer, Frontend Engineer, Backend Engineer, or Software Developer.
        </p>
        <motion.a
          href="/connect"
          whileHover={{ scale: 1.08 }}
          className="inline-block bg-orange-600 text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-orange-700 transition-all"
        >
          Apply Now
        </motion.a>
      </div>

      {/* Animations */}
      <style>{`
        .animate-float-slow {
          animation: float 10s ease-in-out infinite alternate;
        }
        .animate-float-slower {
          animation: float 16s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0); }
          100% { transform: translateY(25px); }
        }
      `}</style>
    </section>
  );
}
