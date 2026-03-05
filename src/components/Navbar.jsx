import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = ["home", "about", "expertise","projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          if (
            scrollPosition >= element.offsetTop &&
            scrollPosition < element.offsetTop + element.offsetHeight
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-[#0f172a]/80 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-semibold text-white tracking-wide">
           <span className="text-cyan-400"> Nabiha Javed</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`capitalize transition duration-300 hover:text-cyan-400 hover:scale-110 ${
                  active === section
                    ? "text-cyan-400"
                    : "text-gray-300"
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-lg bg-[#0f172a]/80 border-t border-gray-700">
          <ul className="flex flex-col items-center py-6 gap-6 text-gray-300">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className="capitalize hover:text-cyan-400 transition duration-300"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}