import React, { useState } from 'react';
import Head from 'next/head';
import { createClient } from '@supabase/supabase-js';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

  // Helper to update text fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.gdpr_consent) {
      alert("Please accept the data consent to continue.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from('registrations').insert([formData]);
    if (error) {
      console.error(error);
      alert("Error saving: " + error.message);
    } else {
      setSubmitted(true);
    }
    setLoading(false);
  };

  const Section = ({ title, number, isOpen, children }) => (
    <div className={`mb-4 border-b border-gray-100 transition-all ${isOpen ? 'pb-8' : 'pb-2'}`}>
      <button 
        type="button"
        onClick={() => setStep(number)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= number ? 'bg-[#D4E127] text-white' : 'bg-gray-100 text-gray-400'}`}>
            {number}
          </div>
          <h3 className="font-semibold text-lg text-[#1A1A1A] uppercase tracking-tight">{title}</h3>
        </div>
        {step === number ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="pl-12 pr-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">{children}</div>}
    </div>
  );

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
        <div className="max-w-md">
          <CheckCircle2 size={64} className="mx-auto mb-6 text-[#FF7F50]" />
          <h1 className="text-3xl font-bold mb-4 text-[#1A1A1A]">❤️ THANK YOU FROM ISOVITA</h1>
          <p className="text-gray-600 leading-relaxed">Your details are in. We'll be in touch to begin our Alpha Testing Program.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] pb-20">
      <Head>
        <title>ISOVITA | Alpha Program</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Header with Wave */}
      <div className="relative bg-white pt-12 pb-24 overflow-hidden">
        <div className="max-w-xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-black tracking-tighter mb-2" style={{ fontFamily: 'sans-serif' }}>ISOVITA</h1>
          <p className="text-sm tracking-[0.2em] uppercase font-bold text-gray-400 mb-8">Cognitive Endurance Fuel</p>
          <h2 className="text-2xl font-bold leading-tight mb-4">Be a co-creator of ISOVITA's beta program</h2>
          <p className="text-gray-500 text-sm">Help develop the pure food alternative to sports nutrition.</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-32">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#D4E127' }}></path>
          </svg>
        </div>
      </div>

      <main className="max-w-xl mx-auto px-6 mt-8">
        <form onSubmit={handleSubmit}>
          
          <Section title="Personal Details" number={1} isOpen={step === 1}>
            <input name="full_name" type="text" placeholder="Full Name" required value={formData.full_name} onChange={handleChange} className="w-full p-3 border-b border-gray-200 focus:border-[#FF7F50] outline-none" />
            <input name="email" type="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="w-full p-3 border-b border-gray-200 focus:border-[#FF7F50] outline-none" />
            <div className="flex gap-4">
              <input name="mobile" type="text" placeholder="Mobile" value={formData.mobile} onChange={handleChange} className="w-1/2 p-3 border-b border-gray-200 focus:border-[#FF7F50] outline-none" />
              <input name="year_born" type="number" placeholder="Year of Birth" value={formData.year_born} onChange={handleChange} className="w-1/2 p-3 border-b border-gray-200 focus:border-[#FF7F50] outline-none" />
            </div>
            <button type="button" onClick={() => setStep(2)} className="mt-4 text-[#FF7F50] font-bold text-sm uppercase tracking-wider">Next Section →</button>
          </Section>

          <Section title="Athletic Profile" number={2} isOpen={step === 2}>
            <input name="sport" type="text" placeholder="Primary Sport" value={formData.sport} onChange={handleChange} className="w-full p-3 border-b border-gray-200 focus:border-[#FF7F50] outline-none" />
            <select name="event_type" value={formData.event_type} onChange={handleChange} className="w-full p-3 border-b border-gray-200 bg-transparent outline-none">
              <option value="">Select Event Type</option>
              <option value="Channel Swim">Channel Swim</option>
              <option value="Ironman / Triathlon">Ironman / Triathlon</option>
              <option value="HYROX / Crossfit">HYROX / Crossfit</option>
              <option value="Marathon / Ultra">Marathon / Ultra</option>
            </select>
            <label className="flex items-center gap-3 pt-4 cursor-pointer">
              <input name="cspf_member" type="checkbox" checked={formData.cspf_member} onChange={handleChange} className="w-5 h-5 accent-[#D4E127]" />
              <span className="text-sm text-gray-600">I am a CS&PF Member</span>
            </label>
            <button type="button" onClick={() => setStep(3)} className="mt-4 text-[#FF7F50] font-bold text-sm uppercase tracking-wider">Next Section →</button>
          </Section>

          <Section title="Nutrition Insights" number={3} isOpen={step === 3}>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-3">Do you experience sweetness fatigue?</p>
                <div className="flex gap-2">
                  {['No', 'Sometimes', 'Yes'].map(opt => (
                    <button key={opt} type="button" onClick={() => setFormData({...formData, sweetness_fatigue: opt})} className={`flex-1 py-2 rounded-full border text-sm transition-all ${formData.sweetness_fatigue === opt ? 'bg-[#D4E127] border-[#D4E127] text-white font-bold' : 'border-gray-200 text-gray-400'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <label className="flex items-start gap-3 pt-4 cursor-pointer">
                <input name="gdpr_consent" type="checkbox" checked={formData.gdpr_consent} onChange={handleChange} className="mt-1 w-5 h-5 accent-[#FF7F50]" />
                <span className="text-xs text-gray-500 leading-tight">I consent to ISOVITA processing my data for the Alpha Program in accordance with UK GDPR.</span>
              </label>
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#FF7F50] text-white font-bold py-4 rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all uppercase tracking-widest disabled:opacity-50"
              >
                {loading ? 'Registering...' : 'Join the Program'}
              </button>
            </div>
          </Section>

        </form>
      </main>
    </div>
  );
}
