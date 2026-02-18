import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      question: 'Is ELSS safe?',
      answer: 'ELSS (Equity Linked Saving Scheme) is a market-linked investment that invests primarily in equities. While equity investments carry market risks, ELSS funds are regulated by SEBI and managed by professional fund managers. Over the long term (5+ years), equity investments have historically delivered superior returns compared to fixed-income options. ELSS is considered safe for investors with a long-term horizon and moderate risk appetite.'
    },
    {
      question: 'Can I withdraw before 3 years?',
      answer: 'No, ELSS has a mandatory lock-in period of 3 years, which is the shortest among all Section 80C tax-saving options. You cannot redeem or switch your ELSS investments before completing 3 years from the date of investment. However, you can continue to stay invested after the lock-in period for potentially higher returns.'
    },
    {
      question: 'SIP or Lumpsum – which is better?',
      answer: 'Both SIP (Systematic Investment Plan) and lumpsum investments have their advantages. SIP is generally recommended for salaried individuals as it helps in rupee cost averaging and instills investment discipline. Lumpsum is suitable when you have a large amount to invest and markets are at attractive valuations. For tax-saving purposes, SIP allows you to invest regularly throughout the year.'
    },
    {
      question: 'What after 3 years?',
      answer: 'After the 3-year lock-in period, you have two options: 1) Redeem your units partially or fully, or 2) Continue staying invested for potentially higher returns. We recommend staying invested for 5-7 years or more to benefit from the power of compounding. Long-term capital gains (LTCG) up to ₹1 lakh per year are tax-free, and gains beyond that are taxed at 10%.'
    },
    {
      question: 'How much tax can I save with ELSS?',
      answer: 'You can save up to ₹46,800 in taxes annually by investing in ELSS. Under Section 80C, you can claim a deduction of up to ₹1.5 lakh. If you are in the 30% tax bracket, your tax savings would be ₹45,000 plus 4% cess, totaling ₹46,800. This is in addition to the wealth creation potential from equity returns.'
    },
    {
      question: 'What is the minimum investment in ELSS?',
      answer: 'You can start investing in ELSS with as low as ₹500 per month through SIP (Systematic Investment Plan). For lumpsum investments, the minimum amount varies by fund but is typically ₹500 or ₹1,000. This makes ELSS accessible to investors with different budget sizes.'
    },
    {
      question: 'Can I invest in multiple ELSS funds?',
      answer: 'Yes, you can invest in multiple ELSS funds to diversify your portfolio. However, the total tax deduction under Section 80C is capped at ₹1.5 lakh across all eligible investments including ELSS, PPF, LIC, etc. We recommend consulting our advisors to create a balanced portfolio based on your risk profile.'
    },
    {
      question: 'How do I track my ELSS investments?',
      answer: 'Once you invest through us, you will receive login credentials for our portfolio tracking platform. You can view your investments, returns, and portfolio performance 24/7. We also provide regular portfolio review calls and market updates to keep you informed about your investments.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about ELSS investments
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="px-5 pb-5 pl-13">
                  <p className="text-gray-600 leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="tel:+919281111730"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <HelpCircle className="w-5 h-5" />
            Talk to Our Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
