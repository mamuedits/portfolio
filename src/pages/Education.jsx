const Education = () => {
  return (
    <section id="education" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm text-red-400 tracking-widest mb-2">
          EDUCATION
        </p>

        <h2 className="text-4xl font-bold mb-12">
          Academic background
        </h2>

        <div className="space-y-6">

          {/* LPU */}
          <div className="p-6 rounded-xl bg-[#0f172a]/60 border border-[#1f2937]
          hover:border-indigo-500 transition">
            <h3 className="text-lg font-semibold">
              B.Tech in Computer Science
            </h3>
            <p className="text-sm text-[#94a3b8]">
              Lovely Professional University (2023 - Present)
            </p>
            <p className="text-sm mt-2">CGPA: 7.0</p>
          </div>

          {/* HSE */}
          <div className="p-6 rounded-xl bg-[#0f172a]/60 border border-[#1f2937]
          hover:border-indigo-500 transition">
            <h3 className="text-lg font-semibold">
              Higher Secondary Education
            </h3>
            <p className="text-sm text-[#94a3b8]">
              PKMHSS Kadavathur (2020 - 2022)
            </p>
            <p className="text-sm mt-2">87%</p>
          </div>

          {/* SSLC */}
          <div className="p-6 rounded-xl bg-[#0f172a]/60 border border-[#1f2937]
          hover:border-indigo-500 transition">
            <h3 className="text-lg font-semibold">
              Secondary Education
            </h3>
            <p className="text-sm text-[#94a3b8]">
              NAMHSS Peringathur (2019 - 2020)
            </p>
            <p className="text-sm mt-2">100%</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;