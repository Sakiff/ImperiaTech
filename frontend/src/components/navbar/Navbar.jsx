import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdowns, setMobileOpenDropdowns] = useState({});
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    // when opening the mobile menu, ensure no dropdowns are left open
    if (next) setMobileOpenDropdowns({});
  };

  const closeMenu = () => {
    setMenuOpen(false);
    // clear any open mobile dropdowns when closing/navigating
    setMobileOpenDropdowns({});
  };

  // lock body scroll when mobile menu is open so page behind doesn't scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const menuItems = [
    { key: "home", to: "/", label: "Ana səhifə" },
    {
      key: "services",
      label: "Xidmətlər",
      children: [
        { to: "services/technology", label: "Texnoloji" },
        { to: "services/corporate", label: "Korporativ xidmətlər" },
        { to: "services/industry", label: "Sənaye" },
      ],
    },
    {
      key: "company",
      label: "Şirkət",
      children: [
        { to: "about", label: "Haqqımızda" },
        { to: "career", label: "Karyera" },
        { to: "blog", label: "Blog" },
        { to: "contact", label: "Əlaqə" },
      ],
    },
    { key: "portfolio", to: "portfolio", label: "Portfolio" },
  ];

  return (
    <div
      className={`${styles.navbar} ${
        isDarkMode ? styles.dark : styles.light
      } flex justify-between items-center rounded-3xl p-4 mt-7 mx-5 sm:mx-16`}
    >
      <Link to={"/"} onClick={closeMenu}>
        <div className="flex justify-center items-center gap-4">
          <img
            src={
              isDarkMode ? "/images/Logo-dark-theme.png" : "/images/Logo.jpg"
            }
            alt="Logo"
            className="w-15 h-15 rounded-2xl"
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

      <motion.button
        onClick={toggleMenu}
        className="lg:hidden relative"
        animate={{ rotate: menuOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.9 }}
      >
        {menuOpen ? (
          <X size={28} className={isDarkMode ? "text-white" : "text-black"} />
        ) : (
          <Menu
            size={28}
            className={isDarkMode ? "text-white" : "text-black"}
          />
        )}
      </motion.button>

      {/* Desktop menu */}
      <ul className="hidden lg:flex justify-center items-center gap-1">
        {menuItems.map((item) => (
          <li key={item.key} className="relative">
            {item.children ? (
              <div
                className={`p-4 ${styles.navLink} ${styles.dropdownToggle}`}
                onMouseEnter={() => setOpenDropdown(item.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex items-center gap-2 cursor-pointer">
                  <span>{item.label}</span>
                  <motion.div
                    animate={{ rotate: openDropdown === item.key ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openDropdown === item.key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`${styles.dropdownMenu} ${
                        isDarkMode ? styles.dark : styles.light
                      }`}
                      onMouseEnter={() => setOpenDropdown(item.key)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.children.map((child, index) => (
                        <motion.div
                          key={`${item.key}-${child.to}-${index}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <NavLink
                            to={child.to}
                            className={`${styles.dropdownItem}`}
                            onClick={closeMenu}
                          >
                            {child.label}
                          </NavLink>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                to={item.to}
                className={`p-4 ${styles.navLink}`}
                style={({ isActive }) => ({
                  background: isActive
                    ? isDarkMode
                      ? "rgba(202, 255, 52, 0.1)"
                      : "rgba(29, 102, 150, 0.1)"
                    : "transparent",
                })}
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}

        {/* Theme toggle */}
        <motion.div
          className="relative items-center cursor-pointer hidden lg:flex"
          onClick={toggleTheme}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className={`w-14 h-8 rounded-full p-1 ${
              isDarkMode ? "bg-[#CAFF34]" : "bg-[#1D6696]"
            }`}
          >
            <motion.div
              className="w-6 h-6 rounded-full bg-white flex justify-center items-center shadow-md"
              animate={{
                x: isDarkMode ? 24 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            >
              {isDarkMode ? (
                <Moon size={18} className="text-gray-700" />
              ) : (
                <Sun size={18} className="text-yellow-500" />
              )}
            </motion.div>
          </div>
        </motion.div>
      </ul>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed inset-0 flex flex-col items-center justify-start pt-20 z-[9999] ${
              isDarkMode
                ? "bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]"
                : "bg-gradient-to-b from-white to-gray-100"
            } overflow-y-auto`}
          >
            <motion.button
              onClick={toggleMenu}
              className="absolute top-6 right-6"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X
                size={32}
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              />
            </motion.button>

            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex justify-center items-center gap-4">
                <img
                  src={
                    isDarkMode
                      ? "/images/Logo-dark-theme.png"
                      : "/images/Logo.jpg"
                  }
                  alt="Logo"
                  className="w-15 h-15 rounded-2xl"
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
            </motion.div>

            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="flex flex-col items-center gap-3 w-full max-w-md px-5"
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.key}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={`${styles.mobileNavItem} ${
                    isDarkMode ? styles.dark : styles.light
                  } w-full`}
                >
                  {item.children ? (
                    <>
                      <button
                        className={`${styles.mobileDropdownHeader}`}
                        onClick={() => {
                          // toggle this dropdown and close any others
                          setMobileOpenDropdowns((prev) => {
                            const isOpen = !!prev[item.key];
                            return isOpen ? {} : { [item.key]: true };
                          });
                        }}
                      >
                        <span>{item.label}</span>
                        <motion.div
                          animate={{
                            rotate: mobileOpenDropdowns[item.key] ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown size={18} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {mobileOpenDropdowns[item.key] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`${styles.mobileDropdownList}`}
                          >
                            {item.children.map((child, index) => (
                              <motion.div
                                key={`${item.key}-${child.to}-${index}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <NavLink
                                  to={child.to}
                                  onClick={closeMenu}
                                  className={({ isActive }) =>
                                    isActive
                                      ? isDarkMode
                                        ? "bg-[#CAFF34]/20"
                                        : "bg-[#1D6696]/20"
                                      : ""
                                  }
                                >
                                  {child.label}
                                </NavLink>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={item.to}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? isDarkMode
                            ? "bg-[#CAFF34]/20"
                            : "bg-[#1D6696]/20"
                          : ""
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </motion.div>
              ))}

              {/* Mobile Theme Toggle */}
              <motion.div
                className={`${styles.mobileNavItem} ${
                  isDarkMode ? styles.dark : styles.light
                } flex justify-between items-center`}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <span>Tema</span>
                <div
                  className="relative items-center cursor-pointer flex"
                  onClick={toggleTheme}
                >
                  <div
                    className={`w-14 h-8 rounded-full p-1 ${
                      isDarkMode ? "bg-[#CAFF34]" : "bg-[#1D6696]"
                    }`}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-white flex justify-center items-center shadow-md"
                      animate={{
                        x: isDarkMode ? 24 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    >
                      {isDarkMode ? (
                        <Moon size={18} className="text-gray-700" />
                      ) : (
                        <Sun size={18} className="text-yellow-500" />
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
