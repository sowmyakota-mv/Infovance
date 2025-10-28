import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Shield,
  LineChart,
  Code,
  Briefcase,
  Factory,
  HeartPulse,
  ShoppingBag,
  ArrowRight,
  Layout,
  Laptop,
  GraduationCap,
} from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useNavigate } from "react-router-dom";
import {
  FaAws,
  FaDocker,
  FaReact,
} from "react-icons/fa";
import {
  SiGooglecloud,
  SiTensorflow,
  SiKubernetes,
  SiOpenai,
  SiNextdotjs,
} from "react-icons/si";

const solutions = [
  {
    icon: <Brain className="w-10 h-10 text-orange-600" />,
    title: "AI & Automation Solutions",
    desc: "Empower your enterprise with intelligent automation and AI systems that learn, adapt, and evolve—driving efficiency, accuracy, and innovation at scale.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-orange-600" />,
    title: "Cloud & Infrastructure Modernization",
    desc: "Transform your infrastructure into a secure, scalable cloud ecosystem designed for agility, speed, and long-term growth.",
  },
  {
    icon: <Code className="w-10 h-10 text-orange-600" />,
    title: "Custom Software Development",
    desc: "Build tailored digital solutions that solve complex business challenges through modern frameworks, agile development, and continuous innovation.",
  },
  {
    icon: <LineChart className="w-10 h-10 text-orange-600" />,
    title: "Data Analytics & Insights",
    desc: "Unlock the hidden potential of your data with advanced analytics, dashboards, and AI-powered insights for data-driven decision making.",
  },
  {
    icon: <Shield className="w-10 h-10 text-orange-600" />,
    title: "Cybersecurity & Compliance",
    desc: "Protect your business with proactive, layered security architectures and ensure compliance with global standards and regulations.",
  },
  {
    icon: <Layout className="w-10 h-10 text-orange-600" />,
    title: "Digital Experience & Product Design",
    desc: "Craft intuitive, user-centered digital experiences and interfaces that connect technology with people — enhancing usability, engagement, and brand value.",
  },
];

const Solutions: React.FC = () => {
    const industries = [
    {
      icon: <HeartPulse className="w-10 h-10 text-orange-600" />,
      title: "Healthcare",
      desc: "AI-driven diagnostics and predictive analytics enhancing patient care and efficiency.",
      bg: "bg-orange-100/70",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-amber-600" />,
      title: "Finance",
      desc: "Modernizing fintech with secure blockchain, automation, and cloud-first solutions.",
      bg: "bg-amber-100/70",
    },
    {
      icon: <ShoppingBag className="w-10 h-10 text-rose-600" />,
      title: "Retail & E-Commerce",
      desc: "Personalized customer experiences through AI, analytics, and omnichannel platforms.",
      bg: "bg-rose-100/70",
    },
    {
      icon: <Factory className="w-10 h-10 text-teal-600" />,
      title: "Manufacturing",
      desc: "Intelligent automation and IoT transforming production into Industry 4.0 ecosystems.",
      bg: "bg-teal-100/70",
    },
    {
      icon: <Laptop className="w-10 h-10 text-indigo-600" />,
      title: "Technology",
      desc: "Empowering innovation with scalable, AI-powered, and cloud-native architecture.",
      bg: "bg-indigo-100/70",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-lime-600" />,
      title: "Education",
      desc: "Revolutionizing learning with digital collaboration and adaptive AI tools.",
      bg: "bg-lime-100/70",
    },
  ];
    const techStack = [
    { name: "AWS", icon: <FaAws className="text-orange-600 w-12 h-12" /> },
    // { name: "Azure", icon: <SiMicrosoft className="text-blue-600 w-12 h-12" /> },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-red-500 w-12 h-12" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500 w-12 h-12" /> },
    { name: "Docker", icon: <FaDocker className="text-sky-600 w-12 h-12" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 w-12 h-12" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 w-12 h-12" /> },
    { name: "OpenAI", icon: <SiOpenai className="text-purple-600 w-12 h-12" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-800 w-12 h-12" /> },
  ];
    const navigate=useNavigate()
  return (
    <div className="w-full bg-white">
      {/* ===== 1️⃣ HERO SECTION ===== */}
      <section className="relative w-full h-[70vh] flex items-center overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/solutions-hero1.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-10"></div>

  {/* Foreground Text (aligned right) */}
  <div className="relative z-10 w-full flex justify-end items-center h-full px-10 md:px-20 mt-12">
    <div className="w-[60%] text-center text-white">
      <ScrollAnimation delay={200}>
        <h1 className="text-5xl md:text-5xl font-extrabold mb-6 leading-tight">
          Transforming Challenges into Scalable Solutions
        </h1>
      </ScrollAnimation>
      <ScrollAnimation delay={400}>
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
          At Infovance, we turn complex business problems into digital
          growth engines through innovation, automation, and intelligence.
        </p>
      </ScrollAnimation>
    </div>
  </div>
</section>

      {/* ===== 2️⃣ SOLUTION CATEGORIES ===== */}
      <section className="w-full py-20 px-6 md:px-16 bg-orange-50">
        <div className="text-center mb-14">
          <ScrollAnimation delay={200}>
            <h4 className="text-orange-600 font-semibold uppercase tracking-widest">
              Our Expertise
            </h4>
          </ScrollAnimation>
          <ScrollAnimation delay={400}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-orange-900 mt-3 leading-tight">
              Transformative Business Solutions
            </h2>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-3 gap-10 ">
          {solutions.map((solution, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <div className="bg-white h-full border border-orange-100 shadow-md hover:shadow-xl transition-all duration-300 p-8 rounded-xl hover:-translate-y-[6%] flex flex-col items-center text-center">
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-orange-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {solution.desc}
                </p>
                <button className="flex items-center gap-2 text-orange-600 font-semibold border border-orange-600 px-5 py-2 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* ===== 3️⃣ FEATURED CASE STUDY (Enhanced) ===== */}
<section className="w-full py-20 px-6 md:px-16 bg-gradient-to-r from-orange-50 via-white to-orange-50">
  <div className="max-w-6xl mx-auto items-center">
    {/* 📸 Image Section */}
    {/* <ScrollAnimation delay={200}>
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/case-study-dashboard.jpg"
          alt="AI Forecasting Dashboard"
          className="object-cover w-full h-full"
        />
      </div>
    </ScrollAnimation> */}

    {/* 🧩 Text Section */}
    <div >
      <ScrollAnimation delay={300}>
        <h4 className="text-orange-600 font-semibold uppercase tracking-widest">
          Case Study
        </h4>
      </ScrollAnimation>

      <ScrollAnimation delay={400}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-orange-900 mt-3 mb-6">
          Real Results for Real Businesses
        </h2>
      </ScrollAnimation>

      <ScrollAnimation delay={500}>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          A Fortune 500 retailer faced operational delays due to legacy systems.
          Infovance implemented an AI-driven forecasting engine, reducing
          downtime by <strong>35%</strong> and improving efficiency by
          <strong> 50%</strong> in under six months.
        </p>
      </ScrollAnimation>

      {/* 🔁 Problem → Solution → Impact */}
      <ScrollAnimation delay={600}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mb-10">
          <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              🧩 Problem
            </h3>
            <p className="text-gray-600 text-sm">
              Legacy systems slowed forecasting and caused frequent downtime.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              🚀 Solution
            </h3>
            <p className="text-gray-600 text-sm">
              Built an AI-powered prediction model integrated with existing ERP.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-orange-700 mb-2">
              💼 Impact
            </h3>
            <p className="text-gray-600 text-sm">
              50% faster decision cycles and 35% reduction in downtime.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* 📊 Animated Metrics */}
      <ScrollAnimation delay={700}>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-orange-600">+50%</h3>
            <p className="text-gray-700 text-sm">Efficiency Boost</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-600">-35%</h3>
            <p className="text-gray-700 text-sm">Downtime Reduced</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-orange-600">6 Mo</h3>
            <p className="text-gray-700 text-sm">Implementation Time</p>
          </div>
        </div>
      </ScrollAnimation>

      {/* CTA Button */}
      <ScrollAnimation delay={900}>
        <div className="mt-10">
          <button onClick={()=>navigate("/innovation/case-studies")} className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-700 transition-all duration-300 shadow-md">
            Read Full Case Study
          </button>
        </div>
      </ScrollAnimation>
    </div>
  </div>
</section>

      <section className="relative w-full py-20 px-6 md:px-16 bg-gradient-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
  {/* Header */}
  <div className="text-center relative z-10 max-w-4xl mx-auto">
    <ScrollAnimation delay={200}>
      <h4 className="text-orange-700 font-semibold uppercase tracking-widest">
        Technology Ecosystem
      </h4>
    </ScrollAnimation>
    <ScrollAnimation delay={400}>
      <h2 className="text-3xl md:text-5xl font-extrabold text-orange-900 mt-3 mb-6">
        Our Stack & Partnerships
      </h2>
    </ScrollAnimation>
    <ScrollAnimation delay={600}>
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
        At <span className="font-semibold text-orange-800">Infovance</span>, technology isn’t just a tool - it’s the foundation of our innovation.  
        We combine leading cloud, AI, and software frameworks to build products that are <span className="font-semibold">scalable, intelligent, and future-ready.</span>
      </p>
    </ScrollAnimation>
  </div>

  {/* Categorized Highlights */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-16 max-w-6xl mx-auto">
    <ScrollAnimation delay={800}>
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-bold text-orange-800 mb-3">Cloud & Infrastructure</h3>
        <p className="text-gray-700">From AWS to Azure, our cloud backbone ensures security, agility, and global reach enabling businesses to scale effortlessly.</p>
      </div>
    </ScrollAnimation>
    <ScrollAnimation delay={1000}>
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-bold text-orange-800 mb-3">AI & Machine Learning</h3>
        <p className="text-gray-700">Leveraging TensorFlow and OpenAI APIs, we infuse data intelligence and automation across every solution.</p>
      </div>
    </ScrollAnimation>
    <ScrollAnimation delay={1200}>
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-bold text-orange-800 mb-3">Modern Frontend</h3>
        <p className="text-gray-700">With React and Next.js, we craft dynamic, responsive, and interactive interfaces that delight users on every screen.</p>
      </div>
    </ScrollAnimation>
  </div>

  {/* Infinite Logo Marquee */}
  <div className="relative w-full overflow-hidden mt-20">
    <div className="flex whitespace-nowrap animate-marquee">
      {/* Original List */}
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="min-w-[200px] mx-5 bg-white/30 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl px-6 py-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/60"
        >
          {tech.icon}
          <p className="mt-3 font-semibold text-orange-800">{tech.name}</p>
          {/* <p className="text-sm text-gray-600 mt-2">{tech.desc}</p> */}
        </div>
      ))}

      {/* Duplicate List for Continuous Scroll */}
      {techStack.map((tech, index) => (
        <div
          key={`duplicate-${index}`}
          className="min-w-[200px] mx-5 bg-white/30 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl px-6 py-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/60"
        >
          {tech.icon}
          <p className="mt-3 font-semibold text-orange-800">{tech.name}</p>
          {/* <p className="text-sm text-gray-600 mt-2">{tech.desc}</p> */}
        </div>
      ))}
    </div>
  </div>

  {/* Gradient Overlays */}
  <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-orange-50 via-orange-50/70 to-transparent z-20"></div>
  <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-orange-50 via-orange-50/70 to-transparent z-20"></div>

  {/* Marquee Animations */}
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      animation: marquee 40s linear infinite;
      width: fit-content;
    }
  `}</style>
</section>

      {/* ===== 5️⃣ INNOVATION PROCESS ===== */}
<section className="relative w-full py-24 px-6 md:px-16 bg-gradient-to-b from-orange-50 via-white to-orange-100 overflow-hidden">
  {/* Title */}
  <div className="text-center mb-20 relative z-10">
    <ScrollAnimation delay={200}>
      <h4 className="text-orange-600 font-semibold uppercase tracking-widest">
        Our Approach
      </h4>
    </ScrollAnimation>
    <ScrollAnimation delay={400}>
      <h2 className="text-3xl md:text-5xl font-extrabold text-orange-900 mt-3">
        From Concept to Scalable Delivery
      </h2>
    </ScrollAnimation>
  </div>

  {/* Flow Timeline */}
  <div className="relative flex flex-col md:flex-row items-center justify-center gap-16 max-w-6xl mx-auto mt-28">
    {/* Connector line */}
    <div className="hidden md:block absolute top-1/2 left-0 right-0 -mt-16 h-[3px] bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 opacity-60"></div>

    {[
      {
        step: "Discover",
        icon: "🔍",
        text: "We analyze your business goals, explore opportunities, and define the best strategy for success."
      },
      {
        step: "Design",
        icon: "🎨",
        text: "We transform ideas into clear, elegant blueprints with a user-first design philosophy."
      },
      {
        step: "Develop",
        icon: "⚙️",
        text: "Our agile development brings your product to life with precision and flexibility."
      },
      {
        step: "Deploy",
        icon: "🚀",
        text: "We launch your solution seamlessly, ensuring scalability, speed, and security."
      }
    ].map((item, index) => (
      <ScrollAnimation key={index} delay={index * 200}>
        <div className="relative z-10 flex flex-col items-center text-center group w-56">
          {/* Step bubble */}
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span>{item.icon}</span>
          </div>

          {/* Connector dot for mobile */}
          {index < 3 && (
            <div className="block md:hidden w-1 h-10 bg-orange-400 mt-3 mb-3"></div>
          )}

          {/* Title & text */}
          <h3 className="text-xl font-semibold text-orange-900 mt-5 mb-2">{item.step}</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {item.text}
          </p>
        </div>
      </ScrollAnimation>
    ))}
  </div>

  {/* Floating gradient accents */}
  <div className="absolute top-20 left-10 w-40 h-40 bg-orange-200/40 blur-3xl rounded-full animate-pulse"></div>
  <div className="absolute bottom-10 right-20 w-40 h-40 bg-orange-300/40 blur-3xl rounded-full animate-pulse"></div>
</section>

     <section className="relative w-full py-28 bg-gradient-to-b from-orange-50 via-white to-orange-100 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-20 px-6">
        <ScrollAnimation delay={200}>
          <h4 className="text-orange-600 font-semibold uppercase tracking-widest">
            Industries We Empower
          </h4>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-orange-900 mt-3">
            Powering the World’s Leading Industries
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={600}>
          <p className="text-gray-700 text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
            We drive digital excellence across global industries — combining{" "}
            <span className="text-orange-700 font-semibold">data, cloud, and intelligence</span>{" "}
            to accelerate transformation.
          </p>
        </ScrollAnimation>
      </div>

      {/* 3x2 Grid Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {industries.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className={`rounded-3xl p-8 shadow-lg ${item.bg} backdrop-blur-md hover:shadow-2xl transition-all duration-500`}
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold text-orange-900 mb-3 text-center">
              {item.title}
            </h3>
            <p className="text-gray-700 text-base text-center leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Floating Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-float-slower"></div>

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

      {/* ===== 7️⃣ CTA SECTION ===== */}
      <section className="w-full py-20 px-6 md:px-16 bg-orange-300 text-black text-center">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let’s Build the Future - Together
          </h2>
        </ScrollAnimation>
        <ScrollAnimation delay={400}>
          <p className="max-w-2xl mx-auto text-lg text-100 mb-8">
            Partner with Infovance to design, develop, and deploy intelligent
            solutions that move your business forward.
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={600}>
          <button className="bg-white text-orange-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-orange-100 transition-all duration-300">
            Start a Conversation
          </button>
        </ScrollAnimation>
      </section>
    </div>
  );
};

export default Solutions;
