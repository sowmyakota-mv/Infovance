import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const insightsData = [
  {
    id: 1,
    title: "Top 5 AI Trends Shaping 2025",
    category: "Technology & Innovation",
    image: "/ai-trends.jpg",
    details: {
      intro:
        "Artificial Intelligence continues to evolve beyond automation it’s now redefining creativity, decision-making, and innovation. In 2025, we see AI transforming the workplace, healthcare, and even education at an unprecedented scale.",
      points: [
        "1️⃣ **Generative AI Evolution** — Models like GPT and Sora are now powering digital art, music, and business content creation with human-level finesse.",
        "2️⃣ **AI in Healthcare** — Predictive diagnosis and precision medicine are driven by deep learning and neural modeling.",
        "3️⃣ **Autonomous Operations** — Factories and supply chains are adopting AI-driven self-correcting systems to enhance efficiency.",
        "4️⃣ **AI Governance & Ethics** — As AI matures, global regulations are enforcing transparency and ethical AI adoption.",
        "5️⃣ **Human-AI Collaboration** — AI tools are now creative co-pilots, enabling humans to amplify productivity rather than replace it.",
      ],
      conclusion:
        "2025 marks a new era of symbiotic intelligence - where human creativity and AI computation together drive innovation forward.",
    },
  },
  {
    id: 2,
    title: "Upskilling: The Key to Career Growth in Tech",
    category: "Career Growth",
    image: "/career-growth.jpg",
    details: {
      intro:
        "With technology evolving every quarter, professionals who continuously upgrade their skills remain the most in-demand. Upskilling is no longer optional - it’s the core of career resilience.",
      points: [
        "🌐 **Adaptive Learning Paths** — Personalized training platforms help employees learn what’s relevant to their goals.",
        "📈 **Micro-Credentials** — Short, verified skill certifications help professionals validate expertise quickly.",
        "🤝 **Corporate Learning Programs** — Companies investing in internal learning ecosystems see a 2.3x higher retention rate.",
        "🚀 **AI-Powered Learning Analytics** — Platforms now use AI to recommend upskilling tracks based on your performance data.",
      ],
      conclusion:
        "In 2025, continuous learning defines career success. The fastest learners will lead the fastest-growing companies.",
    },
  },
  {
    id: 3,
    title: "Corporate Success: Driving Change Through Learning",
    category: "Corporate Success Stories",
    image: "/success.jpg",
    details: {
      intro:
        "Corporate transformation today is powered not by technology alone, but by how fast organizations can learn and adapt.",
      points: [
        "🏢 **Learning-Driven Culture** — Enterprises are embedding learning into daily workflows, not just annual reviews.",
        "🎯 **Outcome-Based Training** — Programs are measured on impact — productivity, innovation rate, and employee satisfaction.",
        "🤖 **Smart Learning Systems** — AI helps personalize employee development paths for higher engagement.",
      ],
      conclusion:
        "The organizations that learn fastest, innovate fastest  and win.",
    },
  },
  {
    id: 4,
    title: "Data Analytics Revolution: From Insights to Impact",
    category: "Industry Trends",
    image: "/revolution.jpg",
    details: {
      intro:
        "Data analytics has evolved from historical reporting to real-time business transformation. 2025 sees analytics embedded in every decision.",
      points: [
        "📊 **Predictive Insights** — Data models now forecast customer behavior, market trends, and product success.",
        "🧠 **Augmented Analytics** — AI automates report generation, helping business leaders focus on insights, not data crunching.",
        "🌍 **Democratization of Data** — Every employee now has access to analytics dashboards for agile decisions.",
      ],
      conclusion:
        "Data is no longer a back-office function; it’s the new competitive currency.",
    },
  },
  {
    id: 5,
    title: "AI-Powered Learning: The Future of Education",
    category: "Technology & Innovation",
    image: "/ai-powered.jpg",
    details: {
      intro:
        "AI is reinventing how we teach, learn, and measure knowledge. Adaptive learning systems are personalizing education like never before.",
      points: [
        "🎓 **Personalized Curricula** — AI tutors adjust learning pace and content difficulty in real-time.",
        "📊 **Performance Prediction** — Machine learning identifies at-risk learners early to offer support.",
        "💡 **Immersive Learning** — AR/VR powered classrooms provide real-world simulations.",
      ],
      conclusion:
        "Education is shifting from one-size-fits-all to one-size-fits-you  and AI is making that possible.",
    },
  },
  {
    id: 6,
    title: "Emerging Tech in 2025: What’s Next?",
    category: "Industry Trends",
    image: "/what-next.jpg",
    details: {
      intro:
        "From quantum computing to edge AI, the next wave of innovation is blurring lines between digital and physical realities.",
      points: [
        "⚛️ **Quantum Acceleration** — Unprecedented computing power solving problems classical systems can’t.",
        "🌐 **Edge Intelligence** — Smart devices now process data locally, reducing latency and cloud dependency.",
        "🤖 **Robotics + AI Fusion** — Manufacturing and logistics are entering a fully autonomous phase.",
      ],
      conclusion:
        "2025 isn’t about the future arriving  it’s already here. Adaptation is the new innovation.",
    },
  },
  {
    id: 7,
    title: "Building a Future-Ready Workforce",
    category: "Career Growth",
    image: "/future.jpg",
    details: {
      intro:
        "The workforce of tomorrow must be agile, digital-first, and continuously evolving.",
      points: [
        "📘 **Digital Fluency** — Basic digital literacy is no longer enough; understanding AI and data is essential.",
        "🤝 **Human-Centered Skills** — Emotional intelligence, creativity, and collaboration remain irreplaceable.",
        "🧩 **Continuous Learning Models** — Employees learn in the flow of work, supported by AI mentors.",
      ],
      conclusion:
        "The future-ready workforce blends technological skill with human insight  and learns endlessly.",
    },
  },
  {
    id: 8,
    title: "The Human Side of Digital Transformation",
    category: "Corporate Success Stories",
    image: "/human.jpg",
    details: {
      intro:
        "Technology succeeds when people embrace it. True digital transformation begins with empathy, inclusion, and leadership.",
      points: [
        "💬 **Change Communication** — Transparency and storytelling drive digital adoption.",
        "👥 **Inclusive Transformation** — Teams that co-create solutions adopt new tech faster.",
        "💖 **Empathetic Leadership** — The best digital leaders prioritize people before process.",
      ],
      conclusion:
        "Transformation is a human journey  technology is simply the enabler.",
    },
  },
  {
    id: 9,
    title: "From Data to Decisions: AI in Business Strategy",
    category: "Technology & Innovation",
    image: "/data-ai.jpg",
    details: {
      intro:
        "AI is now the core engine behind strategic decision-making, helping organizations pivot faster and smarter.",
      points: [
        "🧭 **Predictive Decision Models** — Businesses use AI to forecast market shifts with unprecedented accuracy.",
        "📉 **Risk Mitigation** — AI identifies operational and financial risks in advance.",
        "💼 **Smart Automation** — Streamlined workflows powered by machine reasoning reduce costs and errors.",
      ],
      conclusion:
        "Businesses that combine human judgment with AI insights will dominate the next decade.",
    },
  },
];

export default function InsightsDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = Number(params.get("id"));
const sectionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
  if (id && sectionRefs.current[id]) {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        const yOffset = -120;
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        window.scrollTo({ top: elementTop + yOffset, behavior: "smooth" });
      }, 500);
    }
  }
}, [id]);



  // Convert markdown-like bold (**) text into <span className="font-semibold">
  const renderFormattedText = (text: string) => {
    const formatted = text.replace(
      /\*\*(.*?)\*\*/g,
      '<span class="font-semibold text-gray-900">$1</span>'
    );
    return formatted;
  };

  return (
    <div className="w-full bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800 mt-20">
      {/* Hero Section */}
      <section className="w-full py-28 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white text-center shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Insight Details
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Explore the ideas and innovations shaping technology, learning, and
          business in 2025.
        </motion.p>
      </section>

      {/* Insights Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-24">
        {insightsData.map((item, index) => (
          <motion.section
            key={item.id}
           ref={(el) => {
  sectionRefs.current[item.id] = el as HTMLDivElement | null;
}}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-12`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full rounded-3xl overflow-hidden shadow-xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full space-y-6 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {item.title} 
              </h2>
              <p className="text-indigo-600 font-semibold">
                {item.category}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.details.intro}
              </p>

              {/* Clean List - no dots, icons only */}
              <ul className="space-y-4 text-gray-700 leading-relaxed">
  {item.details.points.map((point, idx) => {
    const [title, desc] = point.split("—");
    return (
      <li key={idx} className="text-left">
        {/* Title */}
        <div
          className="font-semibold text-gray-900 text-lg md:text-xl mb-1"
          dangerouslySetInnerHTML={{
            __html: renderFormattedText(title.trim()),
          }}
        />
        {/* Description below */}
        <div
          className="text-gray-700 text-base pl-6"
          dangerouslySetInnerHTML={{
            __html: renderFormattedText(desc?.trim() || ""),
          }}
        />
      </li>
    );
  })}
</ul>
              <p className="text-gray-800 italic font-medium">
                {item.details.conclusion}
              </p>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}