import { motion } from 'motion/react';
import { AlertCircle, Clock, FileWarning } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      value: "75%",
      label: "of resumes are rejected by ATS systems",
      icon: AlertCircle,
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      value: "6 Sec",
      label: "average recruiter review time",
      icon: Clock,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      value: "90%",
      label: "of applicants use poor resume formatting",
      icon: FileWarning,
      color: "text-orange-600",
      bg: "bg-orange-50"
    }
  ];

  return (
    <section className="py-20 bg-white" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Most Resumes Never Reach Recruiters
          </h2>
          <p className="text-lg text-gray-600">
            The job market is broken. If your resume isn't formatted specifically for Applicant Tracking Systems, no human will ever see it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative overflow-hidden group hover:border-gray-200 transition-colors"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                {stat.value}
              </div>
              <p className="text-gray-600 font-medium text-lg leading-snug">
                {stat.label}
              </p>
              
              <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <stat.icon className="w-40 h-40" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
