import { useState } from "react";

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
      <Header />
      <div className="relative z-10">
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
          </div>
        </div>

        <div>
          <h2 className="informacion">
            Ingeniero en Sistemas Computacionales,{" "}
            <b class="text-emerald-600">
              recién egresado con excelencia académica.{" "}
            </b>
            Especializado en el ciclo completo de desarrollo web (Full-Stack) y
            diseño de interfaces responsivas y centradas en el usuario (UX/UI).
            Formación robusta avalada por{" "}
            <b class="text-emerald-600">
              Diplomados Internacionales en Análisis de Sistemas
            </b>{" "}
            y un Bootcamp intensivo con certificaciones en programación,
            complementando con un nivel de Ingles (A2) con certificacion en
            Cambridge. Busco aplicar mi{" "}
            <b class="text-emerald-600">sólida base algorítmica</b> y mi
            compromiso con el <b class="text-emerald-600">código mantenible</b>{" "}
            para generar <b class="text-emerald-600">soluciones innovadoras</b>{" "}
            aplicando el conocimiento de IA, en stacks de plataformas eficientes
            para mejorar mi productividad como Ingeniero de Software.
          </h2>
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
