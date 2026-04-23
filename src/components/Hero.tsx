"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImage from '@/assets/placeholders/hero_dining_sunset.png';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Luxury outdoor dining set at sunset"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
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
        <button className="border border-white/80 bg-black/20 backdrop-blur-sm text-white px-10 py-4 tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 uppercase">
          Explora la Colección
        </button>
      </motion.div>
    </section>
  );
}
