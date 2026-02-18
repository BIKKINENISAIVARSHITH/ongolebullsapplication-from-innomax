import { useEffect, useRef, useState } from 'react';
import { Trophy, Check, AlertCircle } from 'lucide-react';

const ComparisonTable = () => {
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

  const comparisonData = [
    {
      feature: 'Lock-in Period',
      elss: '3 Years',
      ppf: '15 Years',
      fd: '5 Years',
      lic: '10-20 Years',
      nsc: '5 Years',
      winner: 'elss'
    },
    {
      feature: 'Returns',
      elss: 'Market Linked (High)',
      ppf: 'Fixed (Low)',
      fd: 'Fixed (Low)',
      lic: 'Fixed',
      nsc: 'Fixed',
      winner: 'elss'
    },
    {
      feature: 'Tax on Maturity',
      elss: 'LTCG 10%*',
      ppf: 'Tax Free',
      fd: 'Taxable',
      lic: 'Tax Free',
      nsc: 'Taxable',
      winner: 'ppf'
    },
    {
      feature: 'Liquidity',
      elss: 'High',
      ppf: 'Very Low',
      fd: 'Low',
      lic: 'Very Low',
      nsc: 'Low',
      winner: 'elss'
    },
    {
      feature: 'Min Investment',
      elss: '₹500 (SIP)',
      ppf: '₹500/year',
      fd: '₹1,000',
      lic: '₹10,000/year',
      nsc: '₹1,000',
      winner: 'elss'
    },
    {
      feature: 'Wealth Creation',
      elss: 'Excellent',
      ppf: 'Moderate',
      fd: 'Low',
      lic: 'Low',
      nsc: 'Low',
      winner: 'elss'
    }
  ];

  const getCellStyle = (value: string, isWinner: boolean) => {
    if (isWinner) {
      return 'bg-green-50 text-green-700 font-semibold';
    }
    if (value.includes('Low') || value.includes('Taxable') || value.includes('Very Low')) {
      return 'text-red-600';
    }
    if (value.includes('High') || value.includes('Excellent') || value.includes('Tax Free')) {
      return 'text-green-600';
    }
    return 'text-gray-700';
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            ELSS vs <span className="text-blue-600">Other 80C Options</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how ELSS compares with other popular tax-saving instruments under Section 80C
          </p>
        </div>

        {/* Desktop Table */}
        <div className={`hidden lg:block overflow-hidden rounded-3xl shadow-xl border border-gray-200 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <th className="px-6 py-5 text-left font-semibold text-lg">Feature</th>
                <th className="px-6 py-5 text-center font-bold text-lg bg-green-600">
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="w-5 h-5" />
                    ELSS
                  </div>
                </th>
                <th className="px-6 py-5 text-center font-semibold text-lg">PPF</th>
                <th className="px-6 py-5 text-center font-semibold text-lg">Tax Saver FD</th>
                <th className="px-6 py-5 text-center font-semibold text-lg">LIC</th>
                <th className="px-6 py-5 text-center font-semibold text-lg">NSC</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 font-medium text-gray-900 border-b border-gray-100">
                    {row.feature}
                  </td>
                  <td className={`px-6 py-4 text-center border-b border-gray-100 ${getCellStyle(row.elss, row.winner === 'elss')}`}>
                    <div className="flex items-center justify-center gap-2">
                      {row.winner === 'elss' && <Check className="w-4 h-4 text-green-600" />}
                      {row.elss}
                    </div>
                  </td>
                  <td className={`px-6 py-4 text-center border-b border-gray-100 ${getCellStyle(row.ppf, row.winner === 'ppf')}`}>
                    <div className="flex items-center justify-center gap-2">
                      {row.winner === 'ppf' && <Check className="w-4 h-4 text-green-600" />}
                      {row.ppf}
                    </div>
                  </td>
                  <td className={`px-6 py-4 text-center border-b border-gray-100 ${getCellStyle(row.fd, row.winner === 'fd')}`}>
                    <div className="flex items-center justify-center gap-2">
                      {row.winner === 'fd' && <Check className="w-4 h-4 text-green-600" />}
                      {row.fd}
                    </div>
                  </td>
                  <td className={`px-6 py-4 text-center border-b border-gray-100 ${getCellStyle(row.lic, row.winner === 'lic')}`}>
                    <div className="flex items-center justify-center gap-2">
                      {row.winner === 'lic' && <Check className="w-4 h-4 text-green-600" />}
                      {row.lic}
                    </div>
                  </td>
                  <td className={`px-6 py-4 text-center border-b border-gray-100 ${getCellStyle(row.nsc, row.winner === 'nsc')}`}>
                    <div className="flex items-center justify-center gap-2">
                      {row.winner === 'nsc' && <Check className="w-4 h-4 text-green-600" />}
                      {row.nsc}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {comparisonData.map((row, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-blue-600 text-white px-4 py-3 font-semibold">
                {row.feature}
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-2 border-green-200">
                  <span className="font-semibold text-green-800">ELSS</span>
                  <span className="font-bold text-green-700">{row.elss}</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-gray-600">PPF</span>
                  <span className="text-gray-700">{row.ppf}</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-gray-600">Tax Saver FD</span>
                  <span className="text-gray-700">{row.fd}</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-gray-600">LIC</span>
                  <span className="text-gray-700">{row.lic}</span>
                </div>
                <div className="flex justify-between items-center p-2">
                  <span className="text-gray-600">NSC</span>
                  <span className="text-gray-700">{row.nsc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Winner Highlight */}
        <div className={`mt-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 sm:p-8 text-white text-center shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Trophy className="w-8 h-8" />
              <h3 className="text-2xl sm:text-3xl font-bold">ELSS is the Winner!</h3>
            </div>
            <p className="text-lg sm:text-xl text-green-100">
              The best option for wealth creation + tax saving combined
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className={`mt-6 flex items-start gap-2 text-sm text-gray-500 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <p>* LTCG up to ₹1 lakh per year is tax-free. Beyond that, 10% tax applies.</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
