import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTheme } from "../../context/ThemeContext";
import AboutJsonLd from "../../components/seoJsonLd/AboutJsonLd";

const teamMembers = [
  {
    name: "Davud Qədirov",
    role: "Co-Founder",
    image: "/images/davud.png",
    bio: "Mən Davud Qədirov, texnologiya və təhsil sahəsində fəaliyyət göstərən gənc sahibkaram. Kibertəhlükəsizlik üzrə təhsil alıram və Imperia Tech layihəsi ilə bölgələrdəki gəncləri qlobal imkanlarla birləşdirirəm. Süni intellekt, startaplar və rəqəmsal inkişaf əsas maraq sahəmlərdəndir. Daim yenilik axtarışındayam və gələcəyi birlikdə qurmağa inanıram.",
  },
  {
    name: "Mirze Mirzəyev",
    role: "Frontend Developer",
    image: "/images/Mirze.jpg",
    bio: "Mən informasiya texnologiyaları sahəsində ixtisaslaşmış, frontend inkişafı üzrə çalışan bir proqramçıyam. İstifadəçi təcrübəsini ön planda tutaraq veb interfeyslərin hazırlanması və optimallaşdırılması ilə məşğulam. Hal-hazırda Imperia Tech komandasında frontend developer kimi fəaliyyət göstərirəm və müxtəlif veb layihələrin reallaşdırılmasında iştirak edirəm.",
  },
  {
    name: "Sakif Fətəliyev",
    role: "Frontend Developer",
    image: "/images/sakif.jpeg",
    bio: "Mən veb inkişafı sahəsində fəaliyyət göstərən, daim öz üzərində çalışan bir gəncəm. Frontend əsas istiqamətim olsa da, backend texnologiyaları ilə də maraqlanıram. HTML, CSS, JavaScript, Tailwind və React ilə işləməyi sevirəm. Eyni zamanda Node.js və Express.js ilə sadə server tərəfli tətbiqlər hazırlayıram.",
  },
  // {
  //   name: "Hüseyn",
  //   role: "MERN Stack Developer",
  //   image: "/images/SEFERELIYEV.jpeg",
  //   bio: "Mən MERN stack üzrə ixtisaslaşmış web developerəm. HTML, CSS və JavaScript texnologiyalarında güclü baza biliklərim var. Frontend tərəfdə React və Redux ilə interaktiv və sürətli interfeyslər hazırlayıram. Backend tərəfdə isə Node.js və Express.js istifadə edərək funksional serverlər qururam.",
  // },
  // {
  //   name: "Hüseyin",
  //   role: "Backend Developer",
  //   image:
  //     "https://avatars.githubusercontent.com/u/183388100?v=4&quality=lossless",
  //   bio: "Mən Həsənov Hüseyn, Back-end developer kimi ixtisaslaşmışam. .NET texnologiyasına əsaslanan backend inkişafı üzrə təcrübəyə malikəm. Performanslı API-lər və güclü məntiqi strukturlar qururam. Clean Code və SOLID prinsiplərinə əsaslanaraq genişlənə bilən sistem arxitekturaları qurmağa üstünlük verirəm.",
  // },
  // {
  //   name: "Sənan",
  //   role: "Frontend Developer",
  //   image: "/images/senan.jpeg",
  //   bio: "Mən Sənan Ələkbərovam. Code Academy-ni Front-end Development ixtisası üzrə bitirərək HTML, CSS, JavaScript və React kimi texnologiyalarda işləmə bacarığı qazanmışam. Kod yazmaq və problemləri həll etmək mənim üçün həm peşəkar maraq, həm də səyahətdir.",
  // },
];

export default function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const { isDarkMode } = useTheme();
  const primaryColor = isDarkMode ? "#CAFF34" : "#1D6696";
  const cardBg = isDarkMode ? "#1E1E1E" : "#ffffff";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";

  // Modal açıldığında scroll-u bağlama
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedMember]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen py-16 px-6 sm:px-12 transition-colors duration-300">
      <Helmet>
        <title>Haqqımızda | Imperia Tech</title>
        <meta
          name="description"
          content="Imperia Tech komandası – innovativ yanaşma, texnoloji bilik və yaradıcılığın birləşdiyi yer. Biz kimik və necə işləyirik?"
        />
      </Helmet>

      <AboutJsonLd />

      {/* Başlıq və təsvir */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ color: primaryColor }}
        >
          Biz Kimik?
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          <strong style={{ color: primaryColor }}>Imperia Tech</strong> —
          Azərbaycanda <strong>veb sayt hazırlanması</strong>,{" "}
          <strong>SEO xidməti</strong> və{" "}
          <strong>rəqəmsal texnologiyalar</strong> sahəsində fəaliyyət göstərən
          gənc və peşəkar komandadır. Məqsədimiz — innovativ həllər vasitəsilə
          müştərilərin ideyalarını reallığa çevirməkdir.
        </p>
      </motion.div>

      {/* Komanda kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setSelectedMember(member)}
            className="cursor-pointer rounded-2xl shadow-xl overflow-hidden transform transition-all"
            style={{
              backgroundColor: cardBg,
              border: `1px solid ${isDarkMode ? "#2a2a2a" : "#e5e7eb"}`,
            }}
          >
            {/* Şəkil hissəsi */}
            <div className="relative group">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover  transition-transform duration-500 group-hover:scale-105"
                style={{
                  borderBottom: `3px solid ${primaryColor}`,
                }}
              />
            </div>

            {/* Məlumat hissəsi */}
            <div className="p-6 text-center">
              <h3
                className="text-xl font-semibold mb-1"
                style={{ color: primaryColor }}
              >
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{member.role}</p>
              <button
                className="text-sm font-medium mt-2"
                style={{ color: primaryColor }}
              >
                Ətraflı oxu →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-2xl max-w-lg w-full relative p-8 text-center shadow-2xl"
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${primaryColor}`,
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-3 right-4 text-2xl"
                onClick={() => setSelectedMember(null)}
                style={{ color: primaryColor }}
              >
                ×
              </button>
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4"
                style={{ borderColor: primaryColor }}
              />
              <h3
                className="text-2xl font-semibold mb-2"
                style={{ color: primaryColor }}
              >
                {selectedMember.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {selectedMember.role}
              </p>
              <p className={`${textColor} text-sm leading-relaxed`}>
                {selectedMember.bio}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
