import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { FaBars, FaTimes } from "react-icons/fa";
import titulo from "/TituloUTEL.png";
import CV from "/Cv_Hilario_Portafolio.png";

const links = [
  { label: "proyectos", href: "#proyectos" },
  { label: "stack", href: "#stack" },
  { label: "certificados", href: "#certificados" },
  { label: "contacto", href: "#contacto" },
];

const docs = [
  { label: "Título", href: titulo },
  { label: "CV", href: CV },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-edge/60 bg-abyss/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="font-mono text-sm font-medium text-mist">
          hilario<span className="text-ember">.</span>nava
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-sm text-dusk transition hover:text-lilac"
            >
              {l.label}
            </a>
          ))}
          {docs.map((d) => (
            <a
              key={d.label}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-edge px-4 py-1.5 font-mono text-sm text-mist transition hover:border-lilac hover:text-lilac"
            >
              {d.label}
            </a>
          ))}
        </nav>

        <button
          className="text-xl text-mist md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-edge/60 bg-abyss/95 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {[...links, ...docs].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("#") ? undefined : "_blank"}
                  rel={l.href.startsWith("#") ? undefined : "noopener noreferrer"}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 font-mono text-sm text-dusk transition hover:bg-panel hover:text-lilac"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <motion.div
        className="h-0.5 origin-left bg-gradient-to-r from-iris via-lilac to-ember"
        style={{ scaleX }}
      />
    </header>
  );
}
