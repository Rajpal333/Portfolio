const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-xl font-semibold text-white">
          Rajpal Singh Panwar 🚀
        </h2>

        <p className="mt-2 text-sm">
          MERN Stack Developer | Python | AI
        </p>

        <div className="my-6 border-t border-white/10"></div>

        <div className="flex justify-center gap-6 text-sm">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/skills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          © 2026 Rajpal Singh Panwar. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;