import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.message) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
  className="min-h-[calc(100vh-80px)] bg-[#0f172a] px-6 flex items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10 text-gray-300">
          <a
            href="mailto:kashifmehmoodtech17@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/nabiha-javed-27316334b"
            target="_blank"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/codewithnabiha37"
            target="_blank"
            className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto flex flex-col gap-5"
        >
          {/* Name */}
          <div className="flex flex-col text-left">
            <label className="text-gray-300 mb-1">Name</label>
            <input
              type="text"
              className="px-4 py-2 rounded-lg bg-white/10 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col text-left">
            <label className="text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="px-4 py-2 rounded-lg bg-white/10 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col text-left">
            <label className="text-gray-300 mb-1">Message</label>
            <textarea
              rows="4"
              className="px-4 py-2 rounded-lg bg-white/10 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Send Button */}
          <button className="px-6 py-3 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 backdrop-blur-lg">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}