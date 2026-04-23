import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCarousel from "@/components/ProductCarousel";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Features />
      
      {/* "BUILT DIFFERENT" Banner Section */}
      <section className="relative h-[400px] w-full bg-[#1a1a1a] flex flex-col items-center justify-center my-12">
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <h2 className="text-white text-3xl md:text-5xl font-light tracking-[0.3em] z-10 text-center mb-4">
          BUILT DIFFERENT
        </h2>
        <div className="z-10 w-16 h-[1px] bg-white/50" />
      </section>

      <CategoryGrid />
      <ProductCarousel />
      
      {/* Stay in the loop section */}
      <section className="bg-[#f8f8f8] py-24 px-6 text-center">
        <h2 className="text-lg tracking-[0.2em] font-light uppercase text-[#1a1a1a] mb-2">STAY IN THE LOOP</h2>
        <p className="text-gray-500 mb-8 text-sm">Regístrate para recibir nuestras últimas novedades y catálogos.</p>
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
          ELEVATE YOUR <br className="hidden md:block"/>
          OUTDOOR EXPERIENCE
        </h2>
        <button className="bg-[#8b917c] text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#7a806b] transition-colors shadow-sm">
          Contáctanos
        </button>
      </section>
    </main>
  );
}

