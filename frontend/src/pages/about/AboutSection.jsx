import { motion } from "framer-motion";
import { useEffect } from "react";

const teamMembers = [
  {
    name: "Davud",
    role: "CEO",
    image: "/images/davud.png",
    bio: "Burada komanda üzvünün qısa bioqrafiyası olacaq. Təcrübələr, bacarıqlar və vəzifələr haqqında məlumat verə bilərsiniz.",
  },
  {
    name: "Mirze",
    role: "Frontend Developer",
    image: "/images/mirze.jpeg",
    bio: "Burada komanda üzvünün qısa bioqrafiyası olacaq. Təcrübələr, bacarıqlar və vəzifələr haqqında məlumat verə bilərsiniz.",
  },
  {
    name: "Sakif",
    role: "Frontend Developer",
    image: "/images/sakif.jpeg",
    bio: "Burada komanda üzvünün qısa bioqrafiyası olacaq. Təcrübələr, bacarıqlar və vəzifələr haqqında məlumat verə bilərsiniz.",
  },
  {
    name: "Hüseyn",
    role: "Backend Developer",
    image:
      "https://avatars.githubusercontent.com/u/183388100?v=4&quality=lossless",
    bio: "Burada komanda üzvünün qısa bioqrafiyası olacaq. Təcrübələr, bacarıqlar və vəzifələr haqqında məlumat verə bilərsiniz.",
  },
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-16 px-6 sm:px-16  text-white">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto mb-10 text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-6">Kimik Biz?</h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          Texnologiya dünyasında yeni imkanlar yaradan{" "}
          <strong className="text-[#CAFF34]">ImperiaTech</strong> komandası,
          müasir həllərlə biznesləri gücləndirir. Yalnız kod yazmırıq – biz
          gələcəyi dizayn edirik.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-[#CAFF34]"
            />
            <h3 className="text-2xl font-semibold text-[#CAFF34]">
              {member.name}
            </h3>
            <p className="text-gray-400 text-sm">{member.role}</p>
            <p className="mt-4 text-gray-300">{member.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
