import { useState } from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { WeddingLogo } from './WeddingLogo';
import { WeddingDetails } from './WeddingDetails';
import { PhotoGallery } from './PhotoGallery';
import { WeddingSchedule } from './WeddingSchedule';
import { RSVPSection } from './RSVPSection';
import { Button } from '@/components/ui/button';

export const WeddingInvitation = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleOpenInvitation = () => {
    setShowDetails(true);
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      {!showDetails ? (
        // Landing Page
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <WeddingLogo />
          
          <div className="mt-8 space-y-4 fade-in">
            <p className="text-lg md:text-xl wedding-text">សូមគោរពអញ្ជើញ</p>
            <h1 className="text-2xl md:text-3xl font-bold wedding-text">ទុនសុីន នីតា</h1>
          </div>

          <div className="mt-12 fade-in">
            <Button
              onClick={handleOpenInvitation}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg wedding-glow transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-2">
                <span>បើកធៀប</span>
                <div className="w-4 h-4 bg-current rounded-full animate-pulse"></div>
              </div>
            </Button>
            
            <p className="mt-4 text-sm wedding-text opacity-80">
              សូមមេត្តាចុចលើអេក្រង់ដើម្បីបើកធៀបអេឡិចត្រូនិច
            </p>
          </div>
        </div>
      ) : (
        // Full Invitation Content
        <div className="min-h-screen">
          <WeddingDetails />
          <PhotoGallery />
          <WeddingSchedule />
          <RSVPSection />
        </div>
      )}
    </div>
  );
};