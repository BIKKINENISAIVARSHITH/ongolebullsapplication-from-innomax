import { CheckCircle, Shield, Users, Award, TrendingUp, Phone, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-blue-100">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">AMFI Registered Mutual Fund Distributor</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Save Tax up to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  ₹46,800
                </span>{' '}
                & Grow Your Wealth with ELSS Mutual Funds
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-xl">
                Invest in India's most efficient tax-saving option with:
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {[
                'Only 3-Year Lock-in',
                'SIP starting at ₹500',
                'Market-Linked Wealth Creation'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
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

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
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

          {/* Right Content - Visual */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Tax Saving + Wealth Creation</h3>
                    <p className="text-gray-600 mt-2">The smartest way to save tax under Section 80C</p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">3</div>
                      <div className="text-xs text-gray-600">Years Lock-in</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">₹500</div>
                      <div className="text-xs text-gray-600">Min SIP</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">₹1.5L</div>
                      <div className="text-xs text-gray-600">80C Limit</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg animate-float">
                <span className="font-bold">Save ₹46,800</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="font-bold">Section 80C</span>
              </div>
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
