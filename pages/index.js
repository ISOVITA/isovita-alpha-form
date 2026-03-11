import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { createClient } from '@supabase/supabase-js';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const BRAND_BLOCK = "#a50251";

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

const countries = [
  'United Kingdom','Australia','Austria','Belgium','Brazil','Canada','China',
  'Czech Republic','Denmark','Finland','France','Germany','Greece','Hungary',
  'Iceland','India','Ireland','Israel','Italy','Japan','Luxembourg','Mexico',
  'Netherlands','New Zealand','Norway','Poland','Portugal','Romania','Russia',
  'South Africa','South Korea','Spain','Sweden','Switzerland','Turkey',
  'United Arab Emirates','United States',
];

const FormSection = ({ title, number, currentStep, setStep, children }) => {
  const isOpen = currentStep === number;
  return (
    <div className="mb-4 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <button type="button" onClick={() => setStep(number)} className="w-full flex items-center justify-between p-5 text-left">
        <div className="flex items-center gap-4">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${currentStep >= number ? 'bg-[#C1D72E] text-white' : 'bg-gray-100 text-gray-400'}`}>{number}</div>
          <h3 className="text-base uppercase tracking-[0.1em] font-semibold text-gray-600">{title}</h3>
        </div>
        {isOpen ? <ChevronUp size={16} className="text-gray-300" /> : <ChevronDown size={16} className="text-gray-300" />}
      </button>
      {isOpen && <div className="px-6 pb-8 space-y-5">{children}</div>}
    </div>
  );
};

const ToggleGroup = ({ value, onChange, options }) => (
  <div className="flex gap-2">
    {options.map(opt => (
      <button key={opt} type="button" onClick={() => onChange(opt)}
        className={`flex-1 py-2 rounded-lg border text-[10px] uppercase tracking-widest transition-all
          ${value === opt ? 'bg-black text-white border-black' : 'border-gray-100 text-gray-400'}`}>
        {opt}
      </button>
    ))}
  </div>
);

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '', email: '', country_code: '+44', mobile: '',
    year_born: '', country_residence: '',
    sport: '', event_type: '', training_freq_monthly: '',
    current_nutrition: '', sweetness_fatigue: 'No', gi_distress: 'No',
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
          <p className="text-gray-500 text-base leading-relaxed">Your details are in. We'll be in touch to begin our Alpha Testing Program.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white font-sans overflow-x-hidden">
      <Head><title>ISOVITA | Alpha Program</title></Head>

      {/* Background block — starts 70% from bottom */}
      <div className="fixed bottom-0 left-0 w-full h-[60vh] z-0" style={{ backgroundColor: BRAND_BLOCK }} />

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* HEADER */}
   <header className="pt-20 pb-16 text-center px-8 bg-white">
  
  <img 
    src="/ISOVITA_logo_2x.png" 
    alt="ISOVITA logo"
    className="mx-auto h-24 mb-6 object-contain"
  />

  <p className="text-base tracking-[0.2em] uppercase font-semibold text-gray-500 mb-10">
    Cognitive Endurance Fuel
  </p>

  <h2 className="text-3xl font-semibold leading-tight mb-4 max-w-md mx-auto">
    Become a co-creator of ISOVITA's Alpha Program
  </h2>

  <p className="text-gray-600 text-base max-w-md mx-auto">
    Help develop the pure food alternative to sports nutrition.
  </p>

</header>

        <main className="max-w-xl mx-auto px-6 w-full pb-20 -mt-12">
          <form onSubmit={handleSubmit}>

            {/* SECTION 1 — Personal Details */}
            <FormSection title="Personal Details" number={1} currentStep={step} setStep={setStep}>
              <input name="full_name" required value={formData.full_name} onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-4 border-b border-gray-100 focus:border-black outline-none text-base" />

              <input name="email" type="email" required value={formData.email} onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-4 border-b border-gray-100 focus:border-black outline-none text-base" />

              {/* Phone with country code */}
              <div className="flex gap-2 border-b border-gray-100">
                <select name="country_code" value={formData.country_code} onChange={handleChange}
                  className="w-1/3 p-4 bg-transparent outline-none text-base text-gray-500">
                  {countryCodes.map(c => (
                    <option key={c.iso} value={c.code}>{c.iso} ({c.code})</option>
                  ))}
                </select>
                <input name="mobile" type="tel" value={formData.mobile} onChange={handleChange}
                  placeholder="Mobile Number"
                  className="w-2/3 p-4 bg-transparent outline-none text-base" />
              </div>

              <div className="flex gap-4">
                <select name="year_born" value={formData.year_born} onChange={handleChange}
                  className="w-1/2 p-4 border-b border-gray-100 outline-none text-base text-gray-500">
                  <option value="">Year of Birth</option>
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>

                <select name="country_residence" value={formData.country_residence} onChange={handleChange}
                  className="w-1/2 p-4 border-b border-gray-100 outline-none text-base text-gray-500">
                  <option value="">Your Country of Residence</option>
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </FormSection>

            {/* SECTION 2 — Athletic Profile */}
            <FormSection title="Athletic Profile" number={2} currentStep={step} setStep={setStep}>
              <input name="sport" value={formData.sport} onChange={handleChange}
                placeholder="Primary Sport"
                className="w-full p-4 border-b border-gray-100 outline-none text-base" />

              <select name="event_type" value={formData.event_type} onChange={handleChange}
                className="w-full p-4 border-b border-gray-100 outline-none text-base text-gray-500">
                <option value="">Primary Event Type</option>
                <option>Channel Swim</option>
                <option>Ironman / Triathlon</option>
                <option>HYROX</option>
                <option>Ultra / Marathon</option>
              </select>

              <select name="training_freq_monthly" value={formData.training_freq_monthly} onChange={handleChange}
                className="w-full p-4 border-b border-gray-100 outline-none text-base text-gray-500">
                <option value="">Training Frequency</option>
                <option>Once a month</option>
                <option>2–3 times a month</option>
                <option>Every week</option>
                <option>2 or more times every week</option>
              </select>
            </FormSection>

            {/* SECTION 3 — Nutrition Insights */}
            <FormSection title="Nutrition Insights" number={3} currentStep={step} setStep={setStep}>
              <textarea name="current_nutrition" value={formData.current_nutrition} onChange={handleChange}
                placeholder="Your current nutrition method (e.g. Gels, Real Food, Liquid Only, Brands)"
                className="w-full p-4 border border-gray-100 rounded-lg outline-none text-base h-24 resize-none" />

              <div className="pt-2">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">Do you get sweetness fatigue?</p>
                <ToggleGroup
                  value={formData.sweetness_fatigue}
                  onChange={val => setFormData(prev => ({ ...prev, sweetness_fatigue: val }))}
                  options={['No', 'Sometimes', 'Yes']}
                />
              </div>

              <div className="pt-2">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">Do you suffer GI distress during events?</p>
                <ToggleGroup
                  value={formData.gi_distress}
                  onChange={val => setFormData(prev => ({ ...prev, gi_distress: val }))}
                  options={['No', 'Sometimes', 'Yes']}
                />
              </div>
            </FormSection>

            {/* CONSENT — above CTA */}
            <div className="mt-8 mb-6 space-y-4 px-2">
              <label className="flex items-start gap-4 cursor-pointer">
                <input type="checkbox" name="marketing_opt_in" checked={formData.marketing_opt_in}
                  onChange={handleChange} className="mt-1 w-4 h-4 accent-white" />
                <span className="text-sm text-white/80 leading-relaxed">
                  I would like to receive updates about ISOVITA product development.
                </span>
              </label>
              <label className="flex items-start gap-4 cursor-pointer">
                <input type="checkbox" name="gdpr_consent" checked={formData.gdpr_consent}
                  onChange={handleChange} className="mt-1 w-4 h-4 accent-white" />
                <span className="text-sm text-white/80 leading-relaxed font-bold">
                  I consent to ISOVITA processing my data in accordance with UK GDPR.
                </span>
              </label>
            </div>

            {/* CTA */}
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full py-6 rounded-2xl text-base uppercase tracking-[0.2em] font-semibold transition-all border-2
                ${isFormValid
                  ? 'bg-white text-[#a50251] border-white shadow-2xl'
                  : 'bg-white/10 text-white/30 border-white/10 cursor-not-allowed'}`}>
              {loading ? 'Registering...' : 'Join the Program'}
            </button>

          </form>
        </main>
      </div>
    </div>
  );
}
