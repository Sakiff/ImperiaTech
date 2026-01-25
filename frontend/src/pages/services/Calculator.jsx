import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  Calculator as CalculatorIcon,
  ArrowRight,
  Plus,
  Minus,
  Palette,
  Crown,
  Layout,
  MessageCircle,
  Diamond,
  Star,
  Clock,
  Shield,
  Globe,
  Briefcase,
  Users,
  Database,
  Cloud,
  CheckCircle2,
} from "lucide-react";
const ACCENT_COLOR = "#FF6B6B";

export default function Calculator() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    projectType: "landing",
    pages: "5",
    design: "basic",
    features: [],
    customItems: [""],
  });

  // Rəng sabiti - Sizin verdiyiniz rənglər
  const themeColor = isDarkMode ? "#CAFF34" : "#1D6696";

  const projectTypes = useMemo(
    () => [
      { id: "landing", name: "Landing Page", icon: Layout },
      { id: "business", name: "Biznes Saytı", icon: Globe },
      { id: "ecommerce", name: "E-ticarət", icon: Database },
      { id: "corporate", name: "Korporativ Portal", icon: Users },
      { id: "blog", name: "Blog Platforması", icon: MessageCircle },
      { id: "custom", name: "Xüsusi Layihə", icon: Star },
    ],
    [],
  );

  const pageOptions = useMemo(
    () => [
      { id: "5", name: "5 səh." },
      { id: "10", name: "10 səh." },
      { id: "15", name: "15 səh." },
      { id: "20", name: "20+ səh." },
    ],
    [],
  );

  const designLevels = useMemo(
    () => [
      { id: "basic", name: "Basic", desc: "Sürətli və sadə" },
      { id: "premium", name: "Premium", desc: "Modern və unikal" },
      { id: "custom", name: "Xüsusi", desc: "Sıfırdan dizayn" },
    ],
    [],
  );

  const features = useMemo(
    () => [
      { id: "chatbot", name: "Chatbot", icon: MessageCircle },
      { id: "cms", name: "Panel (CMS)", icon: Layout },
      { id: "seo", name: "SEO", icon: Star },
      { id: "multilang", name: "Çoxdilli", icon: Globe },
      { id: "payment", name: "Ödəniş", icon: Shield },
      { id: "maintenance", name: "Dəstək", icon: Clock },
    ],
    [],
  );

  const handleInputChange = (name, value, type, checked) => {
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        features: checked
          ? [...prev.features, name]
          : prev.features.filter((f) => f !== name),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const getWhatsAppMessage = () => {
    let message = `Salam! Yeni layihə üçün qiymət almaq istəyirəm:\n\n`;
    message += `🚀 Növ: ${projectTypes.find((p) => p.id === formData.projectType)?.name}\n`;
    message += `📄 Səhifə: ${formData.pages}\n`;
    message += `🎨 Dizayn: ${formData.design.toUpperCase()}\n`;
    if (formData.features.length > 0)
      message += `⚙️ Özəlliklər: ${formData.features.join(", ")}\n`;
    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=994557557733&text=${getWhatsAppMessage()}`;

  return (
    <div
      className={`min-h-screen py-20 px-4 relative overflow-hidden transition-colors duration-500 `}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                isDarkMode
                  ? "bg-[#CAFF34]/10 text-[#CAFF34] border border-[#CAFF34]/20"
                  : "bg-[#1D6696]/10 text-[#1D6696] border border-[#1D6696]/20"
              }`}
            >
              <Briefcase size={16} />
              Qiymət Kalkulyatoru
            </motion.div>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Layihəni <span style={{ color: themeColor }}>Konfiqurasiya</span> et
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section 1: Type */}
            <section>
              <h3 className="text-sm font-bold opacity-50 uppercase mb-6 flex items-center gap-2">
                <Layout size={16} /> 1. Layihənin növü nədir?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleInputChange("projectType", type.id)}
                    className={`p-6 rounded-3xl border-2 text-left transition-all duration-300 group ${
                      formData.projectType === type.id
                        ? "scale-[0.98] shadow-xl"
                        : isDarkMode
                          ? "bg-white/5 border-white/10 hover:border-white/20"
                          : "bg-white border-gray-200 hover:border-gray-300"
                    }`}
                    style={
                      formData.projectType === type.id
                        ? {
                            borderColor: themeColor,
                            backgroundColor: `${themeColor}15`,
                          }
                        : {}
                    }
                  >
                    <type.icon
                      size={28}
                      className="mb-4 transition-transform group-hover:scale-110"
                      style={{
                        color:
                          formData.projectType === type.id
                            ? themeColor
                            : "inherit",
                      }}
                    />
                    <p className="font-bold text-sm leading-tight">
                      {type.name}
                    </p>
                  </button>
                ))}
              </div>
            </section>

            {/* Section 2: Scale & Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-sm font-bold opacity-50 uppercase mb-6">
                  2. Ölçü (Səhifə)
                </h3>
                <div className="flex bg-black/5 dark:bg-white/5 p-1 rounded-2xl border border-white/10">
                  {pageOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleInputChange("pages", opt.id)}
                      className="flex-1 py-3 rounded-xl text-xs font-bold transition-all"
                      style={
                        formData.pages === opt.id
                          ? {
                              backgroundColor: themeColor,
                              color: isDarkMode ? "#000" : "#fff",
                            }
                          : {}
                      }
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold opacity-50 uppercase mb-6">
                  3. Dizayn Keyfiyyəti
                </h3>
                <div className="space-y-3">
                  {designLevels.map((lvl) => (
                    <div
                      key={lvl.id}
                      onClick={() => handleInputChange("design", lvl.id)}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all flex justify-between items-center ${
                        formData.design === lvl.id
                          ? "bg-white/10"
                          : "opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
                      }`}
                      style={{
                        borderColor:
                          formData.design === lvl.id
                            ? themeColor
                            : "transparent",
                      }}
                    >
                      <div>
                        <p className="font-bold text-sm">{lvl.name}</p>
                        <p className="text-[10px] opacity-60">{lvl.desc}</p>
                      </div>
                      {formData.design === lvl.id && (
                        <CheckCircle2 size={16} style={{ color: themeColor }} />
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Section 3: Features */}
            <section>
              <h3 className="text-sm font-bold opacity-50 uppercase mb-6">
                4. Funksionallıq
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((f) => (
                  <label
                    key={f.id}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      formData.features.includes(f.id)
                        ? "border-current"
                        : "border-white/5 bg-white/5"
                    }`}
                    style={{
                      color: formData.features.includes(f.id)
                        ? themeColor
                        : "inherit",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      onChange={(e) =>
                        handleInputChange(
                          f.id,
                          null,
                          "checkbox",
                          e.target.checked,
                        )
                      }
                    />
                    <f.icon size={20} />
                    <span className="font-semibold text-sm">{f.name}</span>
                  </label>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-4 sticky top-10">
            <div
              className={`p-8 rounded-[40px] border-4 ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-100 shadow-2xl"}`}
            >
              <h4 className="text-xl font-black mb-8 flex items-center gap-3">
                <CalculatorIcon style={{ color: themeColor }} /> Xülasə
              </h4>

              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-xs opacity-50 uppercase font-bold tracking-tighter">
                    Layihə
                  </span>
                  <span className="font-bold text-sm">
                    {
                      projectTypes.find((p) => p.id === formData.projectType)
                        ?.name
                    }
                  </span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-xs opacity-50 uppercase font-bold tracking-tighter">
                    Həcm
                  </span>
                  <span className="font-bold text-sm">
                    {formData.pages} Səhifə
                  </span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <span className="text-xs opacity-50 uppercase font-bold tracking-tighter">
                    Özəllik
                  </span>
                  <span className="font-bold text-sm">
                    {formData.features.length} ədəd
                  </span>
                </div>
              </div>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                whileHover={{
                  scale: 1.05,
                  backdropFilter: "blur(20px)",
                }}
                className="w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-lg relative overflow-hidden group border"
                style={{
                  background: isDarkMode
                    ? "linear-gradient(135deg, rgba(202, 255, 52, 0.1) 0%, rgba(202, 255, 52, 0.05) 100%)"
                    : "linear-gradient(135deg, rgba(26, 102, 150, 0.1) 0%, rgba(255,255,255,0.8) 100%)",
                  backdropFilter: "blur(10px)",
                  color: themeColor,
                  borderColor: `${themeColor}40`,
                  boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 0 20px ${themeColor}10
    `,
                }}
              >
                {/* Arxa planda hərəkət edən gradient */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  animate={{
                    background: [
                      `linear-gradient(45deg, ${themeColor}20, ${ACCENT_COLOR}20, ${themeColor}20)`,
                      `linear-gradient(45deg, ${ACCENT_COLOR}20, ${themeColor}20, ${ACCENT_COLOR}20)`,
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Glass reflection */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform skew-x-12" />

                <span className="relative z-10 flex items-center gap-3">
                  <div className="p-2 rounded-full bg-white/20">
                    <Diamond size={18} />
                  </div>
                  <span>TƏKLİF AL</span>
                  <ArrowRight
                    size={22}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </span>
              </motion.a>
              <p className="text-[10px] text-center mt-6 opacity-40 font-medium">
                Qiymətləndirmə sorğunuza uyğun olaraq menecer tərəfindən
                göndəriləcək.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
