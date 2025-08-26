import "./Proyectos.css"
import ImgBiblioteca from "/IMGBiblioteca.png";
import ImgLandingPage from "/IMGLandingPage.png"
import ImgRuralNet from "/IMGRuralNet.png"  

export function Proyectos(){
   
    const handleClick = () => {
        window.open("https://hilary97.github.io/Proyecto_CRUD/", "_blank");
    };
    const handleClick2 = () => {
        window.open("https://phenomenal-starburst-b2768c.netlify.app/", "_blank");
    };
    const handleClick3 = () => {
        window.open("https://ornate-tarsier-3e4bfc.netlify.app/", "_blank");
    };
    const handleClick4 = () => {
        window.open("https://ornate-tarsier-3e4bfc.netlify.app/", "_blank");
    };

    return(
        <>

            <h3 class= "m-8">Mis proyectos. -Experiencia-</h3> 

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
                        <img src={ImgRuralNet} alt="Plataforma Rural Net" className="btn-img" />
                        <span className="title">Plataforma Rural Net</span>
                    </button>
                </div>

                

            </div>
        </>
    )
}