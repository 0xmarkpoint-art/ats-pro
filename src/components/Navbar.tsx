import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">ATS Pro<span className="text-blue-600">.</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#templates" className="hover:text-blue-600 transition-colors">Templates</a>
          <a href="#testimonials" className="hover:text-blue-600 transition-colors">Success Stories</a>
          <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full transition-all shadow-md shadow-blue-200 font-semibold">
            Get Bundle
          </a>
        </nav>

        <button className="md:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 flex flex-col p-4 gap-4 font-medium">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:bg-gray-50 rounded-lg">Features</a>
          <a href="#templates" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:bg-gray-50 rounded-lg">Templates</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:bg-gray-50 rounded-lg">Success Stories</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:bg-gray-50 rounded-lg">Pricing</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="bg-blue-600 text-white px-4 py-3 rounded-lg text-center font-semibold mt-2">
            Get Bundle - ₹499
          </a>
        </div>
      )}
    </header>
  );
}
