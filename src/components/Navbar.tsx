"use client";

import Image from "next/image";
import Link from "next/link";
import logoSvg from "@/assets/logo.svg";

export default function Navbar() {
  return (
    <header className="w-full z-50 py-4 px-6 md:px-12 flex items-center justify-between bg-white border-b border-gray-100">
      <Link href="/">
        <div className="relative h-8 md:h-10 w-32 md:w-40">
          <Image
            src={logoSvg}
            alt="SITDECO Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </Link>
      
      <nav className="hidden md:flex gap-8 text-[#1a1a1a] tracking-widest uppercase text-xs font-medium">
        <Link href="#" className="hover:text-gray-500 transition-colors">Colecciones</Link>
        <Link href="#" className="hover:text-gray-500 transition-colors">Proyectos</Link>
        <Link href="#" className="hover:text-gray-500 transition-colors">Nosotros</Link>
      </nav>

      <div className="text-[#1a1a1a] text-xs tracking-widest uppercase px-4 py-2 hidden md:block font-medium">
        ES / EN
      </div>
    </header>
  );
}
