import { SiteConfig } from "./schema";

export const HOOTI_CONFIG: SiteConfig = {
  siteName: "Hooti Basics",
  whatsapp: {
    number: "+584147170695",
    numberClean: "584147170695"
  },
  hero: {
    title: "Hooti Basics",
    subtitle: "Hoodies exclusivos diseñados para quienes no siguen tendencias, las crean",
    badge: "NUEVA COLECCIÓN 2026"
  },
  products: [
    {
      id: 1,
      name: "Crew Giants Azul",
      price: 25.00,
      currency: "usd",
      description: "Sudadera clásica con diseño Giant's Football. Comodidad y estilo deportivo.",
      images: ["/products/giants-1.jpg","/products/giants-2.jpg","/products/Crew_giant_azul.jpg"],
      colors: [
        { name: "Navy", hex: "#1a1a2e", available: true }
      ],
      category: "classic",
      badge: "⭐ Clásico",
      materials: "Algodón poliéster",
      care: "Lavar a máquina",
      fit: "Estándar",
      size: "S"
    },
    {
      id: 2,
      name: "Crew Zombie",
      price: 25.00,
      currency: "usd",
      description: "Diseño audaz con gráficos de terror urbano. Para destacar en la multitud.",
      images: ["/products/freaks-1.jpeg", "/products/freaks-2.jpeg","/products/Crew_zombies.jpeg"],
      colors: [
        { name: "Negro", hex: "#000000", available: true }
      ],
      category: "limited",
      badge: "💎 Limitado",
      materials: "Algodón poliéster",
      care: "Lavar a máquina",
      fit: "Estándar",
      size: "L"
    },
    {
      id: 3,
      name: "Colorado Avalanche Hoodie",
      price: 25.00,
      currency: "usd",
      description: "Homenaje al estilo hockey. Diseño minimalista y robusto.",
      images: ["/products/avalanche-1.jpeg", "/products/avalanche-2.jpeg", "/products/avalanche-3.jpeg"],
      colors: [
        { name: "Gris Carbón", hex: "#333333", available: true }
      ],
      category: "best-seller",
      badge: "🔥 Best Seller",
      materials: "Algodón poliéster",
      care: "Lavar a máquina",
      fit: "Estándar",
      size: "L"
    },
    {
      id: 4,
      name: "Crew Alan",
      price: 25.00,
      currency: "usd",
      description: "Gráficos detallados con temática zombi. Estilo rebelde y auténtico.",
      images: ["/products/dead-1.jpeg", "/products/dead-2.jpeg"],
      colors: [
        { name: "Negro", hex: "#000000", available: true }
      ],
      category: "new",
      badge: "🆕 Nuevo",
      materials: "Algodón poliéster",
      care: "Lavar a máquina",
      fit: "Estándar",
      size: "L"
    },
    {
      id: 5,
      name: "Crew Dog",
      price: 25.00,
      currency: "usd",
      description: "Sudadera gris con gráfico divertido y actitud. Un esencial diario.",
      images: ["/products/dog-1.jpeg", "/products/dog-2.jpeg", "/products/dog-3.jpeg"],
      colors: [
        { name: "Gris", hex: "#808080", available: true }
      ],
      category: "classic",
      badge: "⭐ Clásico",
      materials: "Algodón poliéster",
      care: "Lavar a máquina",
      fit: "Estándar",
      size: "M"
    },
    {
      id: 6,
      name: "Snow Bear Hoodie",
      price: 25.00,
      currency: "usd",
      description: "Hoodie blanco puro con detalle minimalista. Elegancia en la simplicidad.",
      images: ["/products/snow-bear.jpg"],
      colors: [
        { name: "Blanco", hex: "#FFFFFF", available: true }
      ],
      category: "new",
      badge: "🆕 Nuevo",
      materials: "Algodón poliéster",
      care: "Lavar a máquina",
      fit: "Estándar",
      size: "S"
    },
    {
      id: 7,
      name: "Crew Red",
      price: 25.00,
      currency: "usd",
      description: "Crew rojo vibrante, que eleva cualquier básico y se convierte en la pieza clave de tu closet.",
      images: ["/products/Crew_red.jpeg", "/products/Crew_red2.jpeg"],
      colors: [
        { name: "Negro", hex: "#000000", available: true }
      ],
      category: "limited",
      badge: "💎 Limitado",
      materials: "Algodón poliéster",
      care: "Lavar a máquina",
      fit: "Relajado",
      size: "M"
    },
    {
      id: 8,
      name: "Block Hoodie Azul",
      price: 25.00,
      currency: "usd",
      description: "Block Hoodie con capucha, bolsillo canguro frontal y corte holgado, perfecto para el día a día.",
      images: ["/products/blue-1.jpeg", "/products/blue-2.jpeg","/products/Blook_hoodie_azul.jpeg","/products/Blook_hoodie_azul2.jpeg"],
      colors: [
        { name: "Azul", hex: "#4169E1", available: true }
      ],
      category: "new",
      badge: "🆕 Nuevo",
      materials: "Algodón poliéster",
      care: "Limpieza en seco",
      fit: "Boxy",
      size: "M"
    },
    {
      id: 9,
      name: "grizzlies Crew",
      price: 25.00,
      currency: "usd",
      description: "Jersey de cuello redondo en gris neutro con estampado de los Grizzlies. Confeccionado en algodón, corte clásico y cómodo.",
      images: ["/products/grizzlies.jpeg", "/products/hero.jpeg"],
      colors: [
        { name: "Azul", hex: "#4169E1", available: true }
      ],
      category: "new",
      badge: "🆕 Nuevo",
      materials: "Algodón poliéster",
      care: "Limpieza en seco",
      fit: "Boxy",
      size: "S"
    },
    {
      id: 10,
      name: "Black Hoodie",
      price: 25.00,
      currency: "usd",
      description: "Hoodie negro esencial, con estampado en la espalda, capucha ajustable con cordones y bolsillo canguro frontal. Perfecto para un look urbano, cómodo y con personalidad.",
      images: ["/products/hockey-1.jpeg", "/products/hockey-2.jpeg"],
      colors: [
        { name: "Azul", hex: "#4169E1", available: true }
      ],
      category: "new",
      badge: "🆕 Nuevo",
      materials: "Algodón poliéster",
      care: "Limpieza en seco",
      fit: "Boxy",
      size: "L"
    }
  ],
  social: {
    instagram: "https://www.instagram.com/hooti.basics?igsh=YXJ1ajQyaXBkaDR1"
  },
  contactEmail: "HootiBasics@outlook.es"
};
