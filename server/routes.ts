import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Newsletter Subscription
  app.post(api.subscribers.subscribe.path, async (req, res) => {
    try {
      const input = api.subscribers.subscribe.input.parse(req.body);
      await storage.subscribeEmail(input.email);
      res.status(201).json({ message: "Subscribed successfully" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
    }
  });

  return httpServer;
}
