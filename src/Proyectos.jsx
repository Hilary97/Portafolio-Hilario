import "./Proyectos.css";
import ImgBiblioteca from "/IMGBiblioteca.png";
import ImgLandingPage from "/IMGLandingPage.png";
import ImgRuralNet from "/IMGRuralNet.png";
import ImgAppClima from "/IMGAppClima.png";
import ImgNeo from "/IMGNeo.svg";
export function Proyectos() {
  const handleClick = () => {
    window.open("https://github.com/Hilary97/Proyecto_CRUD.git", "_blank");
  };
  const handleClick2 = () => {
    window.open("https://github.com/Hilary97/Proyecto_Bootcamp.git", "_blank");
  };
  const handleClick3 = () => {
    window.open(
      "https://github.com/Hilary97/Codigo-de-Plataforma-RuralNet.git",
      "_blank",
    );
  };
  const handleClick4 = () => {
    window.open("https://github.com/Hilary97/App-del-clima..git", "_blank");
  };
  const handleClick5 = () => {
    window.open("https://github.com/Hilary97/neo", "_blank");
  };

  return (
    <>
      <h3 class="m-8">Mis proyectos. -Experiencia-</h3>

      <div className="Card">
        <div className="project-item">
          <button onClick={handleClick} className="project-button">
            <img src={ImgBiblioteca} alt="Biblioteca" className="btn-img" />
            <span className="title">Biblioteca CRUD</span>
          </button>
        </div>

        <div className="project-item">
          <button onClick={handleClick2} className="project-button">
            <img src={ImgLandingPage} alt="Landing Page" className="btn-img" />
            <span className="title">Landing Page</span>
          </button>
        </div>

        <div className="project-item">
          <button onClick={handleClick3} className="project-button">
            <img
              src={ImgRuralNet}
              alt="Plataforma Rural Net"
              className="btn-img"
            />
            <span className="title">Plataforma Rural Net</span>
          </button>
        </div>
        <div className="project-item">
          <button onClick={handleClick4} className="project-button">
            <img src={ImgAppClima} alt="App Clima" className="btn-img" />
            <span className="title">GeoWeather</span>
          </button>
        </div>

        <div className="project-item">
          <button onClick={handleClick5} className="project-button">
            <img
              src={ImgNeo}
              alt="Neo Hot Sale Landing Page"
              className="btn-img neo-img"
            />
            <span className="title">Neo — Hot Sale Landing</span>
          </button>
        </div>
      </div>
    </>
  );
}
