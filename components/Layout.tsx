
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap">
          📢 Important Announcement: Abstract submission for ISPS 2026 is now open! Last date: Dec 31, 2025. | Venue: KBCNMU, Jalgaon, India.
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                ISPS
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-slate-800 text-lg leading-tight uppercase tracking-wider">ISPS 2026</span>
                <span className="text-xs text-slate-500 font-medium">46th Annual Convention</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-blue-700 bg-blue-50 rounded-md'
                      : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50 rounded-md'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-lg">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-6 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-6">ISPS 2026</h3>
              <p className="text-sm leading-relaxed mb-4">
                The 46th Annual Convention of ISPS aims to bring together leading academic scientists and researchers to exchange experiences and research results.
              </p>
              <div className="flex space-x-4 mt-6">
                <img src="https://picsum.photos/id/1/60/60" alt="University Logo" className="w-12 h-12 rounded filter grayscale brightness-200" />
                <img src="https://picsum.photos/id/2/60/60" alt="ISPS Logo" className="w-12 h-12 rounded filter grayscale brightness-200" />
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/call-for-papers" className="hover:text-white transition-colors">Submit Abstract</Link></li>
                <li><Link to="/registration" className="hover:text-white transition-colors">Register Now</Link></li>
                <li><Link to="/venue" className="hover:text-white transition-colors">Venue & Travel</Link></li>
                <li><Link to="/schedule" className="hover:text-white transition-colors">Program Schedule</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-blue-400 shrink-0" />
                  <span>School of Math Sciences, KBCNMU, Jalgaon, MH, India 425001</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-blue-400 shrink-0" />
                  <a href="mailto:isps2026@nmu.ac.in" className="hover:text-white">isps2026@nmu.ac.in</a>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-blue-400 shrink-0" />
                  <span>+91 257 225 7323</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Sponsors</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-16 bg-slate-800 rounded flex items-center justify-center p-2">
                   <span className="text-[10px] text-slate-500">DST-SERB</span>
                </div>
                <div className="h-16 bg-slate-800 rounded flex items-center justify-center p-2">
                   <span className="text-[10px] text-slate-500">CSIR</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>© 2026 46th Annual ISPS Convention. All Rights Reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="https://nmu.ac.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-white">
                University Website <ExternalLink size={12} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
