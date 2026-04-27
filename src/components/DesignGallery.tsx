"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import imgSofa from "@/assets/gallery/gallery_sofa_1777279691685.png";
import imgLoungers from "@/assets/gallery/gallery_loungers_1777279705061.png";
import imgDining from "@/assets/gallery/gallery_dining_table_1777279717756.png";
import imgBar from "@/assets/gallery/gallery_bar_stools_1777279741859.png";
import imgWoven from "@/assets/gallery/gallery_woven_chair_1777279757935.png";
import imgUmbrella from "@/assets/gallery/gallery_umbrella_1777279771541.png";

const images = [
  imgSofa,
  imgLoungers,
  imgDining,
  imgBar,
  imgWoven,
  imgUmbrella,
];

export default function DesignGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[400px] w-full flex flex-col items-center justify-center my-12 overflow-hidden bg-[#1a1a1a]">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 6.5, ease: "linear" }
          }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={images[currentIndex]}
            alt="Diseño que perdura gallery image"
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/50 z-0" />
      
      <h2 className="text-white text-3xl md:text-5xl font-light tracking-[0.3em] z-10 text-center mb-4 uppercase">
        DISEÑO QUE PERDURA
      </h2>
      <div className="z-10 w-16 h-[1px] bg-white/50" />
    </section>
  );
}
