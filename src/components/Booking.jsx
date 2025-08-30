import React from 'react';
import { Calendar, MapPin, Rocket } from 'lucide-react';

export default function Booking() {
  return (
    <section id="booking" className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_350px_at_50%_100%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Reserve your orbit</h2>
          <p className="mt-2 max-w-2xl text-white/70">Share a few details and our concierges will finalize your interstellar escape.</p>

          <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="col-span-1">
              <label className="mb-1 block text-sm text-white/80">Full name</label>
              <input type="text" placeholder="Ada Lovelace" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 transition focus:border-white/20 focus:bg-black/60" />
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-sm text-white/80">Email</label>
              <input type="email" placeholder="you@galaxy.com" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-white/20 focus:bg-black/60" />
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-sm text-white/80">Check-in</label>
              <div className="relative">
                <Calendar className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <input type="date" className="w-full rounded-xl border border-white/10 bg-black/40 pl-10 pr-4 py-3 text-white outline-none transition focus:border-white/20 focus:bg-black/60" />
              </div>
            </div>
            <div className="col-span-1">
              <label className="mb-1 block text-sm text-white/80">Check-out</label>
              <div className="relative">
                <Calendar className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <input type="date" className="w-full rounded-xl border border-white/10 bg-black/40 pl-10 pr-4 py-3 text-white outline-none transition focus:border-white/20 focus:bg-black/60" />
              </div>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="mb-1 block text-sm text-white/80">Preferred experience</label>
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                <select className="w-full appearance-none rounded-xl border border-white/10 bg-black/40 pl-10 pr-10 py-3 text-white outline-none transition focus:border-white/20 focus:bg-black/60">
                  <option className="bg-black">Aurora fly-by</option>
                  <option className="bg-black">Eclipse window</option>
                  <option className="bg-black">Stargaze retreat</option>
                  <option className="bg-black">EVA session</option>
                </select>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-2 mt-2">
              <button type="button" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90">
                <Rocket className="h-5 w-5" /> Request reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
