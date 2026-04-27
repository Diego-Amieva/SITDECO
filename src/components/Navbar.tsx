"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import logoSvg from "@/assets/logo.svg";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 flex flex-col">
      {/* Top Bar */}
      <div className="w-full bg-black text-white px-6 md:px-12 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center">
          <button aria-label="Buscar" className="hover:text-gray-300 transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2 tracking-wide text-[10px] sm:text-xs">
          <span>🇲🇽</span>
          <span>Hecho en México</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
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
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[#1a1a1a] tracking-widest uppercase text-[11px] font-medium">
          <Link href="#" className="flex items-center gap-1 hover:text-gray-500 transition-colors group">
            SILLAS Y BANCOS
            <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-gray-500 transition-colors" />
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-gray-500 transition-colors group">
            MESAS
            <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-gray-500 transition-colors" />
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-gray-500 transition-colors group">
            EXTERIOR Y JARDÍN
            <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-gray-500 transition-colors" />
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-gray-500 transition-colors group">
            ESPECILIZADOS
            <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-gray-500 transition-colors" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
