import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  const stack = [
    { name: "10 Resume Templates", value: "₹1,999" },
    { name: "10 Cover Letters", value: "₹999" },
    { name: "ATS Guide", value: "₹799" },
    { name: "LinkedIn Guide", value: "₹699" },
    { name: "Job Tracker", value: "₹499" }
  ];

  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Today's Special Offer
          </h2>
          <p className="text-xl text-blue-100">Get everything you need for less than the cost of a coffee.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative"
        >
          <div className="absolute top-0 right-8 transform -translate-y-1/2">
            <div className="bg-yellow-400 text-yellow-900 font-bold px-6 py-2 rounded-full shadow-lg text-sm uppercase tracking-wide">
              SAVE 90%
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {stack.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span className="font-medium text-gray-800">{item.name}</span>
                </div>
                <span className="text-gray-400 line-through font-medium">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between border-t-2 border-dashed border-gray-200 pt-8 mb-8 gap-6">
            <div>
              <div className="text-gray-500 font-medium mb-1">Total Value: <span className="line-through">₹4,999</span></div>
              <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">One-time payment</div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-gray-500 font-medium mb-1">Today's Price</div>
              <div className="text-5xl font-black text-gray-900 tracking-tight">₹499</div>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-xl font-bold text-xl transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1 flex items-center justify-center gap-2 group">
            Get Instant Access Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
            Secure 256-bit encrypted checkout
          </p>
        </motion.div>
      </div>
    </section>
  );
}
