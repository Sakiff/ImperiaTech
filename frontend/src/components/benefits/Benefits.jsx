import { motion } from "framer-motion";

import { useTheme } from "../../context/ThemeContext";

export default function Benefits() {
  const { isDarkMode } = useTheme();
  const primaryColor = isDarkMode ? "#D4FF00" : "#1D6696";
  const secondaryColor = isDarkMode ? "#32FF32" : "#1D6696";

  const benefitsList = [
    {
      title: "Peşəkar Təcrübə:",
      desc: "Komandamız veb sayt hazırlanması və SEO optimizasiyası sahəsində illərin təcrübəsinə malikdir.",
    },
    {
      title: "Keyfiyyətli Rəqəmsal Həllər:",
      desc: "Sayt yığılması və dizayn prosesində modern texnologiyalardan istifadə edirik.",
    },
    {
      title: "Texniki Dəstək:",
      desc: "Saytın istənilən mərhələsində sizə sürətli və effektiv dəstək təqdim edirik.",
    },
    {
      title: "Əlçatan Qiymət Politikası:",
      desc: "Yüksək keyfiyyəti münasib qiymətlərlə təqdim etməklə fərqlənirik.",
    },
  ];

  return (
    <div className="my-16 px-5 sm:px-16">
      <div className="flex flex-col md:flex-row justify-center  items-center gap-10">
        {/* Sol tərəf - Mətn hissəsi */}
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
          className="mb-10 mt-10 w-full md:w-[50%] space-y-6"
        >
          <h1
            className="text-4xl pb-2 sm:text-5xl font-bold text-transparent bg-clip-text mb-4"
            style={{
              backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
            }}
          >
            Niyə İmperia Groups?
          </h1>

          <p
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Biz yalnız veb sayt yaratmırıq – biz{" "}
            <strong>rəqəmsal uğur hekayənizi</strong> qururuq. Müştəri mərkəzli
            yanaşma, texniki mükəmməllik və kreativ dizaynı birləşdirərək sizə{" "}
            <strong>effektiv onlayn həllər</strong> təqdim edirik.
          </p>

          <ul
            className={`list-none space-y-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {benefitsList.map(({ title, desc }, index) => (
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
      </div>
    </div>
  );
}
