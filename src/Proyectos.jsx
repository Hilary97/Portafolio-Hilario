import { FaGithub } from "react-icons/fa";
import ImgBiblioteca from "/IMGBiblioteca.png";
import ImgLandingPage from "/IMGLandingPage.png";
import ImgRuralNet from "/IMGRuralNet.png";
import ImgAppClima from "/IMGAppClima.png";
import ImgNeo from "/IMGNeo.svg";
import ImgInvitaciones from "/IMGInvitaciones.svg";
import { Reveal, Stagger, Item, TiltCard, Eyebrow } from "./motion.jsx";

const casos = [
  {
    img: ImgNeo,
    alt: "Ilustración de la landing Neo",
    titulo: "Neo — Hot Sale Landing",
    destacado: true,
    problema: "El negocio solo cobraba en efectivo y en persona.",
    solucion: "Landing de venta con PayPal y Mercado Pago integrados.",
    resultado: "Venta online lista en días, con agentes de IA en el flujo.",
    stack: ["React", "PayPal", "Mercado Pago", "Agentes de IA"],
    url: "https://github.com/Hilary97/neo",
  },
  {
    img: ImgInvitaciones,
    alt: "Ilustración de una invitación y un sobre en tonos dorados",
    titulo: "Invitaciones digitales",
    problema: "Promocionar invitaciones para bodas, XV años y eventos.",
    solucion: "Landing ligera con contacto directo por WhatsApp y correo.",
    resultado: "Los clientes contactan en un clic desde el celular.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/Hilary97/invitaciones-web",
  },
];

const otros = [
  {
    img: ImgBiblioteca,
    titulo: "Biblioteca CRUD",
    desc: "Gestión de libros con operaciones CRUD completas.",
    url: "https://github.com/Hilary97/Proyecto_CRUD.git",
  },
  {
    img: ImgRuralNet,
    titulo: "Rural Net",
    desc: "Plataforma web para conectividad en zonas rurales.",
    url: "https://github.com/Hilary97/Codigo-de-Plataforma-RuralNet.git",
  },
  {
    img: ImgAppClima,
    titulo: "GeoWeather",
    desc: "App del clima con búsqueda por ubicación.",
    url: "https://github.com/Hilary97/App-del-clima..git",
  },
  {
    img: ImgLandingPage,
    titulo: "Landing Page",
    desc: "Proyecto final del bootcamp Full Stack.",
    url: "https://github.com/Hilary97/Proyecto_Bootcamp.git",
  },
];

const campos = [
  ["problema", "problema"],
  ["solución", "solucion"],
  ["resultado", "resultado"],
];

export function Proyectos() {
  return (
    <section id="proyectos" className="border-t border-edge/60 py-24">
      <Reveal>
        <Eyebrow>casos-de-estudio</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Problemas reales, resueltos
        </h2>
        <p className="mt-3 max-w-2xl text-dusk">
          Cada proyecto muestra el problema del negocio, lo que construí y el
          stack que usé.
        </p>
      </Reveal>

      <Stagger className="mt-10 grid gap-5" step={0.1}>
        {casos.map((c) => (
          <Item key={c.titulo}>
            <article className="grid gap-7 rounded-3xl border border-edge bg-panel/70 p-5 transition hover:border-lilac md:grid-cols-[320px_1fr]">
              <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl border border-edge bg-abyss">
                <img
                  src={c.img}
                  alt={c.alt}
                  className="h-full w-full object-contain p-5"
                />
              </div>
              <div>
                {c.destacado && (
                  <span className="rounded-full bg-ember/15 px-3 py-1 font-mono text-xs text-ember">
                    destacado
                  </span>
                )}
                <h3 className="mt-2 mb-4 font-display text-2xl font-bold">
                  {c.titulo}
                </h3>
                <dl className="mb-4 grid gap-4 sm:grid-cols-3">
                  {campos.map(([label, key]) => (
                    <div key={key}>
                      <dt className="font-mono text-xs text-lilac">{label}</dt>
                      <dd className="mt-1 text-sm text-dusk">{c[key]}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="mb-4 flex flex-wrap gap-2" aria-label="Stack">
                  {c.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-edge px-2.5 py-1 font-mono text-xs text-mist"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-lilac transition hover:text-ember"
                >
                  <FaGithub /> Ver código →
                </a>
              </div>
            </article>
          </Item>
        ))}
      </Stagger>

      <Stagger
        className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        step={0.08}
      >
        {otros.map((p) => (
          <Item key={p.titulo}>
            <TiltCard
              max={5}
              className="group h-full overflow-hidden rounded-2xl border border-edge bg-panel transition hover:border-lilac"
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p.img}
                    alt={`Captura del proyecto ${p.titulo}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 p-4">
                  <h3 className="font-display font-bold">{p.titulo}</h3>
                  <p className="text-sm text-dusk">{p.desc}</p>
                  <span className="mt-auto flex items-center gap-2 pt-2 font-mono text-xs text-lilac group-hover:text-ember">
                    <FaGithub /> Ver código →
                  </span>
                </div>
              </a>
            </TiltCard>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}
