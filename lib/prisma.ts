import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

// Ensure environment variables are loaded (Next.js should do this automatically, but this ensures it)
if (typeof window === "undefined") {
  // Only load dotenv on the server side
  try {
    const dotenv = require("dotenv");
    const path = require("path");
    // Explicitly load .env from project root
    const envPath = path.resolve(process.cwd(), ".env");
    const result = dotenv.config({ path: envPath });
    if (result.error) {
      console.warn("dotenv config error:", result.error);
    }
  } catch (e) {
    // dotenv might not be available, which is fine if Next.js is loading .env
    console.warn("Could not load dotenv:", e);
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

// Get the DATABASE_URL from environment (should be Prisma Accelerate URL)
const accelerateUrl = process.env.DATABASE_URL;

if (!accelerateUrl) {
  const errorMessage = `
DATABASE_URL environment variable is not set.

Please ensure:
1. Your .env file exists in the project root (same directory as package.json)
2. Your .env file contains: DATABASE_URL=prisma+postgres://...
3. You have restarted your Next.js dev server after creating/modifying .env

Current working directory: ${process.cwd()}
Environment variables loaded: ${Object.keys(process.env).filter(k => k.includes('DATABASE')).join(', ') || 'none'}
  `.trim();
  
  throw new Error(errorMessage);
}

function createPrismaClient() {
  return new PrismaClient({
    accelerateUrl: accelerateUrl,
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  }).$extends(withAccelerate());
}

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

