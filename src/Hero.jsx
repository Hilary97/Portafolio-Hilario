import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import miFoto from "/MiFoto.png";
import { TiltCard } from "./motion.jsx";
import { Socials } from "./Socials.jsx";

const EASE = [0.22, 1, 0.36, 1];

function enter(delay) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

export function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="flex min-h-screen flex-col justify-center pt-24 pb-16"
    >
      <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <motion.div style={reduce ? undefined : { y: yText, opacity: fade }}>
          <motion.p
            {...enter(0)}
            className="font-mono text-sm tracking-widest text-lilac"
          >
            <span className="text-ember">~/</span>hola, soy
          </motion.p>

          <motion.h1
            {...enter(0.1)}
            className="mt-4 font-display text-5xl leading-[1.02] font-extrabold sm:text-6xl xl:text-7xl"
          >
            Hilario
            <br />
            <span className="text-outline">Nava</span>
          </motion.h1>

          <motion.p {...enter(0.2)} className="mt-6 max-w-xl text-lg text-dusk">
            <b className="font-semibold text-mist">
              Ingeniero de Software "Potenciado con IA"
            </b>{" "}
            especializado en Desarrollo Web Moderno y Arquitectura de Software.
          </motion.p>

          <motion.div {...enter(0.3)} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="rounded-full bg-ember px-7 py-3 font-mono text-sm font-medium text-abyss transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ember/30"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-full border border-edge px-7 py-3 font-mono text-sm text-mist transition hover:-translate-y-0.5 hover:border-lilac hover:text-lilac"
            >
              Contáctame
            </a>
          </motion.div>

          <motion.div {...enter(0.4)}>
            <Socials className="mt-10" />
          </motion.div>
        </motion.div>

        <motion.div
          style={reduce ? undefined : { y: yCard }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="mx-auto w-full max-w-sm"
        >
          <TiltCard
            glare
            max={12}
            className="relative rounded-3xl border border-edge bg-panel/80 p-6 shadow-2xl shadow-iris/20"
          >
            <img
              src={miFoto}
              alt="Foto de Hilario Nava"
              className="w-full rounded-2xl object-cover"
            />
            <div
              className="mt-5 flex items-center justify-between"
              style={{ transform: "translateZ(30px)" }}
            >
              <div>
                <p className="font-display text-lg font-bold">Hilario Nava</p>
                <p className="font-mono text-xs text-dusk">full-stack.dev</p>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-edge px-3 py-1.5 font-mono text-xs text-mist">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
                </span>
                Abierto a oportunidades
              </span>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      <motion.a
        href="#sobre-mi"
        aria-label="Bajar a la siguiente sección"
        className="mx-auto mt-14 flex flex-col items-center gap-2 font-mono text-xs text-dusk"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        scroll
        <span className="h-8 w-px bg-gradient-to-b from-lilac to-transparent" />
      </motion.a>
    </section>
  );
}
