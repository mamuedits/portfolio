const Achievements = () => {
  return (
    <section id="achievements" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm text-red-400 tracking-widest mb-2">
          ACHIEVEMENTS
        </p>

        <h2 className="text-4xl font-bold mb-12">
          Milestones
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 rounded-xl bg-[#0f172a]/60 border border-[#1f2937]
          hover:border-red-500 transition">
            <h3 className="font-semibold mb-2">
              🚀 Built 3+ Full Stack Apps
            </h3>
            <p className="text-sm text-[#94a3b8]">
              Developed and deployed multiple production-ready applications.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0f172a]/60 border border-[#1f2937]
          hover:border-red-500 transition">
            <h3 className="font-semibold mb-2">
              🏆 Top 10% Hackathon Finalist
            </h3>
            <p className="text-sm text-[#94a3b8]">
              Ranked among top teams in Binary Blitz with 2000+ participants.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Achievements;