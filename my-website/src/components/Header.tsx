import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import ScrollAnimation from "../animation/ScrollAnimation";

interface NavItem {
  title: string;
  href: string;
}

const navLinks: NavItem[] = [
  { title: "Home", href: "" },
  { title: "Innovations", href: "innovation" },
  { title: "Solutions", href: "solutions" },
  { title: "Trainings", href: "trainings" },
  { title: "Insights", href: "insights" },
  { title: "Connect", href: "connect" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("home");

  // Update active link when route changes
useEffect(() => {
  const path = location.pathname.replace("/", "");

  // Handle nested routes
  if (path.startsWith("innovation")) {
    setActiveLink("innovation");
  } else if (path.startsWith("solutions")) {
    setActiveLink("solutions");
  } else if (path.startsWith("trainings")) {
    setActiveLink("trainings");
  } else if (path.startsWith("insights")) {
    setActiveLink("insights");
  } else if (path.startsWith("connect")) {
    setActiveLink("connect");
  } else {
    setActiveLink("home");
  }
}, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md">
      {/* Top Info Bar */}
      <div className="w-full bg-orange-200 text-orange-900 text-sm px-4 md:px-10 py-2 flex justify-between items-center">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4 text-orange-600" />
            <a
              href="mailto:info@infovance.com"
              className="font-semibold hover:underline"
            >
              info@infovance.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-orange-600" />
            <a
              href="tel:+1234567890"
              className="font-semibold hover:underline"
            >
              +1 234 567 890
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="w-4 h-4 text-orange-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="w-4 h-4 text-orange-600" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full px-4 md:px-10 py-4 flex items-center justify-between bg-white">
        <Link to="/">
          <div className="text-2xl md:text-3xl font-bold text-orange-900">
            Infovance
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={`/${link.href}`}
              className={`px-3 py-1 rounded-full font-medium text-lg cursor-pointer transition-all duration-300 ${
                activeLink === (link.href || "home")
                  ? "bg-orange-500 text-white"
                  : "text-orange-900 hover:bg-orange-100"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Register Button */}
        <div className="hidden md:flex">
          <button className="bg-orange-700 hover:bg-orange-600 text-white font-semibold py-2 px-5 -mr-20 rounded-full transition-all duration-300 mr-10">
            Register
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6 text-orange-900" />
            ) : (
              <Menu className="w-6 h-6 text-orange-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={`/${link.href}`}
              className={`px-3 py-1 rounded-full font-medium cursor-pointer transition-all duration-300 ${
                activeLink === (link.href || "home")
                  ? "bg-orange-500 text-white"
                  : "text-orange-900 hover:bg-orange-100"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
