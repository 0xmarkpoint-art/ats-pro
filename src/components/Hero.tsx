import { motion } from 'motion/react';
import { FileText, Download, Edit3, Infinity as InfinityIcon, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-transparent blur-3xl rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-100">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              Trusted by 10,000+ Job Seekers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Land More Interviews With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">ATS-Proven</span> Resume Templates
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Beat Applicant Tracking Systems and get noticed by recruiters using professionally designed ATS-friendly resume templates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#pricing" className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5">
                Get Instant Access – ₹499
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#included" className="inline-flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                View What's Included
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: FileText, text: "ATS Optimized" },
                { icon: Download, text: "Instant Download" },
                { icon: Edit3, text: "Editable in Canva" },
                { icon: InfinityIcon, text: "Lifetime Access" }
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700 font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
            
            {/* Resume Image Container */}
            <div className="relative w-full max-w-md aspect-[3/4] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/resume-1.png" 
                alt="Professional ATS Resume Template" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // Fallback if image not found
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop";
                }}
              />
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 hidden sm:flex"
              >
                <div className="bg-green-100 p-2 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">ATS Match</div>
                  <div className="text-sm font-bold text-gray-900">98% Score</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
