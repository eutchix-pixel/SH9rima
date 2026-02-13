import { type InsertQuizResult, type QuizResult, quizResults } from "@shared/schema";
import { db } from "./db";
import { desc, eq } from "drizzle-orm";

export interface IStorage {
  saveQuizResult(result: InsertQuizResult): Promise<QuizResult>;
  getQuizResults(sectionId: string): Promise<QuizResult[]>;
  getQuizStats(sectionId: string): Promise<{ averageScore: number; totalAttempts: number }>;
}

export class DatabaseStorage implements IStorage {
  async saveQuizResult(result: InsertQuizResult): Promise<QuizResult> {
    const [saved] = await db.insert(quizResults).values(result).returning();
    return saved;
  }

  async getQuizResults(sectionId: string): Promise<QuizResult[]> {
    return await db
      .select()
      .from(quizResults)
      .where(eq(quizResults.sectionId, sectionId))
      .orderBy(desc(quizResults.createdAt))
      .limit(50);
  }

  async getQuizStats(sectionId: string): Promise<{ averageScore: number; totalAttempts: number }> {
    const results = await db
      .select()
      .from(quizResults)
      .where(eq(quizResults.sectionId, sectionId));

    if (results.length === 0) {
      return { averageScore: 0, totalAttempts: 0 };
    }

    const totalScore = results.reduce((sum: number, r: QuizResult) => sum + r.score, 0);
    return {
      averageScore: Math.round((totalScore / results.length) * 10) / 10,
      totalAttempts: results.length,
    };
  }
}

export const storage = new DatabaseStorage();
