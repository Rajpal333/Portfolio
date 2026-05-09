import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/PortfolioData";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

const Hero = () => {
  const { personal, summary } = portfolioData;

  const images = [
    "/profile1.jpg",
    // "/profile2.jpg",
    // "/profile3.jpg",
    "/profile4.jpg",
    "/profile5.jpg",
    // "/profile6.jpg",
    "/profile7.jpg",
    "/profile8.jpg",
    "/profile9.jpg"
  ];

  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    const random = images[Math.floor(Math.random() * images.length)];
    setCurrentImage(random);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-6 relative overflow-hidden">

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl z-10">

        {/* LEFT */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <h1 className="text-5xl font-bold">
            Hi, I'm{" "}
            <span className="text-blue-400">{personal.name}</span>
          </h1>

          <p className="mt-4 text-gray-400">{summary}</p>

          <div className="mt-6 flex gap-4">
            <a href="/project" className="px-6 py-3 bg-blue-600 rounded-xl">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-gray-400 rounded-xl flex items-center gap-2"
            >
              <FaDownload /> CV
            </a>
          </div>

          <div className="flex gap-6 mt-6 text-2xl">
            <a href={personal.github} target="_blank">
              <FaGithub />
            </a>
            <a href={personal.linkedin} target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex justify-center"
        >
          <img
            src={currentImage}
            alt="profile"
            className="rounded-full w-72 h-72 object-cover border-4 border-blue-500 shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
