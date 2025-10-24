import React, { useState, useEffect } from "react";
import { Menu, X, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";
import { Link } from "react-router-dom";

interface NavItem {
  title: string;
  href: string;
}

const navLinks: NavItem[] = [
  { title: "Home", href: "home" },
  { title: "Innovations", href: "innovations" },
  { title: "Solutions", href: "solutions" },
  { title: "Trainings", href: "trainings" },
  { title: "Insights", href: "insights" },
  { title: "Connect", href: "connect" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Scroll event listener to update active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for fixed header
      for (const link of navLinks) {
        const section = document.getElementById(link.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveLink(link.href);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    const section = document.getElementById(href);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // offset for header
        behavior: "smooth",
      });
    }
    setActiveLink(href);
    setMenuOpen(false); // close mobile menu
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md">
      {/* Top Row */}
      <ScrollAnimation delay={200}>
      <div className="w-full bg-orange-200 text-orange-900 text-sm px-4 md:px-10 py-2 flex justify-between items-center">
        <div className="flex flex-wrap items-center gap-3">
          <ScrollAnimation delay={500}><div className="flex items-center gap-1">
            
            <Mail className="w-4 h-4 text-orange-600" />
            <a href="mailto:info@infovance.com" className="font-semibold hover:underline">
              info@infovance.com
            </a>
          </div></ScrollAnimation>
          <ScrollAnimation delay={800}>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-orange-600" />
            <a href="tel:+1234567890" className="font-semibold hover:underline">
              +1 234 567 890
            </a>
          </div></ScrollAnimation>
        </div>
        <ScrollAnimation delay={1000}>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="w-4 h-4 text-orange-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="w-4 h-4 text-orange-600" />
          </a>
        </div></ScrollAnimation>
      </div>
      </ScrollAnimation>

      {/* Main Row */}
      <ScrollAnimation delay={400}>
      <div className="w-full px-4 md:px-10 py-4 flex items-center justify-between bg-white">
        <Link to="/home"><div className="text-2xl md:text-3xl font-bold text-orange-900">Infovance</div>
</Link>
        {/* Desktop Nav */}
        <ScrollAnimation delay={800}>
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <button
              key={link.title}
              onClick={() => handleClick(link.href)}
              className={`px-3 py-1 rounded-full font-medium text-lg cursor-pointer transition-all duration-300 ${
                activeLink === link.href
                  ? "bg-orange-500 text-white"
                  : "text-orange-900 hover:bg-orange-100"
              }`}
            >
              {link.title}
            </button>
          ))}
        </nav></ScrollAnimation>

        {/* Register Button */}
        <ScrollAnimation delay={1200}>
        <div className="hidden md:flex">
          <button className="bg-orange-700 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300">
            Register
          </button>
        </div></ScrollAnimation>

        {/* Mobile Hamburger */}
        <ScrollAnimation delay={900}>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6 text-orange-900" /> : <Menu className="w-6 h-6 text-orange-900" />}
          </button>
        </div></ScrollAnimation>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-3 md:hidden">
            {navLinks.map((link) => (
              <button
                key={link.title}
                onClick={() => handleClick(link.href)}
                className={`px-3 py-1 rounded-full font-medium cursor-pointer transition-all duration-300 ${
                  activeLink === link.href
                    ? "bg-orange-500 text-white"
                    : "text-orange-900 hover:bg-orange-100"
                }`}
              >
                {link.title}
              </button>
            ))}
          </div>
        )}
      </div>
      </ScrollAnimation>
    </header>
  );
};

export default Header;
