import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useTheme } from "../../context/ThemeContext";
import {
  Rocket,
  Users,
  Target,
  Award,
  TrendingUp,
  Heart,
  Globe,
  Code,
  Lightbulb,
  Shield,
  Send,
  Phone,
  Users as UsersIcon,
  Target as TargetIcon,
  CheckCircle,
  GraduationCap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const whyChooseUs = [
  {
    icon: Rocket,
    title: "Sürətli İnkişaf Mühiti",
    description:
      "Biz daim yeni texnologiyaları sınaqdan keçirir və komandamızı mütəmadi təlimlərlə gücləndiririk. Hər yeni layihə həm təcrübə həm də məsuliyyət verir və bununla komanda üzvləri sürətlə inkişaf edir. Praktiki tapşırıqlar və mentoring proqramı ilə biliklərinizi reallığa tətbiq etməyə imkan yaradırıq. Komanda daxilində bilik paylaşımı və kod review kulturu var. Bu mühitdən faydalananlar qısa zamanda məsuliyyətli rol və layihələrə keçir.",
    features: [
      "Praktiki layihə təcrübəsi",
      "Həftəlik texniki paylaşım sessiyaları",
      "Mentorluq dəstəyi",
      "Karyera konsultasiyaları",
    ],
  },
  {
    icon: Users,
    title: "Güclü Komanda Mədəniyyəti",
    description:
      "Bizim mədəniyyətimizdə əməkdaşlıq və açıq ünsiyyət əsasdır. Komanda üzvləri arasında təcrübə paylaşımı gündəlik praktikanın bir hissəsidir və yeni gələnlər üçün mentorluq mövcuddur. Müntəzəm komanda görüşləri və qeyri-formal tədbirlər əlaqələri gücləndirir. Çətin texniki problemləri birlikdə həll edirik və hər kəsin ideyası dəyərləndirilir. Bu yanaşma həm məhsuldarlığı artırır, həm də uzunmüddətli əməkdaşlığa zəmin yaradır.",
    features: [
      "Açıq və şəffaf kommunikasiya",
      "Komanda yeməkləri və görüşlər",
      "Qarşılıqlı dəstək mühiti",
      "Əməkdaşlıq və komanda işi",
    ],
  },
  {
    icon: Target,
    title: "Karyera İnkişafı",
    description:
      "Hər işçi üçün fərdi inkişaf planı hazırlanır və nailiyyətlərə uyğun olaraq irəliləyiş izlənilir. Biz texniki və soft-skill bacarıqlarının inkşafı üçün kurslar və praktiki tapşırıqlar təklif edirik. Performance review-lar vasitəsilə növbəti addımlar və karyera hədəfləri müzakirə olunur. Ən yaxşı namizədlər üçün liderlik və texniki trayektoriyalar mövcuddur. Bu struktur sizin uzunmüddətli karyera məqsədlərinizə çatmağınıza kömək edir.",
    features: [
      "Fərdi inkişaf planı",
      "Texniki bacarıq inkişafı",
      "Soft skill təlimləri",
      "Karyera yolunun planlanması",
    ],
  },
  {
    icon: Award,
    title: "Ədalətli Mükafatlandırma",
    description:
      "Şəffaf və performansa əsaslanan mükafatlandırma sistemi tətbiq edirik. Hər rüb və il performans qiymətləndirmələri əsasında bonus və təşviq mexanizmləri fəaliyyət göstərir. Biz həm maddi, həm də qeyri-maddi motivasiyaları balanslı şəkildə təklif edirik. İşçi rifahı və balansı önəmsəyirik: məzuniyyət və çevik iş rejimi kimi imkanlar mövcuddur. Bu yanaşma heyəti motivasiya edir və uzunmüddətli əməkdaşlığı gücləndirir.",
    features: [
      "Performansa əsaslanan mükafat",
      "Ədalətli iş şəraiti",
      "Düzgün iş-məzuniyyət balansı",
      "İşçi rifahı proqramları",
    ],
  },
  {
    icon: Globe,
    title: "Müasir Texnologiyalar",
    description:
      "Biz layihələrdə müasir texnologiya stack-lərindən istifadə edirik və komanda üzvlərinə yeni alətləri öyrənmək üçün şərait yaradırıq. Real müştəri layihələri üzərində işləyərək praktiki təcrübə qazanacaq, arxitektura və performans problemlərini həll edəcəksiniz. İnfrastruktur, CI/CD və təhlükəsizlik sahələrinə dair biliklər də inkişaf etdirilir. Mentorlarımız və təlim proqramlarımız yeni texnologiyaların mənimsənilməsini sürətləndirir. Nəticədə burada işləyənlər peşəkar səviyyələrini qısa müddətdə yüksəldə bilirlər.",
    features: [
      "Müasir texnologiya stəki",
      "Real layihə təcrübəsi",
      "Peşəkar alətlərlə iş",
      "Texniki bacarıq inkişafı",
    ],
  },
  {
    icon: Heart,
    title: "Dəyərlərimiz",
    description:
      "Dəyərlərimiz şəffaflıq və etibara əsaslanır; hər bir komanda üzvünün fikri qiymətlidir. Biz yeni ideyaları təşviq edir və kiçik uğurları belə qeyd edirik, bu da motivasiyanı artırır. Sosial məsuliyyət və daxili təşəbbüslər işimizin ayrılmaz hissəsidir. Komanda daxilində dürüstlük və açıq ünsiyyət əməkdaşlığımızın əsasını təşkil edir. Bu dəyərlər iş yerində həm təhlükəsiz, həm də yaradıcı mühit yaradır.",
    features: [
      "Şəffaf kommunikasiya",
      "Yenilikçi yanaşma",
      "Komanda işi mədəniyyəti",
      "Qarşılıqlı inam və hörmət",
    ],
  },
];

const processSteps = [
  {
    icon: Send,
    title: "Müraciət",
    description:
      "CV və portfolio-nuzu göndərin. 48 saat ərzində geri dönüş alacaqsınız",
  },
  {
    icon: Phone,
    title: "Əlaqə",
    description:
      "HR müsahibəsi - 30 dəqiqəlik ilkin görüş və şirkət haqqında məlumat",
  },
  {
    icon: UsersIcon,
    title: "Texniki Müsahibə",
    description:
      "2-3 texniki müsahibə və praktiki tapşırıq. Komanda üzvləri ilə tanışlıq",
  },
  {
    icon: TargetIcon,
    title: "Final Görüş",
    description:
      "Team lead və department head ilə görüş. Layihə və komanda haqqında ətraflı",
  },
  {
    icon: CheckCircle,
    title: "Təklif",
    description:
      "Uğurlu nəticədə 3-5 iş günü ərzində iş təklifi və onboarding prosesi",
  },
];

export default function Career() {
  const [activeSection, setActiveSection] = useState(0);
  const { isDarkMode } = useTheme();
  const primaryColor = isDarkMode ? "#CAFF34" : "#1D6696";
  const cardBg = isDarkMode ? "bg-[#1A1A1A]" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const secondaryText = isDarkMode ? "text-gray-400" : "text-gray-600";
  const navigate = useNavigate();

  // extract active icon component so JSX can render it
  const ActiveIcon = whyChooseUs[activeSection].icon;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Karyera | Imperia Tech</title>
        <meta
          name="description"
          content="Imperia Tech-də karyera imkanları. Komandamıza qoşulun və texnologiya ilə gələcəyi birlikdə quraq. Professional inkişaf, rəqabətli mükafatlandırma."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${textColor}`}>
            <span className={`text-[${primaryColor}]`}>Karyera</span> Imperia
            Tech-də
          </h1>
          <p
            className={`text-xl md:text-2xl ${secondaryText} max-w-4xl mx-auto leading-relaxed mb-8`}
          >
            Bizimlə birlikdə{" "}
            <strong className={`text-[${primaryColor}]`}>
              texnologiya dünyasında karyera
            </strong>{" "}
            qurun. Real layihələr, müasir texnologiyalar və dəstəkçi komanda ilə
            bacarıqlarınızı inkişaf etdirin.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: Code, text: "Real Layihələr" },
              { icon: Lightbulb, text: "Yenilikçi Yanaşma" },
              { icon: Shield, text: "Stabil İş Mühiti" },
              { icon: TrendingUp, text: "Karyera İnkişafı" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-opacity-20 border border-opacity-20"
                style={{
                  backgroundColor: isDarkMode
                    ? `${primaryColor}20`
                    : `${primaryColor}10`,
                  borderColor: primaryColor,
                }}
              >
                <item.icon
                  className="w-4 h-4"
                  style={{ color: primaryColor }}
                />
                <span
                  className={`text-sm font-medium`}
                  style={{ color: primaryColor }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Why Choose Us - Interactive Sections */}
      <div className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-6 ${textColor}`}>
            Niyə{" "}
            <span className={`text-[${primaryColor}]`}>
              Bizimlə İşləməlisiniz
            </span>
            ?
          </h2>
          <p className={`text-lg ${secondaryText} max-w-3xl mx-auto`}>
            2020-ci ildən bəri texnologiya sahəsində fəaliyyət göstərən
            komandamız, hər bir üzvün inkişafına və peşəkar yoluna dəstək olmaq
            üçün səy göstərir.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-8 space-y-2">
              {whyChooseUs.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                    activeSection === index
                      ? `shadow-lg border-l-4`
                      : "opacity-70 hover:opacity-100"
                  } ${cardBg}`}
                  style={{
                    borderLeftColor:
                      activeSection === index ? primaryColor : "transparent",
                    transform:
                      activeSection === index ? "translateX(8px)" : "none",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <section.icon
                      className="w-5 h-5"
                      style={{ color: primaryColor }}
                    />
                    <span
                      className={`font-semibold ${
                        activeSection === index ? textColor : secondaryText
                      }`}
                    >
                      {section.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`${cardBg} rounded-3xl p-8 shadow-xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${primaryColor}20` }}
                >
                  <ActiveIcon
                    className="w-8 h-8"
                    style={{ color: primaryColor }}
                  />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${textColor}`}>
                    {whyChooseUs[activeSection].title}
                  </h3>
                  <div
                    className="w-12 h-1 rounded-full mt-2"
                    style={{ backgroundColor: primaryColor }}
                  ></div>
                </div>
              </div>

              <p className={`text-lg ${secondaryText} leading-relaxed mb-8`}>
                {whyChooseUs[activeSection].description}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {whyChooseUs[activeSection].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-opacity-50"
                    style={{
                      backgroundColor: isDarkMode
                        ? `${primaryColor}10`
                        : `${primaryColor}05`,
                    }}
                  >
                    <CheckCircle
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: primaryColor }}
                    />
                    <span className={`text-sm ${secondaryText}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Application Process */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-6xl mx-auto mb-20"
      >
        <h2 className={`text-4xl font-bold text-center mb-16 ${textColor}`}>
          Müraciət <span className={`text-[${primaryColor}]`}>Prosesi</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? "bg-[#CAFF34] text-black"
                      : "bg-[#1D6696] text-white"
                  }`}
                >
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className={`font-bold mb-2 ${textColor}`}>{step.title}</h3>
                <p className={`text-xs ${secondaryText}`}>{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div
                  className={`hidden md:block absolute top-8 left-3/4 w-1/2 h-0.5 ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div
          className={`${cardBg} rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl"
              style={{ backgroundColor: primaryColor }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl"
              style={{ backgroundColor: primaryColor }}
            ></div>
          </div>

          <div className="relative z-10">
            <GraduationCap
              className={`w-16 h-16 mx-auto mb-6 text-[${primaryColor}]`}
            />
            <h2 className={`text-3xl font-bold mb-4 ${textColor}`}>
              Komandamıza Qoşulmaq İstəyirsiniz?
            </h2>
            <p
              className={`mb-8 text-lg ${secondaryText} max-w-2xl mx-auto leading-relaxed`}
            >
              Bizimlə işləmək istəyirsinizsə, CV-nizi bizimlə paylaşın. Yeni
              imkanlar yarandıqda sizinlə əlaqə saxlayaq və uyğun fürsətlər
              barədə məlumatlandıraq.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg ${
                  isDarkMode
                    ? "bg-[#CAFF34] text-black hover:bg-[#d4ff57]"
                    : "bg-[#1D6696] text-white hover:bg-[#1a5a83]"
                }`}
                onClick={() => navigate("/contact")}
              >
                CV-ni Göndər
              </button>
              <button
                className={`px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "border-[#CAFF34] text-[#CAFF34] hover:bg-[#CAFF34] hover:text-black"
                    : "border-[#1D6696] text-[#1D6696] hover:bg-[#1D6696] hover:text-white"
                }`}
                onClick={() => navigate("/contact")}
              >
                Ətraflı Məlumat
              </button>
            </div>
            <p className={`mt-6 text-sm ${secondaryText}`}>
              CV-nizi göndərdikdən sonra 48 saat ərzində təsdiq e-mail-i
              alacaqsınız
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
