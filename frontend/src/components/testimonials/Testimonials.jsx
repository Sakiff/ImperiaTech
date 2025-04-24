import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const testimonials = [
  {
    jobTitle: "Dijital Marketinq Meneceri",
    review:
      "İmperia Tech-in xidmətləri bizim işimizi yeni bir səviyyəyə daşıdı. Peşəkar yanaşmaları və müasir texnologiyaları ilə gözəl nəticələr əldə etdik!",
  },
  {
    jobTitle: "Proqram Təminatı Mütəxəssisi",
    review:
      "Gözəl dizaynlar və sürətli nəticələr! Veb saytımın istifadəsi asanlaşdı və müştərilərimə daha yaxşı xidmət təqdim edə bildim.",
  },
  {
    jobTitle: "İT Həlləri üzrə Mütəxəssis",
    review:
      "Bizim şirkət üçün ideal həllər təqdim etdilər. Təhlükəsizlik və mobil uyğunluq mövzusunda göstərdikləri diqqət çox təsir edicidir.",
  },
];

export default function Testimonials() {
  const { isDarkMode } = useTheme();
  const bgColor = isDarkMode ? "bg-[#1E1E1E]" : "bg-[#f9f9f9]";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";
  const subTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const primaryColor = isDarkMode ? "#D4FF00" : "#1D6696";

  return (
    <div className="my-16 px-5 sm:px-16">
      <h1
        className="text-4xl sm:text-5xl font-bold text-center mb-5 text-transparent bg-clip-text"
        style={{
          backgroundImage: `linear-gradient(to right, ${primaryColor}, ${primaryColor})`,
        }}
      >
        Müştəri Rəyləri
      </h1>

      <p className={`text-center text-lg mb-8 ${subTextColor}`}>
        Bizimlə işləyən müştərilərimizin fikirləri. İmperia Tech ilə çalışmaq,
        işinizi bir addım irəli aparacaq!
      </p>
      <div className="mx-auto space-y-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: index * 0.3,
              duration: 0.8,
            }}
            className={`${bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-transform transform hover:scale-[1.03] relative overflow-hidden group`}
          >
            <div
              className="absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100"
              style={{ borderColor: primaryColor }}
            >
              <motion.div
                className="absolute inset-0 w-full h-full border-2 rounded-xl"
                initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
                whileHover={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ borderColor: primaryColor }}
              />
            </div>

            <div className="flex items-center gap-4 relative z-10">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold"
                style={{ backgroundColor: primaryColor }}
              >
                {testimonial.jobTitle.slice(0, 1)}
              </div>
              <div>
                <p className={`font-semibold ${textColor}`}>Anonim Müştəri</p>
                <p className={`text-sm ${subTextColor}`}>
                  {testimonial.jobTitle}
                </p>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`mt-4 ${subTextColor} relative z-10`}
            >
              "{testimonial.review}"
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
