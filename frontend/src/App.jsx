import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Spinner from "./components/spinner/Spinner";
import { useTheme } from "./context/ThemeContext";

// Lazy yüklenen komponentlər
const Root = lazy(() => import("./pages/Root"));
const Home = lazy(() => import("./pages/home/Home"));
const NotFound = lazy(() => import("./pages/notfound/NotFound"));
const AboutSection = lazy(() => import("./pages/about/AboutSection"));
const Services = lazy(() => import("./pages/services/Services"));
const Contact = lazy(() => import("./pages/contact/Contact"));

function App() {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <div className="absolute top-0 left-0 z-[-1]">
        {isDarkMode ? (
          <img src="./images/Group.png" alt="Background" />
        ) : (
          <img
            src="./images/light-group.png"
            alt="Background"
            className="w-150 h-100"
          />
        )}
      </div>

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutSection />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
