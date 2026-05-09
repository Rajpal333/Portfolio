// import About from "../components/About";
import About from "../componentes/About";

// import FadeUp from "../../../FadeUp";
import FadeUp from "../animations/FadeUp";

const AboutPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <About />
    {/* </div> */}
    <FadeUp>
  <h2 className="text-4xl font-bold text-center mb-12">
    About Me
  </h2>
</FadeUp>
</div>
  );
};

export default AboutPage;