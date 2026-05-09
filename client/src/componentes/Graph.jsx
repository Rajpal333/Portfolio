import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Graph = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // const fetchGraph = () => {
  //   setLoading(true);
  //   setError(false);

  //   axios.get("http://127.0.0.1:8000/graph")
  //     .then(res => {
  //       setImage(res.data.image);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       setError(true);
  //       setLoading(false);
  //     });
  // };


  const fetchGraph = () => {
  setLoading(true);
  setError(false);

  axios.get(
    "https://portfolio-python-service.onrender.com/graph",
    {
      timeout: 30000,
    }
  )
    .then(res => {
      setImage(res.data.image);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setError(true);
      setLoading(false);
    });
};
  useEffect(() => {
    fetchGraph();
  }, []);

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 text-center">
      
      <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Skill Graph 📊
      </h2>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Graph */}
      {!loading && image && (
        <motion.img
          src={`data:image/png;base64,${image}`}
          alt="graph"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="mx-auto rounded-2xl shadow-2xl border border-gray-700"
        />
      )}

      {/* Error */}
      {error && (
        <div className="text-center">
          <p className="text-red-400 mb-4">Failed to load graph 😢</p>
          <button
            onClick={fetchGraph}
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      )}

    </section>
  );
};

export default Graph;