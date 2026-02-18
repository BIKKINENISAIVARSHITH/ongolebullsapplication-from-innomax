import { useEffect, useRef, useState } from 'react';
import { TrendingUp, AlertTriangle, ArrowUpRight, Star } from 'lucide-react';

const TopFunds = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const funds = [
    {
      name: 'Quant ELSS Tax Saver Fund',
      category: 'Equity - ELSS',
      returns3Y: '28.45%',
      returns5Y: '32.18%',
      risk: 'Very High',
      rating: 5,
      aum: '₹8,245 Cr',
      highlight: 'Top Performer'
    },
    {
      name: 'Canara Robeco ELSS Tax Saver',
      category: 'Equity - ELSS',
      returns3Y: '22.34%',
      returns5Y: '24.56%',
      risk: 'High',
      rating: 5,
      aum: '₹6,892 Cr',
      highlight: 'Consistent'
    },
    {
      name: 'Mirae Asset Tax Saver Fund',
      category: 'Equity - ELSS',
      returns3Y: '20.12%',
      returns5Y: '22.45%',
      risk: 'High',
      rating: 5,
      aum: '₹15,234 Cr',
      highlight: 'Popular'
    },
    {
      name: 'Axis Long Term Equity Fund',
      category: 'Equity - ELSS',
      returns3Y: '18.67%',
      returns5Y: '19.89%',
      risk: 'High',
      rating: 4,
      aum: '₹28,456 Cr',
      highlight: 'Large AUM'
    },
    {
      name: 'DSP Tax Saver Fund',
      category: 'Equity - ELSS',
      returns3Y: '19.23%',
      returns5Y: '20.34%',
      risk: 'High',
      rating: 4,
      aum: '₹10,123 Cr',
      highlight: 'Reliable'
    },
    {
      name: 'SBI Long Term Equity Fund',
      category: 'Equity - ELSS',
      returns3Y: '17.89%',
      returns5Y: '18.76%',
      risk: 'High',
      rating: 4,
      aum: '₹22,567 Cr',
      highlight: 'Trusted'
    }
  ];

  const scrollToForm = () => {
    const formSection = document.getElementById('lead-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Very High':
        return 'text-red-600 bg-red-50';
      case 'High':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-yellow-600 bg-yellow-50';
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Best Performing Funds
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Top <span className="text-green-600">ELSS Funds</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked ELSS funds based on historical performance, consistency, and fund manager expertise
          </p>
        </div>

        {/* Fund Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funds.map((fund, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Highlight Badge */}
              {fund.highlight && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-yellow-400 to-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  {fund.highlight}
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {fund.name}
                    </h3>
                    <p className="text-sm text-gray-500">{fund.category}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(fund.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Returns */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 rounded-xl p-3">
                    <p className="text-xs text-gray-600 mb-1">3Y Returns</p>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-lg font-bold text-green-600">{fund.returns3Y}</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-3">
                    <p className="text-xs text-gray-600 mb-1">5Y Returns</p>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span className="text-lg font-bold text-blue-600">{fund.returns5Y}</span>
                    </div>
                  </div>
                </div>

                {/* Fund Details */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${getRiskColor(fund.risk)}`}>
                    {fund.risk} Risk
                  </span>
                  <span className="text-sm text-gray-600">
                    AUM: <span className="font-semibold">{fund.aum}</span>
                  </span>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToForm}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  Invest Now
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className={`mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-amber-800 mb-2">Important Disclaimer</h4>
              <p className="text-sm text-amber-700">
                Past performance does not guarantee future returns. Mutual fund investments are subject to market risks. 
                Please read all scheme-related documents carefully before investing. The returns shown are historical 
                and may vary. Consult a financial advisor before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFunds;
