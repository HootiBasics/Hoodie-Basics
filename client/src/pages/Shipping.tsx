import { motion } from "framer-motion";
import { ArrowLeft, Truck, Package, ShieldCheck } from "lucide-react";
import { useLocation } from "wouter";

const shippingCompanies = [
  { name: "Liberty Express", logo: "LE" },
  { name: "MRW Venezuela", logo: "MRW" },
  { name: "Zoom", logo: "Z" },
  { name: "Domesa", logo: "D" },
  { name: "DHL", logo: "DHL" },
  { name: "FEDEX", logo: "FX" }
];

export default function Shipping() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background text-foreground selection:bg-primary selection:text-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={() => setLocation("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-12 group"
          data-testid="link-back-home"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Volver al Inicio
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary mb-4">
              <Truck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter text-white">
              Información de Envíos
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
              Realizamos envíos a todo el territorio nacional desde nuestra sede en <span className="text-white font-bold">Mérida, Venezuela</span>.
            </p>
          </div>

          {/* Main Info Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="p-8 border border-white/10 bg-white/5 space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Package className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-lg">Envíos Nacionales</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Trabajamos con distintas empresas de mensajería para que puedas elegir la agencia de tu preferencia al momento de realizar tu compra, garantizando seguridad y cobertura en todo el país.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-white/5 space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <ShieldCheck className="w-6 h-6" />
                <h3 className="font-bold uppercase tracking-widest text-lg">Garantía de Entrega</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Cada paquete es embalado con atención obsesiva al detalle para asegurar que tus prendas lleguen en perfectas condiciones a su destino.
              </p>
            </div>
          </div>

          {/* Shipping Companies Section */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-black font-display uppercase tracking-wider text-white">
                Empresas de Envío Disponibles
              </h2>
              <div className="h-1 w-24 bg-primary mx-auto" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {shippingCompanies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 border border-white/5 bg-white/[0.02] flex items-center justify-center text-center hover:border-primary/50 transition-all duration-300 group"
                  data-testid={`card-shipping-${index}`}
                >
                  <span className="font-bold text-muted-foreground group-hover:text-white transition-colors tracking-widest uppercase text-sm">
                    {company.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Prompt */}
          <div className="text-center pt-10">
            <p className="text-muted-foreground italic">
              ¿Tienes alguna duda específica sobre el envío? Consúltanos directamente al concretar tu compra.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
