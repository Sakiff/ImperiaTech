import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Construction } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Industry = () => {
  const { isDarkMode } = useTheme();

  const navigate = useNavigate();

  const industryServices = [
    {
      title: "Avtomobil Sənayesi",
      description:
        "Avtomobil istehsalı üçün innovativ texnoloji həllər və avtomatlaşdırma sistemləri.",
      icon: "🚗",
    },
    {
      title: "Kimya Sənayesi",
      description:
        "Kimya müəssisələri üçün təhlükəsizlik və effektivlik artırıcı sistemlər.",
      icon: "🧪",
    },
    {
      title: "Ağır Sənaye",
      description:
        "Ağır sənaye müəssisələri üçün kompleks avadanlıq və idarəetmə sistemləri.",
      icon: "🏭",
    },
    {
      title: "Enerji Sektorları",
      description:
        "Enerji istehsalı və paylanması üçün smart sistemlər və monitorinq.",
      icon: "⚡",
    },
    {
      title: "Maşınqayırma",
      description:
        "Maşınqayırma sənayesi üçün CAD/CAM sistemləri və rəqəmsal həllər.",
      icon: "⚙️",
    },
    {
      title: "Yeyinti Sənayesi",
      description:
        "Yeyinti istehsalı üçün keyfiyyət nəzarət və avtomatlaşdırma sistemləri.",
      icon: "🍞",
    },
  ];

  const features = [
    {
      title: "Sənaye 4.0",
      description: "Rəqəmsal dönüşüm və sənaye inqilabının son texnologiyaları",
    },
    {
      title: "IoT Həlləri",
      description:
        "Nesnelerin interneti texnologiyaları ilə sənaye proseslərinin optimallaşdırılması",
    },
    {
      title: "AI & Maşın Öyrənmə",
      description:
        "Süni intellekt və maşın öyrənmə ilə proqnozlaşdırma və optimallaşdırma",
    },
    {
      title: "Robototexnika",
      description: "Avtomatlaşdırılmış istehsal xətləri və robot sistemləri",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 overflow-x-hidden`}
    >
      {/* Hero Section */}
      <section className={`py-20 transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              isDarkMode
                ? "bg-[#CAFF34]/10 text-[#CAFF34] border border-[#CAFF34]/20"
                : "bg-[#1D6696]/10 text-[#1D6696] border border-[#1D6696]/20"
            }`}
          >
            <Construction size={16} />
            Sənaye Həlləri
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sənaye{" "}
              <span
                className={isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"}
              >
                Həlləri
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-80">
              Sənayenizi gələcəyə aparan rəqəmsal transformasiya həlləri
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg ${
                isDarkMode
                  ? "bg-[#CAFF34] text-gray-900 hover:bg-[#b8e62e]"
                  : "bg-[#1D6696] text-white hover:bg-[#15557d]"
              } transition-colors duration-300 shadow-lg`}
              onClick={() => navigate("/contact")}
            >
              Təklif Alın
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 pt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sənaye Xidmətlərimiz
            </h2>
            <p className="text-xl opacity-70 max-w-2xl mx-auto">
              Müxtəlif sənaye sahələri üçün xüsusi olaraq hazırlanmış texnoloji
              həllər
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-2xl border ${
                  isDarkMode
                    ? "bg-[#1E1E1E] border-gray-700 hover:border-[#CAFF34]"
                    : "bg-white border-gray-200 hover:border-[#1D6696]"
                } transition-all duration-300 shadow-lg`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="opacity-70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20  transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Texnoloji{" "}
                <span
                  className={isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"}
                >
                  İnnovasiyalar
                </span>
              </h2>
              <p className="text-lg mb-8 opacity-80">
                Sənaye 4.0 və rəqəmsal transformasiya ilə müəssisənizin
                məhsuldarlığını və effektivliyini artırın. Ən son
                texnologiyalardan istifadə edərək sənaye proseslərinizi
                optimallaşdırırıq.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        isDarkMode ? "bg-[#CAFF34]" : "bg-[#1D6696]"
                      }`}
                    ></div>
                    <div>
                      <h4 className="font-semibold text-lg">{feature.title}</h4>
                      <p className="opacity-70">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className={`rounded-2xl p-8 ${
                  isDarkMode ? "bg-gray-700" : "bg-white"
                } shadow-xl`}
              >
                <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    Sənaye Həlləri Vizualı
                  </span>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className={`absolute -top-4 -right-4 w-20 h-20 rounded-full ${
                  isDarkMode ? "bg-[#CAFF34]" : "bg-[#1D6696]"
                } opacity-20`}
              ></motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full ${
                  isDarkMode ? "bg-[#CAFF34]" : "bg-[#1D6696]"
                } opacity-20`}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industry;
