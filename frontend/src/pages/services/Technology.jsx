import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Shield,
  Smartphone,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
  Play,
  Pause,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Technology() {
  const { isDarkMode } = useTheme();
  const [activeService, setActiveService] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const sectionRef = useRef(null);
  const serviceRefs = useRef([]);
  const navigate = useNavigate();
  const userInteractedRef = useRef(false);

  const toggleAutoPlay = () => {
    userInteractedRef.current = true;
    setAutoPlay((prev) => !prev);
  };

  const services = [
    {
      icon: <Code size={48} />,
      title: "Veb Sayt & Proqramlar",
      description:
        "Müasir, sürətli və hər cihazda düzgün işləyən veb saytlar hazırlayırıq. Mağazadan şəxsi bloqa qədər hər növ layihə.",
      features: [
        "Hər cihazda düzgün görünən dizayn",
        "Axtarış sistemlərində üst sıralar",
        "Sürətli yüklənmə",
        "Təhlükəsizlik tədbirləri",
      ],
    },
    {
      icon: <Smartphone size={48} />,
      title: "Mobil Tətbiqlər",
      description:
        "Telefon və planşetlər üçün proqramlar yaradırıq. İstifadəsi asan və sürətli tətbiqlərlə müştərilərinizə çatın.",
      features: [
        "Yüksək sürətli işləmə",
        "İnternetsiz də işləmə",
        "Bildiriş göndərmə",
        "App Store və Google Play-də yerləşdirmə",
      ],
    },
    {
      icon: <Zap size={48} />,
      title: "Avtomatlaşdırma Sistemləri",
      description:
        "Təkrarolunan işləri avtomatlaşdıraraq vaxt və əmək qənaət edin. Məsələn, e-poçt göndərmə, məlumat köçürmə və s.",
      features: [
        "İş proseslərini avtomatlaşdırma",
        "Müxtəlif programlar arasında əlaqə",
        "Anlıq bildirişlər",
        "Şəxsi iş axınları yaratma",
      ],
    },
    {
      icon: <Database size={48} />,
      title: "Verilənlər Bazası",
      description:
        "Məlumatlarınızı təhlükəsiz saxlayıb asanlıqla idarə edə biləcəyiniz sistemlər qururuq. Çeşid, anbar, müştəri məlumatları və s.",
      features: [
        "Məlumatları təşkil etmə",
        "Köhnə sistemdən yeni sistemə köçürmə",
        "Sürətli axtarış və filtrləmə",
        "Məlumat təhlükəsizliyi",
      ],
    },
    {
      icon: <Shield size={48} />,
      title: "Siber Təhlükəsizlik",
      description:
        "Sayt və programlarınızı həaker hücumlarından qoruyuruq. Məlumatlarınızın oğurlanmasının və pozulmasının qarşısını alırıq.",
      features: [
        "Təhlükəsizlik testləri",
        "Təhlükəsiz bağlantı sertifikatları",
        "Güvənlik divarları",
        "İşçilər üçün təlimlər",
      ],
    },
    {
      icon: <Globe size={48} />,
      title: "Rəqəmsal Çevrilmə",
      description:
        "Əllə və kağız üstündə edilən işləri rəqəmsal sistemlərə keçiririk. İş yerinizi daha səmərəli və müasir edirik.",
      features: [
        "Əl işlərini avtomatlaşdırma",
        "Süni intellekt həlləri",
        "Ağıllı cihazların inteqrasiyası",
        "Rəqəmsal strategiya müəyyən etmə",
      ],
    },
  ];

  const technologies = [
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "AWS",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "Kubernetes",
    "GraphQL",
    "Firebase",
    "Redis",
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, services.length]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!userInteractedRef.current) setAutoPlay(true);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const el = serviceRefs.current[activeService];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (!isVisible) {
      try {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
        window.scrollTo({
          top: window.scrollY + rect.top - window.innerHeight / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeService, autoPlay]);

  const handleFreeConsultation = () => {
    window.location.href = "tel:055-755-77-33";
  };

  const handleCallButton = () => {
    window.location.href = "tel:055-755-77-33";
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 `}
      ref={sectionRef}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
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
              <Zap size={16} />
              Texnoloji Həllər
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              İnnovativ{" "}
              <span
                className={isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"}
              >
                Texnoloji
              </span>{" "}
              Həllər
            </h1>

            <p className="text-xl sm:text-2xl mb-8 opacity-80 leading-relaxed">
              Biznesinizi gücləndirəcək <strong>müasir texnologiyalar</strong>{" "}
              ilə rəqabət qabiliyyətinizi artırın
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  isDarkMode
                    ? "bg-[#CAFF34] text-black hover:bg-[#CAFF34]/90 hover:scale-105"
                    : "bg-[#1D6696] text-white hover:bg-[#1D6696]/90 hover:scale-105"
                }`}
                onClick={() => navigate("/portfolio")}
              >
                Layihəyə Başla
                <ArrowRight size={20} className="inline ml-2" />
              </button>

              <button
                className={`px-8 py-4 rounded-2xl font-semibold border transition-all duration-300 ${
                  isDarkMode
                    ? "border-gray-600 hover:border-[#CAFF34] hover:text-[#CAFF34]"
                    : "border-gray-300 hover:border-[#1D6696] hover:text-[#1D6696]"
                }`}
              >
                Portfolio-a Bax
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Xidmətlərimiz
            </h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              Hər bir biznesə uyğunlaşdırılmış <strong>texnoloji həllər</strong>{" "}
              təqdim edirik
            </p>
          </motion.div>

          {/* Auto-play Control - Moved to top */}
          <div className="flex justify-center mb-8 lg:hidden">
            <div
              className={`p-6 rounded-2xl w-full max-w-md ${
                isDarkMode ? "bg-[#1E1E1E]" : "bg-white"
              } border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Xidmətləri Kəşf Edin</h3>
                <button
                  onClick={toggleAutoPlay}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }`}
                >
                  {autoPlay ? <Pause size={20} /> : <Play size={20} />}
                </button>
              </div>

              <div className="flex gap-2 mb-4">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveService(index);
                      setAutoPlay(false);
                    }}
                    className={`flex-1 h-1 rounded-full transition-all ${
                      activeService === index
                        ? isDarkMode
                          ? "bg-[#CAFF34]"
                          : "bg-[#1D6696]"
                        : isDarkMode
                        ? "bg-gray-600"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-sm opacity-80">
                Hazırkı: <strong>{services[activeService].title}</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Services List */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeService === index
                        ? isDarkMode
                          ? "bg-[#CAFF34]/10 border-2 border-[#CAFF34]"
                          : "bg-[#1D6696]/10 border-2 border-[#1D6696]"
                        : isDarkMode
                        ? "bg-[#1E1E1E] border border-gray-700 hover:border-gray-600"
                        : "bg-white border border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => {
                      setActiveService(index);
                      userInteractedRef.current = true;
                      setAutoPlay(false);
                    }}
                    ref={(el) => (serviceRefs.current[index] = el)}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                        isDarkMode ? "bg-[#CAFF34]/10" : "bg-[#1D6696]/10"
                      }`}
                    >
                      <div
                        className={
                          isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"
                        }
                      >
                        {service.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="opacity-80 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle
                            size={16}
                            className={
                              isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"
                            }
                          />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Auto-play Control - Desktop */}
            <div className="lg:w-1/3 hidden lg:block">
              <div className="sticky top-24">
                <div
                  className={`p-6 rounded-2xl ${
                    isDarkMode ? "bg-[#1E1E1E]" : "bg-white"
                  } border ${
                    isDarkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Xidmətləri Kəşf Edin</h3>
                    <button
                      onClick={toggleAutoPlay}
                      className={`p-2 rounded-lg transition-colors ${
                        isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                      }`}
                    >
                      {autoPlay ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                  </div>

                  <div className="flex gap-2 mb-4">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveService(index);
                          setAutoPlay(false);
                        }}
                        className={`flex-1 h-1 rounded-full transition-all ${
                          activeService === index
                            ? isDarkMode
                              ? "bg-[#CAFF34]"
                              : "bg-[#1D6696]"
                            : isDarkMode
                            ? "bg-gray-600"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-sm opacity-80">
                    Hazırkı: <strong>{services[activeService].title}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              İstifadə Etdiyimiz Texnologiyalar
            </h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              Ən son texnologiyalarla <strong>yüksək keyfiyyətli həllər</strong>{" "}
              hazırlayırıq
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.03,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={{ scale: 1.05 }}
                className={`p-4 rounded-xl text-center font-medium transition-all duration-300 ${
                  isDarkMode
                    ? "bg-[#1E1E1E] border border-gray-700 hover:border-[#CAFF34] hover:text-[#CAFF34]"
                    : "bg-white border border-gray-200 hover:border-[#1D6696] hover:text-[#1D6696]"
                }`}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 text-center ${
              isDarkMode
                ? "bg-gradient-to-r from-[#CAFF34]/10 to-[#1D6696]/10 border border-[#CAFF34]/20"
                : "bg-gradient-to-r from-[#1D6696]/10 to-[#CAFF34]/10 border border-[#1D6696]/20"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Layihəniz Üçün{" "}
              <span
                className={isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"}
              >
                Texnoloji Həll
              </span>{" "}
              Lazımdır?
            </h2>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              Bizimlə əlaqə saxlayın və biznesiniz üçün ən yaxşı texnoloji həlli
              tapaq
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleFreeConsultation}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  isDarkMode
                    ? "bg-[#CAFF34] text-black hover:bg-[#CAFF34]/90 hover:scale-105"
                    : "bg-[#1D6696] text-white hover:bg-[#1D6696]/90 hover:scale-105"
                }`}
              >
                Pulsuz Məsləhət Alın
                <ArrowRight size={20} className="inline ml-2" />
              </button>

              <button
                onClick={handleCallButton}
                className={`px-8 py-4 rounded-2xl font-semibold border transition-all duration-300 ${
                  isDarkMode
                    ? "border-gray-600 hover:border-[#CAFF34] hover:text-[#CAFF34]"
                    : "border-gray-300 hover:border-[#1D6696] hover:text-[#1D6696]"
                }`}
              >
                055-755-77-33
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
