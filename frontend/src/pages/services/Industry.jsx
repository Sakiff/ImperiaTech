import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Construction, Factory, Cog, Zap, ArrowRight } from "lucide-react";
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
      features: ["Robototexnika", "Ölçmə sistemləri", "Keyfiyyət nəzarəti"],
    },
    {
      title: "Kimya Sənayesi",
      description:
        "Kimya müəssisələri üçün təhlükəsizlik və effektivlik artırıcı sistemlər.",
      icon: "🧪",
      features: [
        "Təhlükəsizlik monitorinqi",
        "Proses optimallaşdırma",
        "Tullantı idarəetmə",
      ],
    },
    {
      title: "Ağır Sənaye",
      description:
        "Ağır sənaye müəssisələri üçün kompleks avadanlıq və idarəetmə sistemləri.",
      icon: "🏭",
      features: ["Enerji idarəetmə", "Avadanlıq monitorinqi", "Texniki xidmət"],
    },
    {
      title: "Enerji Sektorları",
      description:
        "Enerji istehsalı və paylanması üçün smart sistemlər və monitorinq.",
      icon: "⚡",
      features: ["Smart şəbəkə", "Enerji optimallaşdırma", "Uzaqdan idarəetmə"],
    },
    {
      title: "Maşınqayırma",
      description:
        "Maşınqayırma sənayesi üçün CAD/CAM sistemləri və rəqəmsal həllər.",
      icon: "⚙️",
      features: ["CAD/CAM həlləri", "3D modelləşdirmə", "İstehsal planlaması"],
    },
    {
      title: "Yeyinti Sənayesi",
      description:
        "Yeyinti istehsalı üçün keyfiyyət nəzarət və avtomatlaşdırma sistemləri.",
      icon: "🍞",
      features: [
        "HACCP sistemləri",
        "Paketləmə avtomatlaşdırması",
        "Keyfiyyət nəzarəti",
      ],
    },
  ];

  const features = [
    {
      title: "Sənaye 4.0",
      description: "Rəqəmsal dönüşüm və sənaye inqilabının son texnologiyaları",
      icon: Factory,
    },
    {
      title: "IoT Həlləri",
      description:
        "Nesnelerin interneti texnologiyaları ilə sənaye proseslərinin optimallaşdırılması",
      icon: Cog,
    },
    {
      title: "AI & Maşın Öyrənmə",
      description:
        "Süni intellekt və maşın öyrənmə ilə proqnozlaşdırma və optimallaşdırma",
      icon: Zap,
    },
    {
      title: "Robototexnika",
      description: "Avtomatlaşdırılmış istehsal xətləri və robot sistemləri",
      icon: Construction,
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 overflow-x-hidden `}
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
            <p className="text-xl md:text-2xl mb-8 opacity-80 leading-relaxed">
              Sənayenizi <span className="font-semibold">gələcəyə aparan</span>{" "}
              rəqəmsal transformasiya həlləri.
              <span className="block mt-2 text-lg">
                İnnovasiya ilə məhsuldarlığınızı artırın.
              </span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2 ${
                isDarkMode
                  ? "bg-[#CAFF34] text-gray-900 hover:bg-[#b8e62e]"
                  : "bg-[#1D6696] text-white hover:bg-[#15557d]"
              } transition-colors duration-300 shadow-lg`}
              onClick={() => navigate("/contact")}
            >
              Təklif Alın
              <ArrowRight size={20} />
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
                className={`p-6 rounded-2xl border-2 ${
                  isDarkMode
                    ? "bg-[#1E1E1E] border-gray-700 hover:border-[#CAFF34]"
                    : "bg-white border-gray-200 hover:border-[#1D6696]"
                } transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="opacity-70 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full ${
                        isDarkMode
                          ? "bg-[#CAFF34]/10 text-[#CAFF34]"
                          : "bg-[#1D6696]/10 text-[#1D6696]"
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 transition-colors duration-300`}>
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
              <p className="text-lg mb-8 opacity-80 leading-relaxed">
                Sənaye 4.0 və rəqəmsal transformasiya ilə müəssisənizin
                məhsuldarlığını və effektivliyini artırın. Ən son
                texnologiyalardan istifadə edərək sənaye proseslərinizi
                optimallaşdırırıq.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-start space-x-4 p-4 rounded-xl ${
                      isDarkMode ? "bg-gray-800/50" : "bg-white/50"
                    } backdrop-blur-sm`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDarkMode ? "bg-[#CAFF34]/10" : "bg-[#1D6696]/10"
                      }`}
                    >
                      <feature.icon
                        size={24}
                        className={
                          isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">
                        {feature.title}
                      </h4>
                      <p className="opacity-70 leading-relaxed">
                        {feature.description}
                      </p>
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
              {/* Modern Industry Visualization */}
              <div
                className={`rounded-2xl p-8 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-2xl border-2 ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                {/* Factory Building */}
                <div className="relative h-64 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg overflow-hidden">
                  {/* Factory Structure */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-40 bg-gray-700">
                    {/* Windows */}
                    <div className="grid grid-cols-3 gap-2 p-4">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-yellow-300 rounded w-4 h-6 opacity-60"
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Smoke */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <motion.div
                      animate={{ y: [-10, -30, -50], opacity: [1, 0.5, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                      className="w-8 h-8 bg-gray-400 rounded-full blur-sm"
                    ></motion.div>
                  </div>

                  {/* Data Flow Visualization */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        className={`absolute w-2 h-2 rounded-full ${
                          isDarkMode ? "bg-[#CAFF34]" : "bg-[#1D6696]"
                        }`}
                        style={{
                          left: `${20 + i * 10}%`,
                          bottom: "20%",
                        }}
                      ></motion.div>
                    ))}
                  </div>
                </div>

                {/* Data Points */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {["Sensor Data", "AI Analysis", "Real-time"].map(
                    (item, index) => (
                      <div key={index} className="text-center">
                        <div
                          className={`text-xs font-semibold ${
                            isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"
                          }`}
                        >
                          {item}
                        </div>
                        <div className="text-2xl font-bold mt-1">
                          {index === 0 ? "98%" : index === 1 ? "AI" : "24/7"}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${
                  isDarkMode ? "bg-[#CAFF34]" : "bg-[#1D6696]"
                } opacity-10 blur-xl`}
              ></motion.div>
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className={`absolute -bottom-6 -left-6 w-20 h-20 rounded-full ${
                  isDarkMode ? "bg-[#CAFF34]" : "bg-[#1D6696]"
                } opacity-10 blur-xl`}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={`max-w-3xl mx-auto p-8 rounded-3xl ${
              isDarkMode
                ? "bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700"
                : "bg-gradient-to-r from-blue-50 to-white border border-blue-200"
            } shadow-2xl`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sənayenizi{" "}
              <span
                className={isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"}
              >
                Gələcəyə
              </span>{" "}
              Hazırlayın
            </h2>
            <p className="text-xl mb-8 opacity-80 max-w-2xl mx-auto">
              Rəqəmsal transformasiya ilə müəssisənizin rəqabət qabiliyyətini
              artırın
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl font-semibold text-lg inline-flex items-center gap-2 ${
                isDarkMode
                  ? "bg-[#CAFF34] text-gray-900 hover:bg-[#b8e62e]"
                  : "bg-[#1D6696] text-white hover:bg-[#15557d]"
              } transition-colors duration-300 shadow-lg`}
              onClick={() => navigate("/contact")}
            >
              Pulsuz Məsləhət Alın
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industry;
