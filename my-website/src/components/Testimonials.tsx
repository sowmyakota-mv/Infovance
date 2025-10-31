// src/components/Testimonials.tsx
import React from "react";
import { Quote } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "CTO, FutureTech Solutions",
    feedback:
      "Working with Infovance transformed our digital operations. Their innovative approach and technical expertise helped us scale faster than ever.",
  },
  {
    name: "Rajesh Kumar",
    role: "Director, SmartBuild India",
    feedback:
      "The Infovance team truly understands business needs. Their customized digital strategy helped us streamline workflows and reduce costs significantly.",
  },
  {
    name: "Emma Williams",
    role: "Founder, Vision Marketing",
    feedback:
      "Professional, proactive, and reliable Infovance delivered beyond expectations. I highly recommend them for digital transformation initiatives.",
  },
];

// Card background colors (three shades of blue)
const cardColors = ["#D0E8FF", "#78C1FF", "#A8D6FF"];
// Quote circle background (slightly darker than card)
const quoteCircleBG = ["#B7D1FF", "#5B99FF", "#91C2FF"];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <ScrollAnimation delay={100}>
        <h4 className="text-orange-600 font-semibold uppercase tracking-wide">
          Testimonials
        </h4></ScrollAnimation>
        <ScrollAnimation delay={300}>
        <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mt-2">
          What Our Clients Say
        </h2></ScrollAnimation>
        <ScrollAnimation delay={500}>
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
          Hear from the clients who’ve trusted <span className="font-semibold text-orange-600">Infovance</span> to lead their digital transformation journey  and experienced measurable success.
        </p></ScrollAnimation>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
            <ScrollAnimation>
          <div
            key={index}
            className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 relative"
            style={{ backgroundColor: cardColors[index % cardColors.length] }}
          >
            {/* Top-left Quote Icon inside circular background */}
            <div
              className="absolute -top-6 left-6 w-12 h-12 flex items-center justify-center rounded-full"
              style={{ backgroundColor: quoteCircleBG[index % quoteCircleBG.length] }}
            >
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Feedback */}
            <ScrollAnimation delay={700}>
            <p className="text-gray-900 mt-6 mb-6 text-base leading-relaxed">
              “{item.feedback}”
            </p></ScrollAnimation>

            {/* Client Info */}
            <div className="mt-4">
                <ScrollAnimation delay={900}>
              <h4 className="text-orange-900 font-semibold">{item.name}</h4>
              </ScrollAnimation>
              <ScrollAnimation delay={900}><p className="text-gray-700 text-sm">{item.role}</p>
           </ScrollAnimation> </div>

            {/* Bottom-right Quote Icon inside circular background */}
            <div
              className="absolute -bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full"
              style={{ backgroundColor: quoteCircleBG[index % quoteCircleBG.length] }}
            >
              <Quote className="w-6 h-6 text-white" />
            </div>
          </div></ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
