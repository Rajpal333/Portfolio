import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "AI Personal Assistant",
    description: "Full-stack AI assistant with voice interaction and automation using MERN + AI.",
    image: "/ai-assistant.png",
    tech: ["React", "Node", "MongoDB", "AI"],
    live: "#",
    github: "https://github.com/Rajpal333",
    featured: true
  },
  {
    title: "AI Email Generator",
    description: "Generate dynamic emails using AI APIs with modern UI.",
    image: "/email.png",
    tech: ["React", "Express", "AI"],
    live: "#",
    github: "https://github.com/Rajpal333"
  },
  {
    title: "Authentication System",
    description: "Secure login/signup system with JWT authentication.",
    image: "/auth.png",
    tech: ["Node", "MongoDB", "JWT"],
    live: "#",
    github: "https://github.com/Rajpal333"
  },
  {
    title: "AI Super Platform",
    description: "Platform integrating multiple AI tools in one place.",
    image: "/ai-platform.png",
    tech: ["React", "Node", "AI"],
    live: "#",
    github: "https://github.com/Rajpal333"
  }
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Projects 🚀
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg group"
            >

              {/* Featured Badge */}
              {project.featured && (
                <span className="absolute top-3 left-3 bg-blue-600 text-xs px-3 py-1 rounded-full">
                  ⭐ Featured
                </span>
              )}

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-600 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-2 bg-green-600 rounded text-sm hover:bg-green-700"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700 rounded text-sm hover:bg-gray-800"
                  >
                    <FaGithub /> Code
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;