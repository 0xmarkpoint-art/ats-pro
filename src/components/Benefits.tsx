import { motion } from 'motion/react';
import { Target, Users, PenTool, Download, RefreshCcw, Layout, Settings } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    { icon: Target, title: "ATS Friendly", desc: "Pass automated resume screeners easily." },
    { icon: Users, title: "Recruiter Approved", desc: "Designed exactly how recruiters want to read." },
    { icon: PenTool, title: "Fully Editable", desc: "Change colors, fonts, and layouts instantly." },
    { icon: Layout, title: "Canva Compatible", desc: "Edit right in your browser with Canva." },
    { icon: Download, title: "Instant Access", desc: "Download the bundle immediately after purchase." },
    { icon: RefreshCcw, title: "Lifetime Updates", desc: "Get free updates when we add new templates." },
    { icon: Settings, title: "Easy To Customize", desc: "No advanced design skills needed." },
    { icon: Target, title: "Professional Layouts", desc: "Look like a top-tier candidate instantly." }
  ];

  return (
    <section className="py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Job Seekers Love This Bundle
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors shadow-sm hover:shadow-md"
            >
              <benefit.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
