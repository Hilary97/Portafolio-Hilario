import { useState } from 'react'

import imagenCV from "/Cv_Hilario_Portafolio.png"
import miPhoto from '/IMG_4747.JPG'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <> 
       
         <div className='header'>
         <h1>Hilario Nava Jiménez</h1>
          <img src={imagenCV} alt="" id='photo'/>
          
          
         </div>
        <div>
        <h2 className='informacion'>
            Ingeniero en Sistemas Computacionales con sólida formación académica y experiencia práctica 
            en desarrollo web fullstack. Cuento con certificaciones en fundamentos de desarrollo web, 
            diplomados en análisis de sistemas computacionales y asesoría en ingeniería en computación. 
            He contribuido activamente en la creación de soluciones innovadoras y funcionales. 
            Me especializo en el diseño de interfaces responsiva con enfoque UX/UI. 
            Comprometido con el aprendizaje continuo, la ética profesional y el trabajo en equipo.
          </h2>
        </div>
         
          
      
          <h3>
        Soft Skills:
          </h3>
         
          

    </>
  )
}

export default App
