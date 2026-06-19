import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import imagenCV from "/Cv_Hilario_Portafolio.png";

import "./App.css";
import { Imagen } from "./Imgenes.jsx";
import { Logos } from "./Logos.jsx";
import { Proyectos } from "./Proyectos.jsx";
import titulo from "/TituloUTEL.png";
import miFoto from "/MiFoto.png";
import { Contacto } from "./Contacto.jsx";
import { Header } from "./header.jsx";
import { ParticlesBackground } from "./ParticlesBackground.jsx";

function App() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [count, setCount] = useState(0);
  const openTitulo = () => {
    window.open(titulo);
  };

  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10">
        <Header />
        <div className="header">
          <div class="rounded-xl">
            <img
              src={miFoto}
              class="justify-items-center  w-64 bg-blue-500 transition delay-150 duration-150 
          ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500
          outline-2 outline-offset-2 outline-emerald-300
          outline-3 outline-offset-2 outline-double 
          imagen bg-cyan-500 shadow-lg shadow-cyan-500/50"
              alt=""
            />
            <div class="flex flex-nowrap  md:gap-5">
              <a
                href="https://www.linkedin.com/in/hilario-nava"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:text-emerald-400 text-3xl transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Hilary97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:text-emerald-400 text-3xl transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:navahilario499@gmail.com"
                className="text-emerald-500 hover:text-emerald-400 text-3xl transition"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/523313023706"
                className="text-emerald-500 hover:text-emerald-400 text-3xl transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h2 className="informacion">
            <b className="text-emerald-600">Ingeniero de Software Full Stack</b>{" "}
            especializado en Desarrollo Web Moderno y Arquitectura de Software.
          </h2>
          <p className="informacion">
            Llevé un negocio de solo pagos en efectivo presencial a vender
            online: integré{" "}
            <b className="text-emerald-600">PayPal y Mercado Pago</b> en una
            landing construida en días aplicando{" "}
            <b className="text-emerald-600">agentes de IA</b> en el flujo de
            desarrollo.
          </p>
          <p className="informacion">
            Stack:{" "}
            <b className="text-emerald-600">
              React.js, JavaScript, Node.js, MySQL, Firebase, Git/GitHub
            </b>
            . Desarrollo aplicaciones completas Frontend + Backend con UX/UI
            y código limpio, potenciando mi flujo con Claude, GitHub Copilot
            y n8n. Certificaciones en{" "}
            <b className="text-emerald-600">
              Full Stack, JavaScript e inglés A2
            </b>{" "}
            (ver sección de certificados).
          </p>
        </div>
        <h3>Hard Skills:</h3>
        <Logos />
        <Proyectos />
        <Imagen />
        <Contacto />
      </div>
    </>
  );
}

export default App;
