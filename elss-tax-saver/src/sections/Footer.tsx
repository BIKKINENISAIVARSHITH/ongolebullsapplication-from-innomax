import { Mail, Phone, MapPin, Award, Shield, ExternalLink } from 'lucide-react';

const Footer = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+919281111730';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@ongolebullsinvest.com';
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Ongolebulls Invest</h3>
                <p className="text-sm text-gray-400">AMFI Registered Distributor</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Your trusted partner for mutual fund investments and tax-saving solutions. 
              We help you build wealth while saving taxes through expert guidance and 
              personalized investment strategies.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-green-500" />
              <span>SEBI Registered | AMFI Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'What is ELSS?', href: '#what-is-elss' },
                { label: 'Key Benefits', href: '#benefits' },
                { label: 'Top Funds', href: '#top-funds' },
                { label: 'Calculator', href: '#calculator' },
                { label: 'FAQs', href: '#faq' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={handleEmailClick}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-left"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">info@ongolebullsinvest.com</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handlePhoneClick}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-left"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">+91-9281111730</span>
                </button>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">
                    Ongolebulls Invest Pvt Ltd,<br />
                    Flat No. 805B, Manjeera Majestic Commercial Complex,<br />
                    Opposite JNTU, KPHB, Kukatpally,<br />
                    Hyderabad – 500072, Telangana, India.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
            <p className="text-xs text-gray-400 leading-relaxed">
              <span className="font-semibold text-gray-300">Disclaimer:</span> Mutual Fund investments are subject to market risks. 
              Read all scheme related documents carefully before investing. Past performance is not indicative of future returns. 
              The information provided on this website is for educational purposes only and should not be construed as investment advice. 
              Please consult a financial advisor before making any investment decisions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>
              AMFI Registration Number: ARN-XXXXXX | SEBI Registration Number: INZ000XXXXX
            </p>
            <p>
              © {new Date().getFullYear()} Ongolebulls Invest Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
