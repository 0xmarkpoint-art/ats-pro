import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See The Difference
          </h2>
          <p className="text-lg text-gray-400">
            Stop losing opportunities due to poor formatting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <span className="bg-red-500/20 p-2 rounded-lg">
                <X className="w-6 h-6" />
              </span>
              Generic Resume
            </h3>
            <ul className="space-y-4">
              {[
                "Failed ATS parses and lost data",
                "Cluttered layout recruiters ignore",
                "Weak bullet points that lack impact",
                "Inconsistent fonts and margins",
                "Low interview conversion rate"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-2">
              <span className="bg-blue-500/20 p-2 rounded-lg">
                <Check className="w-6 h-6" />
              </span>
              ATS Pro Resume
            </h3>
            <ul className="space-y-4">
              {[
                "100% ATS-friendly parsing structure",
                "Clean, recruiter-approved hierarchy",
                "Action-oriented achievement bullet points",
                "Perfect typography and negative space",
                "Significantly higher interview rate"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
