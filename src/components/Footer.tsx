export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <span className="font-bold text-xl tracking-tight text-white">ATS Pro<span className="text-blue-600">.</span></span>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>
        <div className="text-center text-sm mt-12 border-t border-gray-800 pt-8">
          &copy; {new Date().getFullYear()} ATS Pro Resume. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
