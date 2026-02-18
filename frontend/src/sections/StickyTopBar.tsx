import { Phone, MessageCircle, Clock } from 'lucide-react';

const StickyTopBar = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+919281111730';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi, I want to save tax with ELSS');
    window.open(`https://wa.me/919281111730?text=${message}`, '_blank');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-950
    -600 to-blue-950 text-white py-2 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm sm:text-base font-medium">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
          <span className="text-center sm:text-left">
            Only few days left to save tax for FY 2025–26! Invest in ELSS today
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePhoneClick}
            className="flex items-center gap-1.5 bg-white text-red-600 px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Talk to an Expert</span>
            <span className="sm:hidden">Call</span>
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-1.5 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp Now</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyTopBar;
