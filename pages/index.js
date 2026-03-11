import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { createClient } from '@supabase/supabase-js';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// BRAND COLOURS
const PEAR_SAGE = "#C1D72E"; // Softened from the bright lime
const ISOVITA_GREY = "#333333";
const ISOVITA_CORAL = "#FF7F50";

// Stable Section Component to prevent focus loss
const FormSection = ({ title, number, currentStep, setStep, children }) => {
  const isOpen = currentStep === number;
  return (
    <div className={`mb-6 bg-white rounded-2xl border border-gray-100 transition-all duration-500 ${isOpen ? 'shadow-sm ring-1 ring-gray-50' : 'opacity-80'}`}>
      <button 
        type="button"
        onClick={() => setStep(number)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${currentStep >= number ? 'bg-[#C1D72E] text-white' : 'bg-gray-100 text-gray-400'}`}>
            {number}
          </div>
          <h3 className="font-semibold text-sm uppercase tracking-widest text-[#333]">{title}</h3>
        </div>
        {isOpen ? <ChevronUp size={18} className="text-gray-300" /> : <ChevronDown size={18} className="text-gray-300" />}
      </button>
      {isOpen && (
        <div className="px-5 pb-8 space-y-5 animate-in fade-in slide-in-from-top-1 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '', email: '', mobile: '', year_born: '',
    sport: '', event_type: '', training_freq: '',
    sweetness_fatigue: 'No', gi_distress: 'No',
    cspf_member: false, gdpr_consent: false,
    lead_source: 'CS&PF Dinner March 2026'
  });

  // Generate years for dropdown (90 years ago to 14 years ago)
  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const start = currentYear - 90;
    const end = currentYear - 14;
    return Array.from({ length: end - start + 1 }, (_, i) => end - i);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.gdpr_consent) return alert("Please accept the data consent.");
    setLoading(true);
    const { error } = await supabase.from('registrations').insert([formData]);
    if (error) alert("Error: " + error.message);
    else setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-8 text-center font-sans">
        <div className="max-w-sm">
          <CheckCircle2 size={50} className="mx-auto mb-6 text-[#FF7F50] opacity-80" />
          <h1 className="text-2xl font-bold mb-4 tracking-tight text-[#333]">❤️ THANK YOU FROM ISOVITA</h1>
          <p className="text-gray-500 text-sm leading-relaxed">Your details are in. We'll be in touch to begin our Alpha Testing Program.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#333] pb-20 font-sans selection:bg-[#C1D72E]/20">
      <Head>
        <title>ISOVITA | Alpha Program</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Header with Softened Wave */}
      <div className="relative bg-white pt-16 pb-28 overflow-hidden">
        <div className="max-w-xl mx-auto px-8 relative z-10 text-center">
          <h1 className="text-5xl font-black tracking-tighter mb-2 text-[#1A1A1A]">ISOVITA</h1>
          <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-300 mb-10">Cognitive Endurance Fuel</p>
          <h2 className="text-2xl font-bold leading-tight mb-4 text-[#333]">Become a co-creator of ISOVITA's Alpha Program</h2>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">Help develop the pure food alternative to sports nutrition.</p>
        </div>
        
        {/* The Curve Device - Softened Pear Sage */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-32">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#C1D72E' }}></path>
          </svg>
        </div>
      </div>

      <main className="max-w-xl mx-auto px-6 -mt-10 relative z-20">
        <form onSubmit={handleSubmit}>
          
          <FormSection title="Personal Details" number={1} currentStep={step} setStep={setStep}>
            <input name="full_name" type="text" placeholder="Full Name" required value={formData.full_name} onChange={handleChange} className="w-full p-3 border-b border-gray-100 focus:border-[#C1D72E] outline-none transition-colors" />
            <input name="email" type="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="w-full p-3 border-b border-gray-100 focus:border-[#C1D72E] outline-none transition-colors" />
            <div className="flex gap-4">
              <input name="mobile" type="tel" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="w-1/2 p-3 border-b border-gray-100 focus:border-[#C1D72E] outline-none transition-colors" />
              <select name="year_born" value={formData.year_born} onChange={handleChange} className="w-1/2 p-3 border-b border-gray-100 bg-transparent outline-none text-gray-400">
                <option value="">Year of Birth</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <button type="button" onClick={() => setStep(2)} className="w-full py-3 text-[#C1D72E] font-bold text-[10px] uppercase tracking-[0.2em] text-center mt-2">Next Section</button>
          </FormSection>

          <FormSection title="Athletic Profile" number={2} currentStep={step} setStep={setStep}>
            <input name="sport" type="text" placeholder="Primary Sport" value={formData.sport} onChange={handleChange} className="w-full p-3 border-b border-gray-100 focus:border-[#C1D72E] outline-none transition-colors" />
            <select name="event_type" value={formData.event_type} onChange={handleChange} className="w-full p-3 border-b border-gray-100 bg-transparent outline-none text-gray-400">
              <option value="">Select Event Type</option>
              <option value="Channel Swim">Channel Swim</option>
              <option value="Ironman / Triathlon">Ironman / Triathlon</option>
              <option value="HYROX / Crossfit">HYROX / Crossfit</option>
              <option value="Marathon / Ultra">Marathon / Ultra</option>
            </select>
            <label className="flex items-center gap-3 pt-4 cursor-pointer group">
              <input name="cspf_member" type="checkbox" checked={formData.cspf_member} onChange={handleChange} className="w-4 h-4 rounded accent-[#C1D72E]" />
              <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors uppercase tracking-wider">I am a CS&PF Member</span>
            </label>
            <button type="button" onClick={() => setStep(3)} className="w-full py-3 text-[#C1D72E] font-bold text-[10px] uppercase tracking-[0.2em] text-center mt-2">Next Section</button>
          </FormSection>

          <FormSection title="Nutrition Insights" number={3} currentStep={step} setStep={setStep}>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Do you experience sweetness fatigue?</p>
                <div className="flex gap-2">
                  {['No', 'Sometimes', 'Yes'].map(opt => (
                    <button key={opt} type="button" onClick={() => setFormData({...formData, sweetness_fatigue: opt})} className={`flex-1 py-2.5 rounded-xl border text-[10px] uppercase tracking-widest transition-all ${formData.sweetness_fatigue === opt ? 'bg-[#C1D72E] border-[#C1D72E] text-white font-bold' : 'border-gray-100 text-gray-300'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <label className="flex items-start gap-3 pt-4 cursor-pointer group">
                <input name="gdpr_consent" type="checkbox" checked={formData.gdpr_consent} onChange={handleChange} className="mt-0.5 w-4 h-4 rounded accent-[#FF7F50]" />
                <span className="text-[10px] text-gray-400 leading-relaxed group-hover:text-gray-500 transition-colors">I consent to ISOVITA processing my data for the Alpha Program in accordance with UK GDPR.</span>
              </label>
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF7F50] text-white font-bold py-5 rounded-2xl shadow-xl shadow-coral-500/20 hover:brightness-110 active:scale-[0.98] transition-all uppercase text-xs tracking-[0.3em] disabled:opacity-50"
              >
                {loading ? 'Registering...' : 'Join the Program'}
              </button>
            </div>
          </FormSection>

        </form>
      </main>
    </div>
  );
}
