const certifications = [
  {
    title: "ChatGPT Prompt Engineering",
    org: "Infosys Springboard (2025)",
    link: "https://drive.google.com/file/d/1jqy5hRIg_tZv9jR-qqwqpik69vL9cLTo/view", // 🔗 replace with your actual certificate link
  },
  {
    title: "Cloud Computing",
    org: "NPTEL (2025)",
    link: "https://drive.google.com/file/d/13tBUxAV3m7UiZGsU--qx4bDECoSFpF2d/view",
  },
  {
    title: "Object Oriented Programming",
    org: "Neo Colab (2024)",
    link: "https://drive.google.com/file/d/1733CheeI8tOAlwHsWXJ7-Zzvatq0m5le/view",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">

        <p className="text-sm text-indigo-400 tracking-widest mb-2">
          CERTIFICATIONS
        </p>

        <h2 className="text-4xl font-bold mb-12">
          My Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl 
              bg-[#0f172a]/60 border border-[#1f2937]
              hover:border-indigo-500 transition 
              hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 block"
            >
              <h3 className="font-semibold mb-2">
                {cert.title}
              </h3>

              <p className="text-sm text-[#94a3b8]">
                {cert.org}
              </p>

              <p className="text-xs mt-3 text-indigo-400">
                View Certificate →
              </p>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;