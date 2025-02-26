import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        <div className="flex justify-center items-center gap-4">
          <img
            src="/images/Logo.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-2xl"
          />
          <h1 className="text-2xl">
            <strong>
              Imperia<span className="text-[#CAFF34]">Tech</span>
            </strong>
          </h1>
        </div>
        <nav className="mb-6 mt-10 flex space-x-6 text-gray-300 text-sm">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            Careers
          </a>
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Security
          </a>
        </nav>
        <div className="border-b border-t p-10 border-gray-400 flex items-center mt-6 space-x-4 text-gray-400 mb-6">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Mail size={18} className="text-[#CAFF34]" />
            <span>hello@skillbirdge.com</span>
          </motion.div>
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Phone size={18} className="text-[#CAFF34]" />
            <span>+91 91813 23 2309</span>
          </motion.div>
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <MapPin size={18} className="text-[#CAFF34]" />
            <span>Somewhere in the World</span>
          </motion.div>
        </div>
        <div className="flex justify-center items-center mt-10 bg-[#191919] p-5 rounded-3xl">
          <div className="flex space-x-4 mb-6">
            <motion.a
              href="#"
              className="p-2 bg-[#CAFF34] text-black rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <Facebook size={18} />
            </motion.a>
            <motion.a
              href="#"
              className="p-2 bg-[#CAFF34] text-black rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <Twitter size={18} />
            </motion.a>
            <motion.a
              href="#"
              className="p-2 bg-[#CAFF34] text-black rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin size={18} />
            </motion.a>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              YourBank All Rights Reserved
            </p>
          </div>

          <div className="flex space-x-4 mt-2 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
