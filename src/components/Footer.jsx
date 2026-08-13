import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-zinc-950 px-6 py-7">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Anoushka Das</p>

        <p>Designed & built with React.</p>
      </div>
    </footer>
  );
};

export default Footer;