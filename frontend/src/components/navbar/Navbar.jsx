import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`${styles.navbar} ${
        isDarkMode ? styles.dark : styles.light
      } flex justify-between items-center rounded-3xl p-4 mt-7 mx-5 sm:mx-16`}
    >
      <Link to={"/"} onClick={closeMenu}>
        <div className="flex justify-center items-center gap-4">
          <img
            src="/images/Logo.jpg"
            alt="Logo"
            className="w-20 h-15 rounded-2xl"
          />
          <h1 className="text-2xl">
            <strong>
              Imperia
              <span
                className={`${
                  isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"
                }`}
              >
                Tech
              </span>
            </strong>
          </h1>
        </div>
      </Link>

      <div className="flex items-center gap-4">
        <motion.button
          onClick={toggleMenu}
          className="lg:hidden"
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      <ul className="justify-center items-center gap-3 hidden lg:flex">
        {[
          { to: "/", label: "Ana səhifə" },
          { to: "about", label: "Haqqımızda" },
          { to: "services", label: "Xidmətlərimiz" },
          { to: "contact", label: "Əlaqə" },
        ].map((item, i) => (
          <li key={i}>
            <NavLink to={item.to} className={`p-4 ${styles.navLink}`}>
              {item.label}
            </NavLink>
          </li>
        ))}
        {/* Temanı dəyişdirən slider */}
        <motion.div
          className="relative items-center cursor-pointer hidden lg:flex "
          onClick={toggleTheme}
        >
          <div
            className={`w-14 h-8 rounded-full p-1 ${
              isDarkMode ? "bg-[#CAFF34]" : "bg-[#1D6696]"
            }`}
          >
            <motion.div
              className="w-6 h-6 rounded-full bg-white flex justify-center items-center "
              transition={{ type: "tween", stiffness: 700, damping: 10 }}
              style={{
                x: isDarkMode ? 24 : 0,
                transition: "all 0.2s ease-in-out", // Dairənin hərəkət etdiyi yer
              }}
            >
              <div className=" inset-0 flex items-center justify-center">
                {isDarkMode ? (
                  <Moon size={20} className="text-gray-700" /> // Ay ikonu
                ) : (
                  <Sun size={20} className="text-yellow-500" /> // Gün ikonu
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </ul>

      {/* Mobil Menyu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`fixed inset-0 ${
              isDarkMode
                ? "bg-gradient-to-b from-[#0f0f0f]/90 to-[#111f0f]/80"
                : "bg-white/90"
            } backdrop-blur-xl flex flex-col items-center justify-center z-[9999]`}
          >
            <button onClick={toggleMenu} className="absolute top-6 right-6">
              <X
                size={32}
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              />
            </button>

            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.2, staggerChildren: 0.1 },
                },
              }}
              className="flex flex-col items-center gap-6"
            >
              {[
                { to: "/", label: "Ana səhifə" },
                { to: "about", label: "Haqqımızda" },
                { to: "services", label: "Xidmətlərimiz" },
                { to: "contact", label: "Əlaqə" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <NavLink
                    to={item.to}
                    className={`text-xl p-4 rounded-lg transition duration-300 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
