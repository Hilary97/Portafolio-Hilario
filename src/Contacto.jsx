import { useState } from "react";
import { Reveal, Eyebrow } from "./motion.jsx";
import { Socials } from "./Socials.jsx";

const inputStyles =
  "w-full rounded-xl border border-edge bg-abyss/60 px-4 py-3 text-mist placeholder:text-dusk/60 transition focus:border-lilac focus:ring-2 focus:ring-lilac/40 focus:outline-none";

export function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:navahilario499@gmail.com?subject=${encodeURIComponent(
      form.asunto,
    )}&body=${encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nMensaje: ${form.mensaje}`,
    )}`;
    alert("¡Gracias por tu mensaje!");
    setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="mx-auto max-w-2xl py-24">
      <Reveal className="text-center">
        <Eyebrow>contacto</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Contáctame
        </h2>
        <p className="mt-4 text-dusk">
          Abierto a nuevas oportunidades y colaboraciones. ¡No dudes en
          contactarme!
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-5 rounded-3xl border border-edge bg-panel/70 p-7 shadow-xl shadow-iris/10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="nombre"
                className="mb-2 block font-mono text-xs text-dusk"
              >
                nombre
              </label>
              <input
                id="nombre"
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className={inputStyles}
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-xs text-dusk"
              >
                email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputStyles}
                placeholder="tu@email.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="asunto"
              className="mb-2 block font-mono text-xs text-dusk"
            >
              asunto
            </label>
            <input
              id="asunto"
              type="text"
              name="asunto"
              value={form.asunto}
              onChange={handleChange}
              required
              className={inputStyles}
              placeholder="¿Sobre qué quieres hablar?"
            />
          </div>
          <div>
            <label
              htmlFor="mensaje"
              className="mb-2 block font-mono text-xs text-dusk"
            >
              mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
              rows={4}
              className={`${inputStyles} resize-none`}
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-ember px-7 py-3 font-mono text-sm font-medium text-abyss transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ember/30 focus:ring-2 focus:ring-lilac/40 focus:outline-none"
          >
            Enviar mensaje
          </button>
        </form>
      </Reveal>

      <Reveal delay={0.15}>
        <Socials className="mt-10 justify-center" />
      </Reveal>
    </section>
  );
}
