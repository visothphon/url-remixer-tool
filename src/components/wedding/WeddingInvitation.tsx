import { useState, useRef, useEffect } from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { WeddingLogo } from './WeddingLogo';
import { WeddingDetails } from './WeddingDetails';
import { PhotoGallery } from './PhotoGallery';
import { WeddingSchedule } from './WeddingSchedule';
import { RSVPSection } from './RSVPSection';
import { Button } from '@/components/ui/button';
// import openingImg from '../images/cover/cover4.gif';
import open from '../images/cover/open.gif';

// 🎵 Import local audio
import weddingSong from '../adio_background/audio_bk.mp3';

export const WeddingInvitation = () => {
  const [showImage, setShowImage] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleOpenInvitation = () => {
    setShowImage(true);

    // play audio
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log('Autoplay blocked:', err);
      });
    }

    // show details after delay
    setTimeout(() => {
      setShowDetails(true);
    }, 5000);
  };

  // Effect to try to play video when it appears
  useEffect(() => {
    if (showImage && !showDetails && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [showImage, showDetails]);

  return (
    <div className="relative min-h-screen">
      {/* ===== Fixed Background Layer ===== */}
      <div className="fixed inset-0 w-full h-full z-0">
        <AnimatedBackground />
        {showImage && !showDetails && (
          <video
            id="background-video"
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source src="/cover4.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* ===== Hidden Audio Element ===== */}
      <audio ref={audioRef} src={weddingSong} loop />

      {/* ===== Foreground Content ===== */}
      <div className="relative z-10">
        {/* Initial Open Invitation Screen */}
        {!showImage && !showDetails && (
          <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
            <WeddingLogo />
            <div className="mt-8 space-y-4 fade-in">
              <p className="text-[16px] wedding-text" style={{ fontFamily: 'Hanuman' }}>
                សូមគោរពអញ្ជើញ
              </p>
              <h1 className="text-[18px] font-bold wedding-text" style={{ fontFamily: 'Bayon' }}>
                ភ្ញៀវកិត្តិយស ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ
              </h1>
            </div>

            <div className="mt-10 fade-in">
              <Button
                onClick={handleOpenInvitation}
                variant="ghost-blend"
                className="p-0 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={open}
                  alt="Open..."
                  className="w-[280px] h-[140px] object-cover animate-pulse-60s"
                />
              </Button>

              <p className="text-[12px] wedding-text" style={{ fontFamily: 'Hanuman' }}>
                សូមមេត្តាចុចលើអេក្រង់ដើម្បីបើកធៀបអេឡិចត្រូនិច
              </p>
            </div>
          </div>
        )}

        {/* Spacer while Opening GIF plays */}
        {showImage && !showDetails && (
          <div className="min-h-screen" />
        )}

        {/* Main Wedding Details */}
        {showDetails && (
          <div className="max-w-6xl mx-auto px-6 py-20 space-y-20 fade-in">
            <WeddingDetails />
            <PhotoGallery />
            <WeddingSchedule />
            {/* <RSVPSection /> */}
          </div>
        )}
      </div>
    </div>
  );
};