import imagenCertificados1 from "/1.png"
import imagenCertificado2 from "/Copia de 1.png"
import imagenInsignia1 from "/developer-web-fullstack-beginner-outstanding.png"
import imagenInsignia2 from "/my-first-crud-app-outstanding.png"
import imagenInsignia3 from "/my-first-landing-page-outstanding.png"
import imagenHackthon from "/certificado_Hackthon.jpg"
import "./imagenes.css"

export function Imagen(){
    return(
        <>
           
         
          <p className="read-the-docs m-8" >
                Certificados en estudios Universitarios y Insignias Digitales de Ucamp
          </p>
            <div className="Imagenes" class = "grid grid-cols-3 grid-rows-2 gap-2 mt-10">
                <img src={imagenCertificados1} alt="" className="Diploma1" /> 
                <img src={imagenCertificado2} alt="" className="Diploma2" />
                <img src={imagenHackthon} alt="" className="Certificado"/>
                <img src={imagenInsignia1} alt="" className="Insignia1"/>
                <img src={imagenInsignia2} alt="" className="Insignia2"/>
                <img src={imagenInsignia3} alt="" className="Insignia3"/>
                
            </div>   
        
        
        </>
        
    )
}
