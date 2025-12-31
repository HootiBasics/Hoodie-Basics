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
    badge: ""
  },
  products: [
    {
      id: 1,
      name: "Giant's Football Sweatshirt",
      price: 45.00,
      currency: "$",
      description: "Sudadera clásica con diseño Giant's Football. Comodidad y estilo deportivo.",
      images: ["/products/Giantes 1.jpeg", "/products/Giantes 2.jpeg"],
      colors: [
        { name: "Navy", hex: "#1a1a2e", available: true }
      ],
      category: "classic",
      badge: "",
      materials: "Algodón Premium",
      care: "Lavar a máquina",
      fit: "Estándar"
    },
    {
      id: 2,
      name: "Freaks Night Out",
      price: 48.00,
      currency: "$",
      description: "Diseño audaz con gráficos de terror urbano. Para destacar en la multitud.",
      images: ["/products/Freaks 1.jpeg", "/products/Freaks 2.jpeg"],
      colors: [
        { name: "Negro", hex: "#000000", available: true }
      ],
      category: "limited",
      badge: "",
      materials: "Algodón Heavyweight",
      care: "Lavar a máquina",
      fit: "Estándar"
    },
    {
      id: 3,
      name: "Colorado Avalanche Hoodie",
      price: 50.00,
      currency: "$",
      description: "Homenaje al estilo hockey. Diseño minimalista y robusto.",
      images: ["/products/Avalanche 1.jpeg", "/products/Avalanche 2.jpeg"],
      colors: [
        { name: "Gris Carbón", hex: "#333333", available: true }
      ],
      category: "best-seller",
      badge: "",
      materials: "Algodón Premium",
      care: "Lavar a máquina",
      fit: "Estándar"
    },
    {
      id: 4,
      name: "The Dead Wake Up",
      price: 45.00,
      currency: "$",
      description: "Gráficos detallados con temática zombi. Estilo rebelde y auténtico.",
      images: ["/products/Alan 1.jpeg", "/products/Alan 2.jpeg"],
      colors: [
        { name: "Negro", hex: "#000000", available: true }
      ],
      category: "new",
      badge: "",
      materials: "Algodón Orgánico",
      care: "Lavar a máquina",
      fit: "Estándar"
    },
    {
      id: 5,
      name: "I Got That Dog In Me",
      price: 42.00,
      currency: "$",
      description: "Sudadera gris con gráfico divertido y actitud. Un esencial diario.",
      images: ["/products/I got 1.jpeg", "/products/I got 2.jpeg"],
      colors: [
        { name: "Gris", hex: "#808080", available: true }
      ],
      category: "classic",
      badge: "",
      materials: "Algodón",
      care: "Lavar a máquina",
      fit: "Estándar"
    },
    {
      id: 6,
      name: "Snow Bear Hoodie",
      price: 45.00,
      currency: "$",
      description: "Hoodie blanco puro con detalle minimalista. Elegancia en la simplicidad.",
      images: ["/products/Blanco.jpeg", "/products/Blanco.jpeg"],
      colors: [
        { name: "Blanco", hex: "#FFFFFF", available: true }
      ],
      category: "new",
      badge: "",
      materials: "Algodón Heavyweight",
      care: "Lavar a máquina",
      fit: "Estándar"
    },
    {
      id: 7,
      name: "Night Crawler Joggers",
      price: 150.00,
      currency: "$",
      description: "Pantalones cargo con múltiples bolsillos diseñados para la movilidad urbana.",
      images: ["/products/Alan 1.jpeg", "/products/Alan 2.jpeg"],
      colors: [
        { name: "Negro", hex: "#000000", available: true }
      ],
      category: "limited",
      badge: "",
      materials: "Poliéster Técnico",
      care: "Lavar a máquina",
      fit: "Relajado"
    },
    {
      id: 8,
      name: "Eclipse Bomber",
      price: 280.00,
      currency: "$",
      description: "Chaqueta bomber reversible con interior acolchado para mayor calidez.",
      images: ["/products/Freaks 1.jpeg", "/products/Freaks 2.jpeg"],
      colors: [
        { name: "Marrón", hex: "#8B4513", available: true }
      ],
      category: "classic",
      badge: "",
      materials: "Nylon Balístico",
      care: "Limpieza en seco",
      fit: "Boxy"
    }
  ],
  social: {
    instagram: "https://instagram.com/hooti",
    tiktok: "https://tiktok.com/@hooti",
    facebook: "https://facebook.com/hooti"
  }
};
