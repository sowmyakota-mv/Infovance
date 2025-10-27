import { Brain, Cloud, Database, Leaf, Palette } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const technologies = [
  {
    icon: <Brain className="w-10 h-10 text-blue-400" />,
    title: "AI & Automation",
    desc: "Reimagining processes through intelligent systems that learn, adapt, and evolve.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-cyan-400" />,
    title: "Cloud & Scalable Solutions",
    desc: "Designing resilient cloud architectures that scale securely with business growth.",
  },
  {
    icon: <Database className="w-10 h-10 text-amber-400" />,
    title: "Data & Analytics",
    desc: "Turning complex data into actionable insights with advanced analytics pipelines.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-green-400" />,
    title: "Sustainable Tech",
    desc: "Innovating responsibly with energy-efficient, eco-friendly digital systems.",
  },
  {
    icon: <Palette className="w-10 h-10 text-pink-400" />,
    title: "Design Innovation",
    desc: "Crafting user-centric, visually immersive digital experiences for modern audiences.",
  },
];

export default function InnovationHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(false); // reset first
            setTimeout(() => setAnimate(true), 50); // trigger animation
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div id="innovation" className="text-white overflow-hidden">
      {/* ========== HERO SECTION WITH LETTER-BY-LETTER ENTER ANIMATION ========== */}
      <section
        ref={sectionRef}
        className="relative w-screen h-80 flex items-center justify-center text-center mt-28"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/innovation-hero.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ScrollAnimation delay={200}>
          <h1
            className="text-7xl md:text-9xl font-extrabold text-white tracking-wider flex flex-wrap justify-center"
            style={{ fontFamily: "'PT Serif', serif" }}
          >
            {"About Us".split("").map((letter, index) => (
              <span
                key={index}
                className="inline-block opacity-0"
                style={{
                  animation: animate ? `letterEnter 0.6s forwards` : "none",
                  animationDelay: animate ? `${index * 0.1}s` : "0s",
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
        </ScrollAnimation>
      </section>

      {/* ========== INNOVATION HERO WITH WHITE BACKGROUND AND TWO-LINE TITLE ========== */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] bg-white px-6">
        <ScrollAnimation delay={200}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            <div>Shaping the Future Through</div>
            <div className="text-blue-500">Intelligent Innovation</div>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
            At Infovance, innovation isn’t just a buzzword - it’s the foundation of how we create, transform, and inspire progress across industries.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3">
            Explore Our Technologies
          </button>
        </ScrollAnimation>
      </section>

      {/* ===== TODAY’S LEADING TECHNOLOGIES ===== */}
      <section className="py-20 md:px-20 px-6 bg-blue-50">
        <ScrollAnimation delay={300}>
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Today’s Leading Technologies
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 items-start">
          {/* LEFT COLUMN */}
          <div className="text-left">
            <h3 className="text-3xl font-semibold text-blue-900 mb-4">
              Driving the Future of Intelligent Transformation
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Infovance, our innovation strategy blends AI automation, cloud technology, 
              and sustainable design helping organizations operate smarter, faster, and greener.
            </p>
          </div>

         {/* RIGHT COLUMN */}
<div className="relative">
  <div className="overflow-hidden ml-12">
    <div
      className="flex transition-transform duration-500 ease-in-out gap-6"
      style={{
        transform: `translateX(-${
          window.innerWidth < 768 ? offset * 100 : offset * (100 / 2)
        }%)`,
      }}
    >
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-72 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl text-center"
        >
          <div className="flex justify-center mb-4">{tech.icon}</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {tech.title}
          </h3>
          <p className="text-gray-600 text-sm">{tech.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* DOTS WITH ARROWS BESIDE */}
  <div className="flex justify-center items-center mt-4 space-x-4">
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-full text-lg font-bold"
      onClick={() =>
        setOffset((prev) => (prev - 1 + technologies.length) % technologies.length)
      }
    >
      &lt;
    </button>

    <div className="flex space-x-2">
      {technologies.map((_, i) => (
        <button
          key={i}
          onClick={() => setOffset(i)} // 👈 Jump to clicked card
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            i === offset ? "bg-blue-500 scale-110" : "bg-gray-400 hover:bg-gray-500"
          }`}
        />
      ))}
    </div>

    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-full text-lg font-bold"
      onClick={() => setOffset((prev) => (prev + 1) % technologies.length)}
    >
      &gt;
    </button>
  </div>
</div>
</div>
</section>
      {/* ========== REAL-WORLD IMPACT / CASE STUDIES (Modern Redesign) ========== */}
      <section className="py-24 px-6 md:px-20 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-blue-200 via-purple-100 to-white blur-3xl"></div>

        <ScrollAnimation delay={200}>
          <div className="flex-1 relative z-10">
            <h2 className="text-5xl md:text-6xl text-left font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Innovation in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Action</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-left max-w-xl">
              Powered by AI and automation, our solutions streamline workflows and drive measurable growth. 
              Through intelligent data insights and sustainable innovation, we turn visionary ideas into 
              <span className="text-blue-600 font-semibold"> real-world transformation.</span>
            </p>

            <div className="flex gap-4">
              <button onClick={()=>navigate("/innovation/case-studies")} className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold hover:scale-105 transition-transform">
                View Case Studies
              </button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          <div className="flex-1 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/40 to-pink-400/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <video
              src="/case-studies.mp4"
              className="relative rounded-3xl shadow-2xl w-full h-[300px] md:h-[300px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              muted
              playsInline
              preload="auto"
              autoPlay
              loop
            />
          </div>
        </ScrollAnimation>
      </section>

      {/* ========== R&D AND FUTURE VISION (Modern – Image Left + Content Right) ========== */}
      <section className="py-8 px-6 md:px-12 relative flex flex-col-reverse md:flex-row items-center gap-20 overflow-hidden ml-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-blue-50 to-transparent opacity-70 blur-3xl"></div>

        <ScrollAnimation delay={200}>
          <div className="flex-1 relative z-10 group w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400/30 to-blue-400/30 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>
            
            <video
              src="/Research.mp4"
              className="relative rounded-3xl shadow-2xl w-full h-[300px] md:h-[300px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              muted
              playsInline
              preload="auto"
              autoPlay
              loop
            />
            
            <div className="absolute bottom-2 left-6 bg-white/80 backdrop-blur-md px-5 py-2 rounded-xl text-gray-800 text-sm font-medium shadow-md">
              Exploring the Next Frontier
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          <div className="flex-1 relative z-10 text-left space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Research & <br />
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Future Vision
              </span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              We’re redefining the boundaries of innovation - exploring the synergy between 
              <span className="text-blue-600 font-semibold"> human intelligence and advanced AI systems</span>. 
              From quantum-inspired optimization to immersive digital ecosystems, our mission is to build 
              technology that empowers creativity and fuels sustainable progress.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={()=>navigate("/innovation-lab")} className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold hover:scale-105 transition-transform">
                Discover More
              </button>
              {/* <button className="px-8 py-3 rounded-full border border-gray-400 text-gray-800 hover:bg-gray-100 transition-all">
                Partner With Us
              </button> */}
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* ========== CTA SECTION (Modern Tech Style) ========== */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-indigo-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-30 bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-400 blur-3xl animate-pulse"></div>

        <ScrollAnimation delay={300}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Accelerate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400">Your Innovation</span> Journey
          </h2>
          <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform ideas into impactful solutions with cutting-edge technology, AI-driven insights, 
            and sustainable digital strategies. Join the forefront of tomorrow’s innovation today.
          </p>
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-semibold hover:scale-105 transform transition-all shadow-lg">
            Get Started Now
          </button>
        </ScrollAnimation>
      </section>
    </div>
  );
}
