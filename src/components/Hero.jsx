import { motion } from "framer-motion";
import HeroImage from "../assets/image.png"; // check your image path

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0f172a] relative overflow-hidden px-6"
    >
      {/* Subtle Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 animate-gradient-slow blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Side - Text */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Hi, I'm <span className="text-cyan-400">Nabiha Javed</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300">
            Software Engineering Student | 4th Semester
          </h2>

          <p className="text-gray-400 text-lg">
            Kohat University of Science and Technology (KUST) | IOC Department
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Passionate about building modern web applications with clean UI and scalable backend systems.
          </p>

          
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src={HeroImage}
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