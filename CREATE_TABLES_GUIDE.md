# Quick Guide: Creating Tables in Prisma Data Platform

## The Problem
You can't find the SQL editor in the Prisma Data Platform dashboard, but you need to create the database tables.

## Solution: Get Direct Connection & Use Prisma DB Push

### Step 1: Find Your Direct Database Connection

In your Prisma Data Platform dashboard:

1. **Look for these sections:**
   - "Database" tab/section
   - "Connection" or "Connection String"
   - "Direct Connection" (different from Accelerate)
   - Settings → Database → Connection String

2. **The connection string you need:**
   - Should start with `postgresql://` (NOT `prisma+postgres://`)
   - Format: `postgresql://user:password@host:port/database`
   - This is the **direct** connection to your PostgreSQL database

### Step 2: Create Tables Using Prisma

Once you have the direct connection string:

```bash
# Temporarily set the direct connection
$env:DATABASE_URL="postgresql://user:password@host:port/database"

# Push your schema to create all tables
npx prisma db push

# This will:
# - Create User table
# - Create Listing table  
# - Create Transaction table
# - Set up all relationships and indexes
```

### Step 3: Switch Back to Accelerate

After tables are created:

1. Update your `.env` file back to the Prisma Accelerate connection string
2. Restart your dev server
3. Try creating an account again!

## Alternative: Where to Find SQL Editor

The SQL editor might be in these locations:
- **Top navigation:** Look for "SQL", "Query", or "Database" tabs
- **Left sidebar:** Under "Database" → "SQL Editor" or "Query"
- **URL path:** Try `/sql`, `/query`, or `/database` in the dashboard URL
- **Settings:** Sometimes under Settings → Database → SQL Editor

## Still Can't Find It?

If you can share:
1. What sections/tabs you see in your Prisma Data Platform dashboard
2. Or a screenshot of your dashboard

I can help you locate it!

## Quick Test

After creating tables, verify they exist:
```bash
npx prisma studio
```

This opens a visual browser where you can see your tables.

