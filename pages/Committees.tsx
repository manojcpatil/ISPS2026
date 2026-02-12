
import React from 'react';
import { COMMITTEES } from '../constants';
import { ShieldCheck, Star, Users } from 'lucide-react';

const Committees: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Conference Committees</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">The convention is guided by leading academicians and researchers dedicated to making this event a global success.</p>
        </div>

        {/* Patrons */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
             <div className="bg-blue-900 p-2 rounded mr-4">
                <ShieldCheck className="text-white" size={24} />
             </div>
             <h2 className="text-2xl font-bold text-slate-900">Chief Patrons</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMMITTEES.patrons.map((m, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{m.name}</h3>
                <p className="text-blue-600 font-medium">{m.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Organizing */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
             <div className="bg-blue-900 p-2 rounded mr-4">
                <Users className="text-white" size={24} />
             </div>
             <h2 className="text-2xl font-bold text-slate-900">Organizing Committee</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMMITTEES.organizing.map((m, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{m.name}</h3>
                <p className="text-slate-500 text-sm mb-2">{m.role}</p>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                   <div className="w-1/3 h-full bg-blue-600"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Advisory */}
        <section>
          <div className="flex items-center mb-8">
             <div className="bg-blue-900 p-2 rounded mr-4">
                <Star className="text-white" size={24} />
             </div>
             <h2 className="text-2xl font-bold text-slate-900">National/International Advisory</h2>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <ul className="divide-y divide-slate-100">
              {COMMITTEES.advisory.map((m, i) => (
                <li key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-slate-50">
                  <span className="font-bold text-slate-800">{m.name}</span>
                  <span className="text-slate-500 text-sm italic">{m.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Committees;
