import { useEffect, useRef, useState } from 'react';
import { UserPlus, PhoneCall, FileCheck, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
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

  const steps = [
    {
      number: '1',
      icon: UserPlus,
      title: 'Enter Your Basic Details',
      description: 'Fill in your name, mobile number, email, and investment amount in our simple form.',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-100'
    },
    {
      number: '2',
      icon: PhoneCall,
      title: 'Get a Call from Our Expert',
      description: 'Our certified investment advisor will call you to understand your goals and recommend suitable funds.',
      color: 'bg-green-500',
      lightColor: 'bg-green-100'
    },
    {
      number: '3',
      icon: FileCheck,
      title: 'Complete Quick KYC',
      description: 'Complete your KYC verification online in just a few minutes with Aadhaar and PAN.',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-100'
    },
    {
      number: '4',
      icon: TrendingUp,
      title: 'Start SIP / Lumpsum',
      description: 'Begin your investment journey and save tax instantly under Section 80C.',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-100'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How It <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your ELSS investment journey in just 4 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-orange-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow h-full">
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-6 w-8 h-8 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.lightColor} rounded-2xl flex items-center justify-center mb-5 mt-4`}>
                    <step.icon className={`w-8 h-8 ${step.color.replace('bg-', 'text-')}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Check */}
                  <div className="mt-4 flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Quick & Easy</span>
                  </div>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-900">Start in less than 10 minutes</p>
              <p className="text-sm text-gray-600">Complete paperless process with instant account activation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
