import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTheme } from "../../context/ThemeContext";

const teamMembers = [
  {
    name: "Davud",
    role: "CEO",
    image: "/images/davud.png",
    bio: "Mən Davud Qədirov, texnologiya və təhsil sahəsində fəaliyyət göstərən gənc sahibkaram. Kibertəhlükəsizlik üzrə təhsil alıram və Imperia Tech layihəsi ilə bölgələrdəki gəncləri qlobal imkanlarla birləşdirirəm. Süni intellekt, startaplar və rəqəmsal inkişaf əsas maraq sahəmlərdəndir. Daim yenilik axtarışındayam və gələcəyi birlikdə qurmağa inanıram.",
  },
  {
    name: "Mirze",
    role: "Frontend Developer",
    image: "/images/mirze.jpeg",
    bio: "Mən informasiya texnologiyaları sahəsində ixtisaslaşmış, frontend inkişafı üzrə çalışan bir proqramçıyam. İstifadəçi təcrübəsini ön planda tutaraq veb interfeyslərin hazırlanması və optimallaşdırılması ilə məşğulam. Hal-hazırda Imperia Tech komandasında frontend developer kimi fəaliyyət göstərirəm və müxtəlif veb layihələrin reallaşdırılmasında iştirak edirəm. Məqsədim müasir texnoloji tələblərə cavab verən funksional və estetik həllər yaratmaqdır.",
  },
  {
    name: "Hüseyn",
    role: "MERN Stack Developer",
    image: "/images/SEFERELIYEV.jpeg",
    bio: "Mən MERN stack üzrə ixtisaslaşmış web developerəm. HTML, CSS və JavaScript texnologiyalarında güclü baza biliklərim var. Frontend tərəfdə React və Redux ilə interaktiv və sürətli interfeyslər hazırlayıram. Backend tərəfdə isə Node.js və Express.js istifadə edərək funksional serverlər qururam. MongoDB ilə məlumat bazalarını effektiv şəkildə idarə edirəm. Layihələrimdə istifadəçi təcrübəsinə və performansa xüsusi önəm verirəm. Komanda şəklində işləmə bacarığına sahibəm və Agile metodologiyasına uyğun çalışıram. Yeni texnologiyaları öyrənməyə marağım böyükdür və daim özümü inkişaf etdirməyə çalışıram. Real dünya problemlərinə texnoloji həllər gətirmək mənim üçün motivasiya mənbəyidir. Məqsədim, keyfiyyətli və effektiv veb tətbiqləri hazırlayaraq istifadəçilərə dəyər yaratmaqdır.",
  },
  {
    name: "Sakif",
    role: "Frontend Developer",
    image: "/images/sakif.jpeg",
    bio: "Mən veb inkişafı sahəsində fəaliyyət göstərən, daim öz üzərində çalışan bir gəncəm. Frontend əsas istiqamətim olsa da, backend texnologiyaları ilə də maraqlanıram. HTML, CSS, JavaScript, Tailwind və React ilə işləməyi sevirəm. Eyni zamanda Node.js və Express.js ilə sadə server tərəfli tətbiqlər hazırlayıram. Layihələrimdə funksionallıqla yanaşı, estetik görünüşə də xüsusi önəm verirəm. Komanda ilə işləmək və yeni biliklər əldə etmək mənim üçün motivasiya qaynağıdır. Məqsədim daim daha keyfiyyətli və istifadəçi yönümlü məhsullar yaratmaqdır.",
  },
  {
    name: "Hüseyin",
    role: "Backend Developer",
    image:
      "https://avatars.githubusercontent.com/u/183388100?v=4&quality=lossless",
    bio: "Mən Həsənov Hüseyn, Back-end developer kimi ixtisaslaşmışam. .NET texnologiyasına əsaslanan backend inkişafı üzrə təcrübəyə malikəm. Performanslı API-lər və güclü məntiqi strukturlar qururam. Imperia Tech-də müxtəlif layihələrdə effektiv backend həlləri üzərində çalışıram. Clean Code və SOLID prinsiplərinə əsaslanaraq genişlənə bilən sistem arxitekturaları qurmağa üstünlük verirəm.Məqsədim istifadəçi ehtiyaclarına cavab verən, etibarlı və inkişaf etdirilə bilən proqram yaratmaqdır.",
  },
  {
    name: "Sənan",
    role: "Frontend Developer",
    image: "/images/senan.jpeg",
    bio: 'Mən Sənan Ələkbərovam. Code Academy-ni "Front-end Development" ixtisası üzrə bitirərək HTML, CSS, JavaScript və React kimi texnologiyalarda işləmə bacarığı qazanmışam. React istifadə edərək dinamik və interaktiv veb tətbiqlər yarada bilirəm. Kod yazmaq və problemləri həll etmək mənim üçün həm peşəkar maraq, həm də səyahətdir. Yeni texnologiyalar öyrənməyə və bacarıqlarımı təkmilləşdirməyə hazıram',
  },
];

export default function About() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { isDarkMode } = useTheme();
  const primaryColor = isDarkMode ? "#CAFF34" : "#1D6696";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-16 px-6 sm:px-16 text-white">
      <Helmet>
        <title>Haqqımızda | Imperia Tech</title>
        <meta
          name="description"
          content="Biz kimik? İmperia Tech-in məqsədi, vizyonu və komandası haqqında ətraflı məlumat əldə edin."
        />
        <meta
          name="keywords"
          content="Imperia Tech, komanda, backend developer, frontend developer, texnologiya, innovasiya, süni intellekt, startap, veb dizayn"
        />
        <meta name="author" content="İmperia Tech" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imperiagroups.az" />
        <meta property="og:title" content="Haqqımızda | Imperia Tech" />
        <meta
          property="og:description"
          content="Biz kimik? İmperia Tech-in məqsədi, vizyonu və komandası haqqında ətraflı məlumat əldə edin."
        />
        <meta
          property="og:image"
          content="https://imperiagroups.az/preview.jpg"
        />
        <meta property="og:image:alt" content="İmperia Tech Logo" />
      </Helmet>

      <div className="max-w-5xl mx-auto mb-10 text-center">
        <h2 className={`text-4xl font-bold text-[${primaryColor}] mb-6`}>
          Kimik Biz?
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          Texnologiya dünyasında yeni imkanlar yaradan{" "}
          <strong className={`text-[${primaryColor}]`}>ImperiaTech</strong>{" "}
          komandası, müasir həllərlə biznesləri gücləndirir. Yalnız kod yazmırıq
          – biz gələcəyi dizayn edirik.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {teamMembers.map((member, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <motion.div
              layout
              key={index}
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
              className={`p-6 rounded-xl shadow-lg text-center cursor-pointer overflow-hidden ${
                isDarkMode
                  ? "bg-[#1E1E1E] border-transparent hover:border-[#D4FF00]"
                  : "bg-white border-gray-200 hover:border-[#1D6696] shadow-md"
              }`}
              transition={{ layout: { duration: 0.4, type: "spring" } }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 "
                style={{
                  border: `4px solid ${primaryColor}`,
                }}
              />
              <h3 className={`text-xl font-semibold text-[${primaryColor}]`}>
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{member.role}</p>
              <motion.p
                className={`${textColor} text-sm`}
                initial={false}
                animate={{ height: isExpanded ? "auto" : "60px" }}
                style={{ overflow: "hidden" }}
              >
                {member.bio}
              </motion.p>
              <p className={`mt-2 text-sm text-[${primaryColor}] `}>
                {isExpanded ? "Bağla" : "Ətraflı oxu"}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
