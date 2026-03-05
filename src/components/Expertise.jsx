import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiServer } from "react-icons/bi";


const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: "React", icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-cyan-300" /> },
  { name: "Git & GitHub", icon: <FaGitAlt size={40} className="text-orange-600" /> },
  { name: "Basic Backend Knowledge", icon: <BiServer size={40} className="text-purple-400" /> },
];

export default function Expertise() {
  return (
    <section id="expertise" className="min-h-screen bg-[#0f172a] px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          My Expertise
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 flex flex-col items-center gap-4 
                         hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"
            >
              {skill.icon}
              <h3 className="text-white text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}