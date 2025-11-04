import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  submenu?: { title: string; href: string }[];
}

const navLinks: NavItem[] = [
  { title: "Home", href: "" },
  { title: "Innovations", href: "innovation" },
  { title: "Solutions", href: "solutions" },
  {
    title: "Trainings",
    href: "trainings",
    submenu: [
      { title: "Full Stack Development", href: "trainings/full-stack-development" },
      { title: "AI & Machine Learning", href: "trainings/ai-ml" },
      { title: "Data Analytics & Power BI", href: "trainings/data-analytics" },
      { title: "Cloud Computing & DevOps", href: "trainings/cloud-devops" },
      { title: "Cybersecurity Fundamentals", href: "trainings/cybersecurity" },
      { title: "UI/UX Design Masterclass", href: "trainings/ui-ux" },
      { title: "Digital Marketing & SEO", href: "trainings/digital-marketing" },
      { title: "Corporate Upskilling", href: "trainings/corporate-upskilling" },
      { title: "Graduate Internship", href: "trainings/graduate-internship" },
      { title: "Career Accelerator", href: "trainings/career-accelerator" },
    ],
  },
  { title: "Insights", href: "insights" },
  { title: "Connect", href: "connect" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState<string | null>(null);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("home");
  const navigate=useNavigate()

  // Update active link when route changes
  useEffect(() => {
    const path = location.pathname.replace("/", "");
    if (path.startsWith("innovation")) setActiveLink("innovation");
    else if (path.startsWith("solutions")) setActiveLink("solutions");
    else if (path.startsWith("trainings")) setActiveLink("trainings");
    else if (path.startsWith("insights")) setActiveLink("insights");
    else if (path.startsWith("connect")) setActiveLink("connect");
    else setActiveLink("home");
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50  bg-headerbg shadow-md">
      {/* Top Info Bar */}
      {/* <div className="w-full bg-orange-200 text-orange-900 text-sm px-4 md:px-10 py-2 flex justify-between items-center">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4 text-orange-600" />
            <a href="mailto:info@infovance.com" className="font-semibold hover:underline">
              info@infovance.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4 text-orange-600" />
            <a href="tel:+1234567890" className="font-semibold hover:underline">
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
      </div> */}

      {/* Main Navigation */}
      <div className="w-full px-4 md:px-10 py-2 flex items-center justify-between">
  <Link to="/">
    <img 
      src="/Info-logos-2.png" 
      alt="Infovance Logo" 
      className="h-24 md:h-24 w-24 rounded-full object-contain"
    />
  </Link>

        {/* ===== Desktop Menu ===== */}
        <nav className="hidden md:flex space-x-4 relative">
          {navLinks.map((link) => (
            <div key={link.title} className="relative group">
              <Link
                to={`/${link.href}`}
                className={`px-3 py-1 rounded-full text-white font-medium text-lg cursor-pointer transition-all duration-300 flex items-center gap-1 ${
                  activeLink === (link.href || "home")
                    ? "bg-orange-500 text-white"
                    : "text-orange-900 hover:bg-orange-100"
                }`}
              >
                {link.title}
                {link.submenu && <ChevronDown className="w-4 h-4 mt-[2px]" />}
              </Link>

              {/* Dropdown for Trainings */}
              {link.submenu && (
                <div className="absolute left-0 mt-2 text-left hidden group-hover:block bg-white border border-orange-100 shadow-lg rounded-lg overflow-hidden z-50">
                  {link.submenu.map((item) => (
                    <Link
                      key={item.title}
                      to={`/${item.href}`}
                      className="block px-5 py-2 text-orange-900 hover:bg-orange-50 text-sm whitespace-nowrap"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Register Button */}
        <div className="hidden md:flex">
          <button onClick={()=>navigate("/connect")} className="bg-orange-700 hover:bg-orange-600 text-white font-semibold py-2 px-5 -mr-20 rounded-full transition-all duration-300 mr-10">
            Register
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6 text-orange-900" /> : <Menu className="w-6 h-6 text-orange-900" />}
          </button>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {menuOpen && (
  <div
    className="absolute top-full left-0 w-full bg-white shadow-md px-6 py-4 flex flex-col space-y-1 md:hidden overflow-y-auto"
    style={{
      maxHeight: "80vh", // allow scroll for tall dropdowns
      WebkitOverflowScrolling: "touch", // smooth scrolling on iOS
    }}>
{navLinks.map((link) => (
      <div key={link.title}>
        {/* Main Mobile Link */}
        <div
          className={`flex justify-between items-center px-3 py-2 rounded-full font-medium cursor-pointer transition-all duration-300 ${
            activeLink === (link.href || "home")
              ? "bg-orange-500 text-white"
              : "text-orange-900 hover:bg-orange-100"
          }`}
          onClick={() => {
            if (link.submenu) {
              setTrainingOpen(trainingOpen === link.title ? "" : link.title);
            } else {
              navigate(`/${link.href}`);
              setMenuOpen(false);
            }
          }}
        >
          <span>{link.title}</span>
          {link.submenu && <ChevronDown className="w-4 h-4" />}
        </div>

        {/* Submenu (Trainings dropdown) */}
        {link.submenu && trainingOpen === link.title && (
          <div className="pl-6 mt-1 text-left space-y-1">
            {link.submenu.map((item) => (
              <Link
                key={item.title}
                to={`/${item.href}`}
                className="block py-1 text-sm text-orange-800 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
)}
    </header>
  );
};

export default Header;
