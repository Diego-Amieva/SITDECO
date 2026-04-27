"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "@/assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "SILLAS Y BANCOS", href: "#" },
    { name: "MESAS", href: "#" },
    { name: "EXTERIOR Y JARDÍN", href: "#" },
    { name: "ESPECILIZADOS", href: "#" },
  ];

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-500 ease-in-out flex flex-col ${
        isVisible 
          ? "opacity-100 translate-y-0 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" 
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      {/* Top Bar */}
      <div className="w-full bg-black text-white px-6 md:px-12 py-2 flex items-center justify-between text-xs">
        <div className="flex items-center">
          <button aria-label="Buscar" className="hover:text-gray-300 transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-2 tracking-wide text-[9px] sm:text-xs">
          <span>🇲🇽</span>
          <span className="uppercase font-light tracking-wider">Hecho en México</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="w-full px-6 md:px-12 py-4 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/">
          <div className="relative h-7 md:h-10 w-24 md:w-40">
            <Image
              src={logoSvg}
              alt="SITDECO Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[#1a1a1a] tracking-widest uppercase text-[11px] font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="flex items-center gap-1 hover:text-gray-500 transition-colors group"
            >
              {link.name}
              <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-gray-500 transition-colors" />
            </Link>
          ))}
        </nav>

        {/* Hamburger Button - Mobile only */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="w-6 h-[1.5px] bg-black block"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="w-6 h-[1.5px] bg-black block"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[84px] md:top-[96px] bg-white z-40 flex flex-col px-8 py-12 lg:hidden"
          >
            <nav className="flex flex-col gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl md:text-2xl font-light tracking-[0.25em] uppercase text-[#1a1a1a] flex items-center justify-between"
                  >
                    {link.name}
                    <ChevronDown className="w-5 h-5 text-gray-300" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="mt-auto pt-10 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <p className="text-[10px] tracking-widest uppercase text-gray-400 font-medium">
                  © {new Date().getFullYear()} SITDECO
                </p>
                <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center">
                      <span className="text-xs">IG</span>
                   </div>
                   <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center">
                      <span className="text-xs">FB</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
