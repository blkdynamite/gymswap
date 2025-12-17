# Database Migration Instructions

## The Problem
Prisma Accelerate is a connection pooling proxy and doesn't support direct database schema operations like `prisma db push` or `prisma migrate dev`. The tables need to be created in the underlying database.

## Solution Options

### Option 1: Use Prisma Data Platform Dashboard (Recommended)
1. Go to your Prisma Data Platform dashboard: https://console.prisma.io
2. Navigate to your project
3. Look for a "Migrations" or "Schema" section
4. Use the platform's migration tools to push your schema

### Option 2: Get Direct Database Connection
1. In Prisma Data Platform dashboard, find your database connection details
2. Look for a "Direct Connection" or "Connection String" (not the Accelerate URL)
3. It should look like: `postgresql://user:password@host:port/database`
4. Temporarily update your `.env` file with this direct connection
5. Run: `npx prisma db push`
6. Switch back to the Accelerate URL

### Option 3: Manual SQL (If you have database access)
If you have direct access to your PostgreSQL database, you can run the SQL manually. The schema is defined in `prisma/schema.prisma`.

## Quick Fix: Create Tables Manually
If you have database access, you can create the tables using this SQL:

```sql
-- Create User table
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- Create Listing table
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gymName" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "monthlyPrice" DOUBLE PRECISION NOT NULL,
    "contractEndDate" TIMESTAMP(3),
    "details" TEXT,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "legalAcknowledgeAt" TIMESTAMP(3),
    "isOriginalGymLead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "Listing" ADD CONSTRAINT "Listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Create Transaction table
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "buyerId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "paidAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE UNIQUE INDEX "Transaction_listingId_buyerId_key" ON "Transaction"("listingId", "buyerId");
```

## After Creating Tables
Once the tables are created, regenerate Prisma Client:
```bash
npx prisma generate
```

Then restart your Next.js dev server.

