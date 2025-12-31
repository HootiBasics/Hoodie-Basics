import { db } from "./db";
import { subscribers, type InsertSubscriber } from "@shared/schema";

export interface IStorage {
  subscribeEmail(email: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async subscribeEmail(email: string): Promise<void> {
    await db.insert(subscribers).values({ email }).onConflictDoNothing();
  }
}

export const storage = new DatabaseStorage();
