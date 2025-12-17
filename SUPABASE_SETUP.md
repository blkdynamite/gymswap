# Supabase Setup Guide

## Step 1: Get Your Supabase Connection String

1. Go to your Supabase dashboard: https://app.supabase.com
2. Select your project (or create a new one)
3. Go to **Settings** → **Database**
4. Scroll down to **Connection string**
5. Select **URI** tab
6. Copy the connection string (it will look like: `postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres`)

**Important:** Replace `[YOUR-PASSWORD]` with your actual database password if it's not already filled in.

## Step 2: Update Your .env File

Add your Supabase connection string to your `.env` file:

```env
DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
NEXTAUTH_SECRET=NMrGI9gwsTDBCoC3coyHeqm+zU63Ow0vk6mQrIgs6hU=
NEXTAUTH_URL=http://localhost:3000
```

## Step 3: Run Database Migration

Once you've updated your `.env` file with the Supabase connection string, run:

```bash
npx prisma migrate dev --name init
```

This will:
- Create all the tables (User, Listing, Transaction)
- Set up all the relationships and indexes
- Create a migration history

## Step 4: Generate Prisma Client

```bash
npx prisma generate
```

## Step 5: Restart Your Dev Server

```bash
npm run dev
```

## Alternative: Use Prisma Studio to Verify

You can also use Prisma Studio to view your database:

```bash
npx prisma studio
```

This will open a browser interface where you can see and manage your database tables.

## Troubleshooting

### Connection Issues
- Make sure your Supabase project is active
- Verify the password in the connection string is correct
- Check that your IP is allowed (Supabase allows all IPs by default, but check if you have restrictions)

### Migration Issues
- Make sure the DATABASE_URL is correct in your `.env` file
- Restart your terminal/command prompt after updating `.env`
- Try running `npx prisma db push` as an alternative to migrations

