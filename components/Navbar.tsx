import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";

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
      <span className="text-4xl font-black text-white">E/O</span>

      <div className="flex items-center gap-4">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          <GlassLink text="Projects" />
          <GlassLink text="About" />
          <GlassLink text="Contact" />
        </div>

        {/* Mobile Menu Button */}
        {!menuOpen && (
          <FiMenu
            className="text-3xl text-white/90 transition-transform hover:scale-105 hover:text-white md:hidden"
            onClick={() => setMenuOpen(true)}
          />
        )}

        {/* Mobile Menu Links */}
        {menuOpen && (
          <div className="flex flex-col items-end gap-4 mt-4 md:hidden w-full">
            <Buttons menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <GlassLink text="Projects" />
            <GlassLink text="About" />
            <GlassLink text="Contact" />
          </div>
        )}
      </div>
    </nav>
  );
};

const GlassLink: React.FC<GlassLinkProps> = ({ text }) => (
  <a
    href="#"
    className="group relative px-4 py-2 rounded-lg transition-transform hover:scale-105 active:scale-95 backdrop-blur-md bg-white/10"
  >
    <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
      {text}
    </span>
  </a>
);

const Buttons: React.FC<{
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ menuOpen, setMenuOpen }) => (
  <div className="flex justify-end w-full">
    <button
      onClick={() => setMenuOpen(false)}
      className="text-3xl text-white/90 transition-transform hover:scale-105 hover:text-white md:hidden"
    >
      <FiArrowUpRight />
    </button>
  </div>
);

export default Navbar;
