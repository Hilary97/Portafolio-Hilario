import { Background } from "./Background.jsx";
import { Header } from "./header.jsx";
import { Hero } from "./Hero.jsx";
import { Logos } from "./Logos.jsx";
import { Proyectos } from "./Proyectos.jsx";
import { Imagen } from "./Imgenes.jsx";
import { Contacto } from "./Contacto.jsx";
import { Reveal, Eyebrow } from "./motion.jsx";

function Sobre() {
  return (
    <section id="sobre-mi" className="py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <Eyebrow>sobre-mi</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
            Software para negocios reales
          </h2>
        </Reveal>

        <div className="flex flex-col gap-6 text-lg leading-relaxed text-dusk">
          <Reveal delay={0.05}>
            <p>
              Desarrollo software para negocios reales. Mi punto de venta ya
              se usa en una pizzería local: integra catálogo, ventas en efectivo
              con cálculo de cambio, devoluciones y cierre de caja con{" "}
              <b className="font-semibold text-ember">
                React, TypeScript y Supabase (PostgreSQL)
              </b>
              .
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="rounded-2xl border border-edge bg-panel/60 p-6">
              Llevé un negocio de solo pagos en efectivo presencial a vender
              online: integré{" "}
              <b className="font-semibold text-ember">PayPal y Mercado Pago</b>{" "}
              en Neo, una landing construida en días aplicando{" "}
              <b className="font-semibold text-ember">agentes de IA</b> en el
              flujo de desarrollo.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p>
              Soy{" "}
              <b className="font-semibold text-ember">
                Ingeniero de Software Full Stack
              </b>
              , especializado en Desarrollo Web Moderno y Arquitectura de
              Software. Mi stack incluye{" "}
              <b className="font-semibold text-mist">
                React.js, JavaScript, Node.js, MySQL, Firebase, Git/GitHub
              </b>
              . Desarrollo aplicaciones completas Frontend + Backend con UX/UI y
              código limpio, potenciando mi flujo con Claude, GitHub Copilot y
              n8n. Certificaciones en{" "}
              <b className="font-semibold text-mist">
                Full Stack, JavaScript e inglés A2
              </b>{" "}
              (ver sección de certificados).
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Background />
      <Header />
      <main className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <Sobre />
        <Proyectos />
        <Logos />
        <Imagen />
        <Contacto />
      </main>
      <footer className="border-t border-edge/60 py-8 text-center font-mono text-xs text-dusk">
        © 2026 Hilario Nava · construido con React, Tailwind y Motion
      </footer>
    </>
  );
}

export default App;
