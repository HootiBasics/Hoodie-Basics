import { SiteConfig } from "@shared/schema";

export const HOOTI_CONFIG: SiteConfig = {
  siteName: "HOOTI",
  whatsapp: {
    number: "+573001234567",
    numberClean: "573001234567",
  },
  hero: {
    title: "STREETWEAR\nEVOLUTION",
    subtitle:
      "Diseños exclusivos para quienes marcan su propio ritmo. Calidad premium, estilo inigualable.",
    badge: "NUEVA COLECCIÓN 2025",
  },
  products: [
    {
      id: 1,
      name: "Cyber Punk Hoodie",
      price: 180000,
      currency: "COP",
      description:
        "Hoodie oversized con estampado reflectivo inspirado en la estética cyberpunk. Tela de alto gramaje para máxima durabilidad y confort.",
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=1000&auto=format&fit=crop",
      ],
      colors: [
        { name: "Black", hex: "#000000", available: true },
        { name: "Neon Green", hex: "#39ff14", available: true },
      ],
      category: "Hoodies",
      badge: "BESTSELLER",
      materials: "100% Algodón Perchado 400g",
      care: "Lavado en frío, no usar secadora",
      fit: "Oversized Fit",
    },
    {
      id: 2,
      name: "Urban Ghost Tee",
      price: 90000,
      currency: "COP",
      description:
        "Camiseta gráfica con corte boxy. El diseño minimalista en la espalda evoca la soledad urbana.",
      images: [
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
      ],
      colors: [
        { name: "White", hex: "#ffffff", available: true },
        { name: "Charcoal", hex: "#36454F", available: true },
      ],
      category: "T-Shirts",
      materials: "Algodón Pima 220g",
      care: "Planchar al revés",
      fit: "Boxy Fit",
    },
    {
      id: 3,
      name: "Night Crawler Joggers",
      price: 25000,
      currency: "COP",
      description:
        "Crew Rojo vibrante, que eleva cualquier básico y se convierte en la pieza clave de tu closet.",
      images: [
        "https://images.unsplash.com/photo-1552160753-117159821e01?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=1000&auto=format&fit=crop",
      ],
      colors: [
        { name: "Black", hex: "#000000", available: true },
        { name: "Camo", hex: "#4b5320", available: false },
      ],
      category: "Pants",
      badge: "LIMITED",
      materials: "Ripstop Nylon",
      care: "Lavado a máquina",
      fit: "Tapered Fit",
    },
    {
      id: 4,
      name: "Eclipse Bomber",
      price: 280000,
      currency: "COP",
      description:
        "Chaqueta bomber reversible con interior naranja de seguridad. Impermeable y resistente al viento.",
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop",
      ],
      colors: [{ name: "Midnight Blue", hex: "#191970", available: true }],
      category: "Jackets",
      materials: "Poliester Reciclado",
      care: "Limpieza en seco",
      fit: "Regular Fit",
    },
  ],
  sizing: {
    title: "GUÍA DE TALLAS",
    description:
      "Nuestras prendas están diseñadas para un fit moderno y relajado.",
    measurements: {
      chest: "Pecho: Medir alrededor de la parte más ancha.",
      length: "Largo: Desde el hombro hasta el borde inferior.",
      shoulder: "Hombro: De costura a costura.",
      sleeve: "Manga: Desde el hombro hasta la muñeca.",
    },
    benefits: [
      "Envío gratis en Colombia por compras superiores a 200k",
      "Garantía de calidad de 30 días",
      "Cambios sin costo adicional",
    ],
  },
  social: {
    instagram: "https://instagram.com/hooti",
    tiktok: "https://tiktok.com/@hooti",
    facebook: "https://facebook.com/hooti",
  },
};
