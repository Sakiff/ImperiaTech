import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`${styles.navbar} flex justify-between items-center text-white rounded-3xl p-4 mt-7 mx-5 sm:mx-16`}
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
              Imperia<span className="text-[#CAFF34]">Tech</span>
            </strong>
          </h1>
        </div>
      </Link>

      <motion.button
        onClick={toggleMenu}
        className="lg:hidden"
        animate={{ rotate: menuOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </motion.button>

      <ul className="justify-center items-center gap-3 hidden lg:flex">
        <li>
          <NavLink to={"/"} className={`p-4 ${styles.navLink}`}>
            Ana səhifə
          </NavLink>
        </li>
        <li>
          <NavLink to={"about"} className={`p-4 ${styles.navLink}`}>
            Haqqımızda
          </NavLink>
        </li>
        <li>
          <NavLink to={"services"} className={`p-4 ${styles.navLink}`}>
            Xidmətlərimiz
          </NavLink>
        </li>
        <li>
          <NavLink to={"contact"} className={`p-4 ${styles.navLink}`}>
            Əlaqə
          </NavLink>
        </li>
      </ul>

      {/* Mobil Menyu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 bg-gradient-to-b from-[#0f0f0f]/90 to-[#111f0f]/80 backdrop-blur-xl flex flex-col items-center justify-center z-[9999]"
          >
            <button onClick={toggleMenu} className="absolute top-6 right-6">
              <X size={32} className="text-white" />
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
                    className="text-white text-xl p-4 rounded-lg transition duration-300 "
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
