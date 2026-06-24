import { motion } from 'motion/react';
import { FileCode2, Mail, BookOpen, Linkedin, LayoutDashboard } from 'lucide-react';

export default function Included() {
  const items = [
    {
      title: "10 ATS Resume Templates",
      description: "Professionally designed, recruiter-approved formats that pass ATS screening.",
      icon: FileCode2,
      value: "₹1,999"
    },
    {
      title: "10 Cover Letter Templates",
      description: "Matching cover letters to create a cohesive professional application package.",
      icon: Mail,
      value: "₹999"
    },
    {
      title: "ATS Resume Writing Guide",
      description: "Step-by-step guide on writing bullet points that highlight your impact.",
      icon: BookOpen,
      value: "₹799"
    },
    {
      title: "LinkedIn Optimization Guide",
      description: "Strategies to attract inbound recruiter messages and profile views.",
      icon: Linkedin,
      value: "₹699"
    },
    {
      title: "Job Application Tracker",
      description: "Notion/Excel template to organize and track your application statuses.",
      icon: LayoutDashboard,
      value: "₹499"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100" id="included">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need To Get Hired Faster
          </h2>
          <p className="text-lg text-gray-600">
            A complete toolkit designed to overhaul your job search and maximize interview rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="inline-flex items-center text-sm font-semibold text-gray-400 line-through">
                Value: {item.value}
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-blue-600 rounded-2xl p-6 text-white flex flex-col justify-center items-center text-center shadow-lg"
          >
            <div className="text-blue-200 font-medium mb-2">Total Bundle Value</div>
            <div className="text-4xl font-extrabold mb-4">₹4,999</div>
            <div className="text-lg font-medium">Yours today for just ₹499</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
