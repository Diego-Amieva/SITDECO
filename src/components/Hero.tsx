"use client";

import { motion } from 'framer-motion';
import heroImage from '@/assets/placeholders/hero_dining_sunset.png';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage.src}
          className="w-full h-full object-cover"
        >
          <source src="/videos/landing_hero_stideco.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <motion.div 
        className="relative z-10 text-center px-4 flex flex-col items-center max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-white tracking-[0.2em] leading-snug mb-10 uppercase">
          Mobiliario Para <br className="hidden md:block" />
          Proyectos <br className="hidden md:block" />
          Excepcionales
        </h1>
        <button className="flex items-center gap-3 border border-white/80 bg-black/20 backdrop-blur-sm text-white px-10 py-4 tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 uppercase group">
          DESCARGAR CATÁLOGO
          <BookOpen className="w-4 h-4 transition-transform group-hover:scale-110" />
        </button>
      </motion.div>
    </section>
  );
}
