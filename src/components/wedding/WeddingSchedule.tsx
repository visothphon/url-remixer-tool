import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import mapQr from "../images/qrcode/map.svg";
import telegramQr from "../images/qrcode/telegram.png";

export const WeddingSchedule = () => {
  // ✅ State for Map QR popup
  const [showMap, setShowMap] = useState(false);
  // ✅ NEW: State for TELEGRAM QR popup
  const [showABA, setShowABA] = useState(false);

  const openMap = () => {
    window.open("https://maps.app.goo.gl/dgp3LCwcAC3QWMjR9", "_blank");
  };

  // ✅ Reusable Modal Component
  // Accepts children for custom content (like the Telegram link)
  const Modal = ({ src, alt, show, onClose, children }) => {
    if (!show) return null;
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        style={{ marginTop: "0px" }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-xl p-6 shadow-2xl flex flex-col items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={src}
            alt={alt}
            className="w-60 sm:w-80 rounded-xl shadow-lg"
          />
          {children}
        </motion.div>
      </div>
    );
  };

  // Telegram URL (replace with your actual Telegram link)
  const telegramUrl = "https://t.me/VichhkaOeun";

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.9 }}
      viewport={{ once: true }}
      className="mt-12 space-y-2"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold wedding-text mb-6 font-koulen">
          កម្មវិធី
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold wedding-text mb-6 font-moul">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 space-y-2"
        >
          <p className="text-lg text-yellow-400 wedding-text font-kantumruy">
            ដែលនឹងប្រព្រឹត្តទៅត្រូវនឹងថ្ងៃអាទិត្យ ទី០២ ខែវិច្ឆិកា ឆ្នាំ២០២៥ វេលាម៉ោង
            ៥:០០នាទីល្ងាច
          </p>
          <p className="text-lg text-yellow-400 wedding-text font-kantumruy">
            📍នៅមជ្ឃមណ្ឌល មហាសាល (អាគារA) ស្ថិតនៅ ក្រុងសិរីសោភ័ណ ខេត្តបន្ទាយមានជ័យ ដោយមេត្រីភាព។
          </p>
          <p className="text-lg text-yellow-400 wedding-text font-kantumruy">
            សូមអរគុណ!
          </p>

          {/* Map Button */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
            style={{ padding: "15px" }}
          >
            <Button
              onClick={openMap}
              variant="outline"
              className="flex items-center justify-center
                          border-none
                          text-white
                          bg-gradient-to-r from-red-400 via-pink-500 to-yellow-500
                          hover:from-red-500 hover:to-yellow-600
                          shadow-lg
                          rounded-full
                          px-6 py-3
                          text-lg font-semibold
                          transition-all duration-200
                          wedding-glow
                        "
              style={{ fontFamily: "Kantumruy" }}
            >
              <MapPin className="w-5 h-5 mr-2" />
              បើកផែនទី
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Two Images in One Row */}
          <div className="flex justify-center gap-10 mt-12">
            {/* Image 1 - Map QR */}
            <div className="text-center">
              <p className="mb-2 text-sm wedding-text font-kantumruy">MAP QR</p>
              <img
                src={mapQr}
                alt="Map QR code"
                className="w-40 sm:w-56 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition"
                onClick={() => setShowMap(true)}
              />
              <p className="mt-2 text-sm wedding-text font-kantumruy">
                សូមស្កេន ដើម្បីបើកផែនទី
              </p>
            </div>

            {/* Image 2 - TELEGRAM QR */}
            <div className="text-center">
              <p className="mb-2 text-sm wedding-text font-kantumruy">
                TELEGRAM QR
              </p>
              <img
                src={telegramQr}
                alt="TELEGRAM QR"
                className="w-40 sm:w-56 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition"
                onClick={() => setShowABA(true)}
              />
              <p className="mt-2 text-sm wedding-text">Vichhka Oeun</p>
            </div>
          </div>

          {/* Contact Info */}
          <div style={{ paddingTop: "20px" }} className="text-center space-y-1">
            <p
              className="font-kantumruy !text-[#ffb2ba]"
              style={{ fontSize: "16px", fontWeight: "800" }}
            >
              ទំនាក់ទំនងម្ចាស់កម្មវិធី
            </p>
            <a
              href="tel:089788677"
              className="font-kantumruy !text-[#ffb2ba]"
              style={{ fontSize: "16px", fontWeight: "800", display: "block" }}
            >
              089 788 677
            </a>
            <a
              href="tel:012585676"
              className="font-kantumruy !text-[#ffb2ba]"
              style={{ fontSize: "16px", fontWeight: "800", display: "block" }}
            >
              012 585 676
            </a>
          </div>
        </motion.div>
      </div>

      {/* Pop-up Modals */}
      <Modal
        src={mapQr}
        alt="Map QR enlarged"
        show={showMap}
        onClose={() => setShowMap(false)}
      />
      <Modal
        src={telegramQr}
        alt="TELEGRAM QR enlarged"
        show={showABA}
        onClose={() => setShowABA(false)}
      >
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center
                    mt-6 px-6 py-2 mb-6                    bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600
                    text-white text-lg font-semibold
                    rounded-full shadow-lg
                    hover:from-blue-500 hover:to-blue-700
                    transition-all duration-200
                    gap-2
                  "
          style={{ fontFamily: "Kantumruy" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            style={{ marginRight: 6 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 2.848a.75.75 0 0 0-.95-.948l-18 6.25a.75.75 0 0 0 .083 1.427l4.788 1.37 2.055 6.393a.75.75 0 0 0 1.34.168l2.68-3.913 4.443 3.444a.75.75 0 0 0 1.188-.39l2.373-9.801ZM9.857 14.143 8.12 8.882m0 0 7.882 2.257"
            />
          </svg>
          ចូល Telegram
        </a>
      </Modal>

      {/* Footer section */}
      <motion.div
        className="max-w-2xl mx-auto text-center fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      >
        <div className="mt-20 pt-12 border-t border-primary/20 weeding-text">
          <div className="wedding-text text-black text-sm space-y-2">
            <p className="font-kantumruy hover:opacity-80 text-black">
              តើលោកអ្នកចាប់អារម្មណ៍នឹងប្រើប្រាស់សេវាកម្មរបស់ពួកយើងដែរឬទេ?
            </p>
            <p className="font-kantumruy hover:opacity-80 text-black">
              ទាក់ទងមកកាន់ពួកយើងឥឡូវនេះ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a
                href="tel:098456866"
                className="hover:opacity-80 font-kantumruy text-black"
              >
                លេខទូរស័ព្ទ: 016667892
              </a>
              <a
                href="mailto:ananisai.kh@gmail.com"
                className="hover:opacity-80 text-black"
              >
                E-mail: tunsinchhiv@gmail.com
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
