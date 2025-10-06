import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { isDarkMode } = useTheme();

  const bgGradient = isDarkMode
    ? "from-[#0f0f0f] to-[#CAFF34]/5"
    : "from-[#f0f0f0] to-[#1D6696]/5";

  const textColor = isDarkMode ? "text-gray-300" : "text-gray-800";
  const subTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const iconColor = isDarkMode ? "#CAFF34" : "#1D6696";
  const socialBg = isDarkMode ? "#CAFF34" : "#1D6696";

  const hoverText = isDarkMode
    ? "hover:text-[#CAFF34]"
    : "hover:text-[#1D6696]";

  const borderColor = isDarkMode ? "border-gray-600" : "border-gray-300";

  return (
    <motion.footer
      className={`bg-gradient-to-b ${bgGradient} ${textColor} py-12`}
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
            src={
              isDarkMode ? "/images/Logo-dark-theme.png" : "/images/Logo.jpg"
            }
            alt="Logo"
            className="w-12 h-12 rounded-xl"
          />
          <h1 className="text-2xl font-semibold ">
            Imperia<span style={{ color: iconColor }}>Tech</span>
          </h1>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          className={`mb-6 mt-8 flex space-x-6 text-sm ${subTextColor}`}
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
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`transition duration-300 ${hoverText}`}
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>

        {/* Contact */}
        <div
          className={`flex-col md:flex-row gap-y-5 border-b border-t p-8 flex items-center justify-center mt-6 space-x-4 ${borderColor} ${subTextColor} mb-6 w-full`}
        >
          {[
            {
              icon: <Mail size={18} />,
              text: "info@imperiagroups.az",
              delay: 0.4,
            },
            {
              icon: <Phone size={18} />,
              text: (
                <a
                  href="tel:+994557557733"
                  className={`transition duration-300 ${hoverText}`}
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
              <span style={{ color: iconColor }}>{item.icon}</span>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Social & Copyright */}
        <motion.div
          className={`flex flex-col md:flex-row gap-y-4 justify-between items-center mt-6 w-full p-4 rounded-lg ${
            isDarkMode ? "bg-[#1A1A1A]" : "bg-[#E9F3FB]"
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex space-x-3">
            {[
              {
                Icon: Instagram,
                url: "https://www.instagram.com/imperia_groups/",
              },
              { Icon: Linkedin, url: "https://linkedin.com" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target="_blank"
                className="p-2 rounded-full transition duration-300 hover:scale-105"
                style={{
                  backgroundColor: socialBg,
                  color: isDarkMode ? "black" : "white",
                }}
              >
                <item.Icon size={18} />
              </motion.a>
            ))}
          </div>

          <div>
            <p className={`text-sm ${subTextColor}`}>
              © {new Date().getFullYear()} Imperia Groups - Bütün hüquqlar
              qorunur
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
