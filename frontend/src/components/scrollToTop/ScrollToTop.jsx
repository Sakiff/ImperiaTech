import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setIsScrolling(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: isDarkMode
              ? "rgba(202, 255, 52, 0.1)"
              : "rgba(29, 102, 150, 0.1)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
          onClick={handleClick}
          aria-label="Yuxarı çıx"
          className={`
            fixed z-50 bottom-8 right-8
            w-16 h-16 rounded-full
            border-2 backdrop-blur-md
            flex items-center justify-center
            shadow-2xl
            transition-colors duration-300
            ${
              isDarkMode
                ? "border-[#CAFF34] bg-gray-900/90 text-[#CAFF34] hover:shadow-[0_0_20px_rgba(202,255,52,0.3)]"
                : "border-[#1D6696] bg-white/90 text-[#1D6696] hover:shadow-[0_0_20px_rgba(29,102,150,0.3)]"
            }
          `}
        >
          {/* Animated Icon */}
          <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isScrolling ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="flex flex-col items-center"
                >
                  {/* Bouncing Dots */}
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        animate={{
                          y: [0, -8, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className={`w-1.5 h-1.5 rounded-full ${
                          isDarkMode ? "bg-[#CAFF34]" : "bg-[#1D6696]"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="arrow"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center"
                >
                  {/* Double Arrow Icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="relative"
                  >
                    {/* Main Arrow */}
                    <motion.path
                      d="M12 19V5M12 5L5 12M12 5L19 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />

                    {/* Secondary Arrow (smaller) */}
                    <motion.path
                      d="M12 15V8M12 8L9 11M12 8L15 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />
                  </svg>

                  {/* Progress Ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full border-2 border-transparent ${
                      isDarkMode ? "border-t-[#CAFF34]" : "border-t-[#1D6696]"
                    }`}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pulse Effect */}
          <motion.div
            className={`absolute inset-0 rounded-full border-2 ${
              isDarkMode ? "border-[#CAFF34]" : "border-[#1D6696]"
            }`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
