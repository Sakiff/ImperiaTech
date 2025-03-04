import "./App.css";
import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import AboutSection from "./pages/about/AboutSection";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {/* react-hot-toast üçün Toaster komponenti */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Arxaplandaki sol üstdəki şəkil */}
      <div className="absolute top-0 left-0 z-[-1]">
        <img src="./images/Group.png" alt="Background" />
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutSection />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
