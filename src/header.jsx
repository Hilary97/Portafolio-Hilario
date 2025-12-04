import titulo from "/TituloUTEL.png";
import CV from "/Cv_Hilario_Portafolio.png";
import { Contacto } from "./Contacto";

export function Header() {
  return (
    <>
      <header className="sticky top-0 w-full size-18 rounded-xl bg-radial-[at_100%_85%] from-gray to-zinc-900 to-75%   text-white shadow-md z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <a href="#">
              <h1 className="text-2xl font-bold">Hilario Nava</h1>
            </a>
          </div>
          <nav className="hidden md:block font-bold text-xl sargento-gorila ">
            <ul className="flex space-x-15">
              <li>
                <a
                  href={titulo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500  transition  "
                >
                  Titulo
                </a>
              </li>
              <li>
                <a
                  href={CV}
                  className="hover:text-emerald-500 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-emerald-500 transition"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          <button className="md:hidden"></button>
        </div>
      </header>
    </>
  );
}
