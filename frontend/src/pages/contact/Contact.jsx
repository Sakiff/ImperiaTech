import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet";
import { useTheme } from "../../context/ThemeContext";
import { Mail, Phone, MapPin, Send, Clock, Users } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);
  const { isDarkMode } = useTheme();

  const primaryColor = isDarkMode ? "#CAFF34" : "#1D6696";
  const cardBgColor = isDarkMode ? "#1C1C1C" : "#ffffff";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";
  const mutedTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-200";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (hasSubmittedOnce && !recaptchaToken) {
      toast.error("Zəhmət olmasa 'robot deyiləm' seçimindən keçin.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_name: "İmperia Tech",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success(
          "Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq."
        );
        setFormData({ name: "", email: "", message: "" });
        setRecaptchaToken(null);
        setHasSubmittedOnce(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xəta baş verdi:", error);
        toast.error("Mesaj göndərilmədi. Zəhmət olmasa yenidən cəhd edin.");
        setLoading(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@imperigroups.az",
      description: "Bizə email göndərin",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      value: "+994 55 755 77 33",
      description: "Bizə zəng edin",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ünvan",
      value: "Bakı, Azerbaijan",
      description: "Ofisimizə gəlin",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "İş Saatları",
      value: "09:00 - 18:00",
      description: "Həftə içi",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Bizimlə Əlaqə | Imperia Groups</title>
        <meta
          name="description"
          content="İmperia Tech ilə əlaqə saxlayın. Xidmətlərimiz və komandamız haqqında daha ətraflı məlumat üçün bizimlə əlaqə qurun."
        />
      </Helmet>

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${textColor}`}>
            Əlaqə <span style={{ color: primaryColor }}>Saxlayın</span>
          </h1>
          <p
            className={`text-xl md:text-2xl max-w-2xl mx-auto ${mutedTextColor}`}
          >
            Layihəniz haqqında danışaq. Peşəkar komandamız sizə kömək etməyə
            hazırdır.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div
                className={`rounded-3xl p-8 h-full shadow-2xl border ${borderColor}`}
                style={{ backgroundColor: cardBgColor }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="p-3 rounded-2xl"
                    style={{ backgroundColor: primaryColor + "20" }}
                  >
                    <Users
                      className="w-6 h-6"
                      style={{ color: primaryColor }}
                    />
                  </div>
                  <h2 className={`text-2xl font-bold ${textColor}`}>
                    Əlaqə Məlumatları
                  </h2>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                        isDarkMode ? "hover:bg-gray-800/50" : "hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className="p-3 rounded-xl mt-1"
                        style={{ backgroundColor: primaryColor + "20" }}
                      >
                        <div style={{ color: primaryColor }}>{item.icon}</div>
                      </div>
                      <div>
                        <h3 className={`font-semibold ${textColor}`}>
                          {item.title}
                        </h3>
                        <p className={`font-bold text-lg mb-1 ${textColor}`}>
                          {item.value}
                        </p>
                        <p className={mutedTextColor}>{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats - Yığışdırılmış */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-8 pt-8 border-t border-gray-600"
                >
                  <div className="flex justify-between items-center">
                    <div className="text-center flex-1">
                      <div className={`text-2xl font-bold ${textColor}`}>
                        50+
                      </div>
                      <div className={`text-sm ${mutedTextColor}`}>Layihə</div>
                    </div>
                    <div className="w-px h-12 bg-gray-600"></div>
                    <div className="text-center flex-1">
                      <div className={`text-2xl font-bold ${textColor}`}>
                        7/24
                      </div>
                      <div className={`text-sm ${mutedTextColor}`}>Dəstək</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Form and Map Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`rounded-3xl p-8 shadow-2xl border ${borderColor}`}
                style={{ backgroundColor: cardBgColor }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="p-3 rounded-2xl"
                    style={{ backgroundColor: primaryColor + "20" }}
                  >
                    <Send className="w-6 h-6" style={{ color: primaryColor }} />
                  </div>
                  <h2 className={`text-2xl font-bold ${textColor}`}>
                    Mesaj Göndər
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${textColor}`}
                      >
                        Adınız
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 focus:ring-2 focus:ring-offset-2 ${
                          isDarkMode
                            ? "bg-[#1C1C1C] border-gray-700 text-white focus:border-[#CAFF34] focus:ring-[#CAFF34]/20"
                            : "bg-white border-gray-300 text-gray-800 focus:border-[#1D6696] focus:ring-[#1D6696]/20"
                        }`}
                        placeholder="Adınızı daxil edin"
                      />
                    </div>
                    <div>
                      <label
                        className={`block text-sm font-medium mb-2 ${textColor}`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 focus:ring-2 focus:ring-offset-2 ${
                          isDarkMode
                            ? "bg-[#1C1C1C] border-gray-700 text-white focus:border-[#CAFF34] focus:ring-[#CAFF34]/20"
                            : "bg-white border-gray-300 text-gray-800 focus:border-[#1D6696] focus:ring-[#1D6696]/20"
                        }`}
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${textColor}`}
                    >
                      Mesajınız
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-300 focus:ring-2 focus:ring-offset-2 resize-none ${
                        isDarkMode
                          ? "bg-[#1C1C1C] border-gray-700 text-white focus:border-[#CAFF34] focus:ring-[#CAFF34]/20"
                          : "bg-white border-gray-300 text-gray-800 focus:border-[#1D6696] focus:ring-[#1D6696]/20"
                      }`}
                      placeholder="Mesajınızı yazın..."
                    />
                  </div>

                  {hasSubmittedOnce && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <ReCAPTCHA
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        onChange={(token) => setRecaptchaToken(token)}
                        theme={isDarkMode ? "dark" : "light"}
                      />
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={!loading ? { scale: 1.02 } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                      loading
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:shadow-xl"
                    } ${
                      isDarkMode
                        ? "bg-[#CAFF34] text-gray-900 hover:bg-[#b8e62e]"
                        : "bg-[#1D6696] text-white hover:bg-[#15557d]"
                    }`}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Göndərilir...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Mesajı Göndər
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`rounded-3xl overflow-hidden shadow-2xl border ${borderColor}`}
                style={{ backgroundColor: cardBgColor }}
              >
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-4 ${textColor}`}>
                    Bizimlə Görüşün
                  </h3>
                  <div className="h-80 rounded-2xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d22795.927367366494!2d49.819142423569964!3d40.382528712404024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x40307d9beac62069%3A0x1f8d693f61e3667b!2s609%20Jafar%20Jabbarli%20street%2C%20Baku!3m2!1d40.385258799999995!2d49.8282448!5e1!3m2!1sen!2saz!4v1760634944696!5m2!1sen!2saz"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
