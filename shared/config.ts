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
      name: "Giant's Football Sweatshirt",
      price: 25.00,
      currency: "usd",
      description: "Sudadera clásica con diseño Giant's Football. Comodidad y estilo deportivo.",
      images: ["/products/giants-1.jpg", "/products/giants-2.jpg"],
      colors: [
        { name: "Navy", hex: "#1a1a2e", available: true }
      ],
      category: "classic",
      badge: "⭐ Clásico",
      materials: "Algodón Premium",
      care: "Lavar a máquina",
      fit: "Estándar",
      size: "S, M, L, XL"
    },
    {
      id: 2,
      name: "Freaks Night Out",
      price: 25.00,
      currency: "usd",
      description: "Diseño audaz con gráficos de terror urbano. Para destacar en la multitud.",
      images: ["/products/freaks-1.jpeg", "/products/freaks-2.jpeg"],
      colors: [
        { name: "Negro", hex: "#000000", available: true }
      ],
      category: "limited",
      badge: "💎 Limitado",
      materials: "Algodón Heavyweight",
      care: "Lavar a máquina",
      fit: "Estándar",
      size: "S, M, L, XL"
    },
    {
      id: 3,
      name: "Colorado Avalanche Hoodie",
      price: 25.00,
      currency: "usd",
      description: "Homenaje al estilo hockey. Diseño minimalista y robusto.",
      images: ["/products/avalanche-1.jpeg", "/products/avalanche-2.jpeg", "/products/avalanche-3.jpg"],
      colors: [
        { name: "Gris Carbón", hex: "#333333", available: true }
      ],
      category: "best-seller",
      badge: "🔥 Best Seller",
      materials: "Algodón Premium",
      care: "Lavar a máquina",
      fit: "Estándar",
      size: "S, M, L, XL"
    },
    {
      id: 4,
      name: "The Dead Wake Up",
      price: 25.00,
      currency: "usd",
      description: "Gráficos detallados con temática zombi. Estilo rebelde y auténtico.",
      images: ["/products/dead-1.jpeg", "/products/dead-2.jpeg"],
      colors: [
        { name: "Negro", hex: "#000000", available: true }
      ],
      category: "new",
      badge: "🆕 Nuevo",
      materials: "Algodón Orgánico",
      care: "Lavar a máquina",
      fit: "Estándar",
      size: "S, M, L, XL"
    },
    {
      id: 5,
      name: "I Got That Dog In Me",
      price: 25.00,
      currency: "usd",
      description: "Sudadera gris con gráfico divertido y actitud. Un esencial diario.",
      images: ["/products/dog-1.jpeg", "/products/dog-2.jpeg", "/products/dog-3.jpeg"],
      colors: [
        { name: "Gris", hex: "#808080", available: true }
      ],
      category: "classic",
      badge: "⭐ Clásico",
      materials: "Algodón",
      care: "Lavar a máquina",
      fit: "Estándar",
      size: "S, M, L, XL"
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
      materials: "Algodón Heavyweight",
      care: "Lavar a máquina",
      fit: "Estándar",
      size: "S, M, L, XL"
    },
    {
      id: 7,
      name: "Night Crawler Joggers",
      price: 25.00,
      currency: "usd",
      description: "Crew rojo vibrante, que eleva cualquier básico y se convierte en la pieza clave de tu closet.",
      images: ["/products/little-1.jpg", "/products/little-2.jpg"],
      colors: [
        { name: "Negro", hex: "#000000", available: true }
      ],
      category: "limited",
      badge: "💎 Limitado",
      materials: "Poliéster Técnico",
      care: "Lavar a máquina",
      fit: "Relajado",
      size: "S, M, L, XL"
    },
    {
      id: 8,
      name: "Eclipse Bomber",
      price: 25.00,
      currency: "usd",
      description: "Chaqueta bomber reversible con interior acolchado para mayor calidez.",
      images: ["/products/blue-1.jpeg", "/products/blue-2.jpeg"],
      colors: [
        { name: "Azul", hex: "#4169E1", available: true }
      ],
      category: "new",
      badge: "🆕 Nuevo",
      materials: "Nylon Balístico",
      care: "Limpieza en seco",
      fit: "Boxy",
      size: "S, M, L, XL"
    },
    {
      id: 9,
      name: "grizzlies",
      price: 25.00,
      currency: "usd",
      description: "Chaqueta bomber reversible con interior acolchado para mayor calidez.",
      images: ["/products/grizzlies.jpeg", "/products/hero.jpeg"],
      colors: [
        { name: "Azul", hex: "#4169E1", available: true }
      ],
      category: "new",
      badge: "🆕 Nuevo",
      materials: "Nylon Balístico",
      care: "Limpieza en seco",
      fit: "Boxy",
      size: "S, M, L, XL"
    },
    {
      id: 10,
      name: "hockey",
      price: 25.00,
      currency: "usd",
      description: "Chaqueta bomber reversible con interior acolchado para mayor calidez.",
      images: ["/products/hockey-1.jpeg", "/products/hockey-2.jpeg"],
      colors: [
        { name: "Azul", hex: "#4169E1", available: true }
      ],
      category: "new",
      badge: "🆕 Nuevo",
      materials: "Nylon Balístico",
      care: "Limpieza en seco",
      fit: "Boxy",
      size: "S, M, L, XL"
    }
  ],
  social: {
    instagram: "https://instagram.com/hooti",
    tiktok: "https://tiktok.com/@hooti",
    facebook: "https://facebook.com/hooti"
  }
};
