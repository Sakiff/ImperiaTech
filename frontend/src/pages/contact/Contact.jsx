import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_kylnpml",
        "template_t7u7xxl",
        {
          to_name: "İmperia Tech",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "PDv5HHA5t9X0WIIgR"
      )
      .then(
        () => {
          toast.success("Mesaj uğurla göndərildi!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("Xəta baş verdi:", error);
          toast.error("Mesaj göndərilmədi. Zəhmət olmasa yenidən cəhd edin.");
          setLoading(false);
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 p-5 md:p-16 text-white  min-h-screen">
      {/* Form Bölməsi */}
      <motion.div
        className="w-full lg:w-1/2 bg-gradient-to-br from-[#0F6018] via-[#1C1C1C] to-[#1C1C1C] shadow-xl rounded-2xl p-8 border border-gray-600"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-[#CAFF34] text-center">
          Bizimlə Əlaqə
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
            className="border border-gray-500 bg-[#1C1C1C] text-white rounded-lg p-4 w-full focus:outline-none focus:border-[#CAFF34] transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Emailiniz"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
            className="border border-gray-500 bg-[#1C1C1C] text-white rounded-lg p-4 w-full focus:outline-none focus:border-[#CAFF34] transition-all"
          />
          <textarea
            name="message"
            placeholder="Mesajınız"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
            className="border border-gray-500 bg-[#1C1C1C] text-white rounded-lg p-4 w-full h-32 focus:outline-none focus:border-[#CAFF34] transition-all"
          ></textarea>
          <motion.button
            type="submit"
            className="bg-[#CAFF34] text-black font-bold py-3 px-6 rounded-xl cursor-pointer hover:bg-green-500 transition-all flex justify-center items-center shadow-md"
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            disabled={loading}
          >
            {loading ? "Göndərilir..." : "Göndər"}
          </motion.button>
        </form>
      </motion.div>

      {/* Google Maps Bölməsi */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-[#CAFF34]">
          Ünvanımız
        </h2>
        <div className="w-full h-80 rounded-xl overflow-hidden shadow-lg border border-gray-600">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.533524626789!2d49.82287277599998!3d40.37740965891883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d7ccec2e73b%3A0x9e360c3b4b774d12!2sAzerbaijan%20Technical%20University!5e0!3m2!1sen!2saz!4v1709567891234!5m2!1sen!2saz"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
