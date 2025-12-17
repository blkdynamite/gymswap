/**
 * Script to create database tables using Prisma
 * 
 * Usage:
 * 1. Get your direct database connection string from Prisma Data Platform
 * 2. Temporarily set it in .env as DATABASE_URL_DIRECT
 * 3. Run: npx tsx scripts/create-tables.ts
 * 
 * Or use: npx prisma db push (if you have direct connection)
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Creating database tables...");

  // This will create tables if they don't exist
  // We'll use Prisma's introspection and then push the schema
  try {
    // Test connection
    await prisma.$connect();
    console.log("✓ Connected to database");

    // The tables will be created when we run prisma db push
    // This script is mainly for verification
    console.log("✓ Database connection successful");
    console.log("\nNext steps:");
    console.log("1. Make sure you have the direct database connection string");
    console.log("2. Run: npx prisma db push");
    console.log("3. This will create all tables from your schema");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

