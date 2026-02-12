
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Registration = lazy(() => import('./pages/Registration'));
const Committees = lazy(() => import('./pages/Committees'));
const Venue = lazy(() => import('./pages/Venue'));

// Placeholder components for other pages
const About = () => (
  <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-serif font-bold mb-8">About ISPS & KBCNMU</h1>
    <div className="prose max-w-none text-slate-600 space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-slate-900">ISPS History</h2>
        <p>The Indian Society for Probability and Statistics (ISPS) was established in 1970 to provide a platform for research and interaction among the statistical community in India and abroad. Since its inception, it has organized annual conventions that are benchmarks for academic excellence.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-slate-900">School of Mathematical Sciences</h2>
        <p>The School of Mathematical Sciences at KBCNMU is a center of excellence known for its research in Statistics, Mathematics, and Computer Science. It regularly hosts national and international workshops and seminars.</p>
      </section>
    </div>
  </div>
);

const CallForPapers = () => (
  <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-serif font-bold mb-8">Call for Papers</h1>
    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Research Tracks</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {['Stochastic Processes', 'Design of Experiments', 'Survival Analysis', 'Financial Statistics', 'Machine Learning & AI', 'Bio-Statistics', 'Big Data Analytics', 'Applied Probability'].map(t => (
          <li key={t} className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
      <div className="border-t pt-8">
        <h3 className="font-bold text-xl mb-4">Submission Guidelines</h3>
        <p className="text-slate-600 mb-6">Abstracts should be submitted in PDF format, not exceeding 500 words. Please use the LaTeX template provided below.</p>
        <div className="flex space-x-4">
           <button className="px-6 py-2 bg-slate-900 text-white rounded font-bold">Download Template</button>
           <button className="px-6 py-2 bg-blue-600 text-white rounded font-bold">Submit Abstract</button>
        </div>
      </div>
    </div>
  </div>
);

const Speakers = () => (
  <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl font-serif font-bold mb-4">Speakers</h1>
    <p className="text-slate-500 mb-12">The full list of speakers will be announced soon. Stay tuned!</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       {[1,2,3].map(i => (
         <div key={i} className="bg-white p-8 rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center h-64">
           <div className="w-20 h-20 bg-slate-100 rounded-full mb-4"></div>
           <p className="text-slate-400 font-medium italic">Speaker TBA</p>
         </div>
       ))}
    </div>
  </div>
);

const Schedule = () => (
  <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-serif font-bold mb-8">Program Schedule</h1>
    <div className="bg-blue-50 p-12 rounded-2xl text-center border-2 border-dashed border-blue-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">Schedule Under Preparation</h2>
      <p className="text-blue-700 mb-8 max-w-xl mx-auto">The detailed session-wise technical program will be uploaded by February 2026. Please check back later.</p>
      <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold opacity-50 cursor-not-allowed">Download Tentative Schedule (Coming Soon)</button>
    </div>
  </div>
);

const Contact = () => (
  <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div>
        <h1 className="text-4xl font-serif font-bold mb-6">Contact Us</h1>
        <p className="text-slate-600 mb-12 text-lg leading-relaxed">Have questions about the convention, registration, or travel? Our organizing team is here to help you.</p>
        
        <div className="space-y-8">
          <div className="flex items-start">
             <div className="bg-blue-100 p-3 rounded-lg text-blue-700 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
             </div>
             <div>
               <h4 className="font-bold text-slate-900">Address</h4>
               <p className="text-slate-500">School of Mathematical Sciences, KBCNMU, Umavi Nagar, Jalgaon - 425001, Maharashtra, India</p>
             </div>
          </div>
          <div className="flex items-start">
             <div className="bg-blue-100 p-3 rounded-lg text-blue-700 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             </div>
             <div>
               <h4 className="font-bold text-slate-900">Email</h4>
               <p className="text-slate-500">isps2026@nmu.ac.in</p>
             </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
        <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <input type="text" placeholder="Subject" className="w-full p-4 bg-slate-50 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea rows={5} placeholder="Your Message" className="w-full p-4 bg-slate-50 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">Send Message</button>
        </form>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
