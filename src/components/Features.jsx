import React from 'react';
import { Rocket, Shield, Wifi, Star, MapPin, Calendar } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Zero-G Lounge',
    desc: 'Float through curated soundscapes and panoramic nebula views in our gravity-neutral atrium.'
  },
  {
    icon: Shield,
    title: 'Shielded Comfort',
    desc: 'Radiation-shielded cabins, climate control, and AI-assisted sleep cycles for deep rest.'
  },
  {
    icon: Wifi,
    title: 'Quantum-Net',
    desc: 'Ultra-low latency comms to Earth and interorbital relays. Stream your stardust moments.'
  },
  {
    icon: Star,
    title: 'Michelin Nebula',
    desc: 'Cosmic cuisine by award-winning chefs—freeze-kissed textures and auroral plating.'
  },
  {
    icon: MapPin,
    title: 'Orbital Excursions',
    desc: 'Aurora fly-bys, eclipse windows, and EVA sessions with veteran guides.'
  },
  {
    icon: Calendar,
    title: 'Flexible Stays',
    desc: 'Weekend orbits to multi-week residencies. Dock, dwell, and drift on your terms.'
  }
];

export default function Features() {
  return (
    <section className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_0%,rgba(88,101,242,0.15),transparent),radial-gradient(500px_300px_at_90%_20%,rgba(244,63,94,0.15),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold sm:text-4xl">Designed for the interstellar in you</h2>
        <p className="mt-3 max-w-2xl text-white/70">Every detail is tuned for awe and ease—from docking to dreams.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20">
                <f.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
