import React from "react";
import { motion } from "framer-motion";
import { Shield, Lightbulb, Phone, Search, Smartphone } from "lucide-react";

export default function Benefits() {
  return (
    <div className="my-16 px-5 sm:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Sol Tərəf - Başlıq və Yazı */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.2,
            duration: 0.5,
          }}
          className="w-full md:w-[50%] space-y-6"
        >
          <h1 className="text-4xl pb-2 sm:text-5xl font-bold bg-gradient-to-r from-[#D4FF00] to-[#32FF32] text-transparent bg-clip-text mb-4">
            Niyə Bizimlə İşləməlisiniz?
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="text-[#D4FF00] font-semibold">İmperia Tech </span>
            olaraq, müştərilərimizin ehtiyaclarına uyğun həllər təqdim edirik.
            Yüksək keyfiyyət, innovasiya və etibar bizim əsas
            prioritetlərimizdir.
          </p>
          <ul className="list-none space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-[#D4FF00] text-xl font-bold">✓</span>
              <span>
                <span className="font-semibold text-white">Təcrübə:</span>
                Peşəkar komandamız illərin təcrübəsinə sahibdir.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4FF00] text-xl font-bold">✓</span>
              <span>
                <span className="font-semibold text-white">Keyfiyyət:</span>
                Müasir dizayn və yüksək performans təmin edirik.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4FF00] text-xl font-bold">✓</span>
              <span>
                <span className="font-semibold text-white">Dəstək:</span> Hər
                zaman müştərilərimizin yanındayıq.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#D4FF00] text-xl font-bold">✓</span>
              <span>
                <span className="font-semibold text-white">Uyğun Qiymət:</span>
                Keyfiyyəti sərfəli qiymətlərlə təqdim edirik.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Sağ Tərəf - Şəkil */}
        <div className="w-full md:w-[45%] mt-10 md:mt-0">
          <motion.img
            src="/images/Benefits.png"
            alt="Komanda işi və texnologiya"
            className="w-full h-auto object-cover "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.8,
            }}
          />
        </div>
      </div>
    </div>
  );
}
