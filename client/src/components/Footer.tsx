import { HOOTI_CONFIG } from "@shared/config";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

export function Footer() {

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand */}
          <div className="md:col-span-6">
            <h2 className="text-4xl font-black font-display tracking-tighter mb-6">{HOOTI_CONFIG.siteName}</h2>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Ropa urbana diseñada para la nueva generación. Calidad y estilo sin compromisos.
            </p>
            <div className="flex gap-4">
              <a href={HOOTI_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-6 text-lg uppercase tracking-wider">Ayuda</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><Link href="/envios" className="hover:text-primary transition-colors">Envíos</Link></li>
                <li><a href={HOOTI_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg uppercase tracking-wider">Explorar</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#collection" className="hover:text-primary transition-colors">Colección</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground uppercase tracking-wider">
          <p>© 2025 {HOOTI_CONFIG.siteName} All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
