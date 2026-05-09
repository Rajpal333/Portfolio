import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import Loader from "./components/Loader";
import Loader from "./componentes/Loader";

// pages import
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Graph from "./componentes/Graph";
import GraphPage from "./pages/GraphPage";
import ResumePage from "./pages/ResumePage";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 sec loader

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-black text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/graph" element={<GraphPage/>} />
        <Route path="/resume" element={<ResumePage/>} />
      </Routes>
    </div>
  );
};

export default App;