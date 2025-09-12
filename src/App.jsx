import { useState } from 'react'

import imagenCV from "/Cv_Hilario_Portafolio.png"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className='header'>
        <h1>Hilario Nava Jiménez</h1>
        <a href={imagenCV}> <img src={imagenCV} alt="" id='photo'/></a> 
      </div>
      <div>
        <h2 className='informacion'>
          <b style={{ color: 'rgb(46, 213, 20)' }}>Ingeniero en Sistemas Computacionales</b>  con sólida formación académica y <b style={{color: 'rgb(46, 213, 20)'}}>experiencia práctica </b>  
          en desarrollo web fullstack. Cuento con <b style={{ color: 'rgb(46, 213, 20)' }}>certificaciones </b> en fundamentos de desarrollo web, 
          <b style={{ color: 'rgb(46, 213, 20)' }}> diplomados </b> en análisis de sistemas computacionales y asesoría en ingeniería en computación. 
          He contribuido activamente en la creación de <b style={{ color: 'rgb(46, 213, 20)' }}>soluciones innovadoras</b> y funcionales. 
          Me especializo en el diseño de interfaces responsiva con enfoque UX/UI. 
          <b style={{ color: 'rgb(46, 213, 20)' }}> Comprometido</b> con el aprendizaje continuo, la ética profesional y el <b style={{color: 'rgb(46, 213, 20)'}}>trabajo en equipo.</b>
        </h2>
      </div>
      <h3>
        Soft Skills:
      </h3>
    </>
  )
}

export default App
