const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6"
    >
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10 items-center">


        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#6366f1] text-sm pb-1 border border-gray-500/40 border-[1px]  w-[180px] rounded-2xl mb-3 flex bg-gray-800 items-center gap-2">
            <span className="w-2 h-2 mt-1 ml-3 bg-[#6366f1] rounded-full animate-pulse"></span>
            Open to Opportunities
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            MUHAMMED <br />
            <span className="text-[#6366f1]">PP</span>
          </h1>

          <p className="mt-4 text-[#94a3b8] text-lg">
            Full Stack Developer • Android Developer
          </p>

          <p className="mt-4 text-gray-350 max-w-md">
            3rd-year B.Tech Computer Science student at Lovely Professional University with hands-on experience in building scalable web architectures, native Android development, and end-to-end full-stack systems.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-4">

            {/* ✅ FIXED: Download CV */}
            <a
              href="/MUHAMMED PP CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#6366f1] hover:bg-[#4f46e5] px-6 py-2 rounded-lg transition"
            >
              Download CV
            </a>

            {/* Get in Touch */}
            <a
              href="#contact"
              className="border border-[#1f2937] px-6 py-2 rounded-lg hover:bg-[#111827] transition"
            >
              Get in Touch
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

            {/* Image */}
            <img
                src="/profile.jpeg"
                alt="Muhammed PP"
                className="w-72 h-82 border border-gray-500/40 object-cover rounded-xl"
            />

            {/* Overlay Card */}
            <div className="absolute top-[300px] left-6 bg-[#111827]/70 backdrop-blur-2xl border border-[#1f2937] rounded-xl px-5 py-3 shadow-lg">
                
                <p className="text-xs text-[#94a3b8] tracking-widest">
                CURRENTLY
                </p>

                <h3 className="text-white font-semibold">
                B.Tech CSE @ LPU
                </h3>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Home;