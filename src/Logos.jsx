import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logoJavaScript from '/public/icons8-javascript.svg'
import logoGit from '/public/icons8-git.svg'
import logoHTML from '/public/icons8-html-5.svg'
import logoCSS from '/public/icons8-css3.svg'
import logoNode from '/public/icons8-nodo-js.svg'
import logoMySQl from '/public/mysql.svg'


export function Logos(){
    return(
        <>
          <div className='card'  class="grid grid-cols-4 grid-rows-2 gap-4 ">
            
            <div><img src={reactLogo} className="logo react" alt="React logo"  /></div>
            <div><img src={logoJavaScript} className= "logo" /></div>
            <div>< img src={viteLogo} className="logo" alt="Vite logo" /></div>
            <div><img src={logoGit} className= "logo" /></div>
            <div><img src={logoHTML} className= "logo" /></div>
            <div><img src={logoCSS} className= "logo" /></div>
            <div><img src={logoNode} alt="" className="logo"/></div>
            <div><img src={logoMySQl} alt="" className="logo"/></div>
          </div>
        </>
    )
}