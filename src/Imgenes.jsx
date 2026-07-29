import imagenCertificados1 from "/1.png";
import imagenCertificado2 from "/Copia de 1.png";
import imagenInsignia1 from "/Certificado_Fullstack.png";
import imagenInsignia2 from "/CRUD.png";
import imagenInsignia3 from "/FirstPage.png";
import imagenHackthon from "/certificado_Hackthon.jpg";
import certficadoIngles from "/Constancia A2-Hilario Nava Jimenez.png";
import certificadoJavaScript from "/Certificado_JavaScript.png";
import certificadoBIG from "/CertificadoBIG.png";
import { Reveal, Stagger, Item, Eyebrow } from "./motion.jsx";

const certificados = [
  { src: imagenCertificados1, alt: "Diploma" },
  { src: imagenCertificado2, alt: "Diploma" },
  { src: certficadoIngles, alt: "Constancia de inglés A2" },
  { src: imagenInsignia1, alt: "Certificado Full Stack" },
  { src: imagenInsignia2, alt: "Insignia CRUD" },
  { src: imagenInsignia3, alt: "Insignia First Page" },
  { src: imagenHackthon, alt: "Certificado de Hackathon" },
  { src: certificadoJavaScript, alt: "Certificado de JavaScript" },
  { src: certificadoBIG, alt: "Certificado BIG" },
];

export function Imagen() {
  return (
    <section id="certificados" className="py-24">
      <Reveal>
        <Eyebrow>certificados</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Certificados
        </h2>
      </Reveal>

      <Stagger
        className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3"
        step={0.05}
      >
        {certificados.map((c, i) => (
          <Item key={i}>
            <div className="overflow-hidden rounded-2xl border border-edge bg-panel/60 transition hover:-translate-y-1 hover:border-lilac hover:shadow-lg hover:shadow-iris/20">
              <img
                src={c.src}
                alt={c.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}
