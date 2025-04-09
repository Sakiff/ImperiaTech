import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-[#0f0f0f] to-[#CAFF34]/5 text-gray-300 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="px-6 sm:px-16 mx-auto text-center flex flex-col items-center">
        {/* Logo */}
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
            className="w-12 h-12 rounded-xl"
          />
          <h1 className="text-2xl text-white font-semibold">
            Imperia<span className="text-[#CAFF34]">Tech</span>
          </h1>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          className="mb-6 mt-8 flex space-x-6 text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Ana səhifə", path: "/" },
            { label: "Haqqımızda", path: "/about" },
            { label: "Xidmətlərimiz", path: "/services" },
            { label: "Əlaqə", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={scrollToTop}
              className="hover:text-[#CAFF34] transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>

        {/* Contact Information */}
        <div className="flex-col md:flex-row gap-y-5 border-b border-t p-8 border-gray-600 flex items-center justify-center mt-6 space-x-4 text-gray-400 mb-6 w-full">
          {[
            {
              icon: <Mail size={18} />,
              text: "hello@skillbirdge.com",
              delay: 0.4,
            },
            {
              icon: <Phone size={18} />,
              text: (
                <a
                  href="tel:+994557557733"
                  className="hover:text-[#CAFF34] transition duration-300"
                >
                  055-755-77-33
                </a>
              ),
              delay: 0.6,
            },
            {
              icon: <MapPin size={18} />,
              text: "Azerbaijan, Baku",
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

        {/* Footer Links & Social Icons */}
        <motion.div
          className="flex flex-col md:flex-row gap-y-4 justify-between items-center mt-6 bg-[#1A1A1A] p-4 w-full rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-3">
            {[
              { Icon: Facebook, url: "https://facebook.com" },
              { Icon: Twitter, url: "https://twitter.com" },
              { Icon: Linkedin, url: "https://linkedin.com" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                className="p-2 bg-[#CAFF34] text-black rounded-full transition duration-300 hover:bg-white hover:scale-105"
              >
                <item.Icon size={18} />
              </motion.a>
            ))}
          </div>

          <div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} ImperiaTech - Bütün hüquqlar qorunur.
            </p>
          </div>

          <div className="flex space-x-4 text-sm text-gray-300">
            <a
              href="#"
              className="hover:text-[#CAFF34] transition duration-300"
            >
              Gizlilik Siyasəti
            </a>
            <span>|</span>
            <a
              href="#"
              className="hover:text-[#CAFF34] transition duration-300"
            >
              Xidmət Şərtləri
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
