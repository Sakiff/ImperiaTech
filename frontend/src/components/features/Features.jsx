import React from "react";
import {
  Code,
  Globe,
  ShieldCheck,
  Smartphone,
  Palette,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Code,
    title: "Fərdi Veb Həllər",
    desc: "Biznesiniz üçün unikal və optimallaşdırılmış veb saytlar hazırlayırıq.",
  },
  {
    icon: Globe,
    title: "SEO və Marketinq",
    desc: "Veb saytınızın Google-da üst sıralarda olması üçün SEO xidmətləri təqdim edirik.",
  },
  {
    icon: ShieldCheck,
    title: "Təhlükəsizlik və Dəstək",
    desc: "Məlumatlarınızın qorunması və texniki dəstək ilə xidmətinizdəyik.",
  },
  {
    icon: Smartphone,
    title: "Mobil Uyğunluq",
    desc: "Saytınızın bütün cihazlarda mükəmməl işləməsini təmin edirik.",
  },
  {
    icon: Palette,
    title: "UX/UI Dizayn",
    desc: "Modern və rahat istifadəçi təcrübəsi təqdim edən dizaynlar yaradırıq.",
  },
  {
    icon: Database,
    title: "Məlumat Bazası və Backend",
    desc: "Etibarlı və güclü backend həlləri ilə məlumatlarınızı təhlükəsiz saxlayırıq.",
  },
];

export default function Features() {
  return (
    <div className="my-16 ">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-14 bg-gradient-to-r from-[#D4FF00] to-[#32FF32] text-transparent bg-clip-text">
        Sizə təqdim etdiklərimiz
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map(({ icon: Icon, title, desc }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative p-6 bg-[#1E1E1E] rounded-xl flex flex-col items-center text-center gap-4 overflow-hidden border border-transparent transition-all duration-300 group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#D4FF00]/40 to-[#32FF32]/40 blur-xl" />
            <div className="relative z-10">
              <Icon
                size={40}
                className="text-[#D4FF00] transition-all duration-300 group-hover:scale-110"
              />
              <h3 className="text-2xl font-semibold mt-2 text-[#D4FF00]">
                {title}
              </h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
