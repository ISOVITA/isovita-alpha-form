import React, { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import { createClient } from '@supabase/supabase-js';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const BRAND_BLOCK = "#a50251"; 

// Common Country Codes for the dropdown
const countryCodes = [
  { code: '+44', name: 'United Kingdom', iso: 'GB' },
  { code: '+1', name: 'United States', iso: 'US' },
  { code: '+353', name: 'Ireland', iso: 'IE' },
  { code: '+33', name: 'France', iso: 'FR' },
  { code: '+49', name: 'Germany', iso: 'DE' },
  { code: '+34', name: 'Spain', iso: 'ES' },
  { code: '+39', name: 'Italy', iso: 'IT' },
  { code: '+61', name: 'Australia', iso: 'AU' },
  { code: '+1', name: 'Canada', iso: 'CA' },
  { code: '+31', name: 'Netherlands', iso: 'NL' },
  { code: '+358', name: 'Finland', iso: 'FI' },
  { code: '+46', name: 'Sweden', iso: 'SE' },
  { code: '+47', name: 'Norway', iso: 'NO' },
  { code: '+41', name: 'Switzerland', iso: 'CH' },
  { code: '+64', name: 'New Zealand', iso: 'NZ' },
];

const FormSection = ({ title, number, currentStep, setStep, children }) => {
  const isOpen = currentStep === number;
  return (
    <div className="mb-4 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setStep(number)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${currentStep >= number ? 'bg-[#C1D72E] text-white' : 'bg-gray-100 text-gray-400'}`}>
            {number}
          </div>
          <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500">{title}</h3>
        </div>
        {isOpen ? <ChevronUp size={16} className="text-gray-300" /> : <ChevronDown size={16} className="text-gray-300" />}
      </button>
      {isOpen && <div className="px-6 pb-8 space-y-5 animate-in fade-in slide-in-from-top-1">{children}</div>}
    </div>
  );
};

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '', email: '', country_code: '+44', mobile: '', year_born: '', country_residence: 'United Kingdom',
    sport: '', event_type: '', training_freq_monthly: '', current_nutrition: '',
    sweetness_fatigue: 'No', gi_distress: false,
    marketing_opt_in: false, gdpr_consent: false,
    lead_source: 'CS&PF Dinner March 2026'
  });

  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 77 }, (_, i) => (currentYear - 14) - i);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.gdpr_consent) return alert("Consent required.");
    setLoading(true);
    const { error } = await supabase.from('registrations').insert([formData]);
    if (error) alert(error.message);
    else setSubmitted(true);
    setLoading(false);
  };

  const isFormValid = formData.full_name && formData.email && formData.gdpr_consent;

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-8">
        <div className="text-center max-w-sm">
          <CheckCircle2 size={48} className="mx-auto mb-6 text-[#a50251]" />
          <h1 className="text-2xl font-bold mb-4 tracking-tight">❤️ THANK YOU FROM ISOVITA</h1>
          <p className="text-gray-500 text-sm leading-relaxed">Your details are in. We'll be in touch to begin our Alpha Testing Program.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white font-sans overflow-x-hidden">
      <Head><title>ISOVITA | Alpha Program</title></Head>

      {/* 75% Background Block */}
      <div className="fixed bottom-0 left-0 w-full h-[75vh] z-0" style={{ backgroundColor: BRAND_BLOCK }}></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="pt-16 pb-12 text-center px-8 bg-white">
          <h1 className="text-5xl font-black tracking-tighter mb-2">ISOVITA</h1>
          <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-gray-300 mb-10 text-center">Cognitive Endurance Fuel</p>
          <h2 className="text-2xl font-bold leading-tight mb-3 max-w-xs mx-auto">Become a co-creator of ISOVITA's Alpha Program</h2>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">Help develop the pure food alternative to sports nutrition.</p>
        </header>

        <main className="max-w-xl mx-auto px-6 w-full pb-20">
          <form onSubmit={handleSubmit}>
            
            <FormSection title="Personal Details" number={1} currentStep={step} setStep={setStep}>
              <input name="full_name" required value={formData.full_name} onChange={handleChange} placeholder="Full Name" className="w-full p-3 border-b border-gray-100 focus:border-black outline-none text-sm" />
              <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full p-3 border-b border-gray-100 focus:border-black outline-none text-sm" />
              
              <div className="flex gap-2 border-b border-gray-100">
                <select name="country_code" value={formData.country_code} onChange={handleChange} className="w-1/3 p-3 bg-transparent outline-none text-sm">
                  {countryCodes.map(c => <option key={c.iso} value={c.code}>{c.iso} ({c.code})</option>)}
                </select>
                <input name="mobile" type="tel" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" className="w-2/3 p-3 bg-transparent outline-none text-sm" />
              </div>

              <div className="flex gap-4">
                <select name="year_born" value={formData.year_born} onChange={handleChange} className="w-1/2 p-3 border-b border-gray-100 outline-none text-sm text-gray-500">
                  <option value="">Year of Birth</option>
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
                <input name="country_residence" value={formData.country_residence} onChange={handleChange} placeholder="Country of Residence" className="w-1/2 p-3 border-b border-gray-100 outline-none text-sm" />
              </div>
            </FormSection>

            <FormSection title="Athletic Profile" number={2} currentStep={step} setStep={setStep}>
              <input name="sport" value={formData.sport} onChange={handleChange} placeholder="Primary Sport" className="w-full p-3 border-b border-gray-100 outline-none text-sm" />
              <select name="event_type" value={formData.event_type} onChange={handleChange} className="w-full p-3 border-b border-gray-100 outline-none text-sm text-gray-500">
                <option value="">Primary Event Type</option>
                <option>Channel Swim</option><option>Ironman / Triathlon</option><option>HYROX</option><option>Ultra / Marathon</option>
              </select>
              <select name="training_freq_monthly" value={formData.training_freq_monthly} onChange={handleChange} className="w-full p-3 border-b border-gray-100 outline-none text-sm text-gray-500">
                <option value="">Monthly Training Frequency</option>
                <option>1–8 sessions / month</option><option>9–16 sessions / month</option><option>17–24 sessions / month</option><option>25+ sessions / month</option>
              </select>
            </FormSection>

            <FormSection title="Nutrition Insights" number={3} currentStep={step} setStep={setStep}>
              <textarea name="current_nutrition" value={formData.current_nutrition} onChange={handleChange} placeholder="Your current nutrition method (e.g. Gels, Real Food, Liquid only)" className="w-full p-3 border border-gray-100 rounded-lg outline-none text-sm h-24 resize-none" />
              
              <div className="pt-2">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">Sweetness Fatigue?</p>
                <div className="flex gap-2">
                  {['No', 'Sometimes', 'Yes'].map(opt => (
                    <button key={opt} type="button" onClick={() => setFormData({...formData, sweetness_fatigue: opt})} className={`flex-1 py-2 rounded-lg border text-[10px] uppercase tracking-widest transition-all ${formData.sweetness_fatigue === opt ? 'bg-black text-white border-black' : 'border-gray-100 text-gray-400'}`}>{opt}</button>
                  ))}
                </div>
              </div>

              <label className="flex items-center gap-3 pt-4 cursor-pointer group">
                <input type="checkbox" name="gi_distress" checked={formData.gi_distress} onChange={handleChange} className="w-4 h-4 accent-[#C1D72E]" />
                <span className="text-[10px] uppercase tracking-widest text-gray-400 group-hover:text-gray-600">I suffer from GI distress during events</span>
              </label>
            </FormSection>

            {/* CTA BUTTON */}
            <div className="mt-12">
              <button 
                type="submit" 
                disabled={!isFormValid || loading}
                className={`w-full py-5 rounded-2xl text-[11px] uppercase tracking-[0.4em] font-bold transition-all border-2
                  ${isFormValid ? 'bg-white text-[#a50251] border-white shadow-2xl' : 'bg-white/10 text-white/30 border-white/10 cursor-not-allowed'}`}
              >
                {loading ? 'Registering...' : 'Join the Program'}
              </button>
            </div>

            {/* CONSENT FOOTER */}
            <div className="mt-8 space-y-3 px-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="marketing_opt_in" checked={formData.marketing_opt_in} onChange={handleChange} className="mt-1 w-4 h-4 accent-white" />
                <span className="text-[10px] text-white/70 leading-relaxed">I would like to receive updates about ISOVITA product development.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" name="gdpr_consent" checked={formData.gdpr_consent} onChange={handleChange} className="mt-1 w-4 h-4 accent-white" />
                <span className="text-[10px] text-white/70 leading-relaxed font-bold">I consent to ISOVITA processing my data in accordance with UK GDPR.</span>
              </label>
            </div>

          </form>
        </main>
      </div>
    </div>
  );
}
