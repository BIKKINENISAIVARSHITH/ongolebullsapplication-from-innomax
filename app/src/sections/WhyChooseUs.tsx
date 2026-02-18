import { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  UserCheck, 
  Target, 
  FileSearch, 
  FileDigit, 
  Calculator,
  CheckCircle2,
  Shield,
  TrendingUp
} from 'lucide-react';

const WhyChooseUs = () => {
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
      icon: Award,
      title: 'AMFI Registered',
      subtitle: 'Mutual Fund Distributor',
      description: 'We are officially registered with the Association of Mutual Funds in India (AMFI), ensuring compliance and trust.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: UserCheck,
      title: 'Certified Advisor',
      subtitle: 'Mutual Fund & PMS Expert',
      description: 'Our advisors hold certifications from NISM and have extensive experience in wealth management.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      title: 'Goal-Based Investing',
      subtitle: 'Personalized Strategy',
      description: 'We create customized investment plans aligned with your financial goals and risk appetite.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileSearch,
      title: 'Free Portfolio Review',
      subtitle: 'Expert Analysis',
      description: 'Get a comprehensive analysis of your existing portfolio with actionable recommendations.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: FileDigit,
      title: '100% Paperless',
      subtitle: 'Digital Process',
      description: 'Complete your entire investment journey online with our seamless digital platform.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Calculator,
      title: 'Personalized Tax Planning',
      subtitle: 'Maximize Savings',
      description: 'Expert guidance to optimize your tax savings while building long-term wealth.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const stats = [
    { value: '1000+', label: 'Happy Investors', icon: UserCheck },
    { value: '₹50Cr+', label: 'Assets Managed', icon: TrendingUp },
    { value: '5+', label: 'Years Experience', icon: Award },
    { value: '100%', label: 'Client Satisfaction', icon: Shield }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold mb-4">
            Why Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Invest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">With Us?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Partner with a trusted financial advisor committed to your wealth creation journey
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className={`text-sm font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Checkmark */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-gray-300">Your investments are safe with AMFI-regulated platforms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
