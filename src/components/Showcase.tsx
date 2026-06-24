import { motion } from 'motion/react';
import { Eye } from 'lucide-react';

export default function Showcase() {
  const templates = [
    "Software Engineer",
    "Data Analyst",
    "Marketing Manager",
    "Sales Executive",
    "HR Specialist",
    "Finance Professional",
    "Project Manager",
    "Operations Manager",
    "Customer Success Manager",
    "Fresh Graduate"
  ];

  const fallbacks = [
    "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503694978374-8a2fa8305c61?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4273?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop"
  ];

  return (
    <section className="py-24 bg-white" id="templates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            10 Professional ATS Resume Designs
          </h2>
          <p className="text-lg text-gray-600">
            Tailored layouts for every industry, ensuring your experience is highlighted perfectly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {templates.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 cursor-pointer"
            >
              <img 
                src={`/resume-${index + 1}.png`} 
                alt={`${role} Resume Template`}
                className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbacks[index];
                }}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <Eye className="w-8 h-8 text-white mb-2" />
                <span className="text-white font-semibold text-sm leading-tight">{role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
