import Head from 'next/head';
import { useState } from 'react';

const CTA = () => (
  <a
    href="/beta"
    className="inline-block px-14 py-5 rounded-full text-xs uppercase tracking-[0.4em] transition-all hover:opacity-80 shadow-sm"
    style={{ backgroundColor: '#D9CE32', color: '#262118', fontFamily: 'sans-serif', fontWeight: 600 }}
  >
    Join the Alpha Program
  </a>
);

export default function Home() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });

  const handleContact = (e) => {
    e.preventDefault();
    const { name, email, message } = contact;
    window.location.href = `mailto:garry.salter@me.com?subject=ISOVITA Beta Enquiry from ${name}&body=${message}%0A%0AFrom: ${name} (${email})`;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F2F2F2', color: '#262118', fontFamily: 'Georgia, serif' }}>
      <Head>
        <title>ISOVITA | Cognitive Endurance Fuel</title>
        <meta name="description" content="Pure-food cognitive endurance fuel engineered for extreme performance. Alpha program now open." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* NAV */}
      <nav style={{ backgroundColor: '#F2F2F2', borderBottom: '1px solid #E0E0E0', position: 'sticky', top: 0, zIndex: 50 }}
        className="flex items-center justify-between px-8 md:px-16 py-6">
        <img
          src="/ISOVITA_Logo_alpha.png"
          alt="ISOVITA"
          style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
        />
        <div className="hidden md:block">
          <CTA />
        </div>
      </nav>

      {/* SECTION 1 — HERO */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}
        className="px-8 py-28">
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="/isovita_hero_image.jpeg"
            alt="Open-water swimmer at sunrise"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(38,33,24,0.50)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: '#F2F2F2', fontWeight: 200, fontStyle: 'italic', letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: '2rem' }}
            className="text-5xl md:text-7xl">
            If you have ever asked<br />
            <span style={{ color: '#D9CE32' }}>"Why does this fail me?"</span>
          </h2>
          <p style={{ color: '#F2F2F2', opacity: 0.85, fontWeight: 300, lineHeight: 1.8, marginBottom: '3rem', maxWidth: '28rem' }}
            className="text-xl">
            Then you belong in this cohort.
          </p>
          <CTA />
        </div>
      </section>

      {/* SECTION 2 — WHY? */}
      <section style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
        className="px-8 py-28">
        <p style={{ color: '#595248', fontSize: '9px', letterSpacing: '0.5em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '3rem', fontFamily: 'sans-serif' }}>
          Cognitive Endurance Fuel — Alpha Validation
        </p>
        <h1 style={{ color: '#262118', fontWeight: 200, fontStyle: 'italic', letterSpacing: '-0.03em', marginBottom: '3rem' }}
          className="text-5xl md:text-6xl">
          Why?
        </h1>
        <div style={{ maxWidth: '36rem', marginBottom: '4rem' }}>
          {['Why do athletes hit the wall?', 'Why do stomachs revolt at hour six?', 'Why do some push on while others collapse?', 'Why does fuel fail the people who need it most?', "Why hasn't anyone rebuilt endurance nutrition from first principles?"].map(q => (
            <p key={q} style={{ color: '#595248', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.8, fontSize: '1.2rem', marginBottom: '1rem' }}>{q}</p>
          ))}
        </div>
        <p style={{ color: '#262118', fontWeight: 200, maxWidth: '40rem', lineHeight: 1.8, fontSize: '1.3rem', marginBottom: '4rem' }}>
          ISOVITA begins with a single question — and rebuilds everything from the answer.
        </p>
        <CTA />
      </section>

      {/* SECTION 3 — PURE FOOD */}
      <section style={{ backgroundColor: '#EBEBEB' }} className="px-8 py-28">
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <p style={{ color: '#D9CE32', fontSize: '9px', letterSpacing: '0.5em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '2rem', fontFamily: 'sans-serif' }}>The Formulation</p>
          <h2 style={{ fontWeight: 200, fontStyle: 'italic', letterSpacing: '-0.02em', marginBottom: '1.5rem' }} className="text-5xl md:text-6xl">
            Pure food. Not a supplement.
          </h2>
          <p style={{ color: '#595248', fontWeight: 300, lineHeight: 1.8, fontSize: '1.2rem', maxWidth: '48rem', marginBottom: '4rem' }}>
            ISOVITA's hero products are real fruit and vegetable purée pouches — not gels, not syrups. Metabolically structured meals in motion, engineered for extreme endurance.
          </p>

          {/* Product Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src="/isovita_fruit_pouches.jpg" alt="ISOVITA Fruit Line" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img src="/isovita_savoury_pouches.jpeg" alt="ISOVITA Savoury Line" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { emoji: '🍐', label: 'Fruit Line', items: ['Pear + Ginger', 'Pear + Banana', 'Pear + Pineapple', 'Pear + Blueberry'] },
              { emoji: '🥕', label: 'Savoury Line', items: ['Sweet Potato & Butternut Squash', 'Beetroot & Carrot', 'Parsnip, Apple & Thyme', 'Pumpkin, Yam & Turmeric'] },
            ].map(({ emoji, label, items }) => (
              <div key={label} style={{ backgroundColor: '#F2F2F2', borderRadius: '1.5rem', padding: '3rem' }}>
                <p style={{ fontSize: '9px', letterSpacing: '0.4em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '2rem', fontFamily: 'sans-serif' }}>{emoji} {label}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {items.map(item => (
                    <li key={item} style={{ color: '#595248', fontWeight: 300, fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D9CE32', flexShrink: 0, display: 'inline-block' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ backgroundColor: '#262118', borderRadius: '1.5rem', padding: '4rem', textAlign: 'center' }}>
            <h3 style={{ color: '#F2F2F2', fontWeight: 200, fontStyle: 'italic', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Engineered for open-water.</h3>
            <p style={{ color: '#F2F2F2', opacity: 0.75, fontWeight: 300, lineHeight: 1.8, maxWidth: '48rem', margin: '0 auto' }}>
              Our custom die-cut pouches feature a carabiner tether point — so waste is retained on the support boat, not lost to the sea. Extreme endurance should not mean environmental damage.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY DOES FUEL FAIL */}
      <section className="px-8 py-28" style={{ borderTop: '1px solid #D9D9D9' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <p style={{ color: '#D9CE32', fontSize: '9px', letterSpacing: '0.5em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '2rem', fontFamily: 'sans-serif' }}>The Inquiry</p>
          <h2 style={{ fontWeight: 200, fontStyle: 'italic', letterSpacing: '-0.02em', marginBottom: '4rem' }} className="text-5xl md:text-6xl">
            Why does fuel fail?
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            {[
              { q: 'Why the wall?', a: 'Glycogen depletion meets neurological fatigue. Most fuels address one. Neither is enough.' },
              { q: 'Why the nausea?', a: 'Maltodextrin overloads a single carbohydrate transporter. The gut revolts under metabolic stress.' },
              { q: 'Why sweetness fatigue?', a: 'Sensory adaptation is real. Repeated sweet stimuli suppress appetite compliance — the athlete stops fuelling.' },
              { q: 'Why synthetic?', a: 'Because gels are profitable. Because "good enough" became standard. Because no one asked why.' },
            ].map(({ q, a }) => (
              <div key={q}>
                <h3 style={{ fontWeight: 300, fontSize: '1.4rem', paddingBottom: '1rem', marginBottom: '1rem', borderBottom: '1px solid #D9D9D9' }}>{q}</h3>
                <p style={{ color: '#595248', fontWeight: 300, lineHeight: 1.8 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — CARB ARCHITECTURE */}
      <section className="px-8 py-28">
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <p style={{ color: '#D9CE32', fontSize: '9px', letterSpacing: '0.5em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '2rem', fontFamily: 'sans-serif' }}>The Architecture</p>
          <h2 style={{ fontWeight: 200, fontStyle: 'italic', letterSpacing: '-0.02em', marginBottom: '1.5rem' }} className="text-5xl md:text-6xl">
            Why does 1:0.8 work so well?
          </h2>
          <p style={{ color: '#595248', fontWeight: 300, lineHeight: 1.8, fontSize: '1.2rem', maxWidth: '48rem', marginBottom: '4rem' }}>
            Every ISOVITA pouch delivers a precise <strong>30g carbohydrate dose</strong> at a 1:0.8 ratio of Highly Branched Cyclic Dextrin (HBCD) to Fructose — activating dual carbohydrate transporters simultaneously.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { label: 'Dual Transporter Activation', body: 'HBCD uses the SGLT1 pathway. Fructose uses GLUT5. Together they double absorption capacity without overloading either.' },
              { label: 'Reduced GI Distress', body: 'Lower osmolality than maltodextrin means faster gastric emptying and dramatically reduced nausea under load.' },
              { label: 'Sustained Delivery', body: 'Precision over volume. 30g doses sustain metabolic flow without the spike-and-crash cycle of high-sugar gels.' },
            ].map(({ label, body }) => (
              <div key={label} style={{ borderLeft: '2px solid #D9CE32', paddingLeft: '2rem' }}>
                <p style={{ fontSize: '9px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1rem', fontFamily: 'sans-serif' }}>{label}</p>
                <p style={{ color: '#595248', fontWeight: 300, lineHeight: 1.8 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — NOOTROPICS */}
      <section className="px-8 py-28" style={{ backgroundColor: '#EBEBEB' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <p style={{ color: '#D9CE32', fontSize: '9px', letterSpacing: '0.5em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '2rem', fontFamily: 'sans-serif' }}>The Cognitive Edge</p>
          <h2 style={{ fontWeight: 200, fontStyle: 'italic', letterSpacing: '-0.02em', marginBottom: '1.5rem' }} className="text-5xl md:text-6xl">
            Endurance is neurological.
          </h2>
          <p style={{ color: '#595248', fontWeight: 300, lineHeight: 1.8, fontSize: '1.2rem', maxWidth: '48rem', marginBottom: '4rem' }}>
            The body rarely gives out first. The mind does. ISOVITA's nootropic stack is engineered for composure, clarity, and cognitive resilience at hour twelve.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Lion's Mane", role: 'Neural Support', benefit: 'Supports nerve growth factor (NGF) synthesis. Sustains cognitive function under prolonged physical stress.' },
              { name: 'Rhodiola Rosea', role: 'Fatigue Modulation', benefit: 'Adaptogenic. Reduces perceived exertion and mental fatigue. Clinically studied for endurance performance.' },
              { name: 'L-Theanine', role: 'Calm Clarity', benefit: 'Promotes alpha-wave brain activity. Delivers focused calm without sedation — precision thinking under pressure.' },
            ].map(({ name, role, benefit }) => (
              <div key={name} style={{ backgroundColor: '#F2F2F2', borderRadius: '1.5rem', padding: '3rem' }}>
                <p style={{ color: '#D9CE32', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600, marginBottom: '1rem', fontFamily: 'sans-serif' }}>{role}</p>
                <h3 style={{ fontWeight: 200, fontStyle: 'italic', fontSize: '1.5rem', marginBottom: '1rem' }}>{name}</h3>
                <p style={{ color: '#595248', fontWeight: 300, lineHeight: 1.8 }}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — SWEETNESS FATIGUE */}
      <section className="px-8 py-28" style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#D9CE32', fontSize: '9px', letterSpacing: '0.5em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '2rem', fontFamily: 'sans-serif' }}>Sensory Science</p>
        <h2 style={{ fontWeight: 200, fontStyle: 'italic', letterSpacing: '-0.02em', marginBottom: '3rem' }} className="text-5xl md:text-6xl">
          Why do athletes stop eating?
        </h2>
        <p style={{ color: '#595248', fontWeight: 300, lineHeight: 1.8, fontSize: '1.2rem', marginBottom: '2rem' }}>
          Sensory fatigue is a documented physiological response. After hours of sweet gels, the palate revolts — appetite compliance collapses and the athlete under-fuels at the most critical stage of the event.
        </p>
        <p style={{ color: '#595248', fontWeight: 300, lineHeight: 1.8, fontSize: '1.2rem', marginBottom: '3rem' }}>
          ISOVITA's savoury line is strategically engineered for hours 6, 9, 12, and 15 — resetting the palate, sustaining appetite, and delivering slow-release complex carbohydrates when the body needs them most.
        </p>
        <div style={{ borderTop: '1px solid #D9D9D9', borderBottom: '1px solid #D9D9D9', padding: '3rem 0' }}>
          <p style={{ fontWeight: 200, fontStyle: 'italic', fontSize: '1.5rem' }}>Fuel must remain consumable to remain effective.</p>
        </div>
      </section>

      {/* SECTION 8 — MID CTA */}
      <section className="px-8 py-28 text-center" style={{ backgroundColor: '#262118' }}>
        <p style={{ color: '#D9CE32', fontSize: '9px', letterSpacing: '0.6em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '2rem', fontFamily: 'sans-serif' }}>Alpha Validation</p>
        <h2 style={{ color: '#F2F2F2', fontWeight: 200, fontStyle: 'italic', letterSpacing: '-0.02em', marginBottom: '2rem' }} className="text-5xl md:text-7xl">
          You are not a customer.<br />You are a co-creator.
        </h2>
        <p style={{ color: '#F2F2F2', opacity: 0.6, fontWeight: 300, lineHeight: 1.8, fontSize: '1.2rem', maxWidth: '36rem', margin: '0 auto 3rem' }}>
          The Alpha cohort is forming now. Help shape the product that will redefine endurance nutrition.
        </p>
        <CTA />
      </section>

      {/* SECTION 9 — WHY HASN'T THIS BEEN DONE BEFORE */}
      <section className="px-8 py-28">
        <div style={{ maxWidth: '72rem', margin: '0 auto' }} className="grid md:grid-cols-2 gap-24 items-start">
          <div>
            <p style={{ color: '#D9CE32', fontSize: '9px', letterSpacing: '0.5em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '2rem', fontFamily: 'sans-serif' }}>The Origin</p>
            <h2 style={{ fontWeight: 200, fontStyle: 'italic', letterSpacing: '-0.02em', lineHeight: 1.2 }} className="text-5xl md:text-6xl">
              Why hasn't this been done before?
            </h2>
          </div>
          <div style={{ paddingTop: '0.5rem' }}>
            {[
              'Because endurance nutrition evolved from bodybuilding supplements — not from the Channel boat at 3am.',
              'Because gels are profitable. Because "good enough" became standard.',
              'ISOVITA was built from 15 years inside the English Channel. From observing over 360 open-water swims. From watching real athletes fail on real fuel at the worst possible moment.',
              'This is not trend-based. It is physiology-led. Built by someone who has asked why at every crossing.',
            ].map((p, i) => (
              <p key={i} style={{ color: '#595248', fontWeight: 300, lineHeight: 1.8, fontSize: '1.1rem', marginBottom: '1.5rem' }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-8 py-28" style={{ borderTop: '1px solid #D9D9D9' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <p style={{ color: '#D9CE32', fontSize: '9px', letterSpacing: '0.5em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '2rem', fontFamily: 'sans-serif' }}>Inquiries</p>
          <h2 style={{ fontWeight: 200, fontStyle: 'italic', marginBottom: '3rem' }} className="text-4xl">Get in touch.</h2>
          <form onSubmit={handleContact} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div className="grid md:grid-cols-2 gap-8">
              <input type="text" required placeholder="Your Name" value={contact.name}
                onChange={e => setContact(p => ({ ...p, name: e.target.value }))}
                style={{ borderBottom: '1px solid #595248', padding: '1rem 0', background: 'transparent', fontSize: '1.1rem', fontWeight: 300, outline: 'none', color: '#262118', width: '100%' }} />
              <input type="email" required placeholder="Your Email" value={contact.email}
                onChange={e => setContact(p => ({ ...p, email: e.target.value }))}
                style={{ borderBottom: '1px solid #595248', padding: '1rem 0', background: 'transparent', fontSize: '1.1rem', fontWeight: 300, outline: 'none', color: '#262118', width: '100%' }} />
            </div>
            <textarea required placeholder="Your Message" rows={4} value={contact.message}
              onChange={e => setContact(p => ({ ...p, message: e.target.value }))}
              style={{ borderBottom: '1px solid #595248', padding: '1rem 0', background: 'transparent', fontSize: '1.1rem', fontWeight: 300, outline: 'none', color: '#262118', resize: 'none', width: '100%' }} />
            <button type="submit"
              style={{ backgroundColor: '#262118', color: '#F2F2F2', borderRadius: '9999px', padding: '1.5rem', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5em', fontFamily: 'sans-serif', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-12 text-center" style={{ borderTop: '1px solid #D9D9D9' }}>
        <p style={{ color: '#595248', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.4em', fontFamily: 'sans-serif', fontWeight: 300 }}>
          © 2026 ISOVITA. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
