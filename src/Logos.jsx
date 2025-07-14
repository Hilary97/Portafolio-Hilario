import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logoJavaScript from '/public/icons8-javascript.svg'
import logoGit from '/public/icons8-git.svg'
import logoHTML from '/public/icons8-html-5.svg'
import logoCSS from '/public/icons8-css3.svg'

export function Logos(){
    return(
        <>
         <div className='card'>
         
            < img src={viteLogo} className="logo" alt="Vite logo" />
             
            <img src={reactLogo} className="logo react" alt="React logo" />
            
            <img src={logoJavaScript} className= "logo" />
            <img src={logoGit} className= "logo" />
            <img src={logoHTML} className= "logo" />
            <img src={logoCSS} className= "logo" />
          </div>
        </>
    )
}