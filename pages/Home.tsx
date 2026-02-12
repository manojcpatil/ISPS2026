
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Award, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { DEADLINES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/24/1600/900" 
            alt="University Campus" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              International Convention
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
              46th Annual Convention of ISPS 2026
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 leading-relaxed">
              International Conference on Frontiers of Statistics, Probability & Data Science
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
              <div className="flex items-center">
                <Calendar className="text-blue-400 mr-3" size={24} />
                <div>
                  <div className="text-sm text-slate-400 font-medium">Date</div>
                  <div className="font-semibold">March 12-14, 2026</div>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-400 mr-3" size={24} />
                <div>
                  <div className="text-sm text-slate-400 font-medium">Venue</div>
                  <div className="font-semibold">KBCNMU, Jalgaon, India</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/registration" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-all flex items-center"
              >
                Register Now <ChevronRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/call-for-papers" 
                className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold rounded-md transition-all"
              >
                Call for Papers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Quick Info */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-900 mb-1">45+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Legacy Years</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-900 mb-1">500+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Participants</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-900 mb-1">15+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Global Keynotes</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-900 mb-1">10+</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wide">Research Tracks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout (Sidebar style similar to requested site) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              <article>
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 relative">
                  About the Convention
                  <span className="absolute bottom-[-10px] left-0 w-20 h-1 bg-blue-600"></span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  The Indian Society for Probability and Statistics (ISPS) is one of the oldest and most prestigious societies dedicated to the growth of statistical science in India. The 46th Annual Convention is a premier gathering of statisticians, probabilists, and data scientists from across the globe.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Hosted by the School of Mathematical Sciences, KBCNMU, Jalgaon, this convention will focus on "Frontiers of Statistics, Probability & Data Science". It serves as a platform to explore emerging trends in AI, Machine Learning, and Big Data through the lens of foundational statistical theory.
                </p>
              </article>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <BookOpen className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Rich Academic Program</h3>
                  <p className="text-slate-500 text-sm">Including plenary sessions, invited talks, and parallel paper presentations across various specializations.</p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                  <Award className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-3">Awards & Recognition</h3>
                  <p className="text-slate-500 text-sm">Special prizes for Best Research Paper and Young Statistician awards to encourage upcoming researchers.</p>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Important Dates */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
                <div className="bg-blue-900 text-white px-6 py-4 flex items-center">
                  <Clock className="mr-3" size={20} />
                  <h3 className="font-bold text-lg">Important Dates</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-6">
                    {DEADLINES.map((deadline, idx) => (
                      <li key={idx} className="flex flex-col border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                        <span className="text-sm font-medium text-slate-900 mb-1">{deadline.event}</span>
                        <span className="text-xs font-bold text-blue-600 uppercase">{deadline.date}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/call-for-papers" className="mt-8 block text-center py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-md transition-colors text-sm">
                    View Full Calendar
                  </Link>
                </div>
              </div>

              <div className="bg-blue-600 rounded-xl p-8 text-white shadow-lg relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">Paper Submission</h3>
                  <p className="text-blue-100 text-sm mb-6">Submit your latest research findings to be considered for presentation and publication.</p>
                  <button className="bg-white text-blue-600 px-6 py-2 rounded font-bold text-sm hover:bg-blue-50 transition-colors">
                    Submit Now
                  </button>
                </div>
                <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-10 transform rotate-12 group-hover:scale-110 transition-transform">
                   <Users size={120} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Speakers Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Eminent Speakers</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Learn from world-renowned experts in the field of statistics and mathematical sciences.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4 bg-slate-100">
                  <img 
                    src={`https://picsum.photos/id/${i + 60}/400/500`} 
                    alt="Speaker" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-1">Speaker Name {i}</h4>
                <p className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">Keynote Speaker</p>
                <p className="text-sm text-slate-500">University of Excellence, Country</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/speakers" className="inline-flex items-center text-blue-600 font-bold hover:underline">
              View All Speakers <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
