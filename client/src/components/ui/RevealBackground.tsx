import { useRef, useEffect, useState, ReactNode } from "react";

const BG_IMAGE_1 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85";
const BG_IMAGE_2 = "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85";
const SPOTLIGHT_R = 260;

export function RevealBackground({ children }: { children: ReactNode }) {
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  // Smoothed mouse tracking
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Resize canvas to viewport
  useEffect(() => {
    const resize = () => {
      const c = canvasRef.current;
      if (!c) return;
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Paint radial gradient mask on every cursor move
  useEffect(() => {
    const c = canvasRef.current;
    const div = revealRef.current;
    if (!c || !div) return;

    const ctx = c.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, c.width, c.height);

    const grad = ctx.createRadialGradient(
      cursorPos.x,
      cursorPos.y,
      0,
      cursorPos.x,
      cursorPos.y,
      SPOTLIGHT_R
    );
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.4, "rgba(255,255,255,1)");
    grad.addColorStop(0.6, "rgba(255,255,255,0.75)");
    grad.addColorStop(0.75, "rgba(255,255,255,0.4)");
    grad.addColorStop(0.88, "rgba(255,255,255,0.12)");
    grad.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cursorPos.x, cursorPos.y, SPOTLIGHT_R, 0, Math.PI * 2);
    ctx.fill();

    const dataUrl = c.toDataURL();
    div.style.maskImage = `url(${dataUrl})`;
    div.style.webkitMaskImage = `url(${dataUrl})`;
    div.style.maskSize = "100% 100%";
    div.style.webkitMaskSize = "100% 100%";
  }, [cursorPos.x, cursorPos.y]);

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

      {/* Main Content Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
}
