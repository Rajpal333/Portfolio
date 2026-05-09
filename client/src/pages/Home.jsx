import Navbar from "../componentes/Navbar";
import Hero from "../componentes/Hero";
import About from "../componentes/About";
import Skills from "../componentes/Skills";
import Projects from "../componentes/Projects";
import Contact from "../componentes/Contact";
import Footer from "../componentes/Footer";
import Graph from "../componentes/Graph";

const Home = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div className="pt-20"> {/* navbar spacing */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Graph /> {/* Graph moved before contact */}
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default Home;