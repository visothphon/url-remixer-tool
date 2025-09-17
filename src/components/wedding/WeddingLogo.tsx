export const WeddingLogo = () => {
  return (
    <div className="flex flex-col items-center space-y-6 fade-in">
      {/* Ornate Monogram */}
      <div className="relative">
        <div className="w-32 h-32 md:w-40 md:h-40 border-4 border-primary rounded-full flex items-center justify-center wedding-glow">
          <div className="text-4xl md:text-5xl font-bold wedding-text font-serif">
            រ៉ូម
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-primary rotate-45"></div>
        <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-primary rotate-45"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-primary rotate-45"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-2 border-primary rotate-45"></div>
      </div>
    </div>
  );
};