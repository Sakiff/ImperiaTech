import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const faqData = [
  {
    question: "Bir saytın hazırlanması ümumilikdə nə qədər vaxt aparır?",
    answer:
      "Ən sadə saytlar 7-10 günə, daha kompleks layihələr isə 2-3 həftəyə hazırlanır. Müddət funksionallıq və dizayn detallardan asılı olaraq dəyişir.",
  },
  {
    question: "SEO paketiniz saytım üçün hansı üstünlükləri verir?",
    answer:
      "SEO xidmətimiz sayəsində saytınız axtarış motorlarında daha görünən olur. Hədəfli açar sözlər, texniki optimizasiya və kontent strategiyası ilə mövqeyiniz yüksəlir.",
  },
  {
    question: "Mobil cihazlara uyğunluq necə həyata keçirilir?",
    answer:
      "Biz bütün saytlarımızı responsive texnologiyalarla qururuq. Bu sayədə saytınız smartfon, planşet və desktopda ideal şəkildə görünür.",
  },
  {
    question: "Təhlükəsizlik tədbirləri necə təşkil olunur?",
    answer:
      "Saytlar SSL sertifikatı ilə təchiz olunur və verilənlər şifrələnir. Bundan əlavə, təhlükəsizlik auditləri və qoruyucu tədbirlər də tətbiq edirik.",
  },
  {
    question: "Dizaynlarınız fərdi və istifadəçi dostudurmu?",
    answer:
      "Hər müştəriyə unikal və müasir dizayn təqdim olunur. İstifadəçi təcrübəsini maksimuma çatdırmaq üçün UI/UX prinsiplərinə uyğun işləyirik.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // İlk sual açıq gəlir
  const { isDarkMode } = useTheme();
  const primaryColor = isDarkMode ? "#D4FF00" : "#1D6696";
  const secondaryColor = isDarkMode ? "#32FF32" : "#1D6696";

  const bgColor = isDarkMode ? "bg-[#0e0e0e]/50" : "bg-[#f9f9f9]";
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${bgColor} backdrop-blur-lg py-14`}>
      <div className="px-5 sm:px-16 mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-5 text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
          }}
        >
          Sizin Suallarınıza Cavab Veririk
        </h2>

        <p
          className={`text-center text-lg mb-10 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Sayt və SEO ilə bağlı ən çox verilən suallara cavabları burada tapa
          bilərsiniz. Əlavə sualınız var? Bizimlə əlaqə saxlayın!
        </p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl p-6 shadow-md transition-all duration-300 cursor-pointer ${
                isDarkMode ? "bg-[#1A1A1A]" : "bg-white"
              } border ${
                openIndex === index
                  ? "border-[1.5px]"
                  : "border border-transparent"
              }`}
              style={{
                borderColor: openIndex === index ? primaryColor : "transparent",
              }}
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`text-xl sm:text-2xl font-medium ${
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
                  transition={{ duration: 0.4 }}
                  className={`mt-3 text-base ${
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
