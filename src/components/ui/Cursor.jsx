import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 25 });

  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleMouseEnter = (event) => {
      const type = event.target.getAttribute("data-cursor");
      if (type) {
        setCursorType(type);
      }
    };

    const handleMouseLeave = () => {
      setCursorType("default");
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("[data-cursor]").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("[data-cursor]").forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [mouseX, mouseY]);

  // 🎨 Different Cursor Styles for Each Section
  const getCursorContent = () => {
    switch (cursorType) {
      case "projects":
        return <div className="text-4xl">👀</div>;
      case "stacks":
        return <div className="text-4xl">🚀</div>;
      case "contact":
        return <div className="text-4xl">✉️</div>;
      default:
        return (
          <div
            style={{
              width: 25,
              height: 25,
              backgroundColor: "crimson",
              borderRadius: "50%",
            }}
          />
        );
    }
  };

  return (
    <motion.div
      className="cursor-follower z-[2000]"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        x: smoothX,
        y: smoothY,
      }}
    >
      {getCursorContent()}
    </motion.div>
  );
};

export default CursorFollower;
