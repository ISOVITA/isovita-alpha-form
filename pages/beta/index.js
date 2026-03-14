import Head from 'next/head';
import { useState } from 'react';

const CTA = () => (
  <a
    href="/beta/register"
    className="inline-block px-14 py-5 rounded-full text-xs uppercase tracking-[0.4em] transition-all hover:bg-[#262118] hover:text-white shadow-sm"
    style={{ backgroundColor: '#D9CE32', color: '#262118', fontFamily: 'sans-serif', fontWeight: 600 }}
  >
    Join the Alpha Program
  </a>
);

export default function BetaWelcome() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });

  const handleContact = (e) => {
    e.preventDefault();
    const { name, email, message } = contact;
    window.location.href = `mailto:garry.9oran@gmail.com?subject=ISOVITA Beta Enquiry from ${name}&body=${message}%0A%0AFrom: ${name} (${email})`;
  };

  return (
    <div className="min-h-screen font-serif selection:bg-[#D9CE32] selection:text-[#262118]" style={{ backgroundColor: '#F2F2F2', color: '#262118' }}>
      <Head>
        <title>ISOVITA | Why Fuel Fails</title>
        <meta name="description" content="Pure-food cognitive endurance fuel engineered for extreme performance. Beta program now open." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* NAV */}
      <nav className="flex items-center justify-between px-16 py-10 sticky top-0 z-50" style={{ backgroundColor: '#F2F2F2' }}>
        <img src="/ISOVITA_Logo_alpha.png" alt="ISOVITA" className="h-10 w-auto object-contain" />
