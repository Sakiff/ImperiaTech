import {
  Code,
  Globe,
  ShieldCheck,
  Smartphone,
  Palette,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const features = [
  {
    icon: Code,
    title: "Fərdi Veb Həllər",
    desc: "İstəyə uyğun hazırlanmış sayt yığılması xidməti ilə biznesinizin ehtiyaclarına cavab veririk.",
  },
  {
    icon: Globe,
    title: "SEO və Rəqəmsal Marketinq",
    desc: "Google və digər axtarış sistemlərində görünmək üçün peşəkar SEO xidmətləri təqdim edirik.",
  },
  {
    icon: ShieldCheck,
    title: "Təhlükəsizlik və Texniki Dəstək",
    desc: "Məlumatların qorunması və operativ texniki dəstək həmişə sizinlədir.",
  },
  {
    icon: Smartphone,
    title: "Mobil Uyğun Veb Saytlar",
    desc: "Saytlar bütün cihazlarda rahat və sürətli işləyəcək şəkildə optimallaşdırılır.",
  },
  {
    icon: Palette,
    title: "Modern UX/UI Dizayn",
    desc: "İstifadəçi məmnuniyyətini artıran vizual və funksional dizayn həlləri təklif edirik.",
  },
  {
    icon: Database,
    title: "Backend və Məlumat Bazası",
    desc: "Saytınız üçün güclü və etibarlı backend strukturu qururuq.",
  },
];

export default function Features() {
  const { isDarkMode } = useTheme();
  const primaryColor = isDarkMode ? "#D4FF00" : "#1D6696";
  const secondaryColor = isDarkMode ? "#32FF32" : "#1D6696";

  return (
    <div className="my-16 px-5 sm:px-16">
      <h1
        className="text-4xl p-2 sm:text-5xl font-bold text-center mb-5 text-transparent bg-clip-text"
        style={{
          backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
        }}
      >
        Xidmət Sahələrimiz
      </h1>

      <p
        className={`text-center text-lg mb-10 ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Imperia Groups komandası olaraq, veb saytların hazırlanması, SEO
        optimizasiyası və rəqəmsal inkişaf sahəsində tam xidmət paketləri təqdim
        edirik.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {features.map(({ icon: Icon, title, desc }, index) => (
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
            className={`relative p-6 rounded-xl flex flex-col items-center text-center gap-4 overflow-hidden border transition-all duration-300 group hover:scale-105 ${
              isDarkMode
                ? "bg-[#1E1E1E] border-transparent hover:border-[#D4FF00]"
                : "bg-white border-gray-200 hover:border-[#1D6696] shadow-md"
            }`}
          >
            <div className="relative z-10">
              <Icon
                size={40}
                className="transition-all duration-300 group-hover:scale-110"
                style={{ color: primaryColor }}
              />
              <h3
                className="text-2xl font-semibold mt-2"
                style={{ color: primaryColor }}
              >
                {title}
              </h3>
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                {desc}
              </p>
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
              style={{
                backgroundImage: `linear-gradient(to right, ${primaryColor}11, ${secondaryColor}11)`,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
