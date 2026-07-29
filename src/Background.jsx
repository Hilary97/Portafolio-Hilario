import { motion, useReducedMotion } from "motion/react";

export function Background() {
  const reduce = useReducedMotion();
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden bg-abyss"
      aria-hidden="true"
    >
      <div className="bg-grid absolute inset-0" />
      <motion.div
        className="absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-iris/25 blur-[120px]"
        animate={reduce ? undefined : { x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 -bottom-48 h-[32rem] w-[32rem] rounded-full bg-ember/10 blur-[130px]"
        animate={reduce ? undefined : { x: [0, -70, 0], y: [0, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
