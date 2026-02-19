import { useEffect, useRef, useState } from 'react';
import { PiggyBank, TrendingUp, Clock, Target, Users, Building } from 'lucide-react';

const WhatIsELSS = () => {
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

  const features = [
    {
      icon: PiggyBank,
      title: 'Tax Savings',
      description: 'Save tax under Section 80C (up to ₹1.5 lakh)',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Wealth Creation',
      description: 'Invests in equities for long-term wealth creation',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Clock,
      title: 'Shortest Lock-in',
      description: 'Has the shortest lock-in of just 3 years',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const idealFor = [
    { icon: Users, text: 'Salaried individuals' },
    { icon: Target, text: 'First-time investors' },
    { icon: Building, text: 'Young professionals' },
    { icon: PiggyBank, text: 'Taxpayers in the old regime' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Understanding ELSS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What is <span className="text-blue-600">ELSS</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Equity Linked Saving Scheme (ELSS) is a tax-saving mutual fund that combines tax benefits with wealth creation potential
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Equity Linked Saving Scheme
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                ELSS is a diversified equity mutual fund that invests primarily in stocks of companies across market capitalizations. It offers the dual benefit of tax savings under Section 80C of the Income Tax Act along with the potential for higher returns through equity investments.
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-3`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Ideal For */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Target className="w-7 h-7 text-green-600" />
                Ideal For
              </h3>
              <div className="space-y-4">
                {idealFor.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors cursor-default"
                  >
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-medium text-gray-800">{item.text}</span>
                    <div className="ml-auto">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                <p className="text-blue-800 font-medium">
                  Whether you're a beginner or experienced investor, ELSS is the perfect starting point for your equity investment journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsELSS;
