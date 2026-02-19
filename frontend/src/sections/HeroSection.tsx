import { Shield, Users, Award, TrendingUp, Phone, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const logoUrl = new URL('../assets/logo.jpg', import.meta.url).href;

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 flex flex-col items-center">
        <div className={`w-full max-w-3xl flex flex-col items-center text-center space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* AMFI Badge - unchanged */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">AMFI Registered Mutual Fund Distributor</span>
          </div>

          {/* Hero: large logo from src/assets/logo.jpg, centered, does not push CTAs off-screen */}
          <div className="w-full flex justify-center items-center shrink-0 max-h-[45vh] min-h-0">
            <img
              src={logoUrl}
              alt="Ongolebulls Invest"
              className="w-full max-w-[600px] h-auto max-h-[40vh] object-contain object-center select-none"
            />
          </div>

          {/* Headline text under logo */}
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Save Tax up to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                ₹46,800
              </span>{' '}
              &amp; Grow Your Wealth with ELSS Mutual Funds
            </h1>
            <p className="text-base sm:text-lg text-gray-600">
              Invest in India&apos;s most efficient tax-saving option with confidence and expert guidance.
            </p>
          </div>

          {/* CTAs - unchanged styling */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToForm}
              className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4 animate-pulse-glow"
            >
              <TrendingUp className="w-5 h-5" />
              Start Investing Now
            </button>
            <button
              onClick={handlePhoneClick}
              className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              Get Free Tax Saving Consultation
            </button>
          </div>

          {/* Trust Badges - unchanged */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">AMFI Registered</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Users className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">1000+ Happy Investors</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">100% Secure & Paperless</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Buttons - Floating */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        <button
          onClick={handlePhoneClick}
          className="w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center"
          title="Call Us"
        >
          <Phone className="w-5 h-5" />
        </button>
        <button
          onClick={handleWhatsAppClick}
          className="w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center"
          title="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
