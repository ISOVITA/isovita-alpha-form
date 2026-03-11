import Head from 'next/head';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fdfbf7] font-sans overflow-hidden flex flex-col">
      <Head>
        <title>ISOVITA | Cognitive Endurance Fuel</title>
        <meta name="description" content="Pure food. Nootropic-fortified. Engineered for extreme endurance." />
      </Head>

      {/* Background block */}
      <div className="fixed bottom-0 left-0 w-full h-[60vh] z-0" style={{ backgroundColor: '#a50251' }} />

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* HEADER */}
        <header className="pt-20 pb-10 text-center px-8 bg-white">
          <img
            src="/ISOVITA_logo_2x.png"
            alt="ISOVITA logo"
            className="mx-auto h-24 mb-8 object-contain"
          />
          <p className="text-sm tracking-[0.2em] uppercase font-bold text-gray-500">
            Cognitive Endurance Fuel
          </p>
        </header>

        {/* HERO */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-8 -mt-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 max-w-lg w-full px-10 py-14 mx-auto">
            <h1 className="text-4xl font-semibold leading-tight mb-6 tracking-tight">
              Pure food.<br />
              Engineered for<br />
              extreme endurance.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              ISOVITA is a nootropic-fortified, fruit and vegetable purée-based nutrition system built for open-water swimmers, triathletes, and ultra-endurance athletes.
            </p>
            <a
              href="/beta"
              className="inline-block w-full py-5 rounded-2xl text-lg uppercase tracking-[0.2em] font-bold bg-[#a50251] text-white transition-all hover:opacity-90"
            >
              Join the Alpha Program
            </a>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="text-center py-10 px-8">
          <p className="text-white/50 text-xs tracking-[0.1em] uppercase">
            © {new Date().getFullYear()} ISOVITA. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}
