import { useEffect, useRef } from "react";

type Props = { dark: boolean };

type Dot = { x: number; y: number; vx: number; vy: number; accent: boolean };

export default function Particles({ dark }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let frame = 0;

    // Couleurs adaptées à chaque thème pour rester bien visibles
    const colors = dark
      ? {
          dot: "147,197,253", // bleu clair sur fond sombre
          line: "96,165,250",
          accent: "251,191,36", // orange/ambre vif
          lineAlpha: 0.55,
          dotAlpha: 0.95,
        }
      : {
          dot: "29,78,216", // bleu foncé sur fond clair
          line: "37,99,235",
          accent: "234,88,12", // orange foncé
          lineAlpha: 0.6,
          dotAlpha: 1,
        };

    const maxDist = 150;

    const setup = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      const count = Math.min(100, Math.floor((width * height) / 12000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        accent: Math.random() < 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const d of dots) {
        if (!reduceMotion) {
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < 0 || d.x > width) d.vx *= -1;
          if (d.y < 0 || d.y > height) d.vy *= -1;
        }
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * colors.lineAlpha;
            ctx.strokeStyle = `rgba(${colors.line},${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      for (const d of dots) {
        ctx.fillStyle = d.accent
          ? `rgba(${colors.accent},1)`
          : `rgba(${colors.dot},${colors.dotAlpha})`;
        const size = d.accent ? 4 : 3;
        ctx.fillRect(d.x, d.y, size, size);
      }

      if (!reduceMotion) frame = requestAnimationFrame(draw);
    };

    setup();
    draw();
    window.addEventListener("resize", setup);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", setup);
    };
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}