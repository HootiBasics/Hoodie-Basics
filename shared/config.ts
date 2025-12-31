import { SiteConfig } from "./schema";

export const HOOTI_CONFIG: SiteConfig = {
  siteName: "Hooti",
  whatsapp: {
    number: "+584147170695",
    numberClean: "584147170695"
  },
  hero: {
    title: "Estilo que habla por ti",
    subtitle: "Hoodies exclusivos diseñados para quienes no siguen tendencias, las crean",
    badge: "TALLA ÚNICA OVERSIZED"
  },
  products: [
    {
      id: 1,
      name: "Hoodie Urban Owl Black",
      price: 45.00,
      currency: "$",
      description: "El equilibrio perfecto entre comodidad y estilo urbano. Diseñado para destacar en la noche.",
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop", // Placeholder
        "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
      ],
      colors: [
        { name: "Negro", hex: "#0a0a0a", available: true },
        { name: "Gris", hex: "#808080", available: true },
        { name: "Blanco", hex: "#FFFFFF", available: false }
      ],
      category: "best-seller",
      badge: "🔥 Best Seller",
      materials: "100% Algodón Premium Heavyweight",
      care: "Lavar a máquina en agua fría, secar al aire",
      fit: "Oversized - Talla Única"
    },
    {
      id: 2,
      name: "Midnight Prowler",
      price: 50.00,
      currency: "$",
      description: "Edición limitada con detalles reflectantes. Para los que viven cuando el sol se oculta.",
      images: [
        "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop"
      ],
      colors: [
        { name: "Navy", hex: "#1a1a2e", available: true },
        { name: "Negro", hex: "#000000", available: true }
      ],
      category: "limited",
      badge: "💎 Limitado",
      materials: "Mezcla Algodón/Poliéster Técnico",
      care: "Lavar a mano recomendado",
      fit: "Oversized - Talla Única"
    },
    {
      id: 3,
      name: "Forest Guardian",
      price: 48.00,
      currency: "$",
      description: "Inspirado en los tonos de la naturaleza nocturna. Un clásico reinventado.",
      images: [
        "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
      ],
      colors: [
        { name: "Verde Bosque", hex: "#2d4a22", available: true },
        { name: "Tierra", hex: "#5d4037", available: true }
      ],
      category: "new",
      badge: "🆕 Nuevo",
      materials: "100% Algodón Orgánico",
      care: "Lavado suave",
      fit: "Oversized - Talla Única"
    },
    {
      id: 4,
      name: "Street Phantom",
      price: 42.00,
      currency: "$",
      description: "Minimalismo puro. Sin logos grandes, solo corte y caída perfecta.",
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop"
      ],
      colors: [
        { name: "Gris Humo", hex: "#555555", available: true },
        { name: "Negro", hex: "#000000", available: true }
      ],
      category: "classic",
      badge: "⭐ Clásico",
      materials: "Algodón Heavyweight",
      care: "Lavar a máquina",
      fit: "Oversized - Talla Única"
    }
  ],
  sizing: {
    title: "TALLA ÚNICA - OVERSIZED FIT",
    description: "Diseñado para ajuste holgado y máxima comodidad",
    measurements: {
      chest: "120cm",
      length: "75cm",
      shoulder: "60cm",
      sleeve: "65cm"
    },
    benefits: [
      "Ajuste holgado y cómodo",
      "Unisex",
      "Se adapta a todas las tallas",
      "Perfecto para layering"
    ]
  },
  social: {
    instagram: "https://instagram.com/hooti",
    tiktok: "https://tiktok.com/@hooti",
    facebook: "https://facebook.com/hooti"
  }
};
