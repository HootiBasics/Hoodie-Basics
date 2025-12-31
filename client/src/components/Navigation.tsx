import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HOOTI_CONFIG } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/#collection", label: "Colección" },
    { href: "/#about", label: "Nosotros" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <img 
              src="/logo.png" 
              alt={HOOTI_CONFIG.siteName} 
              className="h-10 w-auto transition-transform group-hover:scale-110" 
            />
            <span className="text-2xl font-black font-display tracking-tighter hover:text-primary transition-colors">
              {HOOTI_CONFIG.siteName}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="relative group p-2 hover:bg-white/5 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </button>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background border-l border-white/10 flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt={HOOTI_CONFIG.siteName} className="h-8 w-auto" />
                <span className="text-2xl font-black font-display">{HOOTI_CONFIG.siteName}</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center gap-8 p-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black font-display uppercase tracking-tighter hover:text-primary hover:scale-110 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="p-8 border-t border-white/10 text-center">
              <p className="text-muted-foreground text-sm">© 2025 {HOOTI_CONFIG.siteName}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
