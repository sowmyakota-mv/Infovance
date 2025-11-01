// src/pages/CybersecurityFundamentals.tsx
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Key,
  Monitor,
  Network,
  Bug,
} from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiKalilinux, SiNamecheap, SiSplunk, SiWireshark } from "react-icons/si";
import { FaDocker, FaUserShield } from "react-icons/fa";
import { MdFingerprint, MdSecurity } from "react-icons/md";

export default function CybersecurityFundamentals() {
   const sectionRef = useRef<HTMLDivElement>(null);
          const [animate, setAnimate] = useState(false);
          const navigate=useNavigate()

          const tools = [
    { name: "Wireshark", icon: <SiWireshark className="text-blue-600 w-10 h-10" /> },
    { name: "Nmap", icon: <SiNamecheap className="text-green-600 w-10 h-10" /> },
    { name: "Splunk / ELK", icon: <SiSplunk className="text-yellow-600 w-10 h-10" /> },
    { name: "Docker (for isolated labs)", icon: <FaDocker className="text-sky-500 w-10 h-10" /> },
    { name: "Kali Tooling (for lab only)", icon: <SiKalilinux className="text-gray-700 w-10 h-10" /> },
    { name: "Open-source Forensics", icon: <MdFingerprint className="text-purple-600 w-10 h-10" /> },
    { name: "SIEM Basics", icon: <MdSecurity className="text-red-500 w-10 h-10" /> },
    { name: "IAM Concepts", icon: <FaUserShield className="text-orange-500 w-10 h-10" /> },
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
    <section id="/trainings/cybersecurity" className="w-full min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 text-gray-800 overflow-hidden">
        {/* ===== HERO SECTION ===== */}
      <div
        ref={sectionRef}
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        {/* 🎥 Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
          src="/cyber-hero.mp4"
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
            {"Cyber Security".split("").map((letter, i) => (
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
           Cybersecurity Fundamentals
          </h1>
        </ScrollAnimation>

        <ScrollAnimation delay={400}>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Learn core cybersecurity concepts and hands-on defensive skills  secure networks,
            harden systems, defend applications, and respond to incidents using real-world labs.
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={600}>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => navigate("/connect")}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg rounded-full"
            >
              Apply Now
            </button>
            {/* <a
              href="#curriculum"
              className="inline-flex items-center gap-2 border border-orange-600 text-orange-600 px-6 py-3 rounded-full hover:bg-orange-600 hover:text-white transition"
            >
              View Curriculum <ArrowRight className="w-4 h-4" />
            </a> */}
          </div>
        </ScrollAnimation>
      </div>

      {/* WHAT YOU'LL LEARN */}
      <div className="py-12 px-6 md:px-20 bg-white">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-center text-orange-900 mb-12">
            What You’ll Learn
          </h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10 text-orange-600" />,
              title: "Security Fundamentals",
              desc: "Understand threat models, risk assessment, and security best-practices.",
            },
            {
              icon: <Network className="w-10 h-10 text-orange-600" />,
              title: "Network Defence",
              desc: "Design secure networks, configure firewalls, and deploy IDS/IPS.",
            },
            {
              icon: <Lock className="w-10 h-10 text-orange-600" />,
              title: "System Hardening",
              desc: "Harden Linux/Windows hosts, patch management and endpoint defenses.",
            },
            {
              icon: <Key className="w-10 h-10 text-orange-600" />,
              title: "Identity & Access",
              desc: "IAM fundamentals, SSO, MFA and least-privilege principles.",
            },
            {
              icon: <Monitor className="w-10 h-10 text-orange-600" />,
              title: "Threat Detection",
              desc: "Use SIEM logs, monitoring, and alerting to detect and triage threats.",
            },
            {
              icon: <Bug className="w-10 h-10 text-orange-600" />,
              title: "Vulnerability Management",
              desc: "Scan, prioritize, and remediate vulnerabilities across environments.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25 }}
              className="bg-orange-50 rounded-3xl shadow-lg p-8 text-center border border-orange-100 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-orange-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="py-12 px-6 md:px-20 text-center">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-900 mb-12">Program Highlights</h2>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Hands-on Labs",
              desc: "Practice on isolated VMs, CTF exercises, and real-world scenarios to build practical skills.",
            },
            {
              title: "Tooling & Playbooks",
              desc: "Work with Wireshark, Metasploit (defensive use), Splunk/ELK, Nmap, and forensic tools.",
            },
            {
              title: "Career Support",
              desc: "Resume help, interview prep, and guidance on entry-level security roles (SOC Analyst, Junior SecOps).",
            },
          ].map((item, i) => (
            <ScrollAnimation key={i} delay={320 + i * 80}>
              <div className="bg-white w-full h-full rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-500 border border-orange-100">
                <h3 className="text-xl font-semibold text-orange-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* CURRICULUM */}
      {/* <div id="curriculum" className="py-12 px-6 md:px-20 bg-white/60">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-8 text-center">8-Week Curriculum (Sample)</h2>
        </ScrollAnimation>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {curriculum.map((block, idx) => (
            <div key={idx} className="bg-orange-50 rounded-2xl p-6 border border-orange-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-orange-800">{block.week}</h4>
                <span className="text-sm text-gray-600">{block.title}</span>
              </div>
              <ul className="list-none ml-0 space-y-2 text-gray-700">
                {block.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-orange-700">•</span>
                    <span className="text-sm">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}

      {/* TOOLS & STACK */}
       <div className="py-12 px-6 md:px-20">
      <ScrollAnimation delay={200}>
        <h3 className="text-2xl md:text-3xl font-bold text-orange-900 mb-6 text-center">
          Tools & Technologies
        </h3>
      </ScrollAnimation>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {tools.map((t, i) => (
          <div
            key={i}
            className="bg-orange-50 rounded-xl p-6 text-center border border-orange-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-center mb-3">{t.icon}</div>
            <p className="text-sm font-medium text-orange-900">{t.name}</p>
          </div>
        ))}
      </div>
    </div>

      {/* CAREER OUTCOMES + CTA */}
      <div className="py-12 bg-orange-200 text-center">
        <ScrollAnimation delay={200}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Kickstart a Career in Cybersecurity</h2>
        </ScrollAnimation>

        <ScrollAnimation delay={400}>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Graduates will be equipped for SOC roles, Junior Security Engineer positions, and to continue towards certifications like CompTIA Security+, CEH, and entry-level cloud security badges.
          </p>
        </ScrollAnimation>

        <div className="flex justify-center gap-4">
          <button onClick={() => navigate("/connect")} className="bg-white text-orange-700 hover:bg-orange-100 text-lg px-8 py-4 rounded-full">
            Apply Now
          </button>
          {/* <a href="/register" className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white transition">
            Register <ArrowRight className="w-4 h-4" />
          </a> */}
        </div>
      </div>

      <style>{`
        /* small niceties for hero text animation if needed later */
        @keyframes letterEnter {
          0% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
