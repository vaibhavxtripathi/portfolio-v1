import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Loading.css";
import CountUp from "./ui/count100";

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
          transition={{ duration: 2 }}
        >
          <CountUp
            from={0}
            to={104}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
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
          className="xs:bg-black"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 1000, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: i * 0.08,
            ease: "easeOut",
          }}
          style={{ width: `${100 / stripCount}%` }}
        />
      ))}
    </div>
  );
};

export default Loading;
