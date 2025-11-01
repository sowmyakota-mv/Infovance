import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Link } from "react-router-dom";

const insightsData = [
  {
    id: 1,
    title: "Top 5 AI Trends Shaping 2025",
    category: "Technology & Innovation",
    image: "/ai-trends.jpg",
    description:
      "Explore how Artificial Intelligence, Generative Models, and Automation are transforming industries across the globe.",
  },
  {
    id: 2,
    title: "Upskilling: The Key to Career Growth in Tech",
    category: "Career Growth",
    image: "/career-growth.jpg",
    description:
      "Learn why continuous learning and upskilling are critical for professionals to stay relevant in the fast-changing tech world.",
  },
  {
    id: 3,
    title: "Corporate Success: Driving Change Through Learning",
    category: "Corporate Success Stories",
    image: "/success.jpg",
    description:
      "Discover how leading companies foster innovation and skill development to drive measurable results.",
  },
  {
    id: 4,
    title: "Data Analytics Revolution: From Insights to Impact",
    category: "Industry Trends",
    image: "/revolution.jpg",
    description:
      "Understand how data analytics empowers organizations to make better, data-driven decisions.",
  },
  {
    id: 5,
    title: "AI-Powered Learning: The Future of Education",
    category: "Technology & Innovation",
    image: "/ai-powered.jpg",
    description:
      "AI is reshaping education and corporate training  here’s how adaptive learning platforms are leading the change.",
  },
  {
    id: 6,
    title: "Emerging Tech in 2025: What’s Next?",
    category: "Industry Trends",
    image: "/what-next.jpg",
    description:
      "From quantum computing to edge AI, explore the emerging technologies that are set to redefine innovation in 2025.",
  },
  {
    id: 7,
    title: "Building a Future-Ready Workforce",
    category: "Career Growth",
    image: "/future.jpg",
    description:
      "Discover how organizations are preparing employees for future technologies through strategic upskilling initiatives.",
  },
  {
    id: 8,
    title: "The Human Side of Digital Transformation",
    category: "Corporate Success Stories",
    image: "/human.jpg",
    description:
      "Digital success isn’t just about technology  it’s about people. Learn how empathy and collaboration fuel transformation.",
  },
  {
    id: 9,
    title: "From Data to Decisions: AI in Business Strategy",
    category: "Technology & Innovation",
    image: "/data-ai.jpg",
    description:
      "Explore how AI-driven insights are reshaping business strategy, improving efficiency, and driving competitive advantage.",
  },
];

const categories = [
  "All",
  "Technology & Innovation",
  "Career Growth",
  "Corporate Success Stories",
  "Industry Trends",
];

const Insights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights =
    activeCategory === "All"
      ? insightsData
      : insightsData.filter((item) => item.category === activeCategory);

  return (
    <section id="/insights" className="mt-16 px-0 md:px-0 w-full">
      {/* Hero Section */}
      <ScrollAnimation direction="up">
        <div className="text-center py-16 w-full bg-gradient-to-r from-purple-500 via-blue-400 via-green-400 to-pink-400 text-white shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Stay Ahead with Infovance Insights
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore expert articles, industry trends, and thought leadership to
            fuel innovation and continuous learning.
          </p>
        </div>
      </ScrollAnimation>

      <div className="px-6 md:px-16">
        {/* Category Tabs */}
        <ScrollAnimation direction="up" delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium border transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-orange-600 text-white border-orange-600"
                    : "text-orange-900 border-orange-300 hover:bg-orange-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Insights Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8  mt-12">
          {filteredInsights.map((item, index) => (
            <ScrollAnimation key={item.id} direction="up" delay={index * 100}>
              <div className="bg-white h-full rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 mb-4 text-left">
                    {item.description}
                  </p>
                  <Link to={`/insights-details?id=${item.id}`}
  className="text-orange-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
>
  Read More <ArrowRight className="w-4 h-4" />
</Link>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Industry Deep Dive Section */}
        <ScrollAnimation direction="left" delay={150}>
          <div className="mt-20 bg-orange-50 rounded-3xl py-16 px-8 text-center">
            <h2 className="text-3xl font-bold text-orange-900 mb-6">
              Industry Deep Dive: The Future of Work
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The way we work is evolving faster than ever. As automation and AI
              redefine industries, adaptability and human creativity are
              becoming the most valuable skills. Companies that invest in
              digital learning, hybrid work models, and emotional intelligence
              will thrive in this new era of transformation.
            </p>
          </div>
        </ScrollAnimation>

        {/* Expert Perspective Section */}
        <ScrollAnimation direction="right" delay={200}>
          <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
            <img
              src="/innovation-beyond.jpg"
              alt="Expert Perspectives"
              className="rounded-3xl shadow-lg w-90 h-[290px] object-cover md:ml-20"
            />
            <div>
              <h2 className="text-3xl font-bold text-orange-900 mb-4">
                Expert Perspective: Innovation Beyond Technology
              </h2>
              <p className="text-gray-700 text-left leading-relaxed mb-4">
                Innovation is not just about adopting new tools  it’s about
                reshaping how teams think, learn, and collaborate. Successful
                organizations cultivate curiosity, experimentation, and a
                continuous improvement mindset to stay ahead of disruption.
              </p>
              <p className="text-gray-700 text-left leading-relaxed">
                At Infovance, we believe the next wave of innovation lies in the
                intersection of technology, design, and human insight.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation direction="up" delay={250}>
          <div className="mt-20 text-center py-10">
            <h2 className="text-3xl font-bold text-orange-900 mb-3">
              Ready to Transform Your Career?
            </h2>
            <p className="text-gray-700 mb-6">
              Explore our programs designed to help you master future-ready
              skills and lead the change.
            </p>
            <Link
              to="/trainings"
              className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-3 font-semibold transition-all duration-300"
            >
              Explore Trainings
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Insights;
