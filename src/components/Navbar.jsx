import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-semibold tracking-tight text-lg text-white"
        >
          AD<span className="text-indigo-400">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href={`${process.env.PUBLIC_URL}/AnoushkaResume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-white/15 rounded-lg text-zinc-200 hover:bg-white/5 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl text-zinc-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-zinc-950 px-6 py-5">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-zinc-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;