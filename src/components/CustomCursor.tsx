import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
          {
            duration: 800,
            easing: "ease-in-out",
            fill: "forwards",
          }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
      className="custom-cursor-pointer hidden xl:block fixed top-0 left-0 w-14 h-14 rounded-full border-2 border-primary pointer-events-none shadow-xl shadow-primary/20 -translate-x-1/2 -translate-y-1/2"
    />,
    document.body
  );
};

export default CustomCursor;
