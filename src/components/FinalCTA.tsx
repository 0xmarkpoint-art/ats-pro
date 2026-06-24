import { motion } from 'motion/react';
import { ShieldCheck, Zap, RefreshCw } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Your Dream Job Starts With A Better Resume
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Download instantly and start applying today. Don't let a poorly formatted resume hold back your career.
          </p>

          <a href="#pricing" className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1 mb-10">
            Get ATS Pro Resume Bundle – ₹499
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              Secure Checkout
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Instant Access
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-blue-500" />
              Lifetime Updates
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
