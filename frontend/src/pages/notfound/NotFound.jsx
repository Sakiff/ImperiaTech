import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Helmet } from "react-helmet";

export default function NotFound() {
  const { isDarkMode } = useTheme();
  const primaryColor = isDarkMode ? "#CAFF34" : "#1D6696";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";

  return (
    <section className={`min-h-screen flex items-center justify-center px-4`}>
      <Helmet>
        <title>Səhifə Tapılmadı | Imperia Groups</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`max-w-xl text-center`}
      >
        <h1 className="text-6xl font-bold mb-4" style={{ color: primaryColor }}>
          404
        </h1>
        <p className={`text-2xl font-semibold mb-2 ${textColor}`}>
          Üzr istəyirik, bu səhifə mövcud deyil.
        </p>
        <p className="text-gray-400 mb-6">
          Ola bilsin ki, səhv ünvan daxil etmisiniz və ya səhifə silinmişdir.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-xl font-medium shadow-md transition duration-300"
          style={{
            backgroundColor: primaryColor,
            color: isDarkMode ? "#0D0D0D" : "white",
          }}
        >
          Ana Səhifəyə Qayıt
        </Link>
      </motion.div>
    </section>
  );
}
