import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizResultSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/quiz/results", async (req, res) => {
    const parsed = insertQuizResultSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid quiz result data" });
    }
    const result = await storage.saveQuizResult(parsed.data);
    res.status(201).json(result);
  });

  app.get("/api/quiz/stats/:sectionId", async (req, res) => {
    const stats = await storage.getQuizStats(req.params.sectionId);
    res.json(stats);
  });

  return httpServer;
}
