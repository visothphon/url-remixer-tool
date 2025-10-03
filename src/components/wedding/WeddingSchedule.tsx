import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react'; 
import mapQr from '../images/qrcode/map.svg';
import telegramQr from '../images/qrcode/telegram.png';

export const WeddingSchedule = () => {
  // ✅ State for Map QR popup
  const [showMap, setShowMap] = useState(false); 
  // ✅ NEW: State for ABA QR popup
  const [showABA, setShowABA] = useState(false); 

  const openMap = () => {
    // NOTE: This URL seems incomplete and won't open a standard map. 
    // You might want to replace it with a full Google Maps link later.
    window.open('https://maps.app.goo.gl/dgp3LCwcAC3QWMjR9', '_blank');
  };

  // ✅ Reusable Modal Component
  const Modal = ({ src, alt, show, onClose }) => {
    if (!show) return null;

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        style={{ marginTop: '0px'}}
        onClick={onClose} // Closes modal when clicking outside the image
      >
        <motion.img
          src={src}
          alt={alt}
          className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image
        />
      </div>
    );
  };

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
            ដែលនឹងប្រព្រឹត្តទៅត្រូវនឹងថ្ងៃទី០២ ខែវិច្ឆិកា ឆ្នាំ២០២៥ វេលាម៉ោង ៥:០០នាទីល្ងាច
          </p>
          <p className="text-lg text-yellow-400 wedding-text font-kantumruy">
            នៅមជ្ឃមណ្ឌល មហាសាល (អាគារA) ស្ថិតនៅ ក្រុងសិរីសោភ័ណ
          </p>
          <p className="text-lg text-yellow-400 wedding-text font-kantumruy">
            ខេត្តបន្ទាយមានជ័យ ដោយមេត្រីភាព។
          </p>
          <p className="text-lg text-yellow-400 wedding-text font-kantumruy">
            សូមអរគុណ!
          </p>

          {/* Map Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12" style={{ padding: '15px' }}>
            <Button 
              onClick={openMap}
              variant="outline"
              className="border-primary !text-white hover:bg-primary hover:text-primary-foreground wedding-glow"
              style={{ background: "red" , fontFamily: 'Kantumruy' }}
            >
              <MapPin className="w-4 h-4 mr-2 font-kantumruy" />
              បើកផែនទី
              <ExternalLink className="w-4 h-4 ml-2" />
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
                onClick={() => setShowMap(true)} // Set Map popup state
              />
              <p className="mt-2 text-sm wedding-text font-kantumruy">សូមស្កេន ដើម្បីបើកផែនទី</p>
            </div>

            {/* Image 2 - ABA QR */}
            <div className="text-center">
              <p className="mb-2 text-sm wedding-text font-kantumruy">TELEGRAM QR</p>
              <img 
                src={telegramQr} 
                alt="TELEGRAM QR" 
                className="w-40 sm:w-56 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition" // ✅ Added cursor-pointer and hover
                onClick={() => setShowABA(true)} // ✅ Set ABA popup state
              />
              <p className="mt-2 text-sm wedding-text">Vichhka Oeun</p>
            </div>
          </div>

          {/* Contact Info */}
          <div style={{paddingTop: '20px'}} className="text-center space-y-1">
            <p className='font-kantumruy !text-[#e70ab2]' style={{fontSize: "16px", fontWeight: "800"}}>ទំនាក់ទំនងម្ចាស់កម្មវិធី</p>
            <p className='font-kantumruy !text-[#e70ab2]' style={{fontSize: "16px", fontWeight: "800"}}>089 788 677</p>
            <p className='font-kantumruy !text-[#e70ab2]' style={{fontSize: "16px", fontWeight: "800"}}>012 585 676</p>
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
        alt="ABA QR enlarged" 
        show={showABA} 
        onClose={() => setShowABA(false)} 
      />

      {/* Footer section */}
      <motion.div 
        className="max-w-2xl mx-auto text-center fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      >
        <div className="mt-20 pt-12 border-t border-primary/20 weeding-text">
          <div className="wedding-text opacity-60 text-sm space-y-2">
            <p className='font-kantumruy'>តើលោកអ្នកចាប់អារម្មណ៍នឹងប្រើប្រាស់សេវាកម្មរបស់ពួកយើងដែរឬទេ?</p>
            <p className='font-kantumruy'>ទាក់ទងមកកាន់ពួកយើងឥឡូវនេះ</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a href="tel:098456866" className="wedding-text hover:opacity-80 font-kantumruy">
                លេខទូរស័ព្ទ: 016667892
              </a>
              <a href="mailto:ananisai.kh@gmail.com" className="wedding-text hover:opacity-80">
                E-mail: tunsinchhiv@gmail.com
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};