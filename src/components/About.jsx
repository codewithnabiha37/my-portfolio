import { motion } from "framer-motion";
import AboutImage from "../assets/image.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#0f172a] relative overflow-hidden px-6 py-20"
    >
      {/* Optional Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-cyan-500/10 animate-gradient-slow blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column - Text */}
        <div className="text-white space-y-6 md:pr-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            About Me
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Hi! I'm <span className="text-cyan-400">Nabiha Javed</span>, a 4th Semester Software Engineering student at <span className="text-cyan-400">Kohat University of Science and Technology (KUST)</span>. I love building modern web applications with clean UI and scalable backend systems.
          </p>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            My interests include Frontend Development, Backend Development, and Learning New Technologies.
          </p>

          <button className="px-8 py-3 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 
            hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 backdrop-blur-lg">
            View Projects
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src={AboutImage}
            alt="Nabiha Javed"
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full 
            border-4 border-cyan-400/30 
            shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
}