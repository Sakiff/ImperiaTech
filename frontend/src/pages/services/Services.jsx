import { motion } from "framer-motion";
import {
  Code,
  Brush,
  Smartphone,
  MessageCircle,
  LifeBuoy,
  HelpCircle,
} from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    title: "Veb İnkişaf",
    description:
      "SEO optimizasiyalı, sürətli yüklənən, responsiv və yüksək təhlükəsizlik səviyyəli veb saytlar təqdim edirik. HTML5, CSS3, JavaScript, React.js kimi texnologiyalarla müasir veb təcrübəsi yaradırıq. Eyni zamanda CMS inteqrasiyası, domen qoşulması və hosting xidmətləri də təklif edirik.",
    icon: <Code size={40} />,
  },
  {
    title: "Qrafik Dizayn",
    description:
      "Brendinizin yadda qalan vizual imicini yaratmaq üçün minimal, modern və estetik baxımdan güclü dizaynlar hazırlayırıq. Logo dizaynı, sosial media üçün postlar, bannerlər, broşür və reklam materialları daxil olmaqla, tam vizual paket təklif edirik.",
    icon: <Brush size={40} />,
  },
  {
    title: "App/Web İnkişafı",
    description:
      "iOS, Android və Web üçün yüksək funksionallığa malik tətbiqlər hazırlayırıq. React Native, Next.js və Node.js texnologiyalarından istifadə edərək platformalar arası mükəmməl istifadəçi təcrübəsi təqdim edirik. UI/UX dizayn, test və performans optimizasiyası da xidmətlərimizə daxildir.",
    icon: <Smartphone size={40} />,
  },
  {
    title: "Sosial Media Marketinqi (SMM)",
    description:
      "Markanızı sosial mediada tanıtmaq üçün kontent strategiyası hazırlayır, yaradıcı postlar, reels və kampaniyalar qururuq. Hədəf auditoriyanı analiz edir, düzgün saat və mövzu planlaması ilə maksimum nəticə əldə etməyə çalışırıq. Reklam menecmenti də daxil olmaqla tam SMM xidməti veririk.",
    icon: <MessageCircle size={40} />,
  },
  {
    title: "Texniki Dəstək",
    description:
      "Saytınızda və tətbiqinizdə yaranan nasazlıqları sürətli və effektiv şəkildə həll edirik. Məlumat bazası bərpası, təhlükəsizlik problemlərinin aradan qaldırılması, server yüklənməsi və SSL problemləri kimi texniki mövzularda 24/7 dəstək təqdim edirik.",
    icon: <LifeBuoy size={40} />,
  },
  {
    title: "Konsultasiya",
    description:
      "Yeni layihə planlayanlar və ya mövcud sistemlərini təkmilləşdirmək istəyənlər üçün texnoloji analiz və yol xəritəsi təqdim edirik. Startaplar üçün MVP hazırlığı, bizneslər üçün texnologiya strategiyası və IT strukturu planlaşdırılması üzrə dəstək veririk.",
    icon: <HelpCircle size={40} />,
  },
];

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 px-6 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-[#CAFF34] drop-shadow-lg">
          Xidmətlərimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#CAFF34]/10 border border-[#CAFF34]/30 mb-6 text-[#CAFF34] group-hover:rotate-6 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#CAFF34] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
