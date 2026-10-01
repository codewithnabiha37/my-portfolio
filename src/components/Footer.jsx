import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-gray-700 py-3">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-6 text-gray-400 space-y-2 text-sm">
        
        {/* Copyright */}
        <p className="text-center">
          © 2026 <span className="text-cyan-400">Nabiha Javed</span>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="mailto:javednabiha09@gmail.com" className="hover:text-cyan-400 transition-colors">
            <FaEnvelope size={18} />
          </a>
          <a href="https://www.linkedin.com/in/nabiha-javed-27316334b" target="_blank" className="hover:text-cyan-400 transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="https://github.com/codewithnabiha37" target="_blank" className="hover:text-cyan-400 transition-colors">
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}