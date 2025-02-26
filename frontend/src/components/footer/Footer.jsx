import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  // Səhifəni yuxarı qaytarmaq üçün funksiya
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="bg-[#1C1C1C] text-white py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="px-5 sm:px-16 mx-auto text-center flex flex-col items-center">
        <motion.div
          className="flex justify-center items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/Logo.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-2xl"
          />
          <h1 className="text-2xl">
            <strong>
              Imperia<span className="text-[#CAFF34]">Tech</span>
            </strong>
          </h1>
        </motion.div>

        <motion.nav
          className="mb-6 mt-10 flex space-x-6 text-gray-300 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            to="/"
            onClick={scrollToTop}
            className="hover:text-white transition"
          >
            Ana səhifə
          </Link>
          <Link
            to="/about"
            onClick={scrollToTop}
            className="hover:text-white transition"
          >
            Haqqımızda
          </Link>
          <Link
            to="/services"
            onClick={scrollToTop}
            className="hover:text-white transition"
          >
            Xidmətlərimiz
          </Link>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="hover:text-white transition"
          >
            Əlaqə
          </Link>
        </motion.nav>

        <div className="flex-col md:flex-row gap-y-5 border-b border-t p-10 border-gray-400 flex items-center justify-center mt-6 space-x-4 text-gray-400 mb-6 w-full">
          {[
            {
              icon: <Mail size={18} />,
              text: "hello@skillbirdge.com",
              delay: 0.4,
            },
            {
              icon: <Phone size={18} />,
              text: "+91 91813 23 2309",
              delay: 0.6,
            },
            {
              icon: <MapPin size={18} />,
              text: "Somewhere in the World",
              delay: 0.8,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-[#CAFF34]">{item.icon}</span>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col md:flex-row gap-y-5 justify-between items-center mt-10 bg-[#191919] p-5 w-full rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-4">
            {[Facebook, Twitter, Linkedin].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="p-2 bg-[#CAFF34] text-black rounded-full"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <div>
            <p className="text-sm text-gray-400">
              ImperiaTech All Rights Reserved
            </p>
          </div>

          <div className="flex space-x-4 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
