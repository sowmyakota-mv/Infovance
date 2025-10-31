// src/sections/Trainings.tsx
import { motion } from "framer-motion";
import { GraduationCap, Cpu, BarChart3, Briefcase, Code, Users, ArrowRight } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Link } from "react-router-dom";


export default function Trainings() {
  const programs = [
    {
      icon: <Code className="w-10 h-10 text-orange-500" />,
      title: "Full Stack Development",
      desc: "Master front-end and back-end technologies with hands-on projects guided by industry mentors.",
      bg: "bg-orange-50",
      url: "/trainings/full-stack-development",
    },
    {
      icon: <Cpu className="w-10 h-10 text-orange-500" />,
      title: "AI & Machine Learning",
      desc: "Dive into machine learning, deep learning, and AI-driven applications for real-world problem solving.",
      bg: "bg-orange-100",
      url: "/trainings/ai-ml",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-orange-500" />,
      title: "Data Analytics & Power BI",
      desc: "Learn to interpret data, build dashboards, and generate business insights using advanced analytics tools.",
      bg: "bg-orange-50",
      url: "/trainings/data-analytics"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-orange-500" />,
      title: "Corporate Upskilling",
      desc: "Customized programs designed to equip professionals with leadership, communication, and tech fluency.",
      bg: "bg-orange-100",
      url:"/trainings/corporate-upskilling"
    },
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: "Graduate Internship",
      desc: "Bridge the gap between academics and industry with guided, project-based internships and mentoring.",
      bg: "bg-orange-50",
      url:"/trainings/graduate-internship"
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-orange-500" />,
      title: "Career Accelerator",
      desc: "Get job-ready with resume workshops, mock interviews, and placement support from our experts.",
      bg: "bg-orange-100",
      url:"/trainings/career-accelerator"
    },
  ];

  return (
    <section id="trainings" className="relative w-full py-28 bg-gradient-to-b from-orange-50 via-white to-orange-100 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-20 px-6">
        <ScrollAnimation delay={200}>
          <h4 className="text-orange-600 font-semibold uppercase tracking-widest">
            Trainings
          </h4>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-orange-900 mt-3">
            Upskill. Reskill. Excel.
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={600}>
          <p className="text-gray-700 text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
            Transform your career with <span className="text-orange-700 font-semibold">industry-driven learning programs</span> designed by experts to prepare you for tomorrow’s digital world.
          </p>
        </ScrollAnimation>
      </div>

      {/* Training Programs Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {programs.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`rounded-2xl ${item.bg} shadow-md hover:shadow-xl p-8 flex flex-col items-center text-center transition-all duration-500`}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-orange-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              {item.desc}
            </p>
            <Link to={item.url}
  className="flex items-center gap-2 text-orange-600 font-semibold border border-orange-600 px-5 py-2 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 mt-4">
  Learn More <ArrowRight className="w-5 h-5" />
</Link>

          </motion.div>
        ))}
      </motion.div>

      {/* Learning Approach Section */}
      <div className="mt-24 px-6 md:px-20 text-center max-w-5xl mx-auto">
        <ScrollAnimation delay={300}>
          <h3 className="text-2xl md:text-3xl font-extrabold text-orange-900 mb-8">
            Our Learning Approach
          </h3>
        </ScrollAnimation>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "Live Mentorship", desc: "Interactive instructor-led classes with real-time feedback." },
            { title: "Hands-on Projects", desc: "Work on industry-relevant case studies and simulations." },
            { title: "Flexible Learning", desc: "Learn at your own pace with blended online and offline modules." },
            { title: "Career Support", desc: "Resume reviews, mock interviews, and guaranteed placement assistance." },
          ].map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h4 className="text-orange-800 font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-700 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <motion.a
          whileHover={{ scale: 1.08 }}
          href="/register"
          className="inline-block bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-orange-700 transition-all"
        >
          Join Our Next Training Batch
        </motion.a>
      </div>

      {/* Glow Backgrounds */}
      <div className="absolute top-0 left-10 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-float-slower"></div>

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
