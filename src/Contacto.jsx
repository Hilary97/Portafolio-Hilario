import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

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
      form.asunto
    )}&body=${encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\nMensaje: ${form.mensaje}`
    )}`;
    alert("¡Gracias por tu mensaje!");
    setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-10 " id="contacto">
      <h2 className="text-3xl font-bold text-center text-emerald-400 dark:text-emerald-300 mb-2 font-sans">
        Construyamos algo juntos
      </h2>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
        Abierto a nuevas oportunidades y colaboraciones. ¡No dudes en
        contactarme!
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 flex flex-col gap-4"
      >
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Asunto
          </label>
          <input
            type="text"
            name="asunto"
            value={form.asunto}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            placeholder="¿Sobre qué quieres hablar?"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition resize-none"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-md transition focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Enviar
        </button>
      </form>

      <div className="flex justify-center gap-8 mt-8">
        <a
          href="https://www.linkedin.com/in/hilario-nava"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-500 hover:text-emerald-400 text-3xl transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Hilary97"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-500 hover:text-emerald-400 text-3xl transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:navahilario499@gmail.com"
          className="text-emerald-500 hover:text-emerald-400 text-3xl transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/523313023706"
          className="text-emerald-500 hover:text-emerald-400 text-3xl transition"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}
