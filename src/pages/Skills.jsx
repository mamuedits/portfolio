import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiKotlin,
  SiCplusplus,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", type: "WEB", icon: <SiJavascript /> },
  { name: "React", type: "FRONTEND", icon: <FaReact /> },
  { name: "Node.js", type: "BACKEND", icon: <FaNodeJs /> },
  { name: "Express", type: "BACKEND", icon: <SiExpress /> },
  { name: "MongoDB", type: "DATABASE", icon: <SiMongodb /> },
  { name: "MySQL", type: "DATABASE", icon: <SiMysql /> },
  { name: "Firebase", type: "DATABASE", icon: <SiFirebase /> },
  { name: "Python", type: "LANGUAGE", icon: <FaPython /> },
  { name: "Java", type: "LANGUAGE", icon: <FaJava /> },
  { name: "Kotlin", type: "ANDROID", icon: <SiKotlin /> },
  { name: "HTML / CSS", type: "FRONTEND", icon: <FaHtml5 /> },
  { name: "C++", type: "LANGUAGE", icon: <SiCplusplus /> },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* SMALL LABEL */}
        <p className="text-sm text-red-400 tracking-widest mb-2">
          TECH STACK
        </p>

        {/* TITLE */}
        <h2 className="text-4xl font-bold mb-12">
          Skills & Technologies
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl text-center 
              bg-[#0f172a]/70 border border-[#1f2937]
              transition duration-300
              hover:scale-105 hover:border-[#ef4444]
              hover:shadow-xl hover:shadow-[#ef4444]/20"
            >
              {/* ICON */}
              <div className="text-4xl mb-4 text-indigo-400 flex justify-center">
                {skill.icon}
              </div>

              {/* NAME */}
              <h3 className="text-lg font-semibold mb-2">
                {skill.name}
              </h3>

              {/* TYPE */}
              <p className="text-xs text-[#94a3b8] tracking-widest">
                {skill.type}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;