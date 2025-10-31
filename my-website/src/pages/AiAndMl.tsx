import { motion } from "framer-motion";
import { Cpu, Brain, Database, Code, BarChart3, Cloud } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AiAndMl() {
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
    <section id="/trainings/ai-ml" className="w-full min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-800 overflow-hidden">
         {/* ===== HERO SECTION ===== */}
      <div
        ref={sectionRef}
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* 🎥 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          src="/ai-ml- hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/50 z-[2]"></div> */}

        {/* Animated Heading and Paragraph */}
        {/* <div className="relative z-[3] px-6">
          <h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-wide flex flex-wrap justify-center"
            style={{ fontFamily: "'PT Serif', serif" }}
          >
            {"Full Stack Development".split("").map((letter, i) => (
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
        </div> */}
      </div>
      {/* ===== HERO SECTION ===== */}
      <div className="text-center py-12 px-6 md:px-16">
        <ScrollAnimation delay={200}>
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-900 mb-4">
            Artificial Intelligence & Machine Learning
          </h1>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Master the future of intelligent systems — learn to build AI models,
            design predictive algorithms, and automate decision-making with
            data-driven solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={600}>
          <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-full">
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
              icon: <Brain className="w-10 h-10 text-orange-600" />,
              title: "Machine Learning Fundamentals",
              desc: "Understand supervised, unsupervised, and reinforcement learning with hands-on examples.",
            },
            {
              icon: <Database className="w-10 h-10 text-orange-600" />,
              title: "Data Science & Analytics",
              desc: "Learn data cleaning, visualization, and feature engineering using Python and Pandas.",
            },
            {
              icon: <Cpu className="w-10 h-10 text-orange-600" />,
              title: "Deep Learning & Neural Networks",
              desc: "Build CNNs and RNNs using TensorFlow & PyTorch to solve real-world AI challenges.",
            },
            {
              icon: <Code className="w-10 h-10 text-orange-600" />,
              title: "AI Model Deployment",
              desc: "Learn to deploy AI/ML models using cloud platforms and modern MLOps practices.",
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-orange-600" />,
              title: "Natural Language Processing (NLP)",
              desc: "Work with text, sentiment analysis, chatbots, and generative AI tools like LLMs.",
            },
            {
              icon: <Cloud className="w-10 h-10 text-orange-600" />,
              title: "AI in the Cloud",
              desc: "Integrate AI solutions using AWS, Azure AI, and Google Cloud Machine Learning APIs.",
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
      <div className="py-12 px-6 md:px-20 text-center">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-900 mb-12">
            Why Choose This Program?
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Hands-on Projects",
              desc: "Work on real AI & ML case studies like recommendation systems and chatbots.",
            },
            {
              title: "Industry-Ready Skills",
              desc: "Gain experience with TensorFlow, PyTorch, and cloud-based AI tools used by top companies.",
            },
            {
              title: "Career Support",
              desc: "Resume building, interview prep, and job placement guidance from industry mentors.",
            },
          ].map((item, i) => (
            <ScrollAnimation key={i} delay={400 + i * 100}>
              <div className="bg-white w-full h-full rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-500 border border-orange-100">
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
      <div className="py-12 bg-orange-300 text-center">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Your AI Journey Today
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Learn from industry experts and get hands-on with the technologies
            shaping the future of AI and Machine Learning.
          </p>
        </ScrollAnimation>
        <button onClick={()=>navigate("/connect")} className="bg-white text-orange-700 hover:bg-orange-100 text-lg px-8 py-6 rounded-full">
          Apply Now
        </button>
      </div>
    </section>
  );
}
