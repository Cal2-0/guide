import { useRef, useEffect, ReactNode } from "react";

const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";
const SPOTLIGHT_R = 260;

export function RevealBackground({ children }: { children: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  // Smoothed mouse tracking — all done in rAF, no React state needed
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const c = canvasRef.current;
    const div = revealRef.current;
    if (!c || !div) return;

    const ctx = c.getContext("2d");
    if (!ctx) return;

    // Resize handler
    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Animation loop — renders directly to DOM, no React setState
    const loop = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;

      const x = smooth.current.x;
      const y = smooth.current.y;

      ctx.clearRect(0, 0, c.width, c.height);

      const grad = ctx.createRadialGradient(x, y, 0, x, y, SPOTLIGHT_R);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.4, "rgba(255,255,255,1)");
      grad.addColorStop(0.6, "rgba(255,255,255,0.75)");
      grad.addColorStop(0.75, "rgba(255,255,255,0.4)");
      grad.addColorStop(0.88, "rgba(255,255,255,0.12)");
      grad.addColorStop(1, "rgba(255,255,255,0)");

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, SPOTLIGHT_R, 0, Math.PI * 2);
      ctx.fill();

      const dataUrl = c.toDataURL();
      div.style.maskImage = `url(${dataUrl})`;
      div.style.webkitMaskImage = `url(${dataUrl})`;
      div.style.maskSize = "100% 100%";
      div.style.webkitMaskSize = "100% 100%";

      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Background Layer 1 */}
      <div
        className="fixed inset-0 bg-center bg-cover bg-no-repeat z-0 hero-zoom pointer-events-none"
        style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
      />
      
      {/* Background Reveal Layer 2 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{ display: "none" }}
      />
      <div
        ref={revealRef}
        className="fixed inset-0 bg-center bg-cover bg-no-repeat z-0 pointer-events-none brightness-110 contrast-125"
        style={{ backgroundImage: `url(${BG_IMAGE_2})` }}
      />

      {/* Overlay on top of BOTH images to ensure white text is always readable */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}
