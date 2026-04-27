"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Import images
import imgLoungerAngle from "@/assets/products/lounger_angle.png";
import imgLoungerFrontal from "@/assets/products/lounger_frontal.png";
import imgSofaAngle from "@/assets/products/sofa_angle.png";
import imgSofaFrontal from "@/assets/products/sofa_frontal.png";
import imgChairAngle from "@/assets/products/chair_angle.png";
import imgChairFrontal from "@/assets/products/chair_frontal.png";
import imgUmbrellaAngle from "@/assets/products/umbrella_angle.png";
import imgUmbrellaFrontal from "@/assets/products/umbrella_frontal.png";

const products = [
  { 
    id: 1, 
    name: "Camastro de Teca Blanca", 
    price: "$1,850", 
    imageStandard: imgLoungerAngle,
    imageHover: imgLoungerFrontal
  },
  { 
    id: 2, 
    name: "Sofá Modular de Terraza", 
    price: "$4,200", 
    imageStandard: imgSofaAngle,
    imageHover: imgSofaFrontal
  },
  { 
    id: 3, 
    name: "Silla Comedor Tejido", 
    price: "$950", 
    imageStandard: imgChairAngle,
    imageHover: imgChairFrontal
  },
  { 
    id: 4, 
    name: "Sombrilla Diseño Océano", 
    price: "$2,100", 
    imageStandard: imgUmbrellaAngle,
    imageHover: imgUmbrellaFrontal
  },
];

export default function FeaturedProducts() {
  return (
    <section className="pt-8 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-semibold tracking-[0.15em] uppercase text-[#1a1a1a] mb-4">
          PRODUCTOS DESTACADOS
        </h2>
        <div className="w-16 h-[1px] bg-gray-400 mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="group flex flex-col cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] bg-[#f8f8f8] mb-6 overflow-hidden">
              {/* Standard Image (Angle) */}
              <Image
                src={product.imageStandard}
                alt={`${product.name} - Perspectiva angle`}
                fill
                className="object-cover transition-opacity duration-300"
              />
              {/* Hover Image (Frontal) */}
              <Image
                src={product.imageHover}
                alt={`${product.name} - Perspectiva frontal`}
                fill
                className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              />
            </div>
            
            {/* Text and CTA */}
            <div className="text-center flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm font-light text-gray-500 mb-6">
                  {product.price}
                </p>
              </div>
              <button className="text-[11px] tracking-[0.2em] uppercase border-b border-black pb-1 self-center hover:text-gray-500 hover:border-gray-500 transition-colors duration-300">
                Ver Detalles
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
