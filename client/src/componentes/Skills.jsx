import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaPython, FaGitAlt
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiPostman
} from "react-icons/si";

const skillsData = [
  { name: "HTML5", level: 90, icon: <FaHtml5 />, category: "Frontend", color: "text-orange-500" },
  { name: "CSS3", level: 85, icon: <FaCss3Alt />, category: "Frontend", color: "text-blue-500" },
  { name: "JavaScript", level: 85, icon: <FaJs />, category: "Frontend", color: "text-yellow-400" },
  { name: "React.js", level: 80, icon: <FaReact />, category: "Frontend", color: "text-cyan-400" },
  { name: "Tailwind", level: 80, icon: <SiTailwindcss />, category: "Frontend", color: "text-sky-400" },

  { name: "Node.js", level: 75, icon: <FaNodeJs />, category: "Backend", color: "text-green-500" },
  { name: "Express.js", level: 70, icon: <SiExpress />, category: "Backend", color: "text-gray-300" },
  { name: "MongoDB", level: 75, icon: <SiMongodb />, category: "Backend", color: "text-green-400" },

  { name: "Python", level: 80, icon: <FaPython />, category: "AI", color: "text-yellow-300" },

  { name: "Git", level: 85, icon: <FaGitAlt />, category: "Tools", color: "text-orange-400" },
  { name: "Postman", level: 80, icon: <SiPostman />, category: "Tools", color: "text-orange-500" }
];

const Skills = () => {
  const [filter, setFilter] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filtered =
    filter === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === filter);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Skills 🚀
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["All", "Frontend", "Backend", "AI", "Tools"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border ${
                filter === cat
                  ? "bg-blue-600 border-blue-600"
                  : "border-gray-500"
              } hover:bg-blue-500 transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {filtered.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              onClick={() => setSelectedSkill(skill)}
              className="cursor-pointer bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:shadow-xl transition"
            >

              {/* Icon */}
              <div className={`text-5xl mb-4 ${skill.color}`}>
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold">{skill.name}</h3>

              {/* Progress */}
              <div className="mt-4 w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>

              <p className="text-sm text-gray-400 mt-2">
                {skill.level}%
              </p>

            </motion.div>
          ))}

        </div>

        {/* Modal Popup */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            <div className="bg-gray-900 p-6 rounded-xl max-w-sm text-center border border-white/20">

              <div className={`text-5xl mb-4 ${selectedSkill.color}`}>
                {selectedSkill.icon}
              </div>

              <h3 className="text-2xl font-bold mb-2">
                {selectedSkill.name}
              </h3>

              <p className="text-gray-400 text-sm">
                Experience level: {selectedSkill.level}%
              </p>

              <p className="mt-3 text-gray-300 text-sm">
                This skill is used in building real-world projects and scalable applications.
              </p>

              <button
                onClick={() => setSelectedSkill(null)}
                className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
              >
                Close
              </button>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Skills;