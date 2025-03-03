import { motion } from "framer-motion";
import { Code, Brush, Server } from "lucide-react";

const services = [
  {
    title: "Veb İnkişaf",
    description:
      "Modern və yüksək performanslı veb saytlar və veb tətbiqlər yaradırıq. SEO optimizasiyalı, responsiv və istifadəçi dostu dizaynlarla biznesinizi onlayn dünyada önə çıxardırıq. HTML, CSS, JavaScript, React və digər texnologiyalarla layihənizi həyata keçiririk.",
    icon: <Code size={48} className="text-[#CAFF34]" />,
  },
  {
    title: "Qrafik Dizayn",
    description:
      "Brendinizin vizual kimliyini gücləndirmək üçün kreativ və unikal dizaynlar hazırlayırıq. Logo, banner, sosial media postları və digər qrafik materiallarınızı ən son dizayn trendinə uyğun olaraq hazırlayırıq.",
    icon: <Brush size={48} className="text-[#CAFF34]" />,
  },
  {
    title: "Backend İnkişaf",
    description:
      "Sürətli, təhlükəsiz və genişlənə bilən backend sistemləri qururuq. Node.js, Express və MongoDB kimi texnologiyalarla server tərəfi inkişaf etdiririk. API-lər, verilənlər bazası dizaynı və authentication sistemləri üzərində işləyirik.",
    icon: <Server size={48} className="text-[#CAFF34]" />,
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-[#121212] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#CAFF34]">
          Xidmətlərimiz
        </h2>
        <div className="flex flex-col gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 p-8 rounded-xl bg-[#1A1A1A] shadow-lg ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0 p-6 bg-[#181818] rounded-xl">
                {service.icon}
              </div>
              <div className="text-center md:text-left max-w-lg">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
