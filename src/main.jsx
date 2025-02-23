import { useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Loading from "./components/Loading";
import { motion } from "framer-motion";

const RootComponent = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  return (
    <>
      {!isLoadingComplete && (
        <Loading onLoadingComplete={() => setIsLoadingComplete(true)} />
      )}

      {isLoadingComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "anticipate" }}
        >
          <App />
        </motion.div>
      )}
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<RootComponent />);
