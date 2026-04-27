"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "@/assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { 
      name: "SILLAS Y BANCOS", 
      href: "#",
      title: "SILLAS",
      subcategories: ["Sillas de Madera", "Sillas Tubulares", "Sillas Polipropileno"]
    },
    { 
      name: "MESAS", 
      href: "#",
      title: "MESAS",
      subcategories: ["Mesas Completas", "Bases para mesa"]
    },
    { 
      name: "EXTERIOR Y JARDÍN", 
      href: "#",
      title: "EXTERIOR Y JARDÍN",
      subcategories: ["Sombrillas", "Sillas de tejido y aluminio"]
    },
    { 
      name: "ESPECILIZADOS", 
      href: "#",
      title: "ESPECILIZADOS",
      subcategories: ["Comedores Industriales", "Accesorios"]
    },
  ];

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-500 ease-in-out flex flex-col ${
        isScrolled || isMegaMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" 
          : "bg-transparent shadow-none border-transparent"
      }`}
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      {/* Top Bar */}
      <div className={`w-full transition-colors duration-500 px-6 md:px-12 py-2 flex items-center justify-between text-xs ${
        isScrolled || isMegaMenuOpen ? "bg-black text-white" : "bg-black/20 text-white backdrop-blur-sm"
      }`}>
        <div className="flex items-center">
          <button aria-label="Buscar" className="hover:text-gray-300 transition-colors">
            <Search className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex items-center gap-6">
          {/* Email link */}
          <a 
            href="mailto:ventas@sitdeco.com" 
            className="hidden sm:flex items-center gap-2 hover:text-gray-300 transition-colors tracking-widest font-light"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="uppercase text-[10px]">ventas@sitdeco.com</span>
          </a>

          <div className="flex items-center gap-2 tracking-wide text-[9px] sm:text-xs">
            <span>🇲🇽</span>
            <span className="uppercase font-light tracking-wider">Hecho en México</span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className={`w-full px-6 md:px-12 py-4 flex items-center justify-between relative z-50 transition-colors duration-500`}>
        {/* Logo */}
        <Link href="/">
          <div className="relative h-7 md:h-10 w-24 md:w-40">
            <Image
              src={logoSvg}
              alt="SITDECO Logo"
              fill
              className={`object-contain object-left transition-all duration-500 ${
                isScrolled || isMegaMenuOpen ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className={`hidden lg:flex items-center gap-8 tracking-widest uppercase text-[11px] font-medium transition-colors duration-500 ${
          isScrolled || isMegaMenuOpen ? "text-[#1a1a1a]" : "text-white"
        }`}>
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="flex items-center gap-1 hover:opacity-70 transition-all group py-2 cursor-pointer"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
            >
              {link.name}
              <ChevronDown className={`w-3 h-3 transition-all duration-300 ${
                isMegaMenuOpen ? "rotate-180" : ""
              } ${
                isScrolled || isMegaMenuOpen ? "text-gray-400 group-hover:text-gray-500" : "text-white/70 group-hover:text-white"
              }`} />
            </div>
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
            className={`w-6 h-[1.5px] block transition-colors duration-500 ${
              isScrolled || isOpen || isMegaMenuOpen ? "bg-black" : "bg-white"
            }`}
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className={`w-6 h-[1.5px] block transition-colors duration-500 ${
              isScrolled || isOpen || isMegaMenuOpen ? "bg-black" : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Megamenu Desktop */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="hidden lg:block w-full bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-12 md:p-16">
              {navLinks.map((category) => (
                <div key={category.title} className="flex flex-col gap-6">
                  <h4 className="text-[11px] font-bold tracking-[0.2em] text-black uppercase">
                    {category.title}
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {category.subcategories.map((sub) => (
                      <li key={sub}>
                        <Link 
                          href="#" 
                          className="text-sm font-light tracking-wide text-gray-700 hover:text-black hover:translate-x-1 transition-all inline-block"
                        >
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <nav className="flex flex-col gap-10 overflow-y-auto">
              {navLinks.map((link, index) => (
                <div key={link.name} className="flex flex-col gap-4">
                  <button
                    onClick={() => setActiveMobileAccordion(activeMobileAccordion === link.name ? null : link.name)}
                    className="text-lg md:text-xl font-light tracking-[0.25em] uppercase text-[#1a1a1a] flex items-center justify-between w-full"
                  >
                    {link.name}
                    <ChevronDown className={`w-5 h-5 text-gray-300 transition-transform ${activeMobileAccordion === link.name ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {activeMobileAccordion === link.name && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-3 pl-4 overflow-hidden"
                      >
                        {link.subcategories.map((sub) => (
                          <li key={sub}>
                            <Link href="#" className="text-sm text-gray-500 font-light tracking-wider">{sub}</Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
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
