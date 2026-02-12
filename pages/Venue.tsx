
import React from 'react';
import { Train, Bus, Plane, MapPin, Info } from 'lucide-react';

const Venue: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen animate-in fade-in duration-500">
      {/* Visual Banner */}
      <div className="h-64 md:h-96 relative bg-slate-900">
        <img 
          src="https://picsum.photos/id/122/1600/600" 
          alt="Jalgaon City" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Venue & Travel</h1>
            <p className="text-white/80 text-lg">School of Mathematical Sciences, KBCNMU, Jalgaon</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                <MapPin className="text-blue-600 mr-3" />
                About the Campus
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  Kavayitri Bahinabai Chaudhari North Maharashtra University (KBCNMU) is nestled in the foothills of the Satpura ranges. The sprawling 660-acre campus is known for its lush green environment and modern infrastructure.
                </p>
                <p>
                  The School of Mathematical Sciences is equipped with state-of-the-art computer labs, high-speed internet, and dedicated seminar halls that will host the various sessions of the ISPS 2026 convention.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">How to Reach Jalgaon</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <Train className="text-blue-600 mb-4" size={28} />
                  <h4 className="font-bold mb-2">By Train</h4>
                  <p className="text-sm text-slate-500">Jalgaon Junction is a major station on the Mumbai-Howrah and Mumbai-Delhi routes. Excellent connectivity from all major Indian cities.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <Bus className="text-blue-600 mb-4" size={28} />
                  <h4 className="font-bold mb-2">By Road</h4>
                  <p className="text-sm text-slate-500">Situated on NH-6. Regular luxury and state transport buses are available from Pune, Mumbai, Indore, and Aurangabad.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <Plane className="text-blue-600 mb-4" size={28} />
                  <h4 className="font-bold mb-2">By Air</h4>
                  <p className="text-sm text-slate-500">Nearest international airports: Mumbai (CSMIA) or Aurangabad. Domestic flights to Jalgaon Airport are intermittent.</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-xl border border-slate-200">
               <h2 className="text-2xl font-bold text-slate-900 mb-4">Accommodation</h2>
               <p className="text-slate-600 mb-6">Limited accommodation is available in the University Guest House for research scholars. For others, several high-quality hotels are available in Jalgaon city within a 10km radius of the campus.</p>
               <button className="text-blue-600 font-bold hover:underline">View Suggested Hotels List (PDF)</button>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Jalgaon Overview</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Known as the "Banana Capital of India", Jalgaon is also famous for its Gold jewelry and proximity to the UNESCO World Heritage site: <strong>Ajanta Caves</strong> (approx. 60km).
              </p>
              <div className="aspect-video rounded-lg overflow-hidden bg-slate-800 flex items-center justify-center">
                 <img src="https://picsum.photos/id/101/400/250" alt="Map View" className="w-full h-full object-cover grayscale opacity-50" />
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
               <div className="flex items-start">
                  <Info className="text-blue-600 mr-3 mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Pro-Tip for Travelers</h4>
                    <p className="text-sm text-blue-800">Plan a visit to Ajanta Caves on Sunday, March 15. The university can help arrange group transport for participants.</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Venue;
