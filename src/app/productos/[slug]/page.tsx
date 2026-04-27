"use client";

import { useState, use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Droplets, Box, Ruler } from "lucide-react";

const productDataMap: Record<string, { images: string[], price: string }> = {
  "camastro-lago": {
    images: [
      "/products/toro/rel-camastro.jpg",
      "/products/toro/sofa-toro-detalle.jpg",
      "/products/toro/sofa-toro-frontal.jpg",
    ],
    price: "$15,200 MXN",
  },
  "sofa-modular-toro": {
    images: [
      "/products/toro/sofa-toro-3-4.jpg",
      "/products/toro/sofa-toro-detalle.jpg",
      "/products/toro/sofa-toro-frontal.jpg",
    ],
    price: "$45,900 MXN",
  },
  "silla-tejida-alba": {
    images: [
      "/products/toro/rel-silla.jpg",
      "/products/toro/sofa-toro-detalle.jpg",
      "/products/toro/sofa-toro-frontal.jpg",
    ],
    price: "$8,500 MXN",
  },
  "sombrilla-monarca": {
    images: [
      "/products/toro/rel-sombrilla.jpg",
      "/products/toro/sofa-toro-detalle.jpg",
      "/products/toro/sofa-toro-frontal.jpg",
    ],
    price: "$18,900 MXN",
  }
};

const relatedProducts = [
  { id: 1, name: "Mesa Toro", price: "$12,500 MXN", image: "/products/toro/rel-mesa.jpg", slug: "mesa-toro" },
  { id: 2, name: "Camastro Lago", price: "$15,200 MXN", image: "/products/toro/rel-camastro.jpg", slug: "camastro-lago" },
  { id: 3, name: "Silla Alba", price: "$8,500 MXN", image: "/products/toro/rel-silla.jpg", slug: "silla-tejida-alba" },
  { id: 4, name: "Sombrilla Monarca", price: "$18,900 MXN", image: "/products/toro/rel-sombrilla.jpg", slug: "sombrilla-monarca" },
];

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const productData = productDataMap[slug] || productDataMap["sofa-modular-toro"];
  const galleryImages = productData.images;
  
  const [mainImage, setMainImage] = useState(galleryImages[0]);
  const [activeTab, setActiveTab] = useState("DESCRIPCIÓN");

  useEffect(() => {
    setMainImage(galleryImages[0]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, galleryImages]);

  const displayTitle = slug.replace(/-/g, ' ').toUpperCase();

  return (
    <main className="min-h-screen bg-white pt-24 pb-16 font-sans">
      {/* Product Section */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24">
        
        {/* Left Column - Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square w-full bg-[#f8f8f8] overflow-hidden">
            <Image 
              src={mainImage} 
              alt="Sofá Modular Toro - Vista Principal" 
              fill 
              className="object-cover transition-opacity duration-500"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setMainImage(img)}
                className={`relative aspect-square bg-[#f8f8f8] cursor-pointer border-2 transition-colors ${mainImage === img ? 'border-[#1a1a1a]' : 'border-transparent hover:border-gray-300'}`}
              >
                <Image 
                  src={img} 
                  alt={`Thumbnail ${idx + 1}`} 
                  fill 
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide text-[#1a1a1a] mb-4 uppercase">
            {displayTitle}
          </h1>
          
          <div className="flex items-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            ))}
            <span className="text-sm text-gray-500 ml-2">(12 Reseñas)</span>
          </div>

          <p className="text-gray-600 font-normal leading-relaxed mb-8">
            Sofisticado sistema de sofá modular para exterior/interior, fusionando diseño moderno y artesanía mexicana. Estructura de aluminio de alto calibre con tejido de cuerda texturizada y cojines de tela Premium repelente al agua.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <Box className="w-5 h-5 text-[#8b917c]" />
              <span className="text-sm tracking-wide font-semibold">Polipropileno Robust</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Droplets className="w-5 h-5 text-[#8b917c]" />
              <span className="text-sm tracking-wide font-semibold">Tela Premium (Repelente al agua)</span>
            </div>
          </div>

          <div className="text-3xl font-semibold text-[#1a1a1a] mb-10">
            {productData.price}
          </div>

          <div className="flex flex-col gap-4">
            <button className="w-full bg-[#1a1a1a] text-white py-4 font-semibold tracking-[0.2em] uppercase hover:bg-gray-800 transition-colors">
              Añadir al Carrito
            </button>
            <button className="w-full bg-white text-[#1a1a1a] border border-[#1a1a1a] py-4 font-semibold tracking-[0.2em] uppercase hover:bg-gray-50 transition-colors">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <hr className="border-gray-200" />
      </div>

      {/* Tabs Section */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-20">
        <div className="flex justify-center gap-8 md:gap-16 mb-12 border-b border-gray-200">
          {["DESCRIPCIÓN", "ESPECIFICACIONES", "MATERIALES Y CUIDADO"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm tracking-widest font-semibold uppercase transition-colors relative ${
                activeTab === tab ? "text-[#1a1a1a]" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#1a1a1a]" />
              )}
            </button>
          ))}
        </div>

        <div className="text-gray-600 font-normal leading-relaxed">
          {activeTab === "DESCRIPCIÓN" && (
            <div className="animate-fadeIn">
              <p>
                El Sofá Modular Toro redefine la elegancia en espacios abiertos y semi-cubiertos. Inspirado en formas orgánicas y arquitectónicas, cada módulo está diseñado para proporcionar el máximo confort sin comprometer la estética. La versatilidad de este sistema permite infinitas configuraciones para adaptarse a tu estilo de vida y al diseño de tu terraza o jardín.
              </p>
            </div>
          )}
          {activeTab === "ESPECIFICACIONES" && (
            <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f8f8f8] flex items-center justify-center rounded-full">
                    <Ruler className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">Dimensiones Generales</h4>
                    <p>Largo: 250cm | Ancho: 180cm (modular) | Alto: 70cm</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f8f8f8] flex items-center justify-center rounded-full">
                    <Ruler className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">Altura de Asiento</h4>
                    <p>42 cm desde el suelo</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-2"><strong className="text-[#1a1a1a]">Peso por módulo:</strong> Aprox. 18 kg</p>
                <p className="mb-2"><strong className="text-[#1a1a1a]">Ensamblaje:</strong> Entregado pre-ensamblado</p>
                <p><strong className="text-[#1a1a1a]">Garantía:</strong> 5 años en estructura</p>
              </div>
            </div>
          )}
          {activeTab === "MATERIALES Y CUIDADO" && (
            <div className="animate-fadeIn">
              <ul className="list-disc pl-5 space-y-3">
                <li><strong className="text-[#1a1a1a]">Estructura:</strong> Aluminio extruido con recubrimiento en polvo, resistente a la oxidación y rayos UV.</li>
                <li><strong className="text-[#1a1a1a]">Tejido:</strong> Cuerda de Polipropileno Robust, tejida a mano, altamente resistente a la intemperie.</li>
                <li><strong className="text-[#1a1a1a]">Cojines:</strong> Espuma de secado rápido con fundas de Tela Premium. Repelentes al agua, antimanchas y removibles para fácil lavado.</li>
                <li><strong className="text-[#1a1a1a]">Cuidado:</strong> Lavar con agua tibia y jabón neutro. Recomendamos usar fundas protectoras durante el invierno o lluvias intensas prolongadas para extender la vida útil del producto.</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="bg-[#f8f8f8] py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-semibold tracking-[0.15em] uppercase text-[#1a1a1a] mb-4">
              TAMBIÉN TE PUEDE GUSTAR
            </h2>
            <div className="w-16 h-[1px] bg-gray-400 mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {relatedProducts.map((product) => (
              <Link href={`/productos/${product.slug}`} key={product.id} className="group flex flex-col cursor-pointer">
                <div className="relative aspect-[4/5] bg-white mb-6 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="text-center flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm font-light text-gray-500 mb-0">
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
