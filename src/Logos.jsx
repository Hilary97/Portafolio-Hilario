import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import logoJavaScript from "/icons8-javascript.svg";
import logoGit from "/icons8-git.svg";
import logoHTML from "/icons8-html-5.svg";
import logoCSS from "/icons8-css3.svg";
import logoNode from "/icons8-nodo-js.svg";
import logoMySQL from "/mysql.svg";
import logoClaude from "/claude-color.svg";
import logoNeovim from "/neovim.svg";
import logoVercel from "/vercel.svg";
import logoNext from "/nextjs.svg";
import logoSupabase from "/supabase.svg";
import logoOpenAI from "/openai.svg";
import logoTypeScript from "/typescript.svg";
import logoGentleAI from "/gentle-ai.png";
import { Reveal, Stagger, Item, Eyebrow } from "./motion.jsx";

const grupos = [
  {
    titulo: "frontend",
    items: [
      { src: reactLogo, name: "React" },
      { src: logoTypeScript, name: "TypeScript" },
      { src: logoJavaScript, name: "JavaScript" },
      { src: logoNext, name: "Next.js" },
      { src: viteLogo, name: "Vite" },
      { src: logoHTML, name: "HTML5" },
      { src: logoCSS, name: "CSS3" },
    ],
  },
  {
    titulo: "backend y datos",
    items: [
      { src: logoNode, name: "Node.js" },
      { src: logoSupabase, name: "Supabase" },
      { src: logoMySQL, name: "MySQL" },
    ],
  },
  {
    titulo: "flujo y entrega",
    items: [
      { src: logoGit, name: "Git/GitHub" },
      { src: logoVercel, name: "Vercel" },
      { src: logoNeovim, name: "Neovim" },
      { src: logoClaude, name: "Claude" },
      { src: logoOpenAI, name: "ChatGPT" },
      { src: logoGentleAI, name: "Gentle AI" },
    ],
  },
];

export function Logos() {
  return (
    <section id="stack" className="border-t border-edge/60 py-24">
      <Reveal>
        <Eyebrow>stack</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Con qué trabajo
        </h2>
        <p className="mt-3 max-w-2xl text-dusk">
          Agrupado por lo que aporto al equipo.
        </p>
      </Reveal>

      <Stagger className="mt-10 grid gap-5 lg:grid-cols-3" step={0.1}>
        {grupos.map((g) => (
          <Item key={g.titulo}>
            <div className="h-full rounded-2xl border border-edge bg-panel/70 p-6">
              <h3 className="font-mono text-sm text-lilac">{g.titulo}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li
                    key={t.name}
                    className="flex items-center gap-2 rounded-full border border-edge bg-abyss/60 py-1.5 pr-3.5 pl-2 text-sm text-mist"
                  >
                    <img
                      src={t.src}
                      alt=""
                      className="h-5 w-5 object-contain"
                    />
                    {t.name}
                  </li>
                ))}
              </ul>
            </div>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}
