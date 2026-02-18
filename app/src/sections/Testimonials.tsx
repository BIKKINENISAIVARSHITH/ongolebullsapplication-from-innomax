import { useEffect, useRef, useState } from 'react';
import { Star, Quote, User } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'IT Professional',
      location: 'Hyderabad',
      image: null,
      rating: 5,
      text: 'Saved ₹46,800 in tax and started my wealth journey! The team at Ongolebulls made the entire process so simple. Their expert guidance helped me choose the right ELSS funds that have given excellent returns.',
      highlight: 'Saved ₹46,800'
    },
    {
      name: 'Sneha Reddy',
      role: 'Salaried Employee',
      location: 'Bangalore',
      image: null,
      rating: 5,
      text: 'Paperless process and expert guidance. I was able to complete my KYC and start my SIP within 15 minutes. The advisors are knowledgeable and always available to answer queries.',
      highlight: '15 min KYC'
    },
    {
      name: 'Kiran Kumar',
      role: 'Business Owner',
      location: 'Chennai',
      image: null,
      rating: 5,
      text: 'As a first-time investor, I was hesitant about mutual funds. The team explained everything clearly and helped me start with a small SIP. Now I have confidence in my investment decisions.',
      highlight: 'First-time Investor'
    },
    {
      name: 'Priya Patel',
      role: 'Software Engineer',
      location: 'Pune',
      image: null,
      rating: 5,
      text: 'The goal-based approach really worked for me. They understood my financial goals and created a personalized plan. My portfolio has grown significantly in just 2 years.',
      highlight: 'Portfolio Growth'
    },
    {
      name: 'Arun Verma',
      role: 'Marketing Manager',
      location: 'Mumbai',
      image: null,
      rating: 5,
      text: 'Excellent service and regular portfolio reviews. They keep me updated on market trends and suggest rebalancing when needed. Truly a partner in my wealth creation journey.',
      highlight: 'Regular Reviews'
    },
    {
      name: 'Meera Iyer',
      role: 'Doctor',
      location: 'Delhi',
      image: null,
      rating: 5,
      text: 'Being a busy professional, I needed someone to handle my investments efficiently. Ongolebulls has been managing my portfolio expertly, allowing me to focus on my career.',
      highlight: 'Hassle-free'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-green-600">Investors Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients who have achieved their financial goals with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-500 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>

              {/* Highlight Badge */}
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-4">
                {testimonial.highlight}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-full">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">Average Rating</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-5 py-3 rounded-full">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-green-400 rounded-full border-2 border-white" />
              ))}
            </div>
            <span className="text-gray-600">1000+ Happy Investors</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
