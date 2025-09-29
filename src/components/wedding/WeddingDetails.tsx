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
        style={{ fontFamily: "Koulen" }}
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
            className="text-[14px] text-yellow-400 wedding-text"
            style={{ fontFamily: "Moulpali" }}
          >
            កូនប្រុសនាម
          </p>
          <h2
            className="text-[14px] !text-white wedding-text"
            style={{ fontFamily: "Koulen" }}
          >
            ផុន
          </h2>
          <p
            className="text-[14px] !text-white wedding-text"
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
            className="text-[14px] text-yellow-400 wedding-text"
            style={{ fontFamily: "Moulpali" }}
          >
            កូនស្រីនាម
          </p>
          <h2
            className="text-[14px] !text-white wedding-text"
            style={{ fontFamily: "Koulen" }}
          >
            អឿន
          </h2>
          <h2
            className="text-[14px] !text-white wedding-text"
            style={{ fontFamily: "Koulen" }}
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
        <p className="text-[12px] text-yellow-400 wedding-text">
          ដែលនឹងប្រព្រឹត្តទៅនៅ
        </p>
        <h3
          className="font-bold text-[18px] !text-white wedding-text"
          style={{ fontFamily: "Koulen" }}
        >
          ត្រូវនិងថ្ងៃទី០២ ខែវិច្ឆិកា ឆ្នាំ២០២៥
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
          className="text-[24px] text-yellow-400 wedding mb-6"
          style={{ fontFamily: "Koulen" }}
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
            <p className="text-yellow-400 wedding">លោក ឈុន លិះ</p>
            <h2 className="text-yellow-400 wedding">លោកស្រី ផុន សុភា</h2>
          </motion.div>

          {/* Bride (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-end space-y-2 text-right"
          >
            <p className="text-yellow-400 wedding">លោក លេស សំអឿន</p>
            <h2 className="text-yellow-400 wedding">លោកស្រី វិ សារឿន</h2>
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
        style={{ fontFamily: "Bayon" }}
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
              className="text-[14px] text-yellow-400 wedding-text"
              style={{ fontFamily: "Moulpali" }}
            >
              កូនប្រុសនាម
            </p>
            <h2
              className="text-[14px] !text-white wedding-text"
              style={{ fontFamily: "Koulen" }}
            >
              ផុន
            </h2>
            <p
              className="text-[14px] !text-white wedding-text"
              style={{ fontFamily: "Koulen" }}
            >
              វិស្សុត
            </p>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://i.ibb.co/YFSbY45t/11.png"
              alt="Wedding Logo"
              className="w-28 md:w-36"
            />
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center space-y-2">
            <p
              className="text-[14px] text-yellow-400 wedding-text"
              style={{ fontFamily: "Moulpali" }}
            >
              កូនស្រីនាម
            </p>
            <h2
              className="text-[14px] !text-white wedding-text"
              style={{ fontFamily: "Koulen" }}
            >
              អឿន
            </h2>
            <h2
              className="text-[14px] !text-white wedding-text"
              style={{ fontFamily: "Koulen" }}
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
          style={{ fontFamily: "Koulen" }}
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
            <p className="text-lg text-yellow-400 wedding-text">
              ដែលនឹងប្រព្រឹត្តទៅត្រូវនិងថ្ងៃអាទិត្យ ១២កើត ខែកត្តិក ឆ្នាំម្សាញ់ សប្តស័ក ព.ស២៥៦៩
            </p>
            <p> 
              ត្រូវនិងថ្ងៃទី០២ ខែវិច្ឆិកា ឆ្នាំ២០២៥ វេលាម៉ោង ៥:០០នាទីល្ងាច
            </p>
            <p>
              នៅមជ្ឃមណ្ឌល មហាសាល (អាគារA) ស្ថិតនៅ ក្រុងសិរិសោភ័ណ្ឌ
            </p>
            <p> 
              ខេត្តបន្ទាយមានជ័យ ដោយមេត្រីភាព។
            </p>
            <p> 
              សូមអរគុណ
            </p>
            <h3
              className="font-bold text-[18px] !text-white wedding-text"
              style={{ fontFamily: "Koulen" }}
            >
              ថ្ងៃទី០៥ ខែមករា ឆ្នាំ២០២៥
            </h3>
        </motion.div>
      </motion.div>
    </div>
  );
};
