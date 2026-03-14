import Head from 'next/head';
import { useState } from 'react';

const CTA = () => (
  <a
    href="/beta/register"
    className="inline-block px-10 py-5 rounded-2xl text-base uppercase tracking-[0.2em] font-bold transition-all hover:opacity-90"
    style={{ backgroundColor: '#a50251', color: '#fff' }}
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
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#262118', color: '#EFF2D8' }}>
      <Head>
        <title>ISOVITA | Why Fuel Fails</title>
        <meta name="description" content="Pure-food cognitive endurance fuel engineered for extreme performance. Beta program now open." />
        <meta name="keywords" content="cognitive endurance fuel, pure food sports nutrition, ultra endurance fuel, 1:0.8 carb ratio, HBCD dextrin fructose, nootropic sports fuel, Channel swimming nutrition" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* NAV */}
      <nav className="flex items-center justify-between px-8 py-6 border-b" style={{ borderColor: '#595248' }}>
        <img src="/ISOVITA_logo_2x.png" alt="ISOVITA" className="h-10 object-contain" />
        <CTA />
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 py-32">
        <p className="text-xs uppercase tracking-[0.3em] font-bold mb-8" style={{ color: '#50E2F2' }}>
          Cognitive Endurance Fuel — Beta Program
        </p>
        <h1 className="text-7xl font-black mb-10 leading-none" style={{ color: '#EFF2D8' }}>
          Why?
        </h1>
        <div className="max-w-2xl mx-auto space-y-4 mb-16 text-lg leading-relaxed" style={{ color: '#595248' }}>
          <p>Why do athletes hit the wall?</p>
          <p>Why do stomachs revolt at hour six?</p>
          <p>Why do some push on while others collapse?</p>
          <p>Why does fuel fail the people who need it most?</p>
          <p>Why hasn't anyone rebuilt endurance nutrition from first principles?</p>
        </div>
        <p className="text-2xl font-bold max-w-xl mx-auto mb-16 leading-snug" style={{ color: '#EFF2D8' }}>
          ISOVITA begins with a single question — and rebuilds everything from the answer.
        </p>
        <CTA />
      </section>

      {/* WHY FUEL FAILS */}
      <section className="px-8 py-28 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] font-bold mb-6" style={{ color: '#50E2F2' }}>The Problem</p>
        <h2 className="text-4xl font-bold mb-10 leading-tight" style={{ color: '#EFF2D8' }}>
          Why does fuel fail?
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { q: 'Why the wall?', a: 'Glycogen depletion meets neurological fatigue. Most fuels address one. Neither is enough.' },
            { q: 'Why the nausea?', a: 'Maltodextrin overloads a single carbohydrate transporter. The gut revolts under metabolic stress.' },
            { q: 'Why sweetness fatigue?', a: 'Sensory adaptation is real. Repeated sweet stimuli suppress appetite compliance — the athlete stops fuelling.' },
            { q: 'Why synthetic?', a: 'Because gels are profitable. Because "good enough" became standard. Because no one asked why.' },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-2xl p-8 border" style={{ backgroundColor: '#1a1610', borderColor: '#595248' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#50E2F2' }}>{q}</h3>
              <p className="text-base leading-relaxed" style={{ color: '#EFF2D8', opacity: 0.8 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HERO PRODUCT */}
      <section className="px-8 py-28" style={{ backgroundColor: '#1a1610' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] font-bold mb-6" style={{ color: '#50E2F2' }}>The Product</p>
          <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ color: '#EFF2D8' }}>
            Pure food. Not a supplement.
          </h2>
          <p className="text-lg leading-relaxed mb-16 max-w-2xl" style={{ color: '#EFF2D8', opacity: 0.75 }}>
            ISOVITA's hero products are real fruit and vegetable purée pouches — not gels, not syrups. Metabolically structured meals in motion, engineered for extreme endurance.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl p-8 border" style={{ borderColor: '#595248' }}>
              <h3 className="text-base uppercase tracking-[0.15em] font-bold mb-5" style={{ color: '#57F2F2' }}>🍐 Fruit Line</h3>
              <ul className="space-y-3 text-base" style={{ color: '#EFF2D8', opacity: 0.8 }}>
                {['Pear + Ginger', 'Pear + Banana', 'Pear + Pineapple', 'Pear + Blueberry'].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <span style={{ color: '#50E2F2' }}>—</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8 border" style={{ borderColor: '#595248' }}>
              <h3 className="text-base uppercase tracking-[0.15em] font-bold mb-5" style={{ color: '#57F2F2' }}>🥕 Savoury Line</h3>
              <ul className="space-y-3 text-base" style={{ color: '#EFF2D8', opacity: 0.8 }}>
                {['Sweet Potato & Butternut Squash', 'Beetroot & Carrot', 'Parsnip, Apple & Thyme', 'Pumpkin, Yam & Turmeric'].map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <span style={{ color: '#50E2F2' }}>—</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Environmental */}
          <div className="rounded-2xl p-10 border" style={{ borderColor: '#50E2F2', backgroundColor: '#1f1c14' }}>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#50E2F2' }}>Engineered for the ocean.</h3>
            <p className="text-base leading-relaxed" style={{ color: '#EFF2D8', opacity: 0.8 }}>
              Our custom die-cut pouches feature a carabiner tether point — so waste is retained on the support boat, not lost to the sea. Extreme endurance should not mean environmental damage. ISOVITA is designed for the Channel from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* CARB ARCHITECTURE */}
      <section className="px-8 py-28 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] font-bold mb-6" style={{ color: '#50E2F2' }}>The Science</p>
        <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ color: '#EFF2D8' }}>
          Why does 1:0.8 work so well?
        </h2>
        <p className="text-lg leading-relaxed mb-12 max-w-2xl" style={{ color: '#EFF2D8', opacity: 0.75 }}>
          Every ISOVITA pouch delivers a precise <strong>30g carbohydrate dose</strong> structured at a 1:0.8 ratio of Highly Branched Cyclic Dextrin (HBCD) to Fructose — activating dual carbohydrate transporters simultaneously.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Dual Transporter Activation', body: 'HBCD uses the SGLT1 pathway. Fructose uses GLUT5. Together they double absorption capacity without overloading either.' },
            { label: 'Reduced GI Distress', body: 'Lower osmolality than maltodextrin means faster gastric emptying and dramatically reduced nausea under load.' },
            { label: 'Sustained Delivery', body: 'Precision over volume. 30g doses sustain metabolic flow without the spike-and-crash cycle of high-sugar gels.' },
          ].map(({ label, body }) => (
            <div key={label} className="rounded-2xl p-8 border" style={{ backgroundColor: '#1a1610', borderColor: '#595248' }}>
              <h3 className="text-sm font-bold uppercase tracking-[0.1em] mb-4" style={{ color: '#57F2F2' }}>{label}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#EFF2D8', opacity: 0.75 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NOOTROPICS */}
      <section className="px-8 py-28" style={{ backgroundColor: '#1a1610' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] font-bold mb-6" style={{ color: '#50E2F2' }}>The Cognitive Edge</p>
          <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ color: '#EFF2D8' }}>
            Endurance is neurological.
          </h2>
          <p className="text-lg leading-relaxed mb-12 max-w-2xl" style={{ color: '#EFF2D8', opacity: 0.75 }}>
            The body rarely gives out first. The mind does. ISOVITA's nootropic stack is engineered for composure, clarity, and cognitive resilience at hour twelve.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Lion's Mane", role: 'Neural Support', benefit: 'Supports nerve growth factor (NGF) synthesis. Sustains cognitive function under prolonged physical stress.' },
              { name: 'Rhodiola Rosea', role: 'Fatigue Modulation', benefit: 'Adaptogenic. Reduces perceived exertion and mental fatigue. Clinically studied for endurance performance.' },
              { name: 'L-Theanine', role: 'Calm Clarity', benefit: 'Promotes alpha-wave brain activity. Delivers focused calm without sedation — precision thinking under pressure.' },
            ].map(({ name, role, benefit }) => (
              <div key={name} className="rounded-2xl p-8 border" style={{ borderColor: '#595248' }}>
                <p className="text-xs uppercase tracking-[0.2em] font-bold mb-2" style={{ color: '#50E2F2' }}>{role}</p>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#EFF2D8' }}>{name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#EFF2D8', opacity: 0.75 }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SWEETNESS FATIGUE */}
      <section className="px-8 py-28 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] font-bold mb-6" style={{ color: '#50E2F2' }}>Sweetness Fatigue</p>
        <h2 className="text-4xl font-bold mb-6 leading-tight" style={{ color: '#EFF2D8' }}>
          Why do athletes stop eating?
        </h2>
        <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: '#EFF2D8', opacity: 0.75 }}>
          Sensory fatigue is a documented physiological response. After hours of sweet gels, the palate revolts — appetite compliance collapses and the athlete under-fuels at the most critical stage of the event.
        </p>
        <p className="text-lg leading-relaxed mb-12 max-w-2xl" style={{ color: '#EFF2D8', opacity: 0.75 }}>
          ISOVITA's savoury line is strategically engineered for hours 6, 9, 12, and 15 — resetting the palate, sustaining appetite, and delivering slow-release complex carbohydrates when the body needs them most.
        </p>
        <div className="rounded-2xl p-10 border" style={{ borderColor: '#595248', backgroundColor: '#1a1610' }}>
          <p className="text-base font-bold mb-2" style={{ color: '#57F2F2' }}>Fuel must remain consumable to remain effective.</p>
          <p className="text-sm leading-relaxed" style={{ color: '#EFF2D8', opacity: 0.7 }}>
            That is why ISOVITA is the only endurance nutrition system built around both physiological and sensory tolerance — not just macronutrient delivery.
          </p>
        </div>
      </section>

      {/* MID CTA */}
      <section className="px-8 py-24 text-center" style={{ backgroundColor: '#1a1610' }}>
        <p className="text-xs uppercase tracking-[0.3em] font-bold mb-6" style={{ color: '#50E2F2' }}>Beta Program</p>
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#EFF2D8' }}>You are not a customer.<br />You are a co-creator.</h2>
        <p className="text-lg mb-12 max-w-lg mx-auto" style={{ color: '#EFF2D8', opacity: 0.7 }}>
          The Alpha cohort is forming now. Help shape the product that will redefine endurance nutrition.
        </p>
        <CTA />
      </section>

      {/* WHY HASN'T THIS BEEN DONE */}
      <section className="px-8 py-28 max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] font-bold mb-6" style={{ color: '#50E2F2' }}>The Founder</p>
        <h2 className="text-4xl font-bold mb-8 leading-tight" style={{ color: '#EFF2D8' }}>
          Why hasn't this been done before?
        </h2>
        <div className="space-y-6 text-lg leading-relaxed max-w-2xl" style={{ color: '#EFF2D8', opacity: 0.8 }}>
          <p>Because endurance nutrition evolved from bodybuilding supplements — not from the Channel boat at 3am.</p>
          <p>Because gels are profitable. Because "good enough" became standard.</p>
          <p>ISOVITA was built from 15 years inside the English Channel. From observing over 360 swims. From watching real athletes fail on real fuel at the worst possible moment.</p>
          <p>This is not trend-based. It is physiology-led. Built by someone who has asked <em>why</em> at every crossing.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 py-32 text-center" style={{ backgroundColor: '#1a1610' }}>
        <h2 className="text-5xl font-black mb-8 leading-tight" style={{ color: '#EFF2D8' }}>
          If you have ever asked<br /><span style={{ color: '#50E2F2' }}>"Why does this fail me?"</span>
        </h2>
        <p className="text-lg mb-12 max-w-md mx-auto" style={{ color: '#EFF2D8', opacity: 0.7 }}>
          Then you belong in this cohort.
        </p>
        <CTA />
      </section>

      {/* CONTACT */}
      <section className="px-8 py-28 max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] font-bold mb-6" style={{ color: '#50E2F2' }}>Contact</p>
        <h2 className="text-3xl font-bold mb-10" style={{ color: '#EFF2D8' }}>Get in touch.</h2>
        <form onSubmit={handleContact} className="space-y-6">
          {[
            { name: 'name', placeholder: 'Your Name', type: 'text' },
            { name: 'email', placeholder: 'Your Email', type: 'email' },
          ].map(({ name, placeholder, type }) => (
            <input
              key={name}
              type={type}
              required
              placeholder={placeholder}
              value={contact[name]}
              onChange={e => setContact(prev => ({ ...prev, [name]: e.target.value }))}
              className="w-full p-5 rounded-2xl text-base outline-none border"
              style={{ backgroundColor: '#1a1610', borderColor: '#595248', color: '#EFF2D8' }}
            />
          ))}
          <textarea
            required
            placeholder="Your Message"
            rows={5}
            value={contact.message}
            onChange={e => setContact(prev => ({ ...prev, message: e.target.value }))}
            className="w-full p-5 rounded-2xl text-base outline-none border resize-none"
            style={{ backgroundColor: '#1a1610', borderColor: '#595248', color: '#EFF2D8' }}
          />
          <button
            type="submit"
            className="w-full py-5 rounded-2xl text-base uppercase tracking-[0.2em] font-bold transition-all hover:opacity-90"
            style={{ backgroundColor: '#50E2F2', color: '#262118' }}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-10 text-center border-t" style={{ borderColor: '#595248' }}>
        <p className="text-xs uppercase tracking-[0.15em]" style={{ color: '#595248' }}>
          © 2026 ISOVITA. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
