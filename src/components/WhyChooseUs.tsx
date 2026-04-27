"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Utilizando las imágenes disponibles de la galería como placeholders temporales
import img1 from "@/assets/placeholders/feature_robust.png";
import img2 from "@/assets/placeholders/feature_weather.png";
import img3 from "@/assets/placeholders/gallery_chair.png";

const features = [
  {
    title: "ASESORÍA PERSONALIZADA",
    text: "Colaboración directa con nuestro equipo para definir cada detalle de tus necesidades de mobiliario.",
    image: img1,
  },
  {
    title: "PLANIFICACIÓN 3D",
    text: "Desde la pre-visualización hasta la aprobación final: aseguramos que tu espacio exterior coincida con tu visión.",
    image: img2,
  },
  {
    title: "CALIDAD COMERCIAL",
    text: "Mobiliario diseñado para resistir todas las estaciones con máxima durabilidad y solidez estructural.",
    image: img3,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-4xl font-light tracking-[0.2em] uppercase text-[#1a1a1a] mb-12">
          ¿POR QUÉ ELEGIR SITDECO?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative h-[400px] md:h-[450px] lg:h-[550px] w-full overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Overlay: Cambia de oscuro a un tono azulado profundo en hover */}
              <div className="absolute inset-0 bg-black/40 transition-colors duration-500 ease-out group-hover:bg-[#12223a]/80 z-10" />
              
              {/* Content Container */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end items-center text-center">
                {/* Grupo de texto que se desplaza hacia arriba */}
                <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-8 flex flex-col items-center relative w-full">
                  <h3 className="text-white text-base md:text-lg font-medium tracking-[0.15em] uppercase">
                    {feature.title}
                  </h3>
                  
                  {/* Texto descriptivo: Fade in y posicionado justo debajo del título */}
                  <div className="absolute top-full mt-4 w-full px-2 md:px-4 opacity-0 transform translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="text-white/90 text-sm font-light leading-relaxed tracking-wide">
                      {feature.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
