import { useState } from 'react'

import miPhoto from '/public/IMG_4747.JPG'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <> 
         <div className='header'>
         <h1>Hilaro Nava Jiménez</h1>
          <img src={miPhoto} alt="" id='photo'/>
         </div>

         <h2>
            Ingeniero en Sistemas Computacionales con sólida formación académica y experiencia práctica 
            en desarrollo web fullstack. Cuento con certificaciones en fundamentos de desarrollo web, 
            diplomados en análisis de sistemas computacionales y asesoría en ingeniería en computación. 
            He contribuido activamente en la creación de soluciones innovadoras y funcionales. 
            Me especializo en el diseño de interfaces responsiva con enfoque UX/UI. 
            Comprometido con el aprendizaje continuo, la ética profesional y el trabajo en equipo.
          </h2>
          
      
          <h3>
        Soft Skills:
          </h3>
         
          

    </>
  )
}

export default App
