import React, { useState } from 'react';
import Head from 'next/head';
import { createClient } from '@supabase/supabase-js';
import { ChevronDown, ChevronUp, CheckCircle2, Beaker, Waves, Apple, ShieldCheck } from 'lucide-react';

// Initialize Supabase (These will be set in Netlify Environment Variables)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ISOVITA_LIME = "#D4E127"; // From your Banana pack
const ISOVITA_GREY = "#1A1A1A"; // Brandon Grotesque Deep Grey
const ISOVITA_CORAL = "#FF7F50"; // Your requested CTA

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('registrations').insert([formData]);
    if (!error) setSubmitted(true);
    setLoading(false);
  };

  const Section = ({ title, icon: Icon, number, isOpen, children }) => (
    <div className={`mb-4 border-b border-gray-100 transition-all ${isOpen ? 'pb-8' : 'pb-4'}`}>
      <button 
        onClick={() => setStep(number)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= number ? 'bg-[#D4E127] text-white' : 'bg-gray-100 text-gray-400'}`}>
            {number}
          </div>
          <h3 className="font-montserrat font-semibold text-lg text-[#1A1A1A] uppercase tracking-tight">{title}</h3>
        </div>
        {step === number ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && <div className="pl-12 pr-4 animate-fadeIn">{children}</div>}
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
    <div className="min-h-screen bg-white font-montserrat text-[#1A1A1A]">
      <Head>
        <title>ISOVITA | Alpha Program</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Header with Wave */}
      <div className="relative bg-white pt-12 pb-24 overflow-hidden">
        <div className="max-w-xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl font-black tracking-tighter mb-2" style={{ fontFamily: 'Brandon Grotesque, sans-serif' }}>ISOVITA</h1>
          <p className="text-sm tracking-[0.2em] uppercase font-bold text-gray-400 mb-8">Cognitive Endurance Fuel</p>
          <h2 className="text-2xl font-bold leading-tight mb-4">Be a co-creator of ISOVITA's beta program</h2>
          <p className="text-gray-500">Help develop the pure food alternative to sports nutrition.</p>
        </div>
        {/* The Curve Device */}
        <div className="absolute bottom-0 left-0 w-full leading-none">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-32">
            <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#D4E127' }}></path>
          </svg>
        </div>
      </div>

      <main className="max-w-xl mx-auto px-6 py-12">
        <form onSubmit={handleSubmit}>
          
          <Section title="Personal Details" number={1} isOpen={step === 1}>
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" required className="w-full p-3 border-b border-gray-200 focus:border-[#FF7F50] outline-none" onChange={e => setFormData({...formData, full_name: e.target.value})} />
              <input type="email" placeholder="Email Address" required className="w-full p-3 border-b border-gray-200 focus:border-[#FF7F50] outline-none" onChange={e => setFormData({...formData, email: e.target.value})} />
              <div className="flex gap-4">
                <input type="text" placeholder="Mobile" className="w-1/2 p-3 border-b border-gray-200 focus:border-[#FF7F50] outline-none" onChange={e => setFormData({...formData, mobile: e.target.value})} />
                <input type="number" placeholder="Year of Birth" className="w-1/2 p-3 border-b border-gray-200 focus:border-[#FF7F50] outline-none" onChange={e => setFormData({...formData, year_born: e.target.value})} />
              </div>
            </div>
          </Section>

          <Section title="Athletic Profile" number={2} isOpen={step === 2}>
            <div className="space-y-4">
              <input type="text" placeholder="Primary Sport" className="w-full p-3 border-b border-gray-200 focus:border-[#FF7F50] outline-none" onChange={e => setFormData({...formData, sport: e.target.value})} />
              <select className="w-full p-3 border-b border-gray-200 bg-transparent outline-none" onChange={e => setFormData({...formData, event_type: e.target.value})}>
                <option>Event Type</option>
                <option>Channel Swim</option>
                <option>Ironman / Triathlon</option>
                <option>HYROX / Crossfit</option>
                <option>Marathon / Ultra</option>
              </select>
              <label className="flex items-center gap-3 pt-4">
                <input type="checkbox" className="w-5 h-5 accent-[#D4E127]" onChange={e => setFormData({...formData, cspf_member: e.target.checked})} />
                <span className="text-sm text-gray-600">I am a CS&PF Member</span>
              </label>
            </div>
          </Section>

          <Section title="Nutrition Insights" number={3} isOpen={step === 3}>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">Do you experience sweetness fatigue?</p>
                <div className="flex gap-4">
                  {['No', 'Sometimes', 'Yes'].map(opt => (
                    <button key={opt} type="button" onClick={() => setFormData({...formData, sweetness_fatigue: opt})} className={`px-4 py-2 rounded-full border text-sm ${formData.sweetness_fatigue === opt ? 'bg-[#D4E127] border-[#D4E127] text-white' : 'border-gray-200'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <label className="flex items-center gap-3 pt-4">
                <input type="checkbox" required className="w-5 h-5 accent-[#FF7F50]" onChange={e => setFormData({...formData, gdpr_consent: e.target.checked})} />
                <span className="text-xs text-gray-500">I consent to ISOVITA processing my data for the Alpha Program.</span>
              </label>
              <button 
                disabled={loading}
                className="w-full bg-[#FF7F50] text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity uppercase tracking-widest"
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
