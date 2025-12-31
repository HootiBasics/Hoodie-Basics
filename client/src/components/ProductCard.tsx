import { motion } from "framer-motion";
import { Link } from "wouter";
import { type Product } from "@shared/schema";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  // Format price
  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: product.currency,
    maximumFractionDigits: 0
  }).format(product.price);

  return (
    <Link href={`/product/${product.id}`} className="group block cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative bg-card rounded-none overflow-hidden border border-white/5 hover:border-primary/50 transition-colors duration-300 h-full flex flex-col"
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-primary text-black text-xs font-bold uppercase tracking-wider">
            {product.badge}
          </div>
        )}

        {/* Image Container */}
        <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75 border border-white/20">
               <Plus className="w-8 h-8 text-white" />
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
          
          <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-lg font-mono font-medium text-white">{formattedPrice}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
