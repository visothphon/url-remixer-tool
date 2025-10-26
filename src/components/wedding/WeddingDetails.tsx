import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WeddingLogo from "../images/logo/logo.png";
import Event from "../images/event/event.png"

// ScrollDownButton component
const ScrollDownButton = ({ onClick }) => (
  <motion.button
    initial={{ opacity: 0, y: 300 }}
    animate={{ opacity: 1, y: [0, 18, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="flex flex-col items-center mx-auto mt-28 focus:outline-none"
    onClick={onClick}
    style={{ background: "transparent", border: "none", cursor: "pointer" }}
    aria-label="Scroll down"
  >
    <span
      className="mb-2"
      style={{
        color: "#ffbd23",
        fontFamily: "Kantumruy",
        fontSize: 16,
        fontWeight: "700",
        textShadow: "0 0 6px rgba(234, 234, 234, 0.8)",
      }}
    >
      ទាញឡើងលើ
    </span>
    <svg
      width="120"
      height="80"
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gold-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fff8e1" />
          <stop offset="45%" stop-color="#ffe7a1" />
          <stop offset="60%" stop-color="#ffcb3c" />
          <stop offset="80%" stop-color="#ffdd70" />
          <stop offset="100%" stop-color="#ffbd23" />
        </linearGradient>

        <linearGradient id="soft-gold" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fffde4" />
          <stop offset="80%" stop-color="#f4d8a3" />
        </linearGradient>

        <radialGradient id="ring-highlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="white" stop-opacity="0.6" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>

        <filter id="wedding-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="ring-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="1.5"
            stdDeviation="2"
            flood-color="#FFD700"
            flood-opacity="0.2"
          />
        </filter>

        <g id="sparkle">
          <circle cx="0" cy="0" r="0.8" fill="#fff" opacity="0.9" />
          <rect
            x="-0.7"
            y="-0.07"
            width="1.4"
            height="0.14"
            fill="#fff"
            opacity="0.7"
          />
          <rect
            x="-0.07"
            y="-0.7"
            width="0.14"
            height="1.4"
            fill="#fff"
            opacity="0.7"
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.5;1"
            dur="1.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="1s"
            repeatCount="indefinite"
          />
        </g>
      </defs>

      <circle
        cx="48"
        cy="40"
        r="20"
        stroke="url(#gold-gradient)"
        stroke-width="4"
        fill="none"
        filter="url(#wedding-glow) url(#ring-shadow)"
      />
      <circle
        cx="72"
        cy="36"
        r="22"
        stroke="url(#soft-gold)"
        stroke-width="4"
        fill="none"
        opacity="0.95"
        filter="url(#wedding-glow) url(#ring-shadow)"
      />

      <circle
        cx="48"
        cy="40"
        r="20"
        fill="url(#ring-highlight)"
        opacity="0.2"
      />
      <circle
        cx="72"
        cy="36"
        r="22"
        fill="url(#ring-highlight)"
        opacity="0.15"
      />

      <path
        d="M60 42 
           C63 37, 71 38, 60 54 
           C49 38, 57 37, 60 42 Z"
        fill="url(#gold-gradient)"
        opacity="0.13"
      />
      <path
        d="M60 41 
           C63.5 36, 71 38, 60 53 
           C49 38, 56.5 36, 60 41 Z"
        fill="url(#soft-gold)"
        opacity="0.08"
      />

      <path
        d="M58 30 L66 22"
        stroke="url(#gold-gradient)"
        stroke-width="2"
        stroke-linecap="round"
        opacity="0.72"
      />
      <path
        d="M57.2 30.8 L65.2 22.8"
        stroke="#fff8e1"
        stroke-width="0.8"
        stroke-linecap="round"
        opacity="0.45"
      />

      <use href="#sparkle" x="62" y="20" />
      <use href="#sparkle" x="50" y="32" />
      <use href="#sparkle" x="82" y="38" />
      <use href="#sparkle" x="65" y="55" />
      <use href="#sparkle" x="38" y="52" />
    </svg>
  </motion.button>
);

export const WeddingDetails = () => {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollHint(window.scrollY < 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scrolls to the section with id="second-section"
  const handleScrollDown = () => {
    const section = document.getElementById("second-section");
    if (section) {
      const offset = -300; // adjust upward (try -80 or -120)
      const top =
        section.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="relative justify-center text-center mt-28">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="wedding-text mb-12 text-[24px]"
        style={{ fontFamily: "Moul", fontSize: "24px", fontWeight: "bold" }}
      >
        សិរីមង្គលអាពាហ៍ពិពាហ៍
      </motion.h1>

      {/* One Row: Groom - Logo - Bride */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-8 md:gap-16"
      >
        {/* Groom */}
        <div className="flex flex-col items-center space-y-2">
          <p
            className="text-[14px] text-yellow-400 wedding-text kantumruy"
            style={{ fontFamily: "Kantumruy" }}
          >
            កូនប្រុសនាម
          </p>
          <h2
            className="text-[14px] !text-[#ffb2ba] wedding-text"
            style={{ fontFamily: "Moul", fontSize: "16px" }}
          >
            ផុន
          </h2>
          <p
            className="text-[14px] !text-[#ffb2ba] wedding-text"
            style={{ fontFamily: "Moul", fontSize: "16px" }}
          >
            វិស្សុត
          </p>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={WeddingLogo} alt="Wedding Logo" className="w-28 md:w-36" />
        </div>

        {/* Bride */}
        <div className="flex flex-col items-center space-y-2">
          <p
            className="text-[14px] text-yellow-400 wedding-text"
            style={{ fontFamily: "Kantumruy" }}
          >
            កូនស្រីនាម
          </p>
          <h2
            className="text-[14px] !text-[#ffb2ba] wedding-text"
            style={{ fontFamily: "Moul", fontSize: "16px" }}
          >
            អឿន
          </h2>
          <h2
            className="text-[14px] !text-[#ffb2ba] wedding-text"
            style={{ fontFamily: "Moul", fontSize: "16px" }}
          >
            វិច្ឆិកា
          </h2>
        </div>
      </motion.div>

      {/* Date & Time */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 space-y-2"
      >
        <p className="text-[16px] text-yellow-400 wedding-text font-kantumruy">
          ដែលនឹងប្រព្រឹត្តទៅត្រូវនឹង
        </p>
        <h3
          className="font-bold text-[18px] !text-[#ffb2ba] wedding-text font-moul"
          style={{ marginTop: "15px" }}
        >
          ថ្ងៃអាទិត្យ ទី០២ ខែវិច្ឆិកា ឆ្នាំ២០២៥
        </h3>
      </motion.div>

      {showScrollHint && <ScrollDownButton onClick={handleScrollDown} />}

      {/* Second Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-60 relative justify-center text-center scroll-mt-20"
      >
        {/* Title */}
        <h1
          id="second-section"
          className="scroll-mt-40 text-[24px] text-yellow-400 wedding mb-6 font-moul"
        >
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h1>

        {/* Groom & Bride Row */}
        <div
          className="flex items-center justify-between w-full max-w-4xl px-6 mx-auto"
          style={{ fontFamily: "Bayon" }}
        >
          {/* Groom (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-start space-y-2 text-left"
          >
            <p className="text-yellow-400 wedding koulen text-[16px]">លោក&nbsp;&nbsp;&nbsp;<span className="text-yellow-400 wedding text-[16px] font-moul !text-[#ffb2ba]">ឈុន លិះ</span></p>
            <p className="text-yellow-400 wedding koulen text-[16px]">លោកស្រី&nbsp;&nbsp;&nbsp;<span className="text-yellow-400 wedding text-[16px] font-moul !text-[#ffb2ba]">ផុន សុភា</span></p>
          </motion.div>

          {/* Bride (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-end space-y-2 text-right"
          >
            <p className="text-yellow-400 wedding koulen text-[16px]">លោក&nbsp;&nbsp;&nbsp;<span className="text-yellow-400 wedding text-[16px] font-moul !text-[#ffb2ba]">លេស សំអឿន</span></p>
            <p className="text-yellow-400 wedding koulen text-[16px]">លោកស្រី&nbsp;&nbsp;&nbsp;<span className="text-yellow-400 wedding text-[16px] font-moul !text-[#ffb2ba]">វិ សាវឿត</span></p>
          </motion.div>
        </div>
      </motion.div>

      {/* Parents Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        viewport={{ once: true }}
        className="mt-10 font-bold text-yellow-400 wedding mb-12 text-[10px]"
        style={{ fontFamily: "Kantumruy", fontSize: "16px" }}
      >
        <h6>
          <div style={{ marginBottom: "18px" }}>សូមគោរពអញ្ជើញ</div>
        </h6>
        <p>
          សម្តេច ទ្រង់ ឯកឧត្តម លោកអ្នកឧកញ៉ា អ្នកឧកញ៉ា ឧកញ៉ា លោកជំទាវ លោក លោកស្រី
          អ្នកនាងកញ្ញា
        </p>
        <p>
          អញ្ជើញចូលរួមកម្មវិធីជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ
          សិរីសួស្តីជ័យមង្គល
        </p>
        <p>ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ</p>
      </motion.div>

      {/* Groom & Bride Again */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="relative justify-center text-center"
      >
        <div className="flex items-center justify-center gap-8 md:gap-16">
          {/* Groom */}
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[14px] text-yellow-400 wedding-text font-kantumruy">
              កូនប្រុសនាម
            </p>
            <h2
              className="text-[14px] !text-[#ffb2ba] wedding-text"
              style={{ fontFamily: "Moul" }}
            >
              ផុន
            </h2>
            <p
              className="text-[14px] !text-[#ffb2ba] wedding-text"
              style={{ fontFamily: "Moul" }}
            >
              វិស្សុត
            </p>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={WeddingLogo}
              alt="Wedding Logo"
              className="w-28 md:w-36"
            />
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[14px] text-yellow-400 wedding-text font-kantumruy">
              កូនស្រីនាម
            </p>
            <h2
              className="text-[14px] wedding-text !text-[#ffb2ba]"
              style={{ fontFamily: "Moul" }}
            >
              អឿន
            </h2>
            <h2
              className="text-[14px] !text-[#ffb2ba] wedding-text"
              style={{ fontFamily: "Moul" }}
            >
              វិច្ឆិកា
            </h2>
          </div>
        </div>

        {/* Parents Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 font-bold text-yellow-400 wedding mb-12 text-[10px]"
          style={{ fontFamily: "Bayon" }}
        >
          <h1
            className="text-[24px] text-gold wedding mb-6"
            style={{ fontFamily: "Moul" }}
          >
            និង ពិសាភោជនាហារ
          </h1>
        </motion.div>

        {/* Date & Time */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 space-y-2"
        >
          <p
            className="text-lg text-yellow-400 wedding-text"
            style={{ fontFamily: "Kantumruy" }}
          >
            ដែលនឹងប្រព្រឹត្តទៅត្រូវនឹងថ្ងៃអាទិត្យ ១២កើត ខែកត្តិក ឆ្នាំម្សាញ់
            សប្តស័ក ព.ស២៥៦៩
          </p>
          <p
            className="text-lg text-yellow-400 wedding-text"
            style={{ fontFamily: "Kantumruy" }}
          >
            ត្រូវនឹងថ្ងៃទី០២ ខែវិច្ឆិកា ឆ្នាំ២០២៥ វេលាម៉ោង ៥:០០នាទីល្ងាច
          </p>
          <p
            className="text-lg text-yellow-400 wedding-text"
            style={{ fontFamily: "Kantumruy" }}
          >
            📍នៅមជ្ឃមណ្ឌល មហាសាល (អាគារA) ស្ថិតនៅ ក្រុងសិរីសោភ័ណ ខេត្តបន្ទាយមានជ័យ ដោយមេត្រីភាព។
          </p>
          <p
            className="text-lg text-yellow-400 wedding-text"
            style={{ fontFamily: "Kantumruy" }}
          >
            សូមអរគុណ!
          </p>
          <h3
            className="font-bold text-[18px] !text-[#ffb2ba] wedding-text"
            style={{ fontFamily: "Moul" }}
          >
            ថ្ងៃអាទិត្យ ទី០២ ខែវិច្ឆិកា ឆ្នាំ២០២៥
          </h3>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
            className="mt-6 flex justify-center"
          >
            <img
              src={Event}
              alt="Wedding Celebration"
              className="w-100 md:w-100 rounded-2xl shadow-lg"
            />
          </motion.div>
      </motion.div>
    </div>
  );
};
