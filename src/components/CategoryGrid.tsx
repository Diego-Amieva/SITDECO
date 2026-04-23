"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import imgDining from "@/assets/placeholders/gallery_dining.png";
import imgBench from "@/assets/placeholders/gallery_bench.png";
import imgChair from "@/assets/placeholders/gallery_chair.png";
import imgSofa from "@/assets/placeholders/gallery_sofa.png";
import imgLoungers from "@/assets/placeholders/gallery_loungers.png";

const categories = [
  { id: 1, title: "Comedores", image: imgDining, span: "md:col-span-1 md:row-span-2" },
  { id: 2, title: "Bancas de Jardín", image: imgBench, span: "md:col-span-1 md:row-span-1" },
  { id: 3, title: "Sillas de Acento", image: imgChair, span: "md:col-span-1 md:row-span-1" },
  { id: 4, title: "Salas de Exterior", image: imgSofa, span: "md:col-span-1 md:row-span-1" },
  { id: 5, title: "Camastros", image: imgLoungers, span: "md:col-span-1 md:row-span-1" },
];

export default function CategoryGrid() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="mb-12">
        <h2 className="text-2xl tracking-[0.15em] font-light uppercase text-[#1a1a1a] mb-2">Set The Stage</h2>
        <div className="w-16 h-[1px] bg-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px] lg:h-[700px]">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            className={`relative group overflow-hidden bg-gray-100 ${cat.span} h-[300px] md:h-auto`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-lg font-medium tracking-wide uppercase drop-shadow-md">
                {cat.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
