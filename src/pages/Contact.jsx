import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          {/* LABEL */}
          <p className="text-sm text-indigo-400 tracking-widest mb-2">
            CONTACT
          </p>

          {/* TITLE */}
          <h2 className="text-4xl font-bold mb-6">
            Let's Connect
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#94a3b8] mb-8 leading-relaxed">
            I'm always open to new opportunities, collaborations, and conversations.
            Whether you have an internship, a project idea, or just want to say hi—
            feel free to reach out!
          </p>

          {/* CONTACT ITEMS */}
          <div className="space-y-4">

            {/* EMAIL */}
            <div className="flex items-center gap-4 p-4 rounded-xl 
            bg-[#0f172a]/60 border border-[#1f2937] hover:border-indigo-500 transition">
              <FaEnvelope className="text-indigo-400 text-xl" />
              <div>
                <p className="text-xs text-[#94a3b8]">EMAIL</p>
                <p className="text-sm">muhammedpp274@gmail.com</p>
              </div>
            </div>

            {/* LINKEDIN */}
            <div className="flex items-center gap-4 p-4 rounded-xl 
              bg-[#0f172a]/60 border border-[#1f2937] hover:border-indigo-500 transition">
                <FaLinkedin className="text-indigo-400 text-xl" />
                <div>
                  <p className="text-xs text-[#94a3b8]">LINKEDIN</p>
                  <a
                    href="https://www.linkedin.com/in/mamu-edits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-indigo-400"
                  >
                    linkedin.com/in/mamu-edits
                  </a>
                </div>
            </div>

            {/* GITHUB */}
            <div className="flex items-center gap-4 p-4 rounded-xl 
              bg-[#0f172a]/60 border border-[#1f2937] hover:border-indigo-500 transition">
                <FaGithub className="text-indigo-400 text-xl" />
                <div>
                  <p className="text-xs text-[#94a3b8]">GITHUB</p>
                  <a
                    href="https://github.com/mamuedits"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-indigo-400"
                  >
                    github.com/mamuedits
                  </a>
                </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4 p-4 rounded-xl 
            bg-[#0f172a]/60 border border-[#1f2937] hover:border-indigo-500 transition">
              <FaPhone className="text-indigo-400 text-xl" />
              <div>
                <p className="text-xs text-[#94a3b8]">PHONE</p>
                <p className="text-sm">+91-9539671145</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="p-8 rounded-2xl 
        bg-[#0f172a]/60 backdrop-blur-lg 
        border border-[#1f2937]
        text-center
        hover:shadow-xl hover:shadow-indigo-500/20 transition">

          <div className="text-5xl mb-4">👋</div>

          <h3 className="text-xl font-semibold mb-4">
            Available for opportunities
          </h3>

          <p className="text-[#94a3b8] mb-6">
            I'm actively looking for internships and collaborative projects in
            web development, app development, and data analytics.
          </p>

          <a
            href="mailto:muhammedpp274@gmail.com"
            className="px-6 py-3 rounded-lg 
            bg-indigo-500 hover:bg-indigo-600 
            transition inline-block"
          >
            Send an Email
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;