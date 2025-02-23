import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Loading.css";

const Loading = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [showLine, setShowLine] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLine(true);
    }, 1500);

    setTimeout(() => {
      setLoading(false);
      setShowLine(true);
      setShowCurtain(true);
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loading-text">Loading...</div>
          {showLine && (
            <motion.div
              className="loading-line"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      ) : (
        showCurtain && <CurtainDrop onComplete={onLoadingComplete} />
      )}
    </AnimatePresence>
  );
};

const CurtainDrop = ({ onComplete }) => {
  const stripCount =
    window.innerWidth < 600 ? 4 : window.innerWidth < 1024 ? 6 : 12;
  const strips = Array.from({ length: stripCount });

  useEffect(() => {
    setTimeout(() => {
      onComplete();
    }, stripCount * 100 + 250);
  }, []);

  return (
    <div className="curtain-container">
      {strips.map((_, i) => (
        <motion.div
          key={i}
          className="curtain-strip"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 1000, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
          style={{ width: `${100 / stripCount}%` }}
        />
      ))}
    </div>
  );
};

export default Loading;
