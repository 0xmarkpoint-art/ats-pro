import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is this ATS friendly?",
      a: "Yes! All templates have been rigorously tested against major Applicant Tracking Systems (Workday, Greenhouse, Lever, etc.) to ensure 100% accurate parsing."
    },
    {
      q: "Can I edit the templates?",
      a: "Absolutely. All templates are fully editable in Canva. You can change colors, fonts, sections, and layouts to match your personal brand."
    },
    {
      q: "Do I need Canva Pro?",
      a: "No, you do not need Canva Pro. All templates are designed using free Canva elements so you can edit and download them without any premium subscription."
    },
    {
      q: "How do I receive the files?",
      a: "Immediately after purchase, you will be redirected to a download page and receive an email with a secure link to access all your templates and guides."
    },
    {
      q: "Is this suitable for freshers?",
      a: "Yes! We've included specific layouts designed specifically for fresh graduates and entry-level applicants that focus on education, projects, and skills rather than extensive work history."
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
