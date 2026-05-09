const ResumePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">

      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        My Resume 📄
      </h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        
        <a
          href="/resume.pdf"
          download
          className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-white hover:text-black transition"
        >
          Open in New Tab
        </a>

      </div>

      {/* Resume Viewer */}
      <iframe
        src="/resume.pdf"
        title="Resume"
        className="w-full max-w-5xl h-[80vh] border border-gray-700 rounded-xl shadow-lg"
      />

    </div>
  );
};

export default ResumePage;