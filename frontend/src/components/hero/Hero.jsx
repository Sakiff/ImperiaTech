import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Hero() {
  const { isDarkMode } = useTheme();

  // rəngləri dəyişkən kimi saxlayaq
  const brandColor = isDarkMode ? "#CAFF34" : "#1D6696";

  return (
    <div className="flex justify-around items-center gap-6 md:gap-10 mt-10 md:mt-20 px-5 sm:px-16">
      <motion.div
        className={`flex flex-col justify-center items-center lg:items-start text-center lg:text-start gap-6 md:gap-10 w-full lg:w-[60%] ${
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
            "İnnovasiya və Texnologiyanın Kəsişdiyi Nöqtə!"
          </p>
        </div>

        <motion.p
          className="text-4xl md:text-5xl leading-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <strong style={{ color: brandColor }}>Imperia Tech</strong> Rəqəmsal
          <br />
          Gələcəyinizi Qururuq
        </motion.p>

        <motion.p
          className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        >
          İmperia Tech olaraq, hər müştərinin unikal ehtiyaclarını nəzərə alaraq
          peşəkar veb həllər yaradırıq. Biznesinizi onlayn platformada
          gücləndirmək, brendinizi tanıtmaq və müştərilərinizə daha yaxşı xidmət
          göstərmək üçün innovativ və fərdiləşdirilmiş texnologiyalar təklif
          edirik. Bizimlə gələcəyə addım atın!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/contact"
            style={{ backgroundColor: brandColor }}
            className={`relative overflow-hidden py-3 px-5 rounded-3xl text-black cursor-pointer font-bold transition-all duration-300 ease-out hover:opacity-90 hover:scale-105 active:scale-95`}
          >
            <span
              className={`relative z-10 ${!isDarkMode ? "text-white" : ""}`}
            >
              İndi başla
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-[40%] hidden lg:flex"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        <img
          src="/images/Hero.png"
          alt="Imperia Tech şirkətinin loqosu"
          className="w-full"
        />
      </motion.div>
    </div>
  );
}
