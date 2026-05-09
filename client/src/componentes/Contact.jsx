import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope
} from "react-icons/fa";

const Contact = () => {

  const contactData = {
    linkedin: "https://www.linkedin.com/in/rajpal-singh-panwar-a987ba365",
    github: "https://github.com/Rajpal333",
    whatsapp: "https://wa.me/919685542813",
    telegram: "https://t.me/rajpal333",

    // ✅ FIXED EMAIL (GMAIL DIRECT OPEN)
    email:
      "https://mail.google.com/mail/?view=cm&fs=1&to=rajpalsinghpanwar304@gmail.com&su=Portfolio Contact&body=Hello Rajpal, I visited your portfolio and want to connect with you."
  };

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">

      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Contact Me 📬
        </motion.h2>

        <p className="text-gray-400 mb-12">
          Let's connect and build something amazing together 🚀
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-5 gap-6">

          {/* LinkedIn */}
          <motion.a
            href={contactData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl hover:bg-blue-600 transition duration-300"
          >
            <FaLinkedin className="mx-auto text-3xl mb-2" />
            <p className="text-sm">LinkedIn</p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href={contactData.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl hover:bg-gray-700 transition duration-300"
          >
            <FaGithub className="mx-auto text-3xl mb-2" />
            <p className="text-sm">GitHub</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={contactData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp className="mx-auto text-3xl mb-2" />
            <p className="text-sm">WhatsApp</p>
          </motion.a>

          {/* Telegram */}
          <motion.a
            href={contactData.telegram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl hover:bg-blue-500 transition duration-300"
          >
            <FaTelegram className="mx-auto text-3xl mb-2" />
            <p className="text-sm">Telegram</p>
          </motion.a>

          {/* ✅ EMAIL (GMAIL OPEN) */}
          <motion.a
            href={contactData.email}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl hover:bg-red-500 transition duration-300"
          >
            <FaEnvelope className="mx-auto text-3xl mb-2" />
            <p className="text-sm">Email</p>
          </motion.a>

        </div>

        {/* Extra Info */}
        <div className="mt-12 text-gray-400 text-sm">
          <p>📍 Ujjain, Madhya Pradesh</p>
          <p className="mt-2">📞 +91 9685542813</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;