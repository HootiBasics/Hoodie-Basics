import { pgTable, text, serial, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// We'll primarily use the config.ts for this specific static-style site, 
// but we define tables for potential dynamic features like newsletter subscribers.

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers);

export type Subscriber = typeof subscribers.$inferSelect;
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;

// Types for the Config (to be used in shared/config.ts)
export interface ProductColor {
  name: string;
  hex: string;
  available: boolean;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  description: string;
  images: string[];
  colors: ProductColor[];
  category: string;
  badge?: string;
  materials: string;
  care: string;
  fit: string;
  size: string;
}

export interface SiteConfig {
  siteName: string;
  whatsapp: {
    number: string;
    numberClean: string;
  };
  hero: {
    title: string;
    subtitle: string;
    badge: string;
  };
  products: Product[];
  social: {
    instagram: string;
  };
  contactEmail: string;
  whatsappMessage: string;
}
