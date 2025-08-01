import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow z-50 flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-bold">Anoushka Das</h1>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
        <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
