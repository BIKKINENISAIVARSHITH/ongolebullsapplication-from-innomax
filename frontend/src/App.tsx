import StickyTopBar from './sections/StickyTopBar';
import HeroSection from './sections/HeroSection';
import WhatIsELSS from './sections/WhatIsELSS';
import KeyBenefits from './sections/KeyBenefits';
import ComparisonTable from './sections/ComparisonTable';
import CalculatorSection from './sections/CalculatorSection';
import TopFunds from './sections/TopFunds';
import WhyChooseUs from './sections/WhyChooseUs';
import HowItWorks from './sections/HowItWorks';
import Testimonials from './sections/Testimonials';
import LeadForm from './sections/LeadForm';
import FAQSection from './sections/FAQSection';
import StickyBottomCTA from './sections/StickyBottomCTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Top Bar - Urgency + CTA */}
      <StickyTopBar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* What is ELSS */}
      <section id="what-is-elss">
        <WhatIsELSS />
      </section>
      
      {/* Key Benefits */}
      <section id="benefits">
        <KeyBenefits />
      </section>
      
      {/* Comparison Table */}
      <ComparisonTable />
      
      {/* Calculator Section */}
      <section id="calculator">
        <CalculatorSection />
      </section>
      
      {/* Top ELSS Funds */}
      <section id="top-funds">
        <TopFunds />
      </section>
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Lead Capture Form */}
      <LeadForm />
      
      {/* FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>
      
      {/* Footer */}
      <Footer />
      
      {/* Sticky Bottom CTA (Mobile) + Floating WhatsApp (Desktop) */}
      <StickyBottomCTA />
    </div>
  );
}

export default App;
