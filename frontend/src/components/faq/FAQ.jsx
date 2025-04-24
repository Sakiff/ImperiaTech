import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const faqData = [
  {
    question: "Veb saytınızı nə qədər müddətə hazırlayırsınız?",
    answer:
      "Veb saytların hazırlanma müddəti, layihənin tələblərinə görə dəyişir. Adətən, 2-3 həftə ərzində tamamlanır.",
  },
  {
    question: "SEO xidmətləriniz nələri əhatə edir?",
    answer:
      "SEO xidmətlərimiz saytınızın Google və digər axtarış motorlarında daha yaxşı tapılmasını təmin edir. Bunun üçün saytınızdakı məzmunu, açar sözləri və səhifə quruluşunu optimallaşdırırıq. Həmçinin, saytınızın digər saytlarla əlaqələrini gücləndirərək axtarış nəticələrində daha yüksək mövqe əldə etməyinizə kömək edirik.",
  },
  {
    question: "Mobil uyğunluq necə təmin olunur?",
    answer:
      "Biz saytlarınızı mobil cihazlarda da rahat və sürətli işləyəcək şəkildə optimallaşdırırıq. Hər cihazda mükəmməl görünüş və istifadəçi təcrübəsi təmin edirik.",
  },
  {
    question: "Saytımın təhlükəsizliyi necə təmin olunur?",
    answer:
      "Saytınızın təhlükəsizliyi üçün SSL sertifikatı, məlumatların şifrələnməsi və digər təhlükəsizlik tədbirləri həyata keçirilir.",
  },
  {
    question: "Dizaynlarınız nə dərəcədə modern və istifadəçi dostudur?",
    answer:
      "Biz modern dizayn tendensiyalarını izləyirik və istifadəçi təcrübəsini ən yüksək səviyyədə tutmaq üçün UX/UI prinsiplərinə uyğun işlər görürük.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { isDarkMode } = useTheme();
  const primaryColor = isDarkMode ? "#D4FF00" : "#1D6696";
  const secondaryColor = isDarkMode ? "#32FF32" : "#1D6696";
  const bgColor = isDarkMode ? "bg-[#0f0f0f]/50" : "bg-[#f0f0f0]";

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${bgColor} backdrop-blur-md py-10`}>
      <div className="my-16 px-5 sm:px-16">
        <h1
          className="text-4xl sm:text-5xl font-bold text-center mb-5 text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
          }}
        >
          Tez-tez Verilən Suallar
        </h1>

        <p
          className={`text-center text-lg mb-10 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Sizdən tez-tez aldığımız suallar və cavablar. Bizə daha çox sualınız
          varsa, bizə yazın!
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className={`relative rounded-xl p-6 transition-all duration-300 ${
                openIndex === index ? `border-2` : `border border-transparent`
              } ${isDarkMode ? "bg-[#1E1E1E]" : "bg-white"} ${
                openIndex === index ? `border-[${primaryColor}]` : ""
              }`}
              style={{
                borderColor: openIndex === index ? primaryColor : "transparent",
              }}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3
                  className={`text-2xl font-semibold ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  {item.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5 }}
                  className={`mt-4 overflow-hidden ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
