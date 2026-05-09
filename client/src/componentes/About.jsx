import { motion } from "framer-motion";
import { portfolioData } from "../data/PortfolioData";
import { FaGraduationCap, FaCode, FaUserTie } from "react-icons/fa";

const About = () => {
  const { personal, summary, education } = portfolioData;

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >

            <p className="text-gray-300 text-lg leading-relaxed">
              {summary}
            </p>

            {/* Personal Info */}
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <p>📍 {personal.location}</p>
              <p>📧 {personal.email}</p>
              <p>📞 {personal.phone}</p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">

              <div className="bg-white/10 p-4 rounded-xl text-center hover:scale-105 transition">
                <FaCode className="mx-auto text-blue-400 text-2xl" />
                <p className="mt-2 text-sm">MERN Stack</p>
              </div>

              <div className="bg-white/10 p-4 rounded-xl text-center hover:scale-105 transition">
                <FaUserTie className="mx-auto text-purple-400 text-2xl" />
                <p className="mt-2 text-sm">Problem Solver</p>
              </div>

              <div className="bg-white/10 p-4 rounded-xl text-center hover:scale-105 transition">
                <FaGraduationCap className="mx-auto text-green-400 text-2xl" />
                <p className="mt-2 text-sm">CSE Student</p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT TIMELINE */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >

            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 p-5 rounded-xl hover:scale-105 transition"
              >
                <h3 className="text-lg font-bold text-blue-400">
                  {edu.degree}
                </h3>

                <p className="text-gray-300 text-sm">
                  {edu.college || ""}
                </p>

                <p className="text-gray-400 text-sm">
                  {edu.year || ""} {edu.cgpa && `| CGPA: ${edu.cgpa}`}
                </p>

                <p className="text-gray-400 text-sm">
                  {edu.marks || ""}
                </p>
              </div>
            ))}

          </motion.div>

        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {[
            { num: "10+", label: "Projects" },
            { num: "1+", label: "Year Experience" },
            { num: "15+", label: "Technologies" },
            { num: "100%", label: "Dedication" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-white/10 p-6 rounded-xl text-center border border-white/20"
            >
              <h3 className="text-3xl font-bold text-blue-400">
                {item.num}
              </h3>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;
