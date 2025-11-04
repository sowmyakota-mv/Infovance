import React from "react"; 
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0B1E39] text-white m-0 p-0 -mb-10">
      <div className="w-full py-12 space-y-8">
        
        {/* ---------------- ROW 1: COMPANY INFO ---------------- */}
        <ScrollAnimation delay={200}>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left">
            <div className="flex items-center space-x-3 ml-12 -mt-8 ">
              <img
                src="/Info-logos.png"
                alt="Infovance Logo"
                className="h-24  object-contain "
              />
              {/* <h2 className="text-5xl font-bold tracking-wide mb-2 md:mb-0">
                Infovance
              </h2> */}
            </div>
            <p className="text-gray-300 text-lg leading-snug max-w-4xl">
              Empowering businesses through innovation, strategy, and technology delivering
              transformative digital experiences that inspire growth and long-term impact
              worldwide.
              {/* <a className="text-blue-300 hover:text-white font-semibold">
                Know More →
              </a> */}
            </p>
          </div>
        </ScrollAnimation>

        {/* ---------------- ROW 2: LINKS GRID ---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Useful Links */}
          <ScrollAnimation delay={400}>
            <div>
              <h3 className="text-xl font-semibold mb-3">Useful Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/innovation" className="hover:text-white transition-colors">Innovation Solutions</a></li>
                <li><a href="/training" className="hover:text-white transition-colors">Training</a></li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Other Links */}
          <ScrollAnimation delay={500}>
            <div>
              <h3 className="text-xl font-semibold mb-3">Other Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/login" className="hover:text-white transition-colors">Login</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/support" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Resources / Insights */}
          <ScrollAnimation delay={600}>
            <div>
              <h3 className="text-xl font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="/partners" className="hover:text-white transition-colors">Our Partners</a></li>
                <li><a href="/news" className="hover:text-white transition-colors">News & Updates</a></li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>

        {/* ---------------- ROW 3: COPYRIGHT BAR ---------------- */}
        <ScrollAnimation delay={700}>
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-y-2 gap-x-12 w-full">
            {/* Copyright */}
            <div className="text-center md:text-left w-full md:w-1/3 md:pl-8">
              © 2025 Infovance. All Rights Reserved.
            </div>

            {/* Policy Links */}
            <div className="flex justify-center w-full md:w-1/3 space-x-4">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
              <span>|</span>
              <a href="/cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>

            {/* Contact Icons */}
            <div className="flex justify-center md:justify-end w-full md:w-1/3 space-x-4 md:pr-8">
              <a
                href="https://wa.me/447544476666"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-6 h-5" />
              </a>
              <a href="tel:+44 7544476666" className="text-blue-400 hover:text-red-400 transition-colors">
                <Phone className="w-6 h-5" />
              </a>
              <a href="mailto:infovancesolutions@gmail.com" className="text-blue-500 hover:text-red-400 transition-colors">
                <Mail className="w-6 h-5" />
              </a>
              <a
                href="https://www.google.com/maps/place/Regus+-+Milton+Keynes+Atterbury+Lakes/@52.0517324,-0.7205236,15z/data=!3m2!4b1!5s0x4877ab2654cb230d:0x4cb88f3ef62e2e15!4m6!3m5!1s0x4877ab0d8503ba1f:0x3f0954f8ee335f91!8m2!3d52.0517206!4d-0.7020697!16s%2Fg%2F1tfjkn0q?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-yellow-400 transition-colors"
              >
                <MapPin className="w-6 h-5" />
              </a>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;
