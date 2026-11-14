import { Reveal, Eyebrow } from "./motion.jsx";

const canales = [
  {
    label: "correo",
    detalle: "navahilario499@gmail.com",
    href: "mailto:navahilario499@gmail.com",
  },
  {
    label: "linkedin",
    detalle: "/in/hilario-nava",
    href: "https://www.linkedin.com/in/hilario-nava",
  },
  {
    label: "whatsapp",
    detalle: "mensaje directo",
    href: "https://wa.me/523313023706",
  },
  {
    label: "github",
    detalle: "@Hilary97",
    href: "https://github.com/Hilary97",
  },
];

export function Contacto() {
  return (
    <section id="contacto" className="border-t border-edge/60 py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <Eyebrow>contacto</Eyebrow>
          <h2 className="mt-2 font-display text-4xl leading-none font-bold tracking-tight sm:text-5xl">
            ¿Tu equipo necesita un dev full stack?
          </h2>
          <p className="mt-4 max-w-[46ch] text-lg text-dusk">
            Abierto a oportunidades remotas y presenciales. Escríbeme por el
            canal que prefieras.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-2.5">
          {canales.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-edge bg-panel px-5 font-mono text-[15px] transition hover:border-ember hover:text-ember"
            >
              {c.label}
              <span className="truncate text-[13px] text-dusk">
                {c.detalle}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
