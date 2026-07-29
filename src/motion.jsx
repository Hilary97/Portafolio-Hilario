import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";

const EASE = [0.22, 1, 0.36, 1];

/* Sección que emerge desde profundidad al entrar en viewport */
export function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 56, rotateX: 14 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      style={{ transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

/* Contenedor que escalona la entrada de sus <Item /> hijos */
export function Stagger({ children, className = "", step = 0.06 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: step } } }}
    >
      {children}
    </motion.div>
  );
}

export function Item({ children, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce
          ? { opacity: 0 }
          : { opacity: 0, y: 32, scale: 0.92, rotateX: 18 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          transition: { duration: 0.55, ease: EASE },
        },
      }}
      style={{ transformPerspective: 800 }}
    >
      {children}
    </motion.div>
  );
}

/* Tarjeta 3D que se inclina siguiendo el puntero, con brillo opcional */
export function TiltCard({ children, className = "", max = 10, glare = false }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), {
    stiffness: 150,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), {
    stiffness: 150,
    damping: 18,
  });
  const gx = useTransform(mx, (v) => v * 100);
  const gy = useTransform(my, (v) => v * 100);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgb(255 255 255 / 0.16), transparent 60%)`;

  function onMove(e) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: glareBg }}
        />
      )}
    </motion.div>
  );
}

/* Etiqueta de sección en monoespaciada, estilo ruta de terminal */
export function Eyebrow({ children }) {
  return (
    <p className="font-mono text-sm tracking-widest text-lilac">
      <span className="text-ember">~/</span>
      {children}
    </p>
  );
}
