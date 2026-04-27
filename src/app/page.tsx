import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Features from "@/components/Features";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import DesignGallery from "@/components/DesignGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhyChooseUs />
      <Features />
      
      <DesignGallery />

      <CategoryGrid />
      <FeaturedProducts />
      
      {/* Stay in touch section */}
      <section className="bg-[#f8f8f8] py-24 px-6 text-center">
        <h2 className="text-lg tracking-[0.2em] font-light uppercase text-[#1a1a1a] mb-2">MANTENGÁMONOS EN CONTACTO</h2>
        <p className="text-gray-500 mb-8 text-sm">Regístrate para recibir novedades y ofertas exclusivas.</p>
        <div className="flex justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Tu email" 
            className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#8b917c] bg-white" 
          />
          <button className="bg-[#8b917c] text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-[#7a806b] transition-colors">
            Suscribir
          </button>
        </div>
      </section>
      
      {/* Footer Banner CTA */}
      <section className="bg-[#e6e7df] py-32 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-gray-600 mb-4">Mobiliario de Exterior Excepcional</p>
        <h2 className="text-3xl md:text-5xl font-light tracking-[0.1em] text-[#1a1a1a] mb-10 leading-tight">
          ELEVA TU <br className="hidden md:block"/>
          EXPERIENCIA AL AIRE LIBRE
        </h2>
        <button className="bg-[#8b917c] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#7a806b] transition-colors shadow-sm">
          Contáctanos
        </button>
      </section>
    </main>
  );
}

