-- GymSwap.ai Database Schema
-- Run this SQL script in your PostgreSQL database to create all required tables

-- Create User table
CREATE TABLE IF NOT EXISTS "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");

-- Create Listing table
CREATE TABLE IF NOT EXISTS "Listing" (
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

ALTER TABLE "Listing" ADD CONSTRAINT "Listing_userId_fkey" 
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Create Transaction table
CREATE TABLE IF NOT EXISTS "Transaction" (
    "id" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "buyerId" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL,
    "paidAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_listingId_fkey" 
    FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
    
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_buyerId_fkey" 
    FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE UNIQUE INDEX IF NOT EXISTS "Transaction_listingId_buyerId_key" 
    ON "Transaction"("listingId", "buyerId");

