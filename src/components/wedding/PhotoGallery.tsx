import { useState } from 'react';
import { motion } from 'framer-motion';

import img1 from "../images/image/img1.jpg";
import img2 from "../images/image/img2.jpg";
import img3 from "../images/image/img3.jpg";
import img4 from "../images/image/img4.jpg";
import img5 from "../images/image/img5.jpg";
import img6 from "../images/image/img6.jpg";
import img7 from "../images/image/img7.jpg";
import img8 from "../images/image/img8.jpg";
import img9 from "../images/image/img9.jpg";
import img10 from "../images/image/img10.jpg";
import img11 from "../images/image/img11.jpg";
import img12 from "../images/image/img12.jpg";
import img13 from "../images/image/img13.jpg";
import img14 from "../images/image/img14.jpg";
import img15 from "../images/image/img15.jpg";
import img16 from "../images/image/img16.jpg";
import img17 from "../images/image/img17.jpg";
import img19 from "../images/image/img19.jpg";
import img20 from "../images/image/img20.jpg";
import img21 from "../images/image/img21.jpg";


const photos = [
  img1,
  img2, 
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9, 
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img19,
  img20,
  img21,
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section className="py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-6 text-[24px] text-yellow-400" style={{ fontFamily: 'Moulpali' }}>
          <u>វិស្សុត&វិច្ឆិកា </u>
        </h2>

        <div className="space-y-1">
          {/* Top Section: one images side by side */}
          <div className="grid grid-cols-1 gi gap-4">
            {photos.slice(0, 1).map((photo, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Wedding photo ${index + 2}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Top Section: Two images side by side */}
          <div className="grid grid-cols-2 gap-1 place-items-center">
              {photos.slice(1,3).map((photo, index) => (
                <motion.div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Wedding photo ${index + 8}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gi gap-4">
            {photos.slice(3, 4).map((photo, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Wedding photo ${index + 2}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Top Section: Two images side by side */}
          <div className="grid grid-cols-2 gap-1 place-items-center">
              {photos.slice(4,6).map((photo, index) => (
                <motion.div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Wedding photo ${index + 8}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
           
          <div className="grid grid-cols-1 gi gap-4">
            {photos.slice(6, 7).map((photo, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Wedding photo ${index + 2}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-1 place-items-center">
            {photos.slice(7, 9).map((photo, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Wedding photo ${index + 2}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
            
            <div className="grid grid-cols-1 gi gap-4">
            {photos.slice(9, 10).map((photo, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Wedding photo ${index + 2}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-1 place-items-center">
            {photos.slice(10, 12).map((photo, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Wedding photo ${index + 2}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gi gap-4">
            {photos.slice(12, 13).map((photo, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Wedding photo ${index + 2}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-1 place-items-center">
            {photos.slice(13, 17).map((photo, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Wedding photo ${index + 2}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gi gap-4">
            {photos.slice(17, 18).map((photo, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Wedding photo ${index + 2}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-1 place-items-center">
            {photos.slice(18, 21).map((photo, index) => (
              <motion.div
                key={index}
                className="rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo}
                  alt={`Wedding photo ${index + 2}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.img
            src={selectedPhoto}
            alt="Enlarged wedding photo"
            className="max-w-full max-h-full object-contain rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-yellow-400"
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};