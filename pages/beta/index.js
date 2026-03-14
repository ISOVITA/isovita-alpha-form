import Head from 'next/head';
import { useState } from 'react';

const CTA = () => (
  <a
    href="/beta/register"
    className="inline-block px-14 py-5 rounded-full text-xs uppercase tracking-[0.4em] font-semibold transition-all hover:bg-[#262118] hover:text-white shadow-sm"
    style={{ backgroundColor: '#D9CE32', color: '#262118' }}
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
        <meta name="keywords" content="cognitive endurance fuel, pure food sports nutrition, ultra endurance fuel, 1:0.8 carb ratio, HBCD dextrin fructose, nootropic sports fuel, Channel swimming nutrition" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* NAV */}
      <nav className="flex items-center justify-between px-16 py-10 sticky top-0 z-50" style={{ backgroundColor: '#F2F2F2' }}>
        <img src="/ISOVITA_logo_2x.png" alt="ISOVITA" className="h-12 object-contain" />
        <div className="hidden md:block">
          <CTA />
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-[92vh] flex flex-col items-center justify-center text-center px-8 py-28">
        <p className="text-[9px] uppercase tracking-[0.6em] font-semibold mb-14" style={{ color: '#595248' }}>
          Cognitive Endurance Fuel — Alpha Validation
        </p>
        <h1 className="text-7xl md:text-[11rem] font-extralight mb-14 tracking-tighter italic leading-none" style={{ color: '#262118' }}>
          Why?
        </h1>
        <div className="max-w-xl mx-auto space-y-7 mb-24 text-xl font-light italic leading-loose" style={{ color: '#595248' }}>
          <p>Why do athletes hit the wall?</p>
          <p>Why do stomachs revolt at hour six?</p>
          <p>Why do some push on while others collapse?</p>
          <p>Why does fuel fail the people who need it most?</p>
          <p>Why hasn't anyone rebuilt endurance nutrition from first principles?</p>
        </div>
        <p className="text-2xl font-extralight max-w-2xl mx-auto mb-24 leading-loose tracking-wide" style={{ color: '#262118' }}>
          ISOVITA begins with a single question — and rebuilds everything from the answer.
        </p>
        <CTA />
      </section>

      {/* WHY FUEL FAILS */}
      <section className="px-8 py-40 max-w-6xl mx-auto border-t" style={{ borderColor: '#D9D9D9' }}>
        <p className="text-[9px] uppercase tracking-[0.5em] font-semibold mb-12" style={{ color: '#D9CE32' }}>The Inquiry</p>
        <h2 className="text-5xl md:text-6xl font-extralight mb-24 tracking-tight italic">
          Why does fuel fail?
        </h2>
        <div className="grid md:grid-cols-2 gap-20">
          {[
            { q: 'Why the wall?', a: 'Glycogen depletion meets neurological fatigue. Most fuels address one. Neither is enough.' },
            { q: 'Why the nausea?', a: 'Maltodextrin overloads a single carbohydrate transporter. The gut revolts under metabolic stress.' },
            { q: 'Why sweetness fatigue?', a: 'Sensory adaptation is real. Repeated sweet stimuli suppress appetite compliance — the athlete stops fuelling.' },
            { q: 'Why synthetic?', a: 'Because gels are profitable. Because "good enough" became standard. Because no one asked why.' },
          ].map(({ q, a }) => (
            <div key={q}>
              <h3 className="text-2xl font-light mb-6 tracking-tight pb-6" style={{ borderBottom: '1px solid #D9D9D9', color: '#262118' }}>{q}</h3>
              <p className="text-lg font-light leading-loose" style={{ color: '#595248' }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HERO PRODUCT */}
      <section className="px-8 py-40" style={{ backgroundColor: '#EBEBEB' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[9px] uppercase tracking-[0.5em] font-semibold mb-12" style={{ color: '#D9CE32' }}>The Formulation</p>
          <h2 className="text-5xl md:text-6xl font-extralight mb-10 tracking-tight italic">
            Pure food. Not a supplement.
          </h2>
          <p className="text-xl font-light leading-loose mb-24 max-w-3xl" style={{ color: '#595248' }}>
            ISOVITA's hero products are real fruit and vegetable purée pouches — not gels, not syrups. Metabolically structured meals in motion, engineered for extreme endurance.
          </p>
          <div className="grid md:grid-cols-2 gap-10 mb-20">
            <div className="p-14 rounded-3xl" style={{ backgroundColor: '#F2F2F2' }}>
              <h3 className="text-[9px] uppercase tracking-[0.4em] font-semibold mb-10" style={{ color: '#262118' }}>🍐 Fruit Line</h3>
              <ul className="space-y-5 text-lg font-light" style={{ color: '#595248' }}>
                {['Pear + Ginger', 'Pear + Banana', 'Pear + Pineapple', 'Pear + Blueberry'].map(f => (
                  <li key={f} className="flex items-center gap-5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D9CE32' }}></span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-14 rounded-3xl" style={{ backgroundColor: '#F2F2F2' }}>
              <h3 className="text-[9px] uppercase tracking-[0.4em] font-semibold mb-10" style={{ color: '#262118' }}>🥕 Savoury Line</h3>
              <ul className="space-y-5 text-lg font-light" style={{ color: '#595248' }}>
                {['Sweet Potato & Butternut Squash', 'Beetroot & Carrot', 'Parsnip, Apple & Thyme', 'Pumpkin, Yam & Turmeric'].map(f => (
                  <li key={f} className="flex items-center gap-5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D9CE32' }}></span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-16 rounded-3xl text-center" style={{ backgroundColor: '#262118' }}>
            <h3 className="text-2xl font-extralight mb-8 italic" style={{ color: '#F2F2F2' }}>Engineered for the ocean.</h3>
            <p className="text-lg font-light leading-loose max-w-3xl mx-auto" style={{ color: '#F2F2F2', opacity: 0.75 }}>
              Our custom die-cut pouches feature a carabiner tether point — so waste is retained on the support boat, not lost to the sea. Extreme endurance should not mean environmental damage. ISOVITA is designed for the Channel from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* CARB ARCHITECTURE */}
      <section className="px-8 py-40 max-w-6xl mx-auto">
        <p className="text-[9px] uppercase tracking-[0.5em] font-semibold mb-12" style={{ color: '#D9CE32' }}>The Architecture</p>
        <h2 className="text-5xl md:text-6xl font-extralight mb-10 tracking-tight italic">
          Why does 1:0.8 work so well?
        </h2>
        <p className="text-xl font-light leading-loose mb-24 max-w-3xl" style={{ color: '#595248' }}>
          Every ISOVITA pouch delivers a precise <span className="font-semibold">30g carbohydrate dose</span> structured at a 1:0.8 ratio of Highly Branched Cyclic Dextrin (HBCD) to Fructose — activating dual carbohydrate transporters simultaneously.
        </p>
        <div className="grid md:grid-cols-3 gap-16">
          {[
            { label: 'Dual Transporter Activation', body: 'HBCD uses the SGLT1 pathway. Fructose uses GLUT5. Together they double absorption capacity without overloading either.' },
            { label: 'Reduced GI Distress', body: 'Lower osmolality than maltodextrin means faster gastric emptying and dramatically reduced nausea under load.' },
            { label: 'Sustained Delivery', body: 'Precision over volume. 30g doses sustain metabolic flow without the spike-and-crash cycle of high-sugar gels.' },
          ].map(({ label, body }) => (
            <div key={label} className="pl-8" style={{ borderLeft: '1px solid #D9D9D9' }}>
              <h3 className="text-[9px] font-semibold uppercase tracking-[0.3em] mb-8" style={{ color: '#262118' }}>{label}</h3>
              <p className="text-base font-light leading-loose" style={{ color: '#595248' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NOOTROPICS */}
      <section className="px-8 py-40" style={{ backgroundColor: '#EBEBEB' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[9px] uppercase tracking-[0.5em] font-semibold mb-12" style={{ color: '#D9CE32' }}>The Cognitive Edge</p>
          <h2 className="text-5xl md:text-6xl font-extralight mb-10 tracking-tight italic">
            Endurance is neurological.
          </h2>
          <p className="text-xl font-light leading-loose mb-24 max-w-3xl" style={{ color: '#595248' }}>
            The body rarely gives out first. The mind does. ISOVITA's nootropic stack is engineered for composure, clarity, and cognitive resilience at hour twelve.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Lion's Mane", role: 'Neural Support', benefit: 'Supports nerve growth factor (NGF) synthesis. Sustains cognitive function under prolonged physical stress.' },
              { name: 'Rhodiola Rosea', role: 'Fatigue Modulation', benefit: 'Adaptogenic. Reduces perceived exertion and mental fatigue. Clinically studied for endurance performance.' },
              { name: 'L-Theanine', role: 'Calm Clarity', benefit: 'Promotes alpha-wave brain activity. Delivers focused calm without sedation — precision thinking under pressure.' },
            ].map(({ name, role, benefit }) => (
              <div key={name} className="p-12 rounded-3xl" style={{ backgroundColor: '#F2F2F2' }}>
                <p className="text-[9px] uppercase tracking-[0.3em] font-semibold mb-5" style={{ color: '#D9CE32' }}>{role}</p>
                <h3 className="text-2xl font-extralight mb-8 italic" style={{ color: '#262118' }}>{name}</h3>
                <p className="text-base font-light leading-loose" style={{ color: '#595248' }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SWEETNESS FATIGUE */}
      <section className="px-8 py-40 max-w-4xl mx-auto text-center">
        <p className="text-[9px] uppercase tracking-[0.5em] font-semibold mb-12" style={{ color: '#D9CE32' }}>Sensory Science</p>
        <h2 className="text-5xl md:text-6xl font-extralight mb-16 tracking-tight italic">
          Why do athletes stop eating?
        </h2>
        <div className="space-y-10 text-xl font-light leading-loose" style={{ color: '#595248' }}>
          <p>Sensory fatigue is a documented physiological response. After hours of sweet gels, the palate revolts — appetite compliance collapses and the athlete under-fuels at the most critical stage of the event.</p>
          <p>ISOVITA's savoury line is strategically engineered for hours 6, 9, 12, and 15 — resetting the palate, sustaining appetite, and delivering slow-release complex carbohydrates when the body needs them most.</p>
        </div>
        <div className="mt-20 py-16" style={{ borderTop: '1px solid #D9D9D9', borderBottom: '1px solid #D9D9D9' }}>
          <p className="text-2xl font-extralight italic" style={{ color: '#262118' }}>Fuel must remain consumable to remain effective.</p>
        </div>
      </section>

      {/* MID CTA */}
      <section className="px-8 py-48 text-center" style={{ backgroundColor: '#262118' }}>
        <p className="text-[9px] uppercase tracking-[0.6em] font-semibold mb-12" style={{ color: '#D9CE32' }}>Alpha Validation</p>
        <h2 className="text-5xl md:text-7xl font-extralight mb-14 italic tracking-tight" style={{ color: '#F2F2F2' }}>
          You are not a customer.<br />You are a co-creator.
        </h2>
        <p className="text-xl font-light mb-20 max-w-2xl mx-auto leading-loose" style={{ color: '#F2F2F2', opacity: 0.6 }}>
          The Alpha cohort is forming now. Help shape the product that will redefine endurance nutrition.
        </p>
        <CTA />
      </section>

      {/* THE FOUNDER */}
      <section className="px-8 py-40 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-28 items-start">
          <div>
            <p className="text-[9px] uppercase tracking-[0.5em] font-semibold mb-12" style={{ color: '#D9CE32' }}>The Origin</p>
            <h2 className="text-5xl md:text-6xl font-extralight tracking-tight italic leading-tight">
              Why hasn't this been done before?
            </h2>
          </div>
          <div className="space-y-10 text-lg font-light leading-loose pt-2" style={{ color: '#595248' }}>
            <p>Because endurance nutrition evolved from bodybuilding supplements — not from the Channel boat at 3am.</p>
            <p>Because gels are profitable. Because "good enough" became standard.</p>
            <p>ISOVITA was built from 15 years inside the English Channel. From observing over 360 swims. From watching real athletes fail on real fuel at the worst possible moment.</p>
            <p>This is not trend-based. It is physiology-led. Built by someone who has asked <em>why</em> at every crossing.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 py-48 text-center" style={{ borderTop: '1px solid #D9D9D9' }}>
        <h2 className="text-5xl md:text-8xl font-extralight mb-16 leading-tight italic tracking-tighter" style={{ color: '#262118' }}>
          If you have ever asked<br /><span style={{ color: '#D9CE32' }}>"Why does this fail me?"</span>
        </h2>
        <p className="text-xl font-light mb-20 max-w-md mx-auto leading-loose" style={{ color: '#595248' }}>
          Then you belong in this cohort.
        </p>
        <CTA />
      </section>

      {/* CONTACT */}
      <section className="px-8 py-40 max-w-3xl mx-auto">
        <p className="text-[9px] uppercase tracking-[0.5em] font-semibold mb-12" style={{ color: '#D9CE32' }}>Inquiries</p>
        <h2 className="text-4xl font-extralight mb-20 italic tracking-tight">Get in touch.</h2>
        <form onSubmit={handleContact} className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={contact.name}
              onChange={e => setContact(prev => ({ ...prev, name: e.target.value }))}
              className="w-full py-5 bg-transparent text-lg font-light outline-none transition-colors"
              style={{ borderBottom: '1px solid #595248', color: '#262118' }}
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={contact.email}
              onChange={e => setContact(prev => ({ ...prev, email: e.target.value }))}
              className="w-full py-5 bg-transparent text-lg font-light outline-none transition-colors"
              style={{ borderBottom: '1px solid #595248', color: '#262118' }}
            />
          </div>
          <textarea
            required
            placeholder="Your Message"
            rows={4}
            value={contact.message}
            onChange={e => setContact(prev => ({ ...prev, message: e.target.value }))}
            className="w-full py-5 bg-transparent text-lg font-light outline-none resize-none transition-colors"
            style={{ borderBottom: '1px solid #595248', color: '#262118' }}
          />
          <button
            type="submit"
            className="w-full py-6 rounded-full text-xs uppercase tracking-[0.5em] font-semibold transition-all hover:opacity-80"
            style={{ backgroundColor: '#262118', color: '#F2F2F2' }}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="px-16 py-16 text-center" style={{ borderTop: '1px solid #D9D9D9' }}>
        <p className="text-[9px] uppercase tracking-[0.4em] font-light" style={{ color: '#595248' }}>
          © 2026 ISOVITA. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
