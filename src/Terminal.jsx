import { useRef, useState } from "react";

const P = ({ children }) => <span className="text-ember">{children}</span>;
const K = ({ children }) => <span className="text-lilac">{children}</span>;
const L = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-lilac underline-offset-4 hover:text-ember hover:underline"
  >
    {children}
  </a>
);

const comandos = [
  {
    id: "whoami",
    label: "whoami",
    out: (
      <>
        <K>Hilario Nava</K> — Ingeniero en Sistemas Computacionales{"\n"}
        rol: Full Stack · Desarrollo Web Moderno · Arquitectura{"\n"}
        flujo: Claude + ChatGPT con <K>Gentle AI</K>
        {"\n"}
        certificados: Full Stack · JavaScript · Inglés A2{"\n"}
        <span className="text-dusk"># estado: abierto a oportunidades</span>
      </>
    ),
  },
  {
    id: "stack",
    label: "cat stack.txt",
    out: (
      <>
        <K>frontend </K> React, TypeScript, JavaScript, Next.js, Vite{"\n"}
        <K>backend </K> Node.js, Supabase, MySQL{"\n"}
        <K>pagos </K> PayPal, Mercado Pago{"\n"}
        <K>entrega </K> Git/GitHub, Vercel, Neovim
      </>
    ),
  },
  {
    id: "proyectos",
    label: "ls proyectos/",
    out: (
      <>
        <K>neo/</K>
        {"                 "}pagos online ★{"\n"}
        <K>invitaciones-web/</K>
        {"    "}landing eventos{"\n"}
        <K>biblioteca-crud/</K>
        {"     "}CRUD completo{"\n"}
        <K>rural-net/</K>
        {"           "}plataforma web{"\n"}
        <K>geoweather/</K>
        {"          "}app del clima
      </>
    ),
  },
  {
    id: "contacto",
    label: "./contacto.sh",
    out: (
      <>
        correo{"    "}
        <L href="mailto:navahilario499@gmail.com">navahilario499@gmail.com</L>
        {"\n"}
        linkedin{"  "}
        <L href="https://www.linkedin.com/in/hilario-nava">/in/hilario-nava</L>
        {"\n"}
        whatsapp{"  "}
        <L href="https://wa.me/523313023706">wa.me/523313023706</L>
      </>
    ),
  },
];

export function Terminal() {
  const [activo, setActivo] = useState(comandos[0].id);
  const tabs = useRef([]);
  const actual = comandos.find((c) => c.id === activo);

  const onKeyDown = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const n =
      (i + (e.key === "ArrowRight" ? 1 : comandos.length - 1)) %
      comandos.length;
    tabs.current[n]?.focus();
    setActivo(comandos[n].id);
  };

  return (
    <div
      className="overflow-hidden rounded-[20px] border border-edge bg-panel/90 shadow-[0_30px_80px_-30px_rgb(124_92_246/0.6)]"
      aria-label="Terminal interactiva con información de Hilario"
      role="region"
    >
      <div className="flex items-center gap-2 border-b border-edge px-4 py-3 font-mono text-xs text-dusk">
        <i className="h-[11px] w-[11px] rounded-full bg-ember" />
        <i className="h-[11px] w-[11px] rounded-full bg-edge" />
        <i className="h-[11px] w-[11px] rounded-full bg-edge" />
        <span className="ml-2">hilario@nava: ~</span>
      </div>

      <div
        role="tablist"
        aria-label="Comandos"
        className="flex flex-wrap gap-1.5 px-4 pt-3"
      >
        {comandos.map((c, i) => {
          const sel = c.id === activo;
          return (
            <button
              key={c.id}
              ref={(el) => (tabs.current[i] = el)}
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={sel}
              aria-controls="terminal-screen"
              tabIndex={sel ? 0 : -1}
              onClick={() => setActivo(c.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`min-h-9 cursor-pointer rounded-full border px-3.5 font-mono text-[13px] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
                sel
                  ? "border-iris bg-iris text-mist"
                  : "border-edge text-dusk hover:text-mist"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div
        id="terminal-screen"
        role="tabpanel"
        aria-labelledby={`tab-${activo}`}
        aria-live="polite"
        className="min-h-[300px] px-5 pt-4 pb-6 font-mono text-sm leading-7"
      >
        <pre className="m-0 font-[inherit] whitespace-pre-wrap">
          <P>$</P> {actual.label}
          {"\n"}
          {actual.out}
          {"\n"}
          <P>$</P>{" "}
          <span
            aria-hidden="true"
            className="inline-block h-4 w-2 animate-pulse bg-ember align-[-3px] motion-reduce:animate-none"
          />
        </pre>
      </div>
      <p className="px-5 pb-4 font-mono text-xs text-dusk">
        Elige un comando ↑
      </p>
    </div>
  );
}
