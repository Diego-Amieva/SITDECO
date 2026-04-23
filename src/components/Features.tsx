"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import imgFade from "@/assets/placeholders/feature_fade.png";
import imgWeather from "@/assets/placeholders/feature_weather.png";
import imgMaintenance from "@/assets/placeholders/feature_maintenance.png";
import imgRobust from "@/assets/placeholders/feature_robust.png";

const features = [
  {
    title: "Resistencia a la Decoloración",
    description: "Materiales de alta tecnología diseñados para soportar los rayos UV sin perder su color original.",
    image: imgFade,
  },
  {
    title: "Resistente a Toda Estación",
    description: "Nuestros muebles están construidos para tolerar lluvias, nieve y climas extremos.",
    image: imgWeather,
  },
  {
    title: "Mantenimiento Mínimo",
    description: "Superficies fáciles de limpiar que no requieren tratamientos especiales ni barnices.",
    image: imgMaintenance,
  },
  {
    title: "Estructuras Robustas",
    description: "Ensamblajes de alta calidad y aluminio resistente para asegurar la máxima durabilidad.",
    image: imgRobust,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Features() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
      <div className="mb-16">
        <h2 className="text-3xl tracking-[0.15em] font-light uppercase text-[#1a1a1a] mb-4">¿Por Qué Elegirnos?</h2>
        <div className="w-16 h-[1px] bg-gray-400 mx-auto" />
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 border border-gray-200 shadow-sm">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 text-[#1a1a1a]">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[250px]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
