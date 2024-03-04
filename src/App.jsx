import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";

import { AnimatePresence, motion } from "framer-motion";
import { StartNowButton } from "./components/Buttons";

function App() {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        const element = document.querySelector(href);
        element.scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    setTop(window.scrollY);
    window.addEventListener("scroll", () => {
      setTop(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <Navbar />
      <AnimatePresence>
        {top > 400 && (
          <motion.div
            animate={{
              opacity: 1,
            }}
            initial={{
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed bottom-5 justify-center left-1/2 -translate-x-1/2 rounded-[10px] z-20 shadow-2xl"
          >
            <StartNowButton />
          </motion.div>
        )}
      </AnimatePresence>

      <Home id="howWork" />

      <Footer />
    </>
  );
}

export default App;
