import { useRef, useEffect } from "react";

export function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Configuración de partículas
    const PARTICLE_COUNT = Math.floor(width / 18);
    const particles = [];
    const mouse = { x: null, y: null, radius: 120 };

    function randomBetween(a, b) {
      return a + Math.random() * (b - a);
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        vx: randomBetween(-0.5, 0.5),
        vy: randomBetween(-0.5, 0.5),
        size: randomBetween(1.5, 3.5),
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, width, height);
      // Fondo oscuro con opacidad
      ctx.fillStyle = "rgba(20, 24, 36, 0.98)";
      ctx.fillRect(0, 0, width, height);

      // Dibujar partículas
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "#00ff99";
        ctx.globalAlpha = 0.85;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // Dibujar líneas entre partículas cercanas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(0,255,153," + (1 - dist / 120) + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Dibujar líneas al mouse
      if (mouse.x !== null && mouse.y !== null) {
        for (let p of particles) {
          const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (dist < mouse.radius) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle =
              "rgba(0,255,153," + (1 - dist / mouse.radius) + ")";
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }
    }

    function updateParticles() {
      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Rebote en los bordes
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interacción con el mouse
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouse.radius) {
            // Alejar la partícula del mouse
            p.vx -= (dx / dist) * 0.03;
            p.vy -= (dy / dist) * 0.03;
          }
        }

        // Limitar velocidad
        p.vx = Math.max(-1, Math.min(1, p.vx));
        p.vy = Math.max(-1, Math.min(1, p.vy));
      }
    }

    function animate() {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    }

    animate();

    // Actualizar tamaño al redimensionar
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", handleResize);

    // Mouse movimiento
    function handleMouse(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    function handleMouseOut() {
      mouse.x = null;
      mouse.y = null;
    }
    window.addEventListener("mousemove", handleMouse);
    window.addEventListener("mouseout", handleMouseOut);

    // Limpieza
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}
      aria-hidden="true"
    />
  );
}
