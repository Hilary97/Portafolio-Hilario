import { motion } from "motion/react";
import CV from "/Cv_Hilario_Portafolio.png";
import { Terminal } from "./Terminal.jsx";

const EASE = [0.22, 1, 0.36, 1];

function enter(delay) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

const btn =
  "inline-flex min-h-[46px] items-center rounded-full border px-6 font-semibold transition hover:-translate-y-0.5";

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center pt-28 pb-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <motion.p {...enter(0)} className="font-mono text-sm text-dusk">
            <span className="text-ember">~/</span>hola, soy
          </motion.p>

          <motion.h1
            {...enter(0.1)}
            className="mt-4 mb-5 font-display text-5xl leading-[0.95] font-black tracking-tight sm:text-6xl xl:text-7xl"
          >
            Hilario <span className="text-outline block">Nava</span>
          </motion.h1>

          <motion.p
            {...enter(0.2)}
            className="mb-7 max-w-[46ch] text-lg text-dusk"
          >
            <b className="font-semibold text-mist">
              Ingeniero de Software Full Stack potenciado con IA.
            </b>{" "}
            Construyo apps web con React, TypeScript y Supabase, e integro pagos
            online para que los negocios vendan más.
          </motion.p>

          <motion.div {...enter(0.3)} className="flex flex-wrap gap-3">
            <a
              href="#contacto"
              className={`${btn} border-ember bg-ember text-abyss hover:shadow-lg hover:shadow-ember/30`}
            >
              Contrátame
            </a>
            <a
              href="#proyectos"
              className={`${btn} border-edge text-mist hover:border-lilac`}
            >
              Ver proyectos
            </a>
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} border-edge text-mist hover:border-lilac`}
            >
              CV ↓
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
