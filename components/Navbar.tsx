"use client";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";

type GlassLinkProps = {
  text: string;
};

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full top-0 left-0 z-50 p-6">
      <GlassNavigation />
    </div>
  );
};

const GlassNavigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="glass-nav w-full mx-auto max-w-6xl border-[1px] border-white/10 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md rounded-2xl px-5 py-5 flex items-center justify-between">
      <span className="text-4xl font-black text-white">logo.</span>

      <div className="flex items-center gap-4">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          <GlassLink text="About" />
          <GlassLink text="Contact" />
          <GlassLink text="Projects" />
        </div>

        {/* Mobile Menu */}
        <MobileMenu menuOpen={menuOpen} />
        <Buttons setMenuOpen={setMenuOpen} />
      </div>
    </nav>
  );
};

const GlassLink: React.FC<GlassLinkProps> = ({ text }) => (
  <a
    href="#"
    className="group relative px-4 py-2 rounded-lg transition-transform hover:scale-105 active:scale-95"
  >
    <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
      {text}
    </span>
    <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
  </a>
);

const Buttons: React.FC<{
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setMenuOpen }) => (
  <button
    onClick={() => setMenuOpen((pv) => !pv)}
    className="text-3xl text-white/90 transition-transform hover:scale-105 hover:text-white md:hidden"
  >
    <FiMenu />
  </button>
);

const MobileMenu: React.FC<{ menuOpen: boolean }> = ({ menuOpen }) => (
  <motion.div
    initial={false}
    animate={{ width: menuOpen ? "fit-content" : "0px" }}
    className="flex overflow-hidden md:hidden"
  >
    <GlassLink text="About" />
    <GlassLink text="Contact" />
    <GlassLink text="Projects" />
  </motion.div>
);

export default Navbar;
