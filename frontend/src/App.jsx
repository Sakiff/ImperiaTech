import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Spinner from "./components/spinner/Spinner";
import { useTheme } from "./context/ThemeContext";
import SEOJsonLd from "./components/seoJsonLd/SEOJsonLd";

// Lazy yüklenen komponentlər
const Root = lazy(() => import("./pages/Root"));
const Home = lazy(() => import("./pages/home/Home"));
const NotFound = lazy(() => import("./pages/notfound/NotFound"));
const AboutSection = lazy(() => import("./pages/about/AboutSection"));
const Services = lazy(() => import("./pages/services/Services"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Portfolio = lazy(() => import("./pages/portfolio/Portfolio"));
const Academy = lazy(() => import("./pages/academy/Academy"));
const Technology = lazy(() => import("./pages/services/Technology"));
const Corporate = lazy(() => import("./pages/services/Corporate"));
const Industry = lazy(() => import("./pages/services/Industry"));
const Career = lazy(() => import("./pages/career/Career"));
const Blog = lazy(() => import("./pages/blog/Blog"));

function App() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <div className="absolute top-0 left-0 z-[-1]">
        {isDarkMode ? (
          <img src="/images/Group.png" alt="Background" />
        ) : (
          <img
            src="/images/light-group.png"
            alt="Background"
            className="w-150 h-100"
          />
        )}
      </div>

      <SEOJsonLd />

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutSection />} />
            <Route path="academy" element={<Academy />} />
            <Route path="services/technology" element={<Technology />} />
            <Route path="services/corporate" element={<Corporate />} />
            <Route path="services/industry" element={<Industry />} />
            <Route path="services" element={<Services />} />
            <Route path="career" element={<Career />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
