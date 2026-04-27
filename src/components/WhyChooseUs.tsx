"use client";

import Image from "next/image";

import img1 from "@/assets/unique/asesoria_personalizada.png";
import img2 from "@/assets/unique/planificacion_3d.png";
import img3 from "@/assets/unique/calidad_comercial.png";

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
          LO QUE NOS HACE ÚNICOS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative h-96 md:h-[450px] w-full overflow-hidden group cursor-pointer"
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
              
              {/* Content Container (Centered Flexbox) */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-8 md:p-12 text-center text-white transition-all duration-500">
                {/* Title: Moves up on hover */}
                <h3 className="text-white text-base md:text-lg font-semibold tracking-[0.15em] uppercase transform transition-transform duration-500 ease-out group-hover:-translate-y-4">
                  {feature.title}
                </h3>
                
                {/* Description: Fades in and moves from bottom slightly */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-y-4 group-hover:translate-y-0 mt-4 px-4">
                  <p className="text-white/90 text-sm md:text-base font-light leading-relaxed tracking-wide [text-wrap:balance]">
                    {feature.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
