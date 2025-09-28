import WeddingLogoImg from '../images/logo/logo.png'; // adjust the path based on your file location



export const WeddingLogo = () => {
  return (
    <div className="flex flex-col items-center space-y-6 fade-in">
      {/* Wedding Logo Image */}
      <div className="relative">
        <img
          src={WeddingLogoImg}
          alt="Wedding Logo"
          className="w-40 h-600 md:w-100 md:h-100 object-contain"
        />
      </div>
    </div>
  );
};
