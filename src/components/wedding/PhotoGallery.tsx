import { useState } from 'react';

const photos = [
  "https://ik.imagekit.io/ananisai/assets/SokounMarrySothanet/gallery/IMG_4302_W3h907R1x.JPG?tr=w-640",
  "https://ik.imagekit.io/ananisai/assets/SokounMarrySothanet/gallery/IMG_4200_aY5hJtRfD.JPG?tr=w-640",
  "https://ik.imagekit.io/ananisai/assets/SokounMarrySothanet/gallery/IMG_4231_bNPWVKP3D.JPG?tr=w-640",
  "https://ik.imagekit.io/ananisai/assets/SokounMarrySothanet/gallery/IMG_4369_0wQBhU8YR.JPG?tr=w-640",
  "https://ik.imagekit.io/ananisai/assets/SokounMarrySothanet/gallery/IMG_4300_g8MMiD8Zd.JPG?tr=w-640",
  "https://ik.imagekit.io/ananisai/assets/SokounMarrySothanet/gallery/IMG_4312_wbolsVduT.JPG?tr=w-640",
  "https://ik.imagekit.io/ananisai/assets/SokounMarrySothanet/gallery/IMG_4376_XYQQyhI4r.JPG?tr=w-640",
  "https://ik.imagekit.io/ananisai/assets/SokounMarrySothanet/gallery/IMG_4375_htXSD7SlR.JPG?tr=w-640",
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold wedding-text text-center mb-12">
          វិចិត្រសាល
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300 wedding-glow"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo}
                alt={`Wedding photo ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal for enlarged photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <img
            src={selectedPhoto}
            alt="Enlarged wedding photo"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};