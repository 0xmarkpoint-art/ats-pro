import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 500px, but hide when near the bottom pricing section
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const isNearBottom = docHeight - (scrolled + winHeight) < 1000;
      
      setIsVisible(scrolled > 500 && !isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
        >
          <a 
            href="#pricing"
            className="flex items-center justify-between bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-2xl font-bold border border-blue-500"
          >
            <span>Get Bundle – ₹499</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
