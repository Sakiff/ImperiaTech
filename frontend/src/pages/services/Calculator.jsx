import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  Calculator as CalculatorIcon,
  ArrowRight,
  Plus,
  Minus,
  Zap,
  Palette,
  Languages,
  ShoppingCart,
  BarChart3,
  CreditCard,
  Layout,
  MessageCircle,
  Star,
  Clock,
  Shield,
  Globe,
  Users,
  Database,
  Cloud,
} from "lucide-react";

export default function Calculator() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    projectType: "",
    pages: "5",
    design: "basic",
    features: [],
    customItems: [""],
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [showCustomItemAnimation, setShowCustomItemAnimation] = useState({});

  const projectTypes = useMemo(
    () => [
      { id: "landing", name: "Landing Page", basePrice: 300, icon: Layout },
      { id: "business", name: "Biznes Saytı", basePrice: 600, icon: BarChart3 },
      {
        id: "ecommerce",
        name: "E-ticarət",
        basePrice: 1200,
        icon: ShoppingCart,
      },
      {
        id: "corporate",
        name: "Korporativ Portal",
        basePrice: 1800,
        icon: Users,
      },
      { id: "blog", name: "Blog Platforması", basePrice: 500, icon: Globe },
      { id: "custom", name: "Xüsusi Layihə", basePrice: 900, icon: Star },
    ],
    []
  );

  const pageOptions = useMemo(
    () => [
      { id: "5", name: "5 səhifə", pricePerPage: 40 },
      { id: "10", name: "10 səhifə", pricePerPage: 35 },
      { id: "15", name: "15 səhifə", pricePerPage: 30 },
      { id: "20", name: "20+ səhifə", pricePerPage: 25 },
    ],
    []
  );

  const designLevels = useMemo(
    () => [
      { id: "basic", name: "Basic Dizayn", multiplier: 1, color: "#6B7280" },
      {
        id: "premium",
        name: "Premium Dizayn",
        multiplier: 1.3,
        color: "#CAFF34",
      },
      {
        id: "custom",
        name: "Tam Xüsusi Dizayn",
        multiplier: 1.7,
        color: "#1D6696",
      },
    ],
    []
  );

  const features = useMemo(
    () => [
      {
        id: "chatbot",
        name: "Chatbot İntegrasiyası",
        price: 250,
        icon: MessageCircle,
      },
      { id: "cms", name: "CMS İnteqrasiyası", price: 250, icon: Layout },
      { id: "seo", name: "SEO Optimizasiyası", price: 200, icon: BarChart3 },
      {
        id: "analytics",
        name: "Analytics İnteqrasiyası",
        price: 100,
        icon: BarChart3,
      },
      { id: "multilang", name: "Çoxdilli Dəstək", price: 180, icon: Languages },
      {
        id: "payment",
        name: "Ödəniş İnteqrasiyası",
        price: 300,
        icon: CreditCard,
      },
      {
        id: "security",
        name: "Təhlükəsizlik Paketi",
        price: 120,
        icon: Shield,
      },
      { id: "hosting", name: "Hosting & Domain", price: 80, icon: Cloud },
      { id: "maintenance", name: "12 ay Dəstək", price: 200, icon: Clock },
      { id: "database", name: "Verilənlər Bazası", price: 220, icon: Database },
    ],
    []
  );

  const calculatePrice = useCallback(() => {
    if (!formData.projectType) {
      setTotalPrice(0);
      setIsCalculated(false);
      return;
    }

    const baseProject = projectTypes.find((p) => p.id === formData.projectType);
    if (!baseProject) return;

    const pageOption = pageOptions.find((p) => p.id === formData.pages);
    if (!pageOption) return;

    const designMultiplier =
      designLevels.find((d) => d.id === formData.design)?.multiplier || 1;

    // Base price + page price
    let price = baseProject.basePrice;

    // Səhifə sayına görə qiymət
    const pageCount = parseInt(pageOption.id);
    const pagePrice = pageCount * pageOption.pricePerPage;
    price += pagePrice;

    // Dizayn çarpanı
    price *= designMultiplier;

    // Xüsusiyyətlər
    formData.features.forEach((featureId) => {
      const feature = features.find((f) => f.id === featureId);
      if (feature) {
        price += feature.price;
      }
    });

    // Custom items - yalnız dolu olanlar
    const validCustomItems = formData.customItems.filter(
      (item) => item.trim() !== ""
    );
    const customItemsPrice = validCustomItems.length * 150;
    price += customItemsPrice;

    setTotalPrice(Math.round(price));
    setIsCalculated(true);
  }, [formData, projectTypes, pageOptions, designLevels, features]);

  // Qiymət dəyişikliklərinə reaksiya
  useEffect(() => {
    calculatePrice();
  }, [calculatePrice]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        features: checked
          ? [...prev.features, name]
          : prev.features.filter((f) => f !== name),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCustomItemChange = (index, value) => {
    const newCustomItems = [...formData.customItems];
    newCustomItems[index] = value;
    setFormData((prev) => ({
      ...prev,
      customItems: newCustomItems,
    }));

    // Animasiya yalnız dəyər dəyişəndə
    if (value.trim() !== "" && !showCustomItemAnimation[index]) {
      setShowCustomItemAnimation((prev) => ({ ...prev, [index]: true }));
    }
  };

  const addCustomItem = () => {
    // Yalnız sonuncu input dolu olduqda yeni əlavə et
    const lastItem = formData.customItems[formData.customItems.length - 1];
    if (lastItem.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        customItems: [...prev.customItems, ""],
      }));
    }
  };

  const removeCustomItem = (index) => {
    if (formData.customItems.length > 1) {
      const newCustomItems = formData.customItems.filter((_, i) => i !== index);
      setFormData((prev) => ({
        ...prev,
        customItems: newCustomItems,
      }));

      // Animasiya state-ni təmizlə
      setShowCustomItemAnimation((prev) => {
        const newState = { ...prev };
        delete newState[index];
        return newState;
      });
    }
  };

  const getWhatsAppMessage = () => {
    const projectName =
      projectTypes.find((p) => p.id === formData.projectType)?.name ||
      "Xüsusi Layihə";
    const pageInfo =
      pageOptions.find((p) => p.id === formData.pages)?.name || "";
    const designLevel =
      designLevels.find((d) => d.id === formData.design)?.name || "";

    let message = `Salam! Qiymət kalkulyatorundan istifadə edərək təklif almaq istəyirəm.\n\n`;
    message += `Layihə Növü: ${projectName}\n`;
    message += `Səhifə Sayı: ${pageInfo}\n`;
    message += `Dizayn Səviyyəsi: ${designLevel}\n`;
    message += `Təxmini Qiymət: ${totalPrice}₼\n\n`;

    if (formData.features.length > 0) {
      message += `Seçilmiş Xüsusiyyətlər:\n`;
      formData.features.forEach((featureId) => {
        const feature = features.find((f) => f.id === featureId);
        if (feature) message += `• ${feature.name}\n`;
      });
      message += `\n`;
    }

    const customItems = formData.customItems.filter(
      (item) => item.trim() !== ""
    );
    if (customItems.length > 0) {
      message += `Əlavə İstəklər:\n`;
      customItems.forEach((item) => {
        message += `• ${item}\n`;
      });
    }

    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://api.whatsapp.com/send/?phone=994557557733&text=${getWhatsAppMessage()}&type=phone_number&app_absent=0`;

  const PriceTag = ({ price, isSelected }) => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold ${
        isSelected
          ? isDarkMode
            ? "bg-[#CAFF34] text-black"
            : "bg-[#1D6696] text-white"
          : isDarkMode
          ? "bg-[#CAFF34]/20 text-[#CAFF34]"
          : "bg-[#1D6696]/20 text-[#1D6696]"
      }`}
    >
      +{price}₼
    </motion.div>
  );

  PriceTag.propTypes = {
    price: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
  };

  const MultiplierBadge = ({ multiplier }) => (
    <div
      className={`absolute -top-2 -left-2 px-2 py-1 rounded-full text-xs font-bold ${
        isDarkMode ? "bg-[#CAFF34] text-black" : "bg-[#1D6696] text-white"
      }`}
    >
      {multiplier}x
    </div>
  );

  MultiplierBadge.propTypes = {
    multiplier: PropTypes.number.isRequired,
  };

  const PagePriceBadge = ({ pageOption }) => (
    <div
      className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold ${
        isDarkMode
          ? "bg-[#CAFF34]/20 text-[#CAFF34]"
          : "bg-[#1D6696]/20 text-[#1D6696]"
      }`}
    >
      {pageOption.pricePerPage}₼/səhifə
    </div>
  );

  PagePriceBadge.propTypes = {
    pageOption: PropTypes.shape({
      pricePerPage: PropTypes.number.isRequired,
    }).isRequired,
  };

  return (
    <div
      className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isDarkMode ? " text-white" : " text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium mb-6 ${
              isDarkMode
                ? "bg-[#CAFF34]/10 text-[#CAFF34] border border-[#CAFF34]/20"
                : "bg-[#1D6696]/10 text-[#1D6696] border border-[#1D6696]/20"
            }`}
          >
            <CalculatorIcon size={20} />
            Qiymət Kalkulyatoru
          </motion.div>
          <h1 className="text-5xl font-bold mb-6">
            Layihənizin{" "}
            <span className={isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"}>
              Qiymətini
            </span>{" "}
            Hesablayın
          </h1>
          <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            Real bazar qiymətləri ilə layihənizin təxmini qiymətini anlıq
            hesablayın. Hər bir seçim avtomatik olaraq qiymətə əks olunur.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form
              className={`${
                isDarkMode ? "bg-[#1A1A1A]" : "bg-white"
              } rounded-3xl shadow-2xl p-8 space-y-8 border ${
                isDarkMode ? "border-gray-800" : "border-gray-200"
              }`}
            >
              {/* Project Type */}
              <div>
                <label className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Layout className="w-6 h-6" />
                  Layihə Növü
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <motion.label
                        key={type.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative flex items-center p-6 rounded-2xl cursor-pointer transition-all border-2 ${
                          formData.projectType === type.id
                            ? isDarkMode
                              ? "border-[#CAFF34] bg-[#CAFF34]/10"
                              : "border-[#1D6696] bg-[#1D6696]/10"
                            : isDarkMode
                            ? "border-gray-700 bg-gray-800 hover:border-gray-600"
                            : "border-gray-200 bg-gray-50 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={type.id}
                          checked={formData.projectType === type.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <IconComponent
                          className={`w-8 h-8 mr-4 ${
                            formData.projectType === type.id
                              ? isDarkMode
                                ? "text-[#CAFF34]"
                                : "text-[#1D6696]"
                              : "text-gray-400"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="font-semibold text-lg">
                            {type.name}
                          </div>
                          <div
                            className={`text-sm mt-1 ${
                              formData.projectType === type.id
                                ? isDarkMode
                                  ? "text-[#CAFF34]"
                                  : "text-[#1D6696]"
                                : "text-gray-500"
                            }`}
                          >
                            {type.basePrice}₼ başlanğıc
                          </div>
                        </div>
                        <PriceTag
                          price={type.basePrice}
                          isSelected={formData.projectType === type.id}
                        />
                      </motion.label>
                    );
                  })}
                </div>
              </div>

              {/* Pages Range */}
              <div>
                <label className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Plus className="w-6 h-6" />
                  Səhifə Sayı
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {pageOptions.map((pageOption) => (
                    <motion.label
                      key={pageOption.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative flex flex-col items-center p-4 rounded-xl cursor-pointer transition-all border-2 ${
                        formData.pages === pageOption.id
                          ? isDarkMode
                            ? "border-[#CAFF34] bg-[#CAFF34]/10"
                            : "border-[#1D6696] bg-[#1D6696]/10"
                          : isDarkMode
                          ? "border-gray-700 bg-gray-800 hover:border-gray-600"
                          : "border-gray-200 bg-gray-50 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="pages"
                        value={pageOption.id}
                        checked={formData.pages === pageOption.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="font-semibold text-center">
                        {pageOption.name}
                      </span>
                      <PagePriceBadge pageOption={pageOption} />
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Design Level */}
              <div>
                <label className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Palette className="w-6 h-6" />
                  Dizayn Səviyyəsi
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {designLevels.map((level) => (
                    <motion.label
                      key={level.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative flex flex-col items-center p-6 rounded-2xl cursor-pointer transition-all border-2 ${
                        formData.design === level.id
                          ? isDarkMode
                            ? "border-[#CAFF34] bg-[#CAFF34]/10"
                            : "border-[#1D6696] bg-[#1D6696]/10"
                          : isDarkMode
                          ? "border-gray-700 bg-gray-800 hover:border-gray-600"
                          : "border-gray-200 bg-gray-50 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="design"
                        value={level.id}
                        checked={formData.design === level.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-2xl font-bold mb-2">
                        {level.multiplier}x
                      </div>
                      <span className="font-semibold text-center text-sm">
                        {level.name}
                      </span>
                      <MultiplierBadge multiplier={level.multiplier} />
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Additional Features */}
              <div>
                <label className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  Əlavə Xüsusiyyətlər
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature) => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.label
                        key={feature.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative flex items-center p-4 rounded-xl cursor-pointer transition-all border-2 ${
                          formData.features.includes(feature.id)
                            ? isDarkMode
                              ? "border-[#CAFF34] bg-[#CAFF34]/10"
                              : "border-[#1D6696] bg-[#1D6696]/10"
                            : isDarkMode
                            ? "border-gray-700 bg-gray-800 hover:border-gray-600"
                            : "border-gray-200 bg-gray-50 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name={feature.id}
                          checked={formData.features.includes(feature.id)}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <IconComponent
                          className={`w-5 h-5 mr-3 ${
                            formData.features.includes(feature.id)
                              ? isDarkMode
                                ? "text-[#CAFF34]"
                                : "text-[#1D6696]"
                              : "text-gray-400"
                          }`}
                        />
                        <span className="flex-1 font-medium">
                          {feature.name}
                        </span>
                        <PriceTag
                          price={feature.price}
                          isSelected={formData.features.includes(feature.id)}
                        />
                      </motion.label>
                    );
                  })}
                </div>
              </div>

              {/* Custom Items */}
              <div>
                <label className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Plus className="w-6 h-6" />
                  Əlavə İstəklər
                </label>
                <div className="space-y-3">
                  {formData.customItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-3 items-start"
                    >
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) =>
                            handleCustomItemChange(index, e.target.value)
                          }
                          placeholder="Xüsusi istəyinizi yazın (məsələn: Xüsusi animasiya, Admin panel, və s.)"
                          className={`w-full p-4 rounded-xl border-2 transition-all ${
                            isDarkMode
                              ? "bg-gray-800 border-gray-700 focus:border-[#CAFF34] focus:bg-gray-700"
                              : "bg-gray-50 border-gray-200 focus:border-[#1D6696] focus:bg-white"
                          }`}
                        />
                        {/* Qiymət etiketi yalnız input dolu olduqda və animasiya aktiv olduqda görünür */}
                        <AnimatePresence>
                          {item.trim() !== "" &&
                            showCustomItemAnimation[index] && (
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold ${
                                  isDarkMode
                                    ? "bg-[#CAFF34] text-black"
                                    : "bg-[#1D6696] text-white"
                                }`}
                              >
                                +150₼
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </div>
                      {formData.customItems.length > 1 && (
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeCustomItem(index)}
                          className={`p-4 rounded-xl mt-1 ${
                            isDarkMode
                              ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                              : "bg-red-100 text-red-600 hover:bg-red-200"
                          }`}
                        >
                          <Minus size={20} />
                        </motion.button>
                      )}
                      {/* Yalnız sonuncu input dolu olduqda yeni əlavə et butonu görünsün */}
                      {index === formData.customItems.length - 1 &&
                        item.trim() !== "" && (
                          <motion.button
                            type="button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={addCustomItem}
                            className={`p-4 rounded-xl mt-1 ${
                              isDarkMode
                                ? "bg-[#CAFF34]/20 text-[#CAFF34] hover:bg-[#CAFF34]/30"
                                : "bg-[#1D6696]/20 text-[#1D6696] hover:bg-[#1D6696]/30"
                            }`}
                          >
                            <Plus size={20} />
                          </motion.button>
                        )}
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Hər bir əlavə istək üçün +150₼
                  </p>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      isDarkMode
                        ? "bg-[#CAFF34]/10 text-[#CAFF34]"
                        : "bg-[#1D6696]/10 text-[#1D6696]"
                    }`}
                  >
                    {formData.customItems.filter((item) => item.trim() !== "")
                      .length * 150}
                    ₼
                  </div>
                </div>
              </div>
            </form>
          </motion.div>

          {/* Price Display Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div
              className={`sticky top-8 ${
                isDarkMode ? "bg-[#1A1A1A]" : "bg-white"
              } rounded-3xl shadow-2xl p-8 border ${
                isDarkMode ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Təxmini Qiymət</h2>
                <p className="text-gray-500">Real-time hesablanır</p>
              </div>

              <AnimatePresence mode="wait">
                {isCalculated && totalPrice > 0 ? (
                  <motion.div
                    key="calculated"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="space-y-6"
                  >
                    <div className="text-center">
                      <div
                        className={`text-6xl font-bold mb-4 ${
                          isDarkMode ? "text-[#CAFF34]" : "text-[#1D6696]"
                        }`}
                      >
                        {totalPrice}₼
                      </div>
                    </div>

                    {/* Price Breakdown */}
                    <div
                      className={`p-4 rounded-xl ${
                        isDarkMode ? "bg-gray-800" : "bg-gray-100"
                      }`}
                    >
                      <h3 className="font-semibold mb-3">
                        Qiymət Təfərrüatları:
                      </h3>
                      <div className="space-y-2 text-sm">
                        {formData.projectType && (
                          <div className="flex justify-between items-center">
                            <span>
                              {
                                projectTypes.find(
                                  (p) => p.id === formData.projectType
                                )?.name
                              }
                            </span>
                            <span className="font-semibold">
                              {
                                projectTypes.find(
                                  (p) => p.id === formData.projectType
                                )?.basePrice
                              }
                              ₼
                            </span>
                          </div>
                        )}
                        {formData.pages && (
                          <div className="flex justify-between items-center">
                            <span>
                              {
                                pageOptions.find((p) => p.id === formData.pages)
                                  ?.name
                              }
                            </span>
                            <span className="font-semibold">
                              +
                              {parseInt(formData.pages) *
                                pageOptions.find((p) => p.id === formData.pages)
                                  ?.pricePerPage}
                              ₼
                            </span>
                          </div>
                        )}
                        {formData.design && (
                          <div className="flex justify-between items-center">
                            <span>
                              {
                                designLevels.find(
                                  (d) => d.id === formData.design
                                )?.name
                              }
                            </span>
                            <span className="font-semibold">
                              {
                                designLevels.find(
                                  (d) => d.id === formData.design
                                )?.multiplier
                              }
                              x
                            </span>
                          </div>
                        )}
                        {formData.features.length > 0 && (
                          <>
                            <div className="border-t border-gray-600 pt-2 mt-2">
                              <div className="font-semibold mb-1">
                                Xüsusiyyətlər:
                              </div>
                              {formData.features.map((featureId) => {
                                const feature = features.find(
                                  (f) => f.id === featureId
                                );
                                return (
                                  <div
                                    key={featureId}
                                    className="flex justify-between items-center"
                                  >
                                    <span className="text-xs">
                                      • {feature.name}
                                    </span>
                                    <span className="font-semibold text-xs">
                                      +{feature.price}₼
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        )}
                        {formData.customItems.filter(
                          (item) => item.trim() !== ""
                        ).length > 0 && (
                          <div className="border-t border-gray-600 pt-2 mt-2">
                            <div className="font-semibold mb-1">
                              Əlavə İstəklər:
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-xs">
                                {
                                  formData.customItems.filter(
                                    (item) => item.trim() !== ""
                                  ).length
                                }{" "}
                                əlavə
                              </span>
                              <span className="font-semibold text-xs">
                                +
                                {formData.customItems.filter(
                                  (item) => item.trim() !== ""
                                ).length * 150}
                                ₼
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* WhatsApp Button */}
                    <motion.a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg ${
                        isDarkMode
                          ? "bg-green-600 text-white hover:bg-green-700 shadow-green-600/20"
                          : "bg-green-500 text-white hover:bg-green-600 shadow-green-500/20"
                      } transition-all duration-300`}
                    >
                      <MessageCircle size={20} />
                      Pulsuz təklif al
                      <ArrowRight size={20} />
                    </motion.a>

                    <p className="text-xs text-center opacity-70">
                      * Bu qiymət təxminidir və dəqiq qiymət müzakirə zamanı
                      müəyyən ediləcək.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="not-calculated"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <CalculatorIcon
                      size={64}
                      className={`mx-auto mb-4 ${
                        isDarkMode ? "text-gray-700" : "text-gray-300"
                      }`}
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      Qiymət Göstəricisi
                    </h3>
                    <p className="text-gray-500">
                      Layihə növünü seçin, qiymət avtomatik hesablansın
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
