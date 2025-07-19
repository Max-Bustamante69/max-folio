import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const ease = 0.05;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * ease;
      pos.current.y += (mouse.current.y - pos.current.y) * ease;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${
          pos.current.x - 20
        }px, ${pos.current.y - 20}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => requestRef.current && cancelAnimationFrame(requestRef.current);
  }, []);

  // Hide cursor on touch devices
  useEffect(() => {
    const handleTouch = () => {
      if (cursorRef.current) cursorRef.current.style.display = "none";
    };
    window.addEventListener("touchstart", handleTouch);
    return () => window.removeEventListener("touchstart", handleTouch);
  }, []);

  return createPortal(
    <div
      ref={cursorRef}
      className="custom-cursor-pointer"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "hsl(var(--primary))",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "exclusion",
        boxShadow: "0 2px 24px 0 hsl(var(--primary) / 0.25)",
        transition: "background 0.3s",
        willChange: "transform",
      }}
    />,
    document.body
  );
};

export default CustomCursor;
