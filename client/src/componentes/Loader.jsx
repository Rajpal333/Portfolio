import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[999]">
      
      {/* Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
      />

      {/* Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute mt-24 text-gray-400 text-sm"
      >
        Loading Portfolio...
      </motion.p>

    </div>
  );
};

export default Loader;