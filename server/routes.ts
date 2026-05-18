import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { requireAdmin } from "./auth";
import { getGA4Stats, getSearchConsoleStats } from "./analytics";
import { sendContactEmail } from "./mailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);

      // Send email notification to inbox — fire-and-forget, never block the response
      sendContactEmail({
        fromName: input.name,
        fromEmail: input.email,
        body: input.message,
      }).catch((err) => {
        const detail = err?.response?.body ? JSON.stringify(err.response.body) : err.message;
        console.error("Email send failed [status]:", err?.code, "[body]:", detail);
      });

      res.status(201).json(message);
    } catch (err) {
      console.error("Error creating message:", err);
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: `Validation error: ${err.errors[0].message}`,
          field: err.errors[0].path.join("."),
        });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/admin/messages", requireAdmin, async (_req, res) => {
    try {
      const msgs = await storage.getMessages();
      res.json(msgs);
    } catch (err) {
      console.error("Error fetching messages:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/admin/analytics", requireAdmin, async (req, res) => {
    try {
      const user = req.user as any;
      const accessToken = (req.session as any)?.accessToken || "";
      const stats = await getGA4Stats(accessToken);
      res.json(stats);
    } catch (err) {
      console.error("Analytics API error:", err);
      res.status(500).json({ message: "Failed to fetch analytics" });
    }
  });

  app.get("/api/admin/search-console", requireAdmin, async (req, res) => {
    try {
      const accessToken = (req.session as any)?.accessToken || "";
      const stats = await getSearchConsoleStats(accessToken);
      res.json(stats);
    } catch (err) {
      console.error("Search Console API error:", err);
      res.status(500).json({ message: "Failed to fetch search console data" });
    }
  });

  app.get("/api/stats/public", async (_req, res) => {
    try {
      res.json({
        projectsShipped: 2,
        certificationsEarned: 3,
        toolsMastered: 15,
        clientsHelped: 5,
      });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
