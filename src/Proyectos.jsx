import { FaGithub } from "react-icons/fa";
import ImgBiblioteca from "/IMGBiblioteca.png";
import ImgLandingPage from "/IMGLandingPage.png";
import ImgRuralNet from "/IMGRuralNet.png";
import ImgAppClima from "/IMGAppClima.png";
import ImgNeo from "/IMGNeo.svg";
import { Reveal, Stagger, Item, TiltCard, Eyebrow } from "./motion.jsx";

const proyectos = [
  {
    img: ImgNeo,
    contain: true,
    titulo: "Neo — Hot Sale Landing",
    desc: "Landing de venta con pagos online: PayPal y Mercado Pago integrados, construida en días con agentes de IA.",
    url: "https://github.com/Hilary97/neo",
    destacado: true,
  },
  {
    img: ImgBiblioteca,
    titulo: "Biblioteca CRUD",
    desc: "Gestión de libros con operaciones CRUD completas.",
    url: "https://github.com/Hilary97/Proyecto_CRUD.git",
  },
  {
    img: ImgRuralNet,
    titulo: "Plataforma Rural Net",
    desc: "Plataforma web pensada para conectividad en zonas rurales.",
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

export function Proyectos() {
  return (
    <section id="proyectos" className="py-24">
      <Reveal>
        <Eyebrow>proyectos</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Proyectos y experiencia
        </h2>
      </Reveal>

      <Stagger className="mt-12 grid gap-6 sm:grid-cols-2" step={0.1}>
        {proyectos.map((p) => (
          <Item
            key={p.titulo}
            className={p.destacado ? "sm:col-span-2" : undefined}
          >
            <TiltCard
              glare
              max={5}
              className="group relative h-full overflow-hidden rounded-3xl border border-edge bg-panel/70"
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col"
              >
                <div
                  className={`overflow-hidden ${
                    p.destacado ? "aspect-[21/9]" : "aspect-video"
                  } ${p.contain ? "bg-abyss" : ""}`}
                >
                  <img
                    src={p.img}
                    alt={`Captura del proyecto ${p.titulo}`}
                    className={`h-full w-full transition duration-500 group-hover:scale-105 ${
                      p.contain ? "object-contain p-6" : "object-cover"
                    }`}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-xl font-bold">
                      {p.titulo}
                    </h3>
                    {p.destacado && (
                      <span className="rounded-full bg-ember/15 px-3 py-1 font-mono text-xs text-ember">
                        destacado
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-dusk">{p.desc}</p>
                  <span className="mt-auto flex items-center gap-2 pt-3 font-mono text-sm text-lilac transition group-hover:text-ember">
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
