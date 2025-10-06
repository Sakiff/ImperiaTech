import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTheme } from "../../context/ThemeContext";

export default function Blog() {
  useEffect(() => window.scrollTo(0, 0), []);
  const { isDarkMode } = useTheme();
  return (
    <div className="p-8">
      <Helmet>
        <title>Blog | Imperia Tech</title>
      </Helmet>
      <h1 className={`${isDarkMode ? "text-white" : "text-black"} text-3xl`}>
        Blog
      </h1>
      <p className="text-gray-400">
        Bu səhifə hazırda boşdur — tezliklə məzmun əlavə olunacaq.
      </p>
    </div>
  );
}
