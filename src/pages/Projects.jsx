const projects = [
  {
    title: "KMC - Community App",
    description:
      "A full-fledged community app for arts & sports club with real-time chat, secure authentication, and scalable cloud storage using Firebase.",
    tech: ["Kotlin", "Firebase", "Android Studio", "XML"],
    live: "#",
  },
  {
    title: "ReadyUp Platform",
    description:
      "A multi-module web platform with themed pages (e-commerce, finance, food, etc.) featuring authentication, email notifications, and subscription system.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    live: "#",
  },
  {
    title: "FoodieBee",
    description:
      "A responsive food ordering platform where users can browse restaurants, view menus, and manage orders with a smooth user experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* LABEL */}
        <p className="text-sm text-indigo-400 tracking-widest mb-2">
          MY WORK
        </p>

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl 
              bg-[#0f172a]/60 backdrop-blur-lg 
              border border-[#1f2937]
              transition duration-300 
              hover:scale-105 hover:border-red-500 
              hover:shadow-xl hover:shadow-red-500/20"
            >
              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-[#94a3b8] mb-4">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-3 py-1 rounded-full 
                    bg-red-500/10 text-red-400 border border-red-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;