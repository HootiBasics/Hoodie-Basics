import { HOOTI_CONFIG } from "@/lib/config";
import { useSubscribe } from "@/hooks/use-subscribers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema } from "@shared/schema";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const { mutate, isPending } = useSubscribe();
  
  const form = useForm({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: { email: string }) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Brand */}
          <div className="md:col-span-4">
            <h2 className="text-4xl font-black font-display tracking-tighter mb-6">{HOOTI_CONFIG.siteName}</h2>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Ropa urbana diseñada para la nueva generación. Calidad premium y estilo sin compromisos.
            </p>
            <div className="flex gap-4">
              <a href={HOOTI_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={HOOTI_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={HOOTI_CONFIG.social.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-6 text-lg uppercase tracking-wider">Explorar</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#collection" className="hover:text-primary transition-colors">Colección</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Accesorios</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg uppercase tracking-wider">Ayuda</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Devoluciones</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Tallas</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="font-bold mb-6 text-lg uppercase tracking-wider">Únete al movimiento</h4>
            <p className="text-muted-foreground mb-6 text-sm">
              Recibe acceso anticipado a drops exclusivos y ofertas especiales.
            </p>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="relative">
                <input
                  {...form.register("email")}
                  placeholder="TU EMAIL"
                  className="w-full bg-transparent border-b border-white/30 py-3 px-0 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-white/30 font-mono text-sm"
                />
              </div>
              <button 
                type="submit" 
                disabled={isPending}
                className="w-full py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "Suscribiendo..." : "Suscribirse"}
              </button>
            </form>
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
