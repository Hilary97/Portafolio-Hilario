import { useState } from "react";

import imagenCV from "/Cv_Hilario_Portafolio.png";

import "./App.css";
import { Imagen } from "./Imgenes.jsx";
import { Logos } from "./Logos.jsx";
import { Proyectos } from "./Proyectos.jsx";
import titulo from "/TituloUTEL.png";

function App() {
  const [count, setCount] = useState(0);
  const openTitulo = () => {
    window.open(titulo);
  };

  return (
    <>
      <div className="header ">
        <h1>Hilario Nava Jiménez</h1>
        <a href={imagenCV}>
          {" "}
          <img src={imagenCV} alt="" id="photo" />
        </a>
      </div>
      <div class="relative">
        <button onClick={openTitulo} class="absolute bottom-0 left-0">
          <b style={{ color: "rgba(46, 239, 66, 1) " }}>Titulo</b>
        </button>
      </div>

      <div>
        <h2 className="informacion">
          Ingeniero en Sistemas Computacionales,{" "}
          <b style={{ color: "rgb(46, 213, 20)" }}>
            recién egresado con excelencia académica.{" "}
          </b>
          Especializado en el ciclo completo de desarrollo web (Full-Stack) y
          diseño de interfaces responsivas y centradas en el usuario (UX/UI).
          Formación robusta avalada por{" "}
          <b style={{ color: "rgb(46, 213, 20)" }}>
            Diplomados Internacionales en Análisis de Sistemas
          </b>{" "}
          y un Bootcamp intensivo con certificaciones en programación,
          complementando con un nivel de Ingles (A2) con certificacion en
          Cambridge. Busco aplicar mi{" "}
          <b style={{ color: "rgb(46, 213, 20" }}>sólida base algorítmica</b> y
          mi compromiso con el{" "}
          <b style={{ color: "rgb(46, 213, 20" }}>código mantenible</b> para
          generar{" "}
          <b style={{ color: "rgb(46, 213, 20)" }}>soluciones innovadoras</b>{" "}
          como Ingeniero de Software.
        </h2>
      </div>
      <h3>Soft Skills:</h3>
      <Logos />
      <Proyectos />
      <Imagen />
    </>
  );
}

export default App;
