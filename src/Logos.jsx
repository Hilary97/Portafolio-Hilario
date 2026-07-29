import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logoJavaScript from "/icons8-javascript.svg";
import logoGit from "/icons8-git.svg";
import logoHTML from "/icons8-html-5.svg";
import logoCSS from "/icons8-css3.svg";
import logoNode from "/icons8-nodo-js.svg";
import logoMySQL from "/mysql.svg";
import logoFirebase from "/Firebase_Studio_logo.svg";
import logoClaude from "/claude-color.svg";
import logoN8n from "/n8n-color.svg";
import logoCopilot from "/copilot-color.svg";
import { Reveal, Stagger, Item, Eyebrow } from "./motion.jsx";

const stack = [
  { src: reactLogo, name: "React" },
  { src: logoJavaScript, name: "JavaScript" },
  { src: viteLogo, name: "Vite" },
  { src: logoNode, name: "Node.js" },
  { src: logoMySQL, name: "MySQL" },
  { src: logoFirebase, name: "Firebase" },
  { src: logoHTML, name: "HTML5" },
  { src: logoCSS, name: "CSS3" },
  { src: logoGit, name: "Git" },
  { src: logoClaude, name: "Claude" },
  { src: logoCopilot, name: "Copilot" },
  { src: logoN8n, name: "n8n" },
];

export function Logos() {
  return (
    <section id="stack" className="py-24">
      <Reveal>
        <Eyebrow>stack</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Herramientas de trabajo
        </h2>
      </Reveal>

      <Stagger className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {stack.map((tool) => (
          <Item key={tool.name}>
            <div className="group flex flex-col items-center gap-3 rounded-2xl border border-edge bg-panel/60 p-5 transition hover:-translate-y-1 hover:border-lilac hover:shadow-lg hover:shadow-iris/20">
              <img
                src={tool.src}
                alt={`Logo de ${tool.name}`}
                className="h-12 w-12 object-contain transition group-hover:scale-110"
              />
              <span className="font-mono text-xs text-dusk group-hover:text-mist">
                {tool.name}
              </span>
            </div>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}
