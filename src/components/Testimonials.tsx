import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I received 3 interview calls in two weeks after switching to these templates. The ATS guide is pure gold.",
      name: "Sarah J.",
      role: "Marketing Manager",
      initial: "S",
      color: "bg-purple-100 text-purple-700"
    },
    {
      quote: "My resume finally started getting noticed. The clean layout makes such a difference compared to my old one.",
      name: "Michael R.",
      role: "Software Engineer",
      initial: "M",
      color: "bg-blue-100 text-blue-700"
    },
    {
      quote: "Best career investment I've made. The cover letter templates saved me hours of writing for each application.",
      name: "Priya P.",
      role: "Data Analyst",
      initial: "P",
      color: "bg-emerald-100 text-emerald-700"
    }
  ];

  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of professionals who landed their dream jobs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 font-medium text-lg mb-8 flex-1 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${t.color}`}>
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
