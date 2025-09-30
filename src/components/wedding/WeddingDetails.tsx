import { motion } from "framer-motion";
import WeddingLogo from '../images/logo/logo.png'


export const WeddingDetails = () => {
  return (
    <div className="relative justify-center text-center mt-28">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="wedding-text mb-12 text-[24px]" 
        style={{ fontFamily: "Moul", fontSize: "24px" }}
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
            className="text-[14px] !text-[#e70ab2] wedding-text"
            style={{ fontFamily: "Koulen", fontSize: "16px" }}
          >
            ផុន
          </h2>
          <p
            className="text-[14px] !text-[#e70ab2] wedding-text"
            style={{ fontFamily: "Koulen", fontSize: "16px"}}
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
          <p
            className="text-[14px] text-yellow-400 wedding-text"
            style={{ fontFamily: "Kantumruy" }}
          >
            កូនស្រីនាម
          </p>
          <h2
            className="text-[14px] !text-[#e70ab2] wedding-text"
            style={{ fontFamily: "Koulen", fontSize: "16px" }}
          >
            អឿន
          </h2>
          <h2
            className="text-[14px] !text-[#e70ab2] wedding-text"
            style={{ fontFamily: "Koulen", fontSize: "16px"}}
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
          ដែលនឹងប្រព្រឹត្តទៅនៅ
        </p>
        <h3
          className="font-bold text-[18px] !text-[#e70ab2] wedding-text font-moul"
        >
          ត្រូវនឹងថ្ងៃទី០២ ខែវិច្ឆិកា ឆ្នាំ២០២៥
        </h3>
      </motion.div>



      {/* Second Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-60 relative justify-center text-center"
      >
        {/* Title */}
        <h1
          className="text-[24px] text-yellow-400 wedding mb-6 font-moul"
        >
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h1>

        {/* Groom & Bride Row */}
        <div
          className="flex items-center justify-between w-full max-w-4xl px-6"
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
            <p className="text-yellow-400 wedding koulen">លោក ឈុន លិះ</p>
            <p className="text-yellow-400 wedding koulen">លោកស្រី ផុន សុភា</p>
          </motion.div>

          {/* Bride (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-end space-y-2 text-right"
          >
            <p className="text-yellow-400 wedding koulen">លោក លេស សំអឿន</p>
            <p className="text-yellow-400 wedding koulen">លោកស្រី វិ សារឿន</p>
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
        <p>
          សម្តេច ទ្រង់ ឯកឧត្តម លោកអ្នកឧញ៉ា អ្នកឧញ៉ាឧញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
        </p>
        <p>
          អញ្ជើញចូលរួមកម្មវិធីជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្តីជ័យមង្គល 
        </p>
        <p>ក្នុងពិធីរៀបអាពាណ៍ពិពាណ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ</p>
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
            <p
              className="text-[14px] text-yellow-400 wedding-text font-kantumruy"
            >
              កូនប្រុសនាម
            </p>
            <h2
              className="text-[14px] !text-[#e70ab2] wedding-text"
              style={{ fontFamily: "Koulen"}}
            >
              ផុន
            </h2>
            <p
              className="text-[14px] !text-[#e70ab2] wedding-text"
              style={{ fontFamily: "Koulen" }}
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
            <p
              className="text-[14px] text-yellow-400 wedding-text font-kantumruy"
            >
              កូនស្រីនាម
            </p>
            <h2
              className="text-[14px] wedding-text !text-[#e70ab2]"
              style={{ fontFamily: "Koulen"}}
            >
              អឿន
            </h2>
            <h2
              className="text-[14px] !text-[#e70ab2] wedding-text"
              style={{ fontFamily: "Koulen"}}
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
            <p className="text-lg text-yellow-400 wedding-text" style={{ fontFamily: "Kantumruy" }}>
              ដែលនឹងប្រព្រឹត្តទៅត្រូវនិងថ្ងៃអាទិត្យ ១២កើត ខែកត្តិក ឆ្នាំម្សាញ់ សប្តស័ក ព.ស២៥៦៩
            </p>
            <p className="text-lg text-yellow-400 wedding-text" style={{ fontFamily: "Kantumruy" }}> 
              ត្រូវនិងថ្ងៃទី០២ ខែវិច្ឆិកា ឆ្នាំ២០២៥ វេលាម៉ោង ៥:០០នាទីល្ងាច
            </p>
            <p className="text-lg text-yellow-400 wedding-text" style={{ fontFamily: "Kantumruy" }}>
              នៅមជ្ឃមណ្ឌល មហាសាល (អាគារA) ស្ថិតនៅ ក្រុងសិរិសោភ័ណ្ឌ
            </p>
            <p className="text-lg text-yellow-400 wedding-text" style={{ fontFamily: "Kantumruy" }}> 
              ខេត្តបន្ទាយមានជ័យ ដោយមេត្រីភាព។
            </p>
            <p className="text-lg text-yellow-400 wedding-text" style={{ fontFamily: "Kantumruy" }}> 
              សូមអរគុណ!
            </p>
            <h3
              className="font-bold text-[18px] !text-[#e70ab2] wedding-text"
              style={{ fontFamily: "Koulen" }}
            >
              ថ្ងៃទី០២ ខែវិច្ឆិកា ឆ្នាំ២០២៥
            </h3>
        </motion.div>
      </motion.div>
    </div>
  );
};
