"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

import imgChair1 from "@/assets/placeholders/product_chair_1.png";
import imgChair2 from "@/assets/placeholders/product_chair_2.png";
import imgChair3 from "@/assets/placeholders/product_chair_3.png";
import imgChair4 from "@/assets/placeholders/product_chair_4.png";

const products = [
  { id: 1, name: "Aetheria Lounge Chair", price: "$1,200", image: imgChair1 },
  { id: 2, name: "Solstice Dining Chair", price: "$850", image: imgChair2 },
  { id: 3, name: "Horizon Woven Chair", price: "$1,450", image: imgChair3 },
  { id: 4, name: "Zenith Minimalist", price: "$920", image: imgChair4 },
];

export default function ProductCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl tracking-[0.15em] font-light uppercase text-[#1a1a1a] mb-4">
          Featured Best Sellers
        </h2>
        <div className="w-16 h-[1px] bg-gray-400 mx-auto" />
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-2 text-gray-500 hover:text-black transition-colors"
          aria-label="Previous product"
        >
          <ChevronLeft size={32} strokeWidth={1} />
        </button>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 md:gap-8 snap-x snap-mandatory hide-scrollbar pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="flex-none w-[280px] md:w-[320px] snap-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative aspect-square bg-[#f8f8f8] mb-6 p-8 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="text-sm tracking-widest uppercase text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{product.price}</p>
                <button className="text-xs tracking-widest uppercase border border-gray-300 px-6 py-2 hover:bg-black hover:text-white transition-colors duration-300">
                  Explorar
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-2 text-gray-500 hover:text-black transition-colors"
          aria-label="Next product"
        >
          <ChevronRight size={32} strokeWidth={1} />
        </button>
      </div>
      
      <div className="mt-16 flex justify-center">
        <button className="bg-[#8b917c] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#7a806b] transition-colors">
          Ver Todo
        </button>
      </div>
    </section>
  );
}
