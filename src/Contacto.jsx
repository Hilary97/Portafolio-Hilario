import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import CV from "/Cv_Hilario_Portafolio.png";
import { Reveal, Eyebrow } from "./motion.jsx";

const secundarios = [
  { label: "WhatsApp", href: "https://wa.me/523313023706", icon: FaWhatsapp },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hilario-nava",
    icon: FaLinkedin,
  },
  { label: "GitHub", href: "https://github.com/Hilary97", icon: FaGithub },
  { label: "Descargar CV", href: CV },
];

export function Contacto() {
  return (
    <section
      id="contacto"
      className="relative border-t border-edge/60 py-28 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(124_92_246/0.2),transparent_70%)]"
      />
      <Reveal className="relative">
        <Eyebrow>contacto</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          ¿Buscas un desarrollador full stack?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-dusk">
          Escríbeme, agenda una llamada o descarga mi CV.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:navahilario499@gmail.com"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ember px-6 font-semibold text-abyss transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ember/30"
          >
            <FaEnvelope aria-hidden="true" /> Escríbeme por correo
          </a>
          {secundarios.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-edge px-6 text-mist transition hover:-translate-y-0.5 hover:border-lilac hover:text-lilac"
            >
              {Icon && <Icon aria-hidden="true" />} {label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
