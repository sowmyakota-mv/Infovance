import { useRef } from "react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useNavigate } from "react-router-dom";

export default function InnovationLab() {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate=useNavigate()

  return (
    <div id="/innovation-lab" className="overflow-hidden text-gray-900">
      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative w-screen h-[80vh] flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-900 via-indigo-800 to-indigo-900"
      >
        <ScrollAnimation delay={200}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 mt-12">
            Inside Our Innovation Lab
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Step into the heart of innovation where ideas become prototypes, and
            imagination meets cutting-edge technology. Explore our labs, see
            our processes, and witness the future taking shape.
          </p>
          <button className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg">
            Explore Our Innovations
          </button>
        </ScrollAnimation>
      </section>

      {/* ===== PROCESS HIGHLIGHTS ===== */}
<section className="py-24 px-6 md:px-20 bg-gray-50">
  <ScrollAnimation delay={200}>
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
      How We Innovate
    </h2>
  </ScrollAnimation>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[
      {
        title: "Research & Ideation",
        desc: "We explore emerging technologies and generate ideas that push boundaries.",
        icon: "/ideation.jpg",
      },
      {
        title: "Prototype Development",
        desc: "Our lab transforms ideas into functional prototypes, testing real-world applications.",
        icon: "/prototype.jpg",
      },
      {
        title: "Testing & Iteration",
        desc: "Continuous feedback loops ensure our innovations are reliable, scalable, and impactful.",
        icon: "/testing.jpg",
      },
    ].map((item, index) => (
      <ScrollAnimation key={index} delay={index * 200}>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow text-center flex flex-col justify-between h-full min-h-[280px]">
          <div>
            <img
              src={item.icon}
              alt={item.title}
              className="mx-auto mb-4 w-40 h-20"
            />
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        </div>
      </ScrollAnimation>
    ))}
  </div>
</section>

      {/* ===== DISCOVER MORE SECTION ===== */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <ScrollAnimation delay={200}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900">
            Discover More: Where Innovation Comes Alive
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Beyond research and prototypes, our innovation ecosystem is divided
            into specialized zones each designed to explore future possibilities
            and enable collaboration across technology, design, and sustainability.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {[
            {
              title: "AI & Automation Hub",
              desc: "A collaborative space focused on developing intelligent algorithms, robotic systems, and data-driven insights that power automation across industries.",
              image: "/ai-automation.jpg",
            },
            {
              title: "Human-Centered Design Studio",
              desc: "Where creativity meets empathy  our designers craft experiences, interfaces, and journeys that redefine how people interact with technology.",
              image: "/studio.jpg",
            },
            {
              title: "Robotics & Hardware Zone",
              desc: "Equipped with advanced tools and 3D fabrication technologies, this zone turns abstract engineering ideas into functional robotic prototypes.",
              image: "/robot.jpg",
            },
            // {
            //   title: "Sustainability & Green Tech Wing",
            //   desc: "Dedicated to researching renewable energy systems, eco-friendly materials, and sustainable innovation practices for a better tomorrow.",
            //   image: "/sustainability-green.jpg",
            // },
          ].map((zone, index) => (
            <ScrollAnimation
              key={index}
              delay={index * 150}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="bg-white w-80 h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <img
                  src={zone.image}
                  alt={zone.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 text-left">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {zone.title}
                  </h3>
                  <p className="text-gray-600">{zone.desc}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-r from-blue-800 to-indigo-700 text-center text-white rounded-3xl mx-6 md:mx-20">
        <ScrollAnimation delay={200}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join the Future?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Partner with us, collaborate, and be part of our journey to redefine
            innovation. Together, we turn ideas into reality.
          </p>
          <button onClick={()=>navigate("/connect")} className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-semibold hover:scale-105 transition-transform shadow-lg">
            Collaborate With Us
          </button>
        </ScrollAnimation>
      </section>
    </div>
  );
}
