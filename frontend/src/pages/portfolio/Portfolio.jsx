import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Line Construction",
    image: "/images/layihe1.PNG",
    link: "https://lineconstruction-001-site1.ntempurl.com/",
  },
  {
    title: "Kas Aluminyum",
    image: "/images/layihe2.PNG",
    link: "https://www.kasalm.com/",
  },
  {
    title: "BizPro Media",
    image: "/images/layihe3.PNG",
    link: "https://bizpromedia.netlify.app/",
  },
];

export default function Portfolio() {
  const { isDarkMode } = useTheme();
  const bgColor = isDarkMode ? "#0D0D0D" : "#F9FAFB";
  const primaryColor = isDarkMode ? "#CAFF34" : "#1D6696";
  const cardBg = isDarkMode ? "#1E1E1E" : "white";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";

  return (
    <section className="py-16 px-6 sm:px-16">
      <Helmet>
        <title>Portfolio | Imperia Tech</title>
        <meta
          name="description"
          content="Imperia Tech komandası tərəfindən hazırlanmış unikal və funksional veb layihələrə buradan baxa bilərsiniz. Portfoliomuz peşəkar təcrübəmizi əks etdirir."
        />
        <meta
          name="keywords"
          content="veb inkişaf, portfolio, veb saytlar, Imperia Tech layihələri, proqramlaşdırma, frontend, backend, React layihələri"
        />
        <meta name="author" content="Imperia Tech" />

        {/* Open Graph (Facebook və sosial şəbəkələr üçün) */}
        <meta property="og:title" content="Imperia Tech | Portfolio" />
        <meta
          property="og:description"
          content="Peşəkar komandamız tərəfindən hazırlanmış veb layihələrlə tanış olun."
        />
        <meta
          property="og:image"
          content="https://via.placeholder.com/400x250?text=Portfolio+Preview"
        />
        <meta property="og:url" content="https://imperiagroups.az/portfolio" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Imperia Tech Portfolio" />
        <meta
          name="twitter:description"
          content="Yüksək keyfiyyətli veb layihələrimizə göz atın."
        />
        <meta
          name="twitter:image"
          content="https://via.placeholder.com/400x250?text=Portfolio+Preview"
        />

        <link rel="canonical" href="https://imperiagroups.az/portfolio" />
      </Helmet>

      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className={`text-4xl font-bold mb-4`}
          style={{ color: primaryColor }}
        >
          Portfolio
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Aşağıda komandamız tərəfindən hazırlanmış bəzi veb layihələrlə tanış
          ola bilərsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-xl overflow-hidden shadow-lg"
            style={{ backgroundColor: cardBg }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">
                  Sayta baxmaq üçün klikləyin
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
