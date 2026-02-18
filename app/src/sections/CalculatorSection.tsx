import { useEffect, useRef, useState } from 'react';
import { Calculator, TrendingUp, PiggyBank, BarChart3, Info } from 'lucide-react';

const CalculatorSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Calculator State
  const [monthlySIP, setMonthlySIP] = useState(12500);
  const [timePeriod, setTimePeriod] = useState(3);
  const [taxSlab, setTaxSlab] = useState(30);
  const [expectedReturns, setExpectedReturns] = useState(12);

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

  // Calculations
  const totalInvestment = monthlySIP * 12 * timePeriod;
  const estimatedReturns = Math.round(
    monthlySIP * ((Math.pow(1 + expectedReturns / 100 / 12, timePeriod * 12) - 1) / (expectedReturns / 100 / 12)) * (1 + expectedReturns / 100 / 12)
  );
  const wealthGained = estimatedReturns - totalInvestment;
  const taxSaved = Math.round(Math.min(totalInvestment, 150000) * (taxSlab / 100));

  const scrollToForm = () => {
    const formSection = document.getElementById('lead-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Plan Your Investment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ELSS Returns & <span className="text-blue-600">Tax Saving Calculator</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your potential returns and tax savings with our easy-to-use calculator
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Inputs */}
          <div className={`bg-white rounded-3xl shadow-xl p-6 sm:p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Investment Details</h3>
            </div>

            <div className="space-y-6">
              {/* Monthly SIP */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Monthly SIP Amount</span>
                  <span className="text-blue-600 font-bold">₹{monthlySIP.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="500"
                  max="12500"
                  step="500"
                  value={monthlySIP}
                  onChange={(e) => setMonthlySIP(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹500</span>
                  <span>₹12,500</span>
                </div>
              </div>

              {/* Time Period */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Investment Period</span>
                  <span className="text-green-600 font-bold">{timePeriod} Years</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="15"
                  step="1"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>3 Years</span>
                  <span>15 Years</span>
                </div>
              </div>

              {/* Tax Slab */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Tax Slab</span>
                  <span className="text-purple-600 font-bold">{taxSlab}%</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[5, 20, 30].map((slab) => (
                    <button
                      key={slab}
                      onClick={() => setTaxSlab(slab)}
                      className={`py-2 px-4 rounded-lg font-medium transition-all ${
                        taxSlab === slab
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {slab}%
                    </button>
                  ))}
                </div>
              </div>

              {/* Expected Returns */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Expected Returns (p.a.)</span>
                  <span className="text-orange-600 font-bold">{expectedReturns}%</span>
                </label>
                <input
                  type="range"
                  min="8"
                  max="18"
                  step="1"
                  value={expectedReturns}
                  onChange={(e) => setExpectedReturns(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>8%</span>
                  <span>18%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Result Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-medium text-blue-100">Est. Wealth Created</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  ₹{estimatedReturns.toLocaleString()}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <PiggyBank className="w-5 h-5" />
                  <span className="text-sm font-medium text-green-100">Tax Saved</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  ₹{taxSaved.toLocaleString()}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5" />
                  <span className="text-sm font-medium text-purple-100">Wealth Gained</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold">
                  ₹{wealthGained.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Investment Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Investment Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Total Investment</span>
                  <span className="font-semibold text-gray-900">₹{totalInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Wealth Gained</span>
                  <span className="font-semibold text-green-600">+₹{wealthGained.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Tax Saved (Year 1)</span>
                  <span className="font-semibold text-blue-600">₹{taxSaved.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-900 font-medium">Total Benefit</span>
                  <span className="font-bold text-green-600 text-lg">
                    ₹{(wealthGained + taxSaved).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={scrollToForm}
              className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4 animate-pulse-glow"
            >
              <TrendingUp className="w-5 h-5" />
              Start My SIP Today
            </button>

            {/* Info */}
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p>
                *Returns shown are indicative based on historical performance. Actual returns may vary. 
                Mutual fund investments are subject to market risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
