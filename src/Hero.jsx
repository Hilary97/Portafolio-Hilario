import { motion } from "motion/react";
import miFoto from "/MiFoto.png";
import { TiltCard } from "./motion.jsx";

const EASE = [0.22, 1, 0.36, 1];

function enter(delay) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  };
}

const facts = [
  { label: "formación", value: "Ing. Sistemas Computacionales" },
  { label: "enfoque", value: "Frontend + Backend" },
  { label: "certificados", value: "Full Stack · JS · Inglés A2" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center pt-28 pb-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.span
            {...enter(0)}
            className="inline-flex items-center gap-2.5 rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 font-mono text-sm text-ember"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            Abierto a oportunidades · remoto o presencial
          </motion.span>

          <motion.h1
            {...enter(0.1)}
            className="mt-6 font-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl xl:text-6xl"
          >
            Ingeniero de Software Full Stack que{" "}
            <span className="text-lilac">entrega software en producción</span>.
          </motion.h1>

          <motion.p
            {...enter(0.2)}
            className="mt-5 max-w-2xl text-lg text-dusk"
          >
            Soy Hilario Nava. Construyo aplicaciones web con{" "}
            <b className="font-semibold text-mist">
              React, TypeScript, Node.js y Supabase
            </b>
            , e integro pagos online con{" "}
            <b className="font-semibold text-mist">PayPal y Mercado Pago</b>.
            Trabajo con agentes de IA para entregar más rápido sin perder
            calidad.
          </motion.p>

          <motion.div {...enter(0.3)} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="inline-flex min-h-11 items-center rounded-full bg-ember px-6 font-semibold text-abyss transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ember/30"
            >
              Ver casos de estudio
            </a>
            <a
              href="mailto:navahilario499@gmail.com"
              className="inline-flex min-h-11 items-center rounded-full border border-edge px-6 text-mist transition hover:-translate-y-0.5 hover:border-lilac hover:text-lilac"
            >
              navahilario499@gmail.com
            </a>
          </motion.div>

          <motion.dl
            {...enter(0.4)}
            className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-edge bg-edge sm:grid-cols-3"
          >
            {facts.map((f) => (
              <div key={f.label} className="bg-panel px-4 py-4">
                <dt className="font-mono text-xs text-dusk">{f.label}</dt>
                <dd className="mt-1 text-sm font-bold text-mist">{f.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          className="mx-auto w-full max-w-sm"
        >
          <TiltCard
            glare
            max={8}
            className="relative overflow-hidden rounded-3xl border border-edge bg-panel/80 shadow-2xl shadow-iris/20"
          >
            <img
              src={miFoto}
              alt="Foto de Hilario Nava"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-edge bg-abyss/80 px-4 py-3 backdrop-blur">
              <p className="font-display font-bold">Hilario Nava</p>
              <p className="font-mono text-xs text-lilac">full-stack.dev</p>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
