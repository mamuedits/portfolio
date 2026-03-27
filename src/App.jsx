import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certifications from "./pages/Certificates";
import Achievements from "./pages/Achievement";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen text-[#e5e7eb] bg-gradient-to-br from-black via-[#0f0000] to-[#450a0a] scroll-smooth">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">

        {/* Hero */}
        <section>
          <div className="inset-0 bg-[#6366f1] opacity-10 blur-3xl"></div>
          <Home />
        </section>

        {/* About */}
        <section className="bg-[#0a0a0a]">
          <About />
        </section>

        {/* Skills */}
        <section className="bg-[#0b0000]">
          <Skills />
        </section>

        {/* Projects */}
        <section className="bg-[#0a0a0a]">
          <Projects />
        </section>

        {/* Education */}
        <section className="bg-[#0b0000]">
          <Education />
        </section>

        {/* Certifications */}
        <section className="bg-[#0a0a0a]">
          <Certifications />
        </section>

        {/* Achievements */}
        <section className="bg-[#0b0000]">
          <Achievements />
        </section>

        {/* Contact */}
        <section className="bg-[#0a0a0a]">
          <Contact />
        </section>

      </main>

    </div>
  );
}

export default App;