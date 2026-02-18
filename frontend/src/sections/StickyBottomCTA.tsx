import { Phone, MessageCircle, TrendingUp } from 'lucide-react';

const StickyBottomCTA = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+919281111730';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi, I want to save tax with ELSS');
    window.open(`https://wa.me/919281111730?text=${message}`, '_blank');
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('lead-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop - Floating WhatsApp */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="group flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-all hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="font-medium">Hi, I want to save tax with ELSS</span>
        </button>
      </div>

      {/* Mobile - Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg sticky-shadow">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={scrollToForm}
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-full font-semibold mr-2"
          >
            <TrendingUp className="w-5 h-5" />
            Start SIP Today
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full mr-2"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
          <button
            onClick={handlePhoneClick}
            className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full"
          >
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile padding for bottom bar */}
      <div className="lg:hidden h-20" />
    </>
  );
};

export default StickyBottomCTA;
