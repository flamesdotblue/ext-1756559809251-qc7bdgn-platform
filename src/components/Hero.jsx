import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.75)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <Star className="h-4 w-4 text-yellow-300" />
          <p className="text-sm text-white/80">Introducing Spacy — Your stay among the stars</p>
        </div>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          Spacy
          <span className="block bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">The Cosmic Hotel</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
          Sleep in orbit, dine above auroras, and wake to a horizon that curves. A futuristic sanctuary crafted for explorers, romantics, and dreamers.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90"
          >
            <Rocket className="h-5 w-5" /> Book your orbit
          </a>
          <a
            href="#suites"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-md transition hover:bg-white/10"
          >
            Explore suites <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
