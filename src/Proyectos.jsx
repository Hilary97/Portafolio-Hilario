import { FaGithub } from "react-icons/fa";
import { Reveal, Stagger, Item, Eyebrow } from "./motion.jsx";

const proyectos = [
  {
    size: "big",
    tag: "★ destacado · pagos online",
    titulo: "Neo — de solo efectivo a vender online",
    desc: "Landing de Hot Sale con PayPal y Mercado Pago integrados. Construida en días con agentes de IA en el flujo de desarrollo.",
    stack: ["React", "PayPal", "Mercado Pago", "IA"],
    url: "https://github.com/Hilary97/neo",
  },
  {
    size: "mid",
    tag: "landing · eventos",
    titulo: "Invitaciones digitales",
    desc: "Bodas, XV años y eventos, con contacto por WhatsApp y correo.",
    url: "https://github.com/Hilary97/invitaciones-web",
  },
  {
    size: "mid",
    tag: "crud",
    titulo: "Biblioteca CRUD",
    desc: "Gestión de libros con operaciones CRUD completas.",
    url: "https://github.com/Hilary97/Proyecto_CRUD.git",
  },
  {
    tag: "plataforma",
    titulo: "Rural Net",
    desc: "Conectividad para zonas rurales.",
    url: "https://github.com/Hilary97/Codigo-de-Plataforma-RuralNet.git",
  },
  {
    tag: "api",
    titulo: "GeoWeather",
    desc: "Clima con búsqueda por ubicación.",
    url: "https://github.com/Hilary97/App-del-clima..git",
  },
  {
    tag: "bootcamp",
    titulo: "Landing Page",
    desc: "Proyecto final Full Stack.",
    url: "https://github.com/Hilary97/Proyecto_Bootcamp.git",
  },
];

const tamaños = {
  big: {
    span: "lg:col-span-4 lg:row-span-2",
    bg: "bg-panel bg-[radial-gradient(circle_at_85%_15%,rgb(255_180_84/0.18),transparent_45%),radial-gradient(circle_at_10%_90%,rgb(124_92_246/0.3),transparent_50%)]",
  },
  mid: { span: "lg:col-span-2", bg: "bg-panel/75" },
  sm: { span: "lg:col-span-2", bg: "bg-panel/75" },
};

export function Proyectos() {
  return (
    <section id="proyectos" className="border-t border-edge/60 py-24">
      <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>proyectos</Eyebrow>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Lo que he construido
          </h2>
        </div>
        <a
          href="https://github.com/Hilary97"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-edge px-6 font-semibold text-mist transition hover:-translate-y-0.5 hover:border-lilac"
        >
          <FaGithub aria-hidden="true" /> Todo en GitHub ↗
        </a>
      </Reveal>

      <Stagger className="grid gap-4 lg:grid-cols-6" step={0.08}>
        {proyectos.map((p) => {
          const size = p.size ?? "sm";
          const t = tamaños[size];
          const big = size === "big";
          return (
            <Item key={p.titulo} className={t.span}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-full flex-col gap-2.5 rounded-3xl border border-edge p-6 transition hover:-translate-y-1 hover:border-lilac ${t.bg}`}
              >
                <span className="font-mono text-xs text-ember">{p.tag}</span>
                <h3
                  className={`font-display font-bold ${
                    big ? "text-3xl leading-tight sm:text-4xl" : "text-xl"
                  }`}
                >
                  {p.titulo}
                </h3>
                <p
                  className={`text-dusk ${big ? "max-w-[44ch] text-[17px]" : "text-sm"}`}
                >
                  {p.desc}
                </p>
                {p.stack && (
                  <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-edge px-2.5 py-0.5 font-mono text-xs"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
                {size !== "sm" && (
                  <span className="mt-auto pt-2 font-mono text-[13px] text-lilac">
                    ver código →
                  </span>
                )}
              </a>
            </Item>
          );
        })}
      </Stagger>
    </section>
  );
}
