import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex justify-around items-center gap-6 md:gap-10 mt-10 md:mt-20 px-5 sm:px-16">
      <motion.div
        className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start gap-6 md:gap-10 w-full lg:w-[60%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        <div className="flex justify-center items-center gap-1">
          <img src="/images/Subtract.png" alt="İmperia Tech ikon" />
          <p>"İnnovasiya və Texnologiyanın Kəsişdiyi Nöqtə!"</p>
        </div>
        <motion.p
          className="text-4xl md:text-5xl leading-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <strong className="text-[#CAFF34]">Imperia Tech</strong> Rəqəmsal
          <br />
          Gələcəyinizi Qururuq
        </motion.p>
        <motion.p
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
            className="relative overflow-hidden bg-[#CAFF34] py-3 px-5 rounded-3xl text-black cursor-pointer font-bold transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-lime-400 hover:to-green-500 hover:shadow-[0_0_20px_#a3e635] hover:scale-105 active:scale-95 group"
          >
            <span className="relative z-10">İndi başla</span>
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
