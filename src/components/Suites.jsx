import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const suites = [
  {
    name: 'Orbit Suite',
    blurb: 'Floor-to-ceiling cosmos with adaptive tint and auto-orbit panoramas.',
    perks: ['360° viewport', 'AI circadian lighting', 'Private micro-g nook']
  },
  {
    name: 'Nebula Loft',
    blurb: 'A duplex hideaway with a stargaze mezzanine and holo-ambient fireplace.',
    perks: ['Mezzanine lounge', 'Chef tasting cart', 'Aurora alarm']
  },
  {
    name: 'Galaxy Villa',
    blurb: 'A full-module residence—bring your crew and own the horizon.',
    perks: ['Two capsules', 'Private EVA slot', 'Dedicated concierge']
  }
];

export default function Suites() {
  return (
    <section id="suites" className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_0%,rgba(217,70,239,0.12),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Suites that defy gravity</h2>
            <p className="mt-3 max-w-2xl text-white/70">Choose your orbit of comfort. Every suite is a hush of starlight and science.</p>
          </div>
          <a href="#booking" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10">
            Reserve now <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {suites.map((s, i) => (
            <article key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10">
              <div className="relative h-44 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/25 via-fuchsia-400/20 to-violet-400/25" />
                <div className="absolute inset-0 opacity-70 mix-blend-screen [background:radial-gradient(120px_60px_at_20%_30%,rgba(255,255,255,0.35),transparent),radial-gradient(160px_80px_at_80%_70%,rgba(255,255,255,0.25),transparent)]" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-300" />
                  <h3 className="text-lg font-medium">{s.name}</h3>
                </div>
                <p className="mt-2 text-white/70">{s.blurb}</p>
                <ul className="mt-4 space-y-1 text-sm text-white/70">
                  {s.perks.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <a href="#booking" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">
                    Book {s.name}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
