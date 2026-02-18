import { useEffect, useRef, useState } from 'react';
import { 
  PiggyBank, 
  TrendingUp, 
  Clock, 
  Wallet, 
  BarChart3, 
  Shield,
  CheckCircle2
} from 'lucide-react';

const KeyBenefits = () => {
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

  const benefits = [
    {
      icon: PiggyBank,
      title: 'Save up to ₹46,800',
      subtitle: 'tax every year',
      description: 'Maximum tax savings under Section 80C for investors in the highest tax bracket (30%)',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: TrendingUp,
      title: 'High growth potential',
      subtitle: 'market-linked returns',
      description: 'Equity investments have historically delivered superior returns compared to fixed income options',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Clock,
      title: 'Lowest lock-in',
      subtitle: 'among 80C options',
      description: 'Just 3 years lock-in period, the shortest among all Section 80C investment options',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Wallet,
      title: 'Start SIP with just',
      subtitle: '₹500/month',
      description: 'Begin your tax-saving journey with an amount that fits your budget comfortably',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: BarChart3,
      title: 'Better returns than',
      subtitle: 'traditional tax savers',
      description: 'Outperforms PPF, FD, and NSC with inflation-beating returns over the long term',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: Shield,
      title: '100% secure &',
      subtitle: 'paperless process',
      description: 'Complete your investment journey online with bank-grade security and zero paperwork',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Why Choose ELSS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Key <span className="text-green-600">Benefits</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why ELSS is the preferred choice for smart investors looking to save tax and build wealth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-7 h-7 bg-gradient-to-br ${benefit.color} bg-clip-text`} style={{ color: 'inherit' }} />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                  {benefit.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Checkmark */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>

              {/* Hover Gradient Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
            <Shield className="w-5 h-5 text-green-600" />
            <span className="text-gray-700 font-medium">All investments are secure and regulated by AMFI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
