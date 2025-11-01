import { motion } from "framer-motion";
import {
  PenTool,
  Palette,
  Monitor,
  Layers,
  Figma,
  Sparkles,
  Workflow,
  ArrowRight,
  Lightbulb
} from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiAdobexd, SiCanva, SiFigma, SiMiro, SiNotion, SiOpenzeppelin, SiSketch } from "react-icons/si";

export default function UXUIDesignMasterclass() {
  const sectionRef = useRef<HTMLDivElement>(null);
          const [animate, setAnimate] = useState(false);
          const navigate=useNavigate()
        
          const uiuxTools = [
    { name: "Figma", icon: <SiFigma className="text-pink-600 w-10 h-10" /> },
    { name: "Adobe XD", icon: <SiAdobexd className="text-purple-600 w-10 h-10" /> },
    { name: "Sketch", icon: <SiSketch className="text-orange-400 w-10 h-10" /> },
    { name: "Miro", icon: <SiMiro className="text-yellow-500 w-10 h-10" /> },
    { name: "Notion", icon: <SiNotion className="text-black w-10 h-10" /> },
    { name: "Whimsical", icon: <Lightbulb className="text-violet-500 w-10 h-10" /> },
    { name: "Zeplin", icon: <SiOpenzeppelin className="text-amber-500 w-10 h-10" /> },
    { name: "Canva", icon: <SiCanva className="text-cyan-500 w-10 h-10" /> },
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
    <section id="/trainings/ui-ux" className="w-full min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-800 overflow-hidden">
        {/* ===== HERO SECTION ===== */}
      <div
        ref={sectionRef}
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* 🎥 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          src="/uxui-hero.mp4"
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
            {"UX/UI Design".split("").map((letter, i) => (
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
           UX/UI Design Masterclass
          </h1>
        </ScrollAnimation>

        <ScrollAnimation delay={400}>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Master the art of designing intuitive, user-centered digital
            experiences — from research and wireframes to high-fidelity prototypes.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={600}>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => navigate("/connect")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full"
            >
              Apply Now
            </button>
            {/* <a
              href="#curriculum"
              className="inline-flex items-center gap-2 border border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition"
            >
              View Curriculum <ArrowRight className="w-4 h-4" />
            </a> */}
          </div>
        </ScrollAnimation>
      </div>

      {/* WHAT YOU’LL LEARN */}
      <div className="py-12 px-6 md:px-20 bg-white">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-purple-900 mb-12">
            What You’ll Learn
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <PenTool className="w-10 h-10 text-purple-600" />,
              title: "UX Research & Analysis",
              desc: "Understand user behavior through research, interviews, and data.",
            },
            {
              icon: <Monitor className="w-10 h-10 text-purple-600" />,
              title: "UI Visual Design",
              desc: "Create beautiful, consistent interfaces that enhance user experience.",
            },
            {
              icon: <Layers className="w-10 h-10 text-purple-600" />,
              title: "Wireframing & Prototyping",
              desc: "Translate ideas into interactive digital prototypes using Figma.",
            },
            {
              icon: <Palette className="w-10 h-10 text-purple-600" />,
              title: "Design Systems",
              desc: "Establish scalable design systems with reusable components.",
            },
            {
              icon: <Sparkles className="w-10 h-10 text-purple-600" />,
              title: "Branding & Aesthetics",
              desc: "Align design identity with brand tone, style, and accessibility.",
            },
            {
              icon: <Workflow className="w-10 h-10 text-purple-600" />,
              title: "Collaboration",
              desc: "Work effectively with developers, clients, and product teams.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.25 }}
              className="bg-purple-50 rounded-3xl shadow-lg p-8 text-center border border-purple-100 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PROGRAM HIGHLIGHTS */}
      <div className="py-12 px-6 md:px-20 text-center">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-purple-900 mb-12">
            Program Highlights
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Real Client Projects",
              desc: "Work on design problems from real startups and products.",
            },
            {
              title: "Portfolio-Ready Work",
              desc: "Build a professional portfolio showcasing your research, design process, and case studies.",
            },
            {
              title: "Design Mentorship",
              desc: "Get personalized feedback from experienced UX/UI designers.",
            },
          ].map((item, i) => (
            <ScrollAnimation key={i} delay={320 + i * 80}>
              <div className="bg-white h-full rounded-2xl shadow-md p-8 hover:shadow-xl border border-purple-100 transition-all duration-500">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* CURRICULUM */}
      {/* <div id="curriculum" className="py-12 px-6 md:px-20 bg-white/70">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            8-Week Curriculum
          </h2>
        </ScrollAnimation>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {curriculum.map((block, idx) => (
            <div key={idx} className="bg-purple-50 rounded-2xl p-6 border border-purple-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-purple-800">{block.week}</h4>
                <span className="text-sm text-gray-600">{block.title}</span>
              </div>
              <ul className="list-none ml-0 space-y-2 text-gray-700">
                {block.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-purple-700">•</span>
                    <span className="text-sm">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}

      {/* TOOLS & TECHNOLOGIES */}
      <div className="py-12 px-6 md:px-20">
      <ScrollAnimation delay={200}>
        <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6 text-center">
          Tools & Technologies
        </h3>
      </ScrollAnimation>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {uiuxTools.map((t, i) => (
          <div
            key={i}
            className="bg-purple-50 rounded-xl p-6 text-center border border-purple-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-center mb-3">{t.icon}</div>
            <p className="text-sm font-medium text-purple-900">{t.name}</p>
          </div>
        ))}
      </div>
    </div>

      {/* CTA SECTION */}
      <div className="py-12 bg-purple-200 text-center">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Become a UX/UI Design Professional
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={400}>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Build beautiful, user-friendly products, collaborate with teams, and
            start your design career with confidence and creativity.
          </p>
        </ScrollAnimation>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/connect")}
            className="bg-white text-purple-700 hover:bg-purple-100 text-lg px-8 py-4 rounded-full"
          >
            Apply Now
          </button>
          {/* <a
            href="/register"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white transition"
          >
            Register <ArrowRight className="w-4 h-4" />
          </a> */}
        </div>
      </div>
    </section>
  );
}
