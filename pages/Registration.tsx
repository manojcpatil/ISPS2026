
import React from 'react';
import { REGISTRATION_FEES } from '../constants';
import { CheckCircle, CreditCard, HelpCircle } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Registration Details</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">Join hundreds of researchers and academicians at the 46th Annual Convention. Early bird discounts are available for a limited time.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-8 py-6 font-bold text-lg">Category</th>
                  <th className="px-8 py-6 font-bold text-lg">Early Bird (Until Jan 30)</th>
                  <th className="px-8 py-6 font-bold text-lg">Regular</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {REGISTRATION_FEES.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-6 text-slate-700 font-medium">{fee.category}</td>
                    <td className="px-8 py-6">
                      <span className="text-blue-600 font-bold text-xl">{fee.earlyBird}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="text-slate-900 font-bold text-xl">{fee.regular}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <CreditCard className="text-blue-600 mr-3" />
              Payment Instructions
            </h3>
            <div className="space-y-6">
              <p className="text-slate-600">Registration fee includes access to all sessions, conference kit, lunch and snacks during the conference days.</p>
              
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Bank Details for NEFT/IMPS:</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex justify-between"><span>Account Name:</span> <span className="font-bold">ISPS 2026 CONVENTION</span></li>
                  <li className="flex justify-between"><span>Bank Name:</span> <span className="font-bold">State Bank of India</span></li>
                  <li className="flex justify-between"><span>Branch:</span> <span className="font-bold">KBCNMU Campus, Jalgaon</span></li>
                  <li className="flex justify-between"><span>Account No:</span> <span className="font-bold">123456789012</span></li>
                  <li className="flex justify-between"><span>IFSC Code:</span> <span className="font-bold">SBIN0007559</span></li>
                </ul>
              </div>

              <div className="flex items-center space-x-2 text-sm text-slate-500 italic">
                <HelpCircle size={16} />
                <span>Please keep your transaction ID and receipt screenshot for the registration form.</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 p-8 rounded-2xl text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Ready to Register?</h3>
            <ul className="space-y-4 mb-8">
              {[
                "Complete the payment via NEFT/UPI",
                "Fill out the online registration form",
                "Upload your ID proof and payment receipt",
                "Receive confirmation email within 48 hours"
              ].map((step, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-blue-400 mr-3 shrink-0" size={20} />
                  <span className="text-slate-200">{step}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-all text-lg shadow-md">
              Go to Online Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
