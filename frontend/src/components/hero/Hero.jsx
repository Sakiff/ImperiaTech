import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Hero() {
  const { isDarkMode } = useTheme();
  const brandColor = isDarkMode ? "#CAFF34" : "#1D6696";

  return (
    <div className="flex justify-center items-center gap-6 md:gap-10 mt-10 md:mt-20 px-5 sm:px-16">
      <motion.div
        className={`flex flex-col justify-center items-center mb-10 lg:items-center text-center lg:text-start gap-6 md:gap-10 w-full lg:w-[60%] ${
          isDarkMode ? "text-white" : "text-black"
        }`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        <div className="flex justify-center items-center gap-1">
          <img
            src={`${
              isDarkMode ? "/images/Subtract.png" : "/images/Subtract-light.png"
            }`}
            alt="İmperia Tech ikon"
            className="w-5 h-5"
          />
          <p className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            &quot;İnnovasiya və Texnologiyanın Kəsişdiyi Nöqtə!&quot;
          </p>
        </div>

        <motion.h1
          className="flex justify-center items-center flex-col text-4xl md:text-5xl leading-normal font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <strong style={{ color: brandColor }}>İmperia Groups</strong> ilə
          Peşəkar Veb Sayt Hazırlanması
        </motion.h1>

        <motion.p
          className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        >
          İmperia Groups olaraq, yüksək keyfiyyətli və mobil uyğun veb sayt
          hazırlanması xidmətləri təqdim edirik. Biznesiniz üçün sürətli,
          təhlükəsiz və SEO optimizəli saytlar yaratmaqla brendinizin gücünü
          artırırıq. Sayt sifarişi üçün indi bizimlə əlaqə saxlayın.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/services/calculator"
            style={{ backgroundColor: brandColor }}
            className="relative overflow-hidden py-3 px-5 rounded-3xl text-black cursor-pointer font-bold transition-all duration-300 ease-out hover:opacity-90 hover:scale-105 active:scale-95"
          >
            <span
              className={`relative z-10 ${!isDarkMode ? "text-white" : ""}`}
            >
              Sayt Sifariş Et
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
