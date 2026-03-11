import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { createClient } from '@supabase/supabase-js';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const BRAND_BLOCK = "#a50251";   // Deep ISOVITA magenta
const PEAR = "#C1D72E";

const FormSection = ({ title, number, currentStep, setStep, children }) => {
  const isOpen = currentStep === number;

  return (
    <div className="mb-6 bg-white rounded-2xl border border-gray-100">
      <button
        type="button"
        onClick={() => setStep(number)}
        className="w-full flex items-center justify-between p-5"
      >
        <div className="flex items-center gap-4">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold 
            ${currentStep >= number ? 'bg-[#C1D72E] text-white' : 'bg-gray-100 text-gray-400'}`}>
            {number}
          </div>
          <h3 className="text-sm uppercase tracking-widest text-gray-500">
            {title}
          </h3>
        </div>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && (
        <div className="px-5 pb-8 space-y-5">
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
    full_name: '',
    email: '',
    mobile: '',
    year_born: '',
    sport: '',
    event_type: '',
    training_freq: '',
    sweetness_fatigue: 'No',
    cspf_member: false,
    marketing_opt_in: false,
    gdpr_consent: false,
    lead_source: 'CS&PF Dinner March 2026'
  });

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
    if (!formData.gdpr_consent) return alert("Consent required.");
    setLoading(true);
    const { error } = await supabase.from('registrations').insert([formData]);
    if (error) alert(error.message);
    else setSubmitted(true);
    setLoading(false);
  };

  const isFormValid =
    formData.full_name &&
    formData.email &&
    formData.year_born &&
    formData.gdpr_consent;

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-sm">
          <CheckCircle2 size={50} className="mx-auto mb-6 text-[#a50251]" />
          <h1 className="text-2xl font-bold mb-4">❤️ THANK YOU FROM ISOVITA</h1>
          <p className="text-gray-500 text-sm">
            Your details are in. We'll be in touch to begin our Alpha Testing Program.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">

      <Head>
        <title>ISOVITA | Alpha Program</title>
      </Head>

      {/* HEADER */}
      <div className="pt-16 pb-12 text-center px-6">
        <h1 className="text-5xl font-black tracking-tight mb-2">ISOVITA</h1>
        <p className="text-xs tracking-[0.3em] uppercase text-gray-300 mb-8">
          Cognitive Endurance Fuel
        </p>
        <h2 className="text-2xl font-semibold max-w-md mx-auto">
          Become a co-creator of ISOVITA's Alpha Program
        </h2>
      </div>

      {/* FORM */}
      <main className="flex-1 max-w-xl mx-auto px-6 w-full">
        <form onSubmit={handleSubmit}>

          {/* SECTION 1 */}
          <FormSection
            title="Personal Details"
            number={1}
            currentStep={step}
            setStep={setStep}
          >
            <input name="full_name" required value={formData.full_name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border-b border-gray-200 focus:border-black outline-none" />

            <input name="email" type="email" required value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 border-b border-gray-200 focus:border-black outline-none" />

            <div className="flex gap-4">
              <input name="mobile" value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile"
                className="w-1/2 p-3 border-b border-gray-200 focus:border-black outline-none" />

              <select name="year_born"
                value={formData.year_born}
                onChange={handleChange}
                className="w-1/2 p-3 border-b border-gray-200 outline-none">
                <option value="">Year of Birth</option>
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </FormSection>

          {/* SECTION 2 */}
          <FormSection
            title="Athletic Profile"
            number={2}
            currentStep={step}
            setStep={setStep}
          >
            <input name="sport"
              value={formData.sport}
              onChange={handleChange}
              placeholder="Primary Sport"
              className="w-full p-3 border-b border-gray-200 focus:border-black outline-none" />

            <select name="event_type"
              value={formData.event_type}
              onChange={handleChange}
              className="w-full p-3 border-b border-gray-200 outline-none">
              <option value="">Event Type</option>
              <option>Channel Swim</option>
              <option>Ironman / Triathlon</option>
              <option>HYROX</option>
              <option>Ultra / Marathon</option>
            </select>

            <select name="training_freq"
              value={formData.training_freq}
              onChange={handleChange}
              className="w-full p-3 border-b border-gray-200 outline-none">
              <option value="">Training Frequency</option>
              <option>1–2 sessions per week</option>
              <option>3–4 sessions per week</option>
              <option>5–6 sessions per week</option>
              <option>Daily</option>
              <option>Multiple sessions daily</option>
            </select>
          </FormSection>

          {/* SECTION 3 */}
          <FormSection
            title="Nutrition Insights"
            number={3}
            currentStep={step}
            setStep={setStep}
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                Sweetness Fatigue?
              </p>
              <div className="flex gap-2">
                {['No', 'Sometimes', 'Yes'].map(opt => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFormData({...formData, sweetness_fatigue: opt})}
                    className={`flex-1 py-2 rounded-xl border text-xs uppercase tracking-widest
                      ${formData.sweetness_fatigue === opt
                        ? 'bg-black text-white border-black'
                        : 'border-gray-200 text-gray-400'}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Marketing opt-in */}
            <label className="flex items-start gap-3 pt-4">
              <input
                type="checkbox"
                name="marketing_opt_in"
