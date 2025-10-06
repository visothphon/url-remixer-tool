import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  img1,img2,img3,img4,img5,img6,img7,img8,img9,
  img10,img11,img12,img13,img14,img15,img16,img17,img19,img20,img21
];

export const PhotoGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handleNext = () => {
    setDirection(1);
    setSelectedIndex((selectedIndex! + 1) % photos.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setSelectedIndex((selectedIndex! - 1 + photos.length) % photos.length);
  };

  // Motion variants for sliding
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0
    })
  };

  const layoutSlices = [
    [0], [1,2], [3], [4,5], [6], [7,8], [9], [10,11], [12], [13,14,15,16], [17], [18,19]
  ];

  return (
    <section className="py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-6 text-[24px] text-yellow-400" style={{ fontFamily: "Moul" }}>
          វិស្សុត 💗 វិច្ឆិកា
        </h2>

        <div className="space-y-1">
          {layoutSlices.map((slice, sectionIndex) => {
            const isTwoColumn = slice.length > 1;
            return (
              <div
                key={sectionIndex}
                className={`grid ${isTwoColumn ? "grid-cols-2 gap-1 place-items-center" : "grid-cols-1 gap-4"}`}
              >
                {slice.map((photoIndex) => (
                  <motion.div
                    key={photoIndex}
                    className="rounded-lg overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => setSelectedIndex(photoIndex)}
                  >
                    <img
                      src={photos[photoIndex]}
                      alt={`Wedding photo ${photoIndex + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence initial={false} custom={direction}>
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 overflow-x-auto"
            onClick={() => setSelectedIndex(null)}
          >
            <div className="flex items-center justify-center w-full h-full" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={selectedIndex}
                src={photos[selectedIndex]}
                alt="Enlarged"
                className="max-w-full max-h-full object-contain rounded-lg cursor-grab"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x > 100 || velocity.x > 500) handlePrev();
                  else if (offset.x < -100 || velocity.x < -500) handleNext();
                }}
              />
            </div>

            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-yellow-400"
              onClick={() => setSelectedIndex(null)}
            >
              ×
            </button>

            {/* Previous */}
            <button
              className="absolute left-4 text-white text-4xl hover:text-yellow-400"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              ‹
            </button>

            {/* Next */}
            <button
              className="absolute right-4 text-white text-4xl hover:text-yellow-400"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              ›
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
