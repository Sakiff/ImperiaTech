import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  BarChart3,
  Shield,
  ArrowRight,
  CheckCircle,
  Building,
  PieChart,
  TrendingUp,
  Award,
  Clock,
  ThumbsUp,
} from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Corporate() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const corporateServices = [
    {
      icon: <Building size={48} />,
      title: "Korporativ Strategiya",
      description:
        "Şirkətinizin uzunmüddətli böyümə strategiyasını müəyyən edirik və hədəflərə çatmaq üçün yol xəritəsi hazırlayırıq.",
      features: [
        "Strategik Planlama",
        "Bazar Analizi",
        "Rəqabət Strategiyası",
        "İnnovasiya İdarəetməsi",
      ],
    },
    {
      icon: <BarChart3 size={48} />,
      title: "Biznes Optimizasiyası",
      description:
        "İş proseslərinizi analiz edib səmərəliliyi artırırıq. Vaxt və resurslardan qənaət etməyə kömək edirik.",
      features: [
        "Proses Optimizasiyası",
        "Xərc İdarəetməsi",
        "Performance Metrikləri",
        "Davamlı Yaxşılaşdırma",
      ],
    },
    {
      icon: <Users size={48} />,
      title: "İnsan Resursları Konsaltinqi",
      description:
        "HR proseslərinizi professional şəkildə təşkil edirik. Əməkdaş məmnuniyyəti və məhsuldarlığı artırırıq.",
      features: [
        "Talent Aqvizisiyası",
        "Əməkdaş İnkişafı",
        "Performans İdarəetməsi",
        "Korporativ Mədəniyyət",
      ],
    },
    {
      icon: <Shield size={48} />,
      title: "Risk İdarəetmə",
      description:
        "Biznes risklərinizi identifikasiya edirik və idarə etmək üçün effektiv sistemlər qururuq.",
      features: [
        "Risk Analizi",
        "Təhlükəsizlik Audit",
        "Compliance",
        "Biznes Davamlılığı",
      ],
    },
    {
      icon: <PieChart size={48} />,
      title: "Maliyyə Konsaltinqi",
      description:
        "Maliyyə proseslərinizi optimallaşdırırıq və qərarlarınızı data əsaslı etməyə kömək edirik.",
      features: [
        "Maliyyə Planlama",
        "İnvestisiya Analizi",
        "Xərc Optimizasiyası",
        "Maliyyə Hesabatları",
      ],
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Biznes Transformasiyası",
      description:
        "Şirkətinizi müasir tələblərə uyğunlaşdırırıq və rəqəmsal dünyada uğur qazanmağa hazırlayırıq.",
      features: [
        "Digital Transformasiya",
        "İş Modeli İnnovasiyası",
        "Texnologiya İnteqrasiyası",
        "Dəyişiklik İdarəetməsi",
      ],
    },
  ];

  const corporateStats = [
    {
      icon: <Award size={32} />,
      number: "25+",
      label: "İllik Təcrübə",
      description: "Korporativ konsaltinq sahəsində",
    },
    {
      icon: <ThumbsUp size={32} />,
      number: "300+",
      label: "Korporativ Layihə",
      description: "Müvəffəqiyyətlə tamamlanmış",
    },
    {
      icon: <Building size={32} />,
      number: "150+",
      label: "Şirkət",
      description: "Bizimlə əməkdaşlıq edən",
    },
    {
      icon: <Clock size={32} />,
      number: "99%",
      label: "Müştəri Saxlama",
      description: "Uzunmüddətli əməkdaşlıq",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Diagnostika",
      description:
        "Cari vəziyyətin dərin analizi və problemlərin müəyyən edilməsi",
    },
    {
      step: "02",
      title: "Strategiya",
      description: "Fərdiləşdirilmiş həllər və tətbiq planının hazırlanması",
    },
    {
      step: "03",
      title: "İcra",
      description:
        "Strategiyanın tədricən və effektiv şəkildə həyata keçirilməsi",
    },
    {
      step: "04",
      title: "Optimizasiya",
      description: "Nəticələrin monitorinqi və davamlı yaxşılaşdırma",
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 `}>
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
              <Briefcase size={16} />
              Korporativ Həllər
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span
                className={isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"}
              >
                Korporativ
              </span>{" "}
              Məsləhət
            </h1>

            <p className="text-xl sm:text-2xl mb-8 opacity-80 leading-relaxed">
              Şirkətinizin <strong>strateji inkişafı</strong> və{" "}
              <strong>əməliyyat səmərəliliyi</strong> üçün ekspert konsaltinq
              xidmətləri
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
                onClick={() => navigate("/contact")}
              >
                Konsultasiya Alın
                <ArrowRight size={20} className="inline ml-2" />
              </button>

              <button
                className={`px-8 py-4 rounded-2xl font-semibold border transition-all duration-300 ${
                  isDarkMode
                    ? "border-gray-600 hover:border-[#CAFF34] hover:text-[#CAFF34]"
                    : "border-gray-300 hover:border-[#1D6696] hover:text-[#1D6696]"
                }`}
              >
                Xidmətlərimiz
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-6 rounded-2xl ${
                  isDarkMode ? "bg-[#1E1E1E]" : "bg-gray-50"
                } border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                    isDarkMode ? "bg-[#CAFF34]/10" : "bg-[#1D6696]/10"
                  }`}
                >
                  <div
                    className={isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"}
                  >
                    {stat.icon}
                  </div>
                </div>
                <div
                  className={`text-3xl sm:text-4xl font-bold mb-2 ${
                    isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"
                  }`}
                >
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Korporativ Xidmətlərimiz
            </h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              Hər bir şirkətə uyğunlaşdırılmış{" "}
              <strong>profesional konsaltinq</strong> xidmətləri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  isDarkMode
                    ? "bg-[#1E1E1E] border border-gray-700 hover:border-[#CAFF34]"
                    : "bg-white border border-gray-200 hover:border-[#1D6696] shadow-sm"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                    isDarkMode ? "bg-[#CAFF34]/10" : "bg-[#1D6696]/10"
                  }`}
                >
                  <div
                    className={isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"}
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
                    <div key={featureIndex} className="flex items-center gap-2">
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
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              İş Prosesimiz
            </h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto">
              Hər layihədə izlədiyimiz <strong>sistemli yanaşma</strong> və{" "}
              <strong>professional metodologiya</strong>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full text-2xl font-bold mb-4 ${
                    isDarkMode
                      ? "bg-[#CAFF34] text-black"
                      : "bg-[#1D6696] text-white"
                  }`}
                >
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="opacity-80 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
