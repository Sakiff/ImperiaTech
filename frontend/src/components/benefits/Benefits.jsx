import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function Benefits() {
  const { isDarkMode } = useTheme();
  const primaryColor = isDarkMode ? "#D4FF00" : "#1D6696";
  const secondaryColor = isDarkMode ? "#32FF32" : "#1D6696";

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
          <h1
            className="text-4xl pb-2 sm:text-5xl font-bold text-transparent bg-clip-text mb-4"
            style={{
              backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
            }}
          >
            Niyə Bizimlə İşləməlisiniz?
          </h1>
          <p
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <span style={{ color: primaryColor }} className="font-semibold">
              İmperia Tech{" "}
            </span>
            olaraq, müştərilərimizin ehtiyaclarına uyğun həllər təqdim edirik.
            Yüksək keyfiyyət, innovasiya və etibar bizim əsas
            prioritetlərimizdir.
          </p>
          <ul
            className={`list-none space-y-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {[
              {
                title: "Təcrübə:",
                desc: "Peşəkar komandamız illərin təcrübəsinə sahibdir.",
              },
              {
                title: "Keyfiyyət:",
                desc: "Müasir dizayn və yüksək performans təmin edirik.",
              },
              {
                title: "Dəstək:",
                desc: "Hər zaman müştərilərimizin yanındayıq.",
              },
              {
                title: "Uyğun Qiymət:",
                desc: "Keyfiyyəti sərfəli qiymətlərlə təqdim edirik.",
              },
            ].map(({ title, desc }, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  style={{ color: primaryColor }}
                  className="text-xl font-bold"
                >
                  ✓
                </span>
                <span>
                  <span
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {title}
                  </span>{" "}
                  {desc}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Sağ Tərəf - Şəkil */}
        <div className="w-full md:w-[45%] mt-10 md:mt-0">
          <motion.img
            src="/images/Benefits.png"
            alt="Komanda işi və texnologiya"
            className="w-full h-auto object-cover"
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
