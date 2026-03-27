const About = () => {
  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#6366f1] text-sm tracking-widest mb-2">
            ABOUT ME
          </p>

          <h2 className="text-4xl font-bold mb-6">
            A bit about who I am
          </h2>

          <p className="text-[#94a3b8] mb-4 leading-relaxed">
            I am a 3rd-year{" "}
            <span className="text-white font-medium">
              B.Tech Computer Science student
            </span>{" "}
            at Lovely Professional University. I specialize in bridging the gap
            between technical logic and visual aesthetics, combining my expertise
            in{" "}
            <span className="text-white font-medium">
              Frontend and Android development
            </span>{" "}
            with a strong passion for{" "}
            <span className="text-white font-medium">
              graphic design
            </span>.
          </p>

          <p className="text-[#94a3b8] leading-relaxed">
            From architecting community-driven mobile apps like{" "}
            <span className="text-white font-medium">KMC</span> to building
            responsive web systems like{" "}
            <span className="text-white font-medium">ReadyUp</span>, I focus on
            creating seamless digital experiences. My design background ensures
            that every project I build is not just functional, but visually
            impactful and user-centric.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-[#111827]/60 backdrop-blur-md border-[0.5px] border-[#1f2937]/40 rounded-xl p-5 hover:border-[#ef4444] transition">
            <p className="text-xs text-[#94a3b8] mb-2">UNIVERSITY</p>
            <h3 className="font-semibold">LPU, Punjab</h3>
          </div>

          <div className="bg-[#111827]/60 backdrop-blur-md border-[0.5px] border-[#1f2937]/40 rounded-xl p-5 hover:border-[#ef4444] transition">
            <p className="text-xs text-[#94a3b8] mb-2">PROGRAM</p>
            <h3 className="font-semibold">B.Tech CSE</h3>
          </div>

          <div className="bg-[#111827]/60 backdrop-blur-md border-[0.5px] border-[#1f2937]/40 rounded-xl p-5 hover:border-[#ef4444] transition">
            <p className="text-xs text-[#94a3b8] mb-2">LOCATION</p>
            <h3 className="font-semibold">Kannur, Kerala</h3>
          </div>

          <div className="bg-[#111827]/60 backdrop-blur-md border-[0.5px] border-[#1f2937]/40 rounded-xl p-5 hover:border-[#ef4444] transition">
            <p className="text-xs text-[#94a3b8] mb-2">FOCUS</p>
            <h3 className="font-semibold">Web & Android Apps</h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;