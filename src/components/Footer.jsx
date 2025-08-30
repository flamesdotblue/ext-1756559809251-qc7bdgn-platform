import React from 'react';
import { Rocket, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_100%_0%,rgba(6,182,212,0.12),transparent)]" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 text-white">
            <Rocket className="h-5 w-5 text-cyan-300" />
            <span className="text-lg font-semibold">Spacy</span>
          </div>
          <p className="mt-3 text-white/70">A luxury hotel in low Earth orbit. Sleep closer to the stars than ever before.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-white/80">Contact</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> stay@spacy.hotel</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 012-3456</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> LEO Dock 3, Orbital Ring</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/80">Explore</h4>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#suites" className="hover:text-white">Suites</a></li>
              <li><a href="#booking" className="hover:text-white">Reservations</a></li>
              <li><a href="#" className="hover:text-white">Experiences</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-10 max-w-6xl px-6 text-xs text-white/50">
        © {new Date().getFullYear()} Spacy Hotel. All rights reserved.
      </div>
    </footer>
  );
}
