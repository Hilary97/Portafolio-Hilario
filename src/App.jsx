import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logoJavaScript from '/public/icons8-javascript.svg'
import logoGit from '/public/icons8-git.svg'
import logoHTML from '/public/icons8-html-5.svg'
import logoCSS from '/public/icons8-css3.svg'
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
          <div className='card'>
            <a href="https://vite.dev" target="_blank">
                < img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
          
          
              <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
              <img src={logoJavaScript} className= "logo" />
              <img src={logoGit} className= "logo" />
              <img src={logoHTML} className= "logo" />
              <img src={logoCSS} className= "logo" />
          </div>
          <p className="read-the-docs">
                Certificados en estudios Universitarios y Insignias Digitales de Ucamp
              </p>

    </>
  )
}

export default App
