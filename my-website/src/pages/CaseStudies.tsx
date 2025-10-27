import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Workflow Optimization",
    industry: "Manufacturing",
    image: "/ai.jpg",
    impact: "40% Faster Production",
    desc: "We implemented AI-driven automation to streamline operations and improve efficiency.",
    tag: "AI",
  },
  {
    id: 2,
    title: "Data Analytics for Healthcare Insights",
    industry: "Healthcare",
    image: "/data.jpg",
    impact: "25% Cost Reduction",
    desc: "Leveraging predictive analytics to identify trends and improve patient care outcomes.",
    tag: "Analytics",
  },
  {
    id: 3,
    title: "Cloud Migration & Security Enhancement",
    industry: "Finance",
    image: "/cloud.jpg",
    impact: "99.9% Uptime Achieved",
    desc: "Seamless transition to a secure cloud infrastructure for a global finance firm.",
    tag: "Cloud",
  },
  {
    id: 4,
    title: "Intelligent Retail Experience",
    industry: "E-commerce",
    image: "/intelligent.jpg",
    impact: "3x Conversion Rate",
    desc: "Enhanced shopping experience through AI recommendations and AR previews.",
    tag: "AI",
  },
  {
    id: 5,
    title: "Smart City Automation",
    industry: "Urban Development",
    image: "/smart-city.jpg",
    impact: "65% Traffic Efficiency",
    desc: "Implemented IoT-driven traffic and waste management systems for sustainable smart cities.",
    tag: "IoT",
  },
  {
    id: 6,
    title: "Sustainable Energy Intelligence",
    industry: "Energy",
    image: "/energy.jpg",
    impact: "30% Energy Savings",
    desc: "Developed AI-based predictive energy management systems for renewable integration.",
    tag: "Sustainability",
  },
];

export default function CaseStudiesPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [highlightedId, setHighlightedId] = useState<number | null>(null);
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const filters = ["All", "AI", "Analytics", "Cloud", "Sustainability", "IoT"];

  // Scroll & zoom when filter is clicked
  useEffect(() => {
    if (selectedFilter !== "All") {
      const firstMatch = caseStudies.find((s) => s.tag === selectedFilter);
      if (firstMatch && cardRefs.current[firstMatch.id]) {
        setHighlightedId(firstMatch.id);
        cardRefs.current[firstMatch.id]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } else {
      setHighlightedId(null);
    }
  }, [selectedFilter]);

  return (
    <div id="innovation/case-studies" className="flex flex-col">
      {/* ========== HERO ========== */}
      <section
        className="relative py-28 text-center overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #2563eb 25%, #06b6d4 60%, #3b82f6 100%)",
        }}
      >
        <ScrollAnimation direction="up">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              Innovation in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-cyan-200 to-white">
                Action
              </span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-gray-100">
              Explore how cutting-edge technology and creative intelligence
              shape the next generation of innovation from AI to sustainability.
            </p>
          </motion.div>
        </ScrollAnimation>
      </section>

      {/* ========== FILTER BAR ========== */}
      <section className="flex justify-center gap-4 mb-12 flex-wrap mt-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-5 py-2 rounded-full border transition-all ${
              selectedFilter === filter
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {filter}
          </button>
        ))}
      </section>

      {/* ========== CASE STUDIES GRID ========== */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 mb-24">
        {caseStudies
          .filter(
            (study) =>
              selectedFilter === "All" || study.tag === selectedFilter
          )
          .map((study, index) => (
            <ScrollAnimation
              key={study.id}
              direction={index % 2 === 0 ? "up" : "right"}
            >
              <motion.div
                ref={(el) => (cardRefs.current[study.id] = el)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                animate={{
                  scale: highlightedId === study.id ? 1.1 : 1,
                  backgroundColor:
                    highlightedId === study.id
                      ? "#ebf8ff" // light blue background
                      : "#ffffff",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f8fafc", // light hover bg
                }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{study.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {study.industry}
                    </span>
                    <span className="text-gray-800 text-sm font-medium">
                      {study.impact}
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
      </section>
    
      {/* ================= IMPACT DASHBOARD ================= */}
      <section
        className="py-20 px-6 md:px-20 text-center text-gray-800 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, #e0f2fe 0%, #f0f9ff 50%, #dbeafe 100%)",
        }}
      >
        <ScrollAnimation direction="up">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Our Impact in Numbers
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            Over the years, our innovations have empowered industries to
            optimize performance, embrace digital transformation, and achieve
            sustainable growth through measurable success.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: "Operational Efficiency", value: "↑ 45%" },
            { label: "Customer Retention", value: "↑ 60%" },
            { label: "Project Delivery Speed", value: "↑ 35%" },
          ].map((stat, index) => (
            <ScrollAnimation key={index} direction={index === 1 ? "up" : index === 0 ? "left" : "right"}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-4xl font-extrabold text-blue-600 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* ================= CLIENT TESTIMONIALS ================= */}
      <section className="py-24 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-900">
          Client Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "Elena Ruiz",
              role: "CTO, NovaTech",
              feedback:
                "Their automation strategy improved our system uptime dramatically. Truly transformative!",
            },
            {
              name: "Rajesh Kumar",
              role: "Head of Analytics, MedCore",
              feedback:
                "We were able to visualize real-time patient data like never before. Game changer.",
            },
            {
              name: "Sophie L.",
              role: "Product Lead, SkyMart",
              feedback:
                "Our eCommerce engagement tripled after integrating their AI recommendations.",
            },
          ].map((client, i) => (
            <ScrollAnimation key={i} direction={i === 1 ? "up" : "down"}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-left"
              >
                <p className="text-gray-700 mb-4 italic">
                  “{client.feedback}”
                </p>
                <h4 className="font-semibold text-gray-900">{client.name}</h4>
                <span className="text-sm text-gray-500">{client.role}</span>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-cyan-400 text-white">
        <ScrollAnimation direction="up">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Start Your Innovation Journey Today
          </motion.h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let’s collaborate to turn your bold ideas into real-world
            transformation with AI, design, and data-driven strategy.
          </p>
          <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold flex items-center mx-auto gap-2">
            Get Started <ChevronRight className="w-4 h-4" />
          </button>
        </ScrollAnimation>
      </section>
    </div>
  );
}
