import React from "react";
import { motion } from "framer-motion";

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
  return (
    <div className="my-16 px-5 sm:px-16">
      <h1 className="text-4xl p-2 sm:text-5xl font-bold text-center mb-5 bg-gradient-to-r from-[#D4FF00] to-[#32FF32] text-transparent bg-clip-text">
        Müştəri Rəyləri
      </h1>

      <p className="text-center text-lg text-gray-300 mb-8">
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
            className="bg-[#1E1E1E] rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4">
              {/* Anonim Avatar */}
              <div className="w-12 h-12 bg-[#D4FF00] rounded-full flex items-center justify-center">
                <span className="text-black font-bold">
                  {testimonial.jobTitle.slice(0, 1)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-white">Anonim Müştəri</p>
                <p className="text-gray-400 text-sm">{testimonial.jobTitle}</p>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-gray-300"
            >
              "{testimonial.review}"
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
