import Image from "next/image";
import Link from "next/link";
import logoSvg from "@/assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-12 w-full">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo and About */}
        <div className="md:col-span-1">
          <Link href="/">
            <div className="relative h-8 md:h-10 w-32 md:w-40 mb-6">
              {/* Using CSS filter invert to make the dark logo white in the dark footer */}
              <Image
                src={logoSvg}
                alt="SITDECO Logo"
                fill
                className="object-contain object-left invert brightness-0" 
              />
            </div>
          </Link>
          <p className="text-sm text-gray-400">
            Mobiliario para proyectos excepcionales. Diseño y durabilidad para espacios exteriores.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="flex flex-col gap-4 text-sm text-gray-400">
          <h4 className="text-white uppercase tracking-widest font-medium mb-2">Compañía</h4>
          <Link href="#" className="hover:text-white transition-colors">Sobre Nosotros</Link>
          <Link href="#" className="hover:text-white transition-colors">Proyectos</Link>
          <Link href="#" className="hover:text-white transition-colors">Sustentabilidad</Link>
        </div>

        {/* Links Column 2 */}
        <div className="flex flex-col gap-4 text-sm text-gray-400">
          <h4 className="text-white uppercase tracking-widest font-medium mb-2">Soporte</h4>
          <Link href="#" className="hover:text-white transition-colors">Contacto</Link>
          <Link href="#" className="hover:text-white transition-colors">Mantenimiento</Link>
          <Link href="#" className="hover:text-white transition-colors">Garantía</Link>
        </div>

        {/* Links Column 3 */}
        <div className="flex flex-col gap-4 text-sm text-gray-400">
          <h4 className="text-white uppercase tracking-widest font-medium mb-2">Legal</h4>
          <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
          <Link href="#" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-500 uppercase tracking-widest">
        &copy; {new Date().getFullYear()} SITDECO. Todos los derechos reservados.
      </div>
    </footer>
  );
}
