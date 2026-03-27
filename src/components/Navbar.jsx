const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-md border-b border-[#1f2937]">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 h-16">

        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide text-red-200">
          MUHAMMED PP
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-sm text-[#94a3b8]">
          <li><a href="#home" className="hover:text-white transition">HOME</a></li>
          <li><a href="#about" className="hover:text-white transition">ABOUT</a></li>
          <li><a href="#skills" className="hover:text-white transition">SKILLS</a></li>
          <li><a href="#projects" className="hover:text-white transition">PROJECTS</a></li>
          <li><a href="#education" className="hover:text-white transition">EDUCATION</a></li>
          <li><a href="#contact" className="hover:text-white transition">CONTACT</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;