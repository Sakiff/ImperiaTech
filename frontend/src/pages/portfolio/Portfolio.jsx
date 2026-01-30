import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Code, Globe } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Sum Tekstil",
    image: "/images/sumtekstil.png",
    link: "https://sumtekstil.az/",
    category: "Korporativ Vebsayt",
    description:
      "SumTekstil - Bakıda iş geyimləri və təhlükəsizlik avadanlıqlarının istehsalı. Tikinti şirkətləri, restoranlar, sənaye müəssisələri üçün peşəkar iş paltarları.",
    technologies: ["React", "Tailwind", "MongoDB", "Node.js", "Express.js"],
    isTemplate: false,
  },
  {
    title: "RS-Electro",
    image: "/images/rs-electro.png",
    link: "https://rs-electro.com/",
    category: "Korporativ Vebsayt",
    description:
      "RS-Electro - Bakıda elektrik avadanlıqlarının istehsalı və satışı. Tikinti şirkətləri, restoranlar, sənaye müəssisələri üçün peşəkar elektrik avadanlıqları.",
    technologies: ["React", "MongoDB", "Node.js", "Express.js"],
    isTemplate: false,
  },
  {
    title: "IREE",
    image: "/images/iree-vercel.png",
    link: "https://iree.vercel.app/",
    category: "Korporativ Vebsayt",
    description:
      "IREE - müəssisələr üçün HRM (insan resursları), inventar idarəetmə, kibertəhlükəsizlik və AI chatbot kimi qabaqcıl biznes həllərini təqdim edən, şirkətlərin əməliyyatlarını daha ağıllı və sürətli şəkildə qurmağa kömək edən korporativ texnologiya platformasıdır.",
    technologies: ["React", "Tailwind", "Node.js", "Express.js"],
    isTemplate: false,
  },
  {
    title: "El Tv",
    image: "/images/eltv.png",
    link: "https://eltv.az/az#live",
    category: "Media Agentliyi",
    description:
      "El Tv - Bu sayt Azərbaycanın regional televiziya kanalı EL TV-nin (Yevlax TV) rəsmi veb səhifəsidir və burada kanalın canlı yayımlarını və proqramlarını izləmək, onun haqqında məlumat almaq və sosial media hesablarına keçid etmək mümkündür.",
    technologies: ["React", "Next.js", "MongoDB"],
    isTemplate: false,
  },
  {
    title: "Line Construction",
    image: "/images/layihe1.PNG",
    link: "https://lineconstruction-001-site1.ntempurl.com/",
    category: "Korporativ Vebsayt",
    description: "Tikinti şirkəti üçün peşəkar vebsayt",
    technologies: [".NET", "Bootstrap", "SQL Server"],
    isTemplate: false,
  },
  {
    title: "Kas Aluminyum",
    image: "/images/layihe2.PNG",
    link: "https://www.kasalm.com/",
    category: "Elektron Ticarət",
    description: "Alüminium məhsulları üçün online satış platforması",
    technologies: ["Next.js", "MongoDB", "Stripe"],
    isTemplate: false,
  },
  {
    title: "BizPro Media",
    image: "/images/layihe3.PNG",
    link: "https://bizpromedia.netlify.app/",
    category: "Media Agentliyi",
    description: "Media agentliyi üçün kreativ vebsayt",
    technologies: ["HTML", "CSS", "JavaScript"],
    isTemplate: true,
  },
];

export default function Portfolio() {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState("Hamısı");

  const primaryColor = isDarkMode ? "#CAFF34" : "#1D6696";
  const cardBg = isDarkMode ? "#1E1E1E" : "#ffffff";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";
  const mutedTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";

  const categories = [
    "Hamısı",
    "Korporativ Vebsayt",
    "Elektron Ticarət",
    "Media Agentliyi",
  ];

  const filteredProjects =
    activeCategory === "Hamısı"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Portfolio | Imperia Groups</title>
        <meta
          name="description"
          content="Imperia Groups komandası tərəfindən hazırlanmış unikal və funksional veb layihələrə buradan baxa bilərsiniz. Portfoliomuz peşəkar təcrübəmizi əks etdirir."
        />
      </Helmet>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6"
          style={{
            borderColor: primaryColor + "40",
            backgroundColor: primaryColor + "10",
          }}
        >
          <Globe className="w-4 h-4" style={{ color: primaryColor }} />
          <span className="text-sm font-medium" style={{ color: primaryColor }}>
            Layihələrimiz
          </span>
        </motion.div>

        <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${textColor}`}>
          Bizim <span style={{ color: primaryColor }}>İşlərimiz</span>
        </h1>
        <p
          className={`text-xl md:text-2xl max-w-2xl mx-auto ${mutedTextColor}`}
        >
          Peşəkar komandamız tərəfindən hazırlanmış müxtəlif veb layihələrlə
          tanış olun
        </p>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
              category === activeCategory
                ? isDarkMode
                  ? "bg-[#CAFF34] text-gray-900"
                  : "bg-[#1D6696] text-white"
                : isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl overflow-hidden shadow-2xl border ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
              style={{ backgroundColor: cardBg }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Dark Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border"
                    style={{
                      backgroundColor: isDarkMode
                        ? "rgba(30, 30, 30, 0.8)"
                        : "rgba(255, 255, 255, 0.9)",
                      color: primaryColor,
                      borderColor: primaryColor + "40",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Template Badge - Only for BizPro Media */}
                {project.isTemplate && (
                  <div className="absolute top-4 right-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-orange-500/30"
                      style={{
                        backgroundColor: "rgba(249, 115, 22, 0.9)",
                        color: "white",
                      }}
                    >
                      Şablon
                    </span>
                  </div>
                )}

                {/* Simple hover effect - small code icon */}
                <motion.div
                  className="absolute top-12 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div
                    className="p-1 rounded backdrop-blur-sm"
                    style={{
                      backgroundColor: isDarkMode
                        ? "rgba(30, 30, 30, 0.7)"
                        : "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    <Code className="w-4 h-4" style={{ color: primaryColor }} />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className={`text-xl font-bold ${textColor} group-hover:text-opacity-80 transition-colors`}
                  >
                    {project.title}
                  </h3>
                  <ExternalLink
                    className="w-5 h-5 flex-shrink-0 mt-1"
                    style={{ color: primaryColor }}
                  />
                </div>

                <p className={`text-sm mb-4 ${mutedTextColor}`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded-lg text-xs ${
                        isDarkMode
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-4 rounded-2xl font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    isDarkMode
                      ? "bg-[#CAFF34] text-gray-900 hover:bg-[#b8e62e]"
                      : "bg-[#1D6696] text-white hover:bg-[#15557d]"
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  Layihəyə Bax
                </motion.a>
              </div>

              {/* Hover Border Effect */}
              <div
                className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                style={{ borderColor: primaryColor + "40" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Show message if no projects found */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className={`text-lg ${mutedTextColor}`}>
              Seçilmiş kateqoriyada layihə tapılmadı.
            </p>
          </motion.div>
        )}

        {/* Load More Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className={`mt-4 ${mutedTextColor}`}>
            Sizin də layihəniz olsun?{" "}
            <a
              href="/contact"
              className="font-semibold underline"
              style={{ color: primaryColor }}
            >
              Əlaqə saxlayın
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
