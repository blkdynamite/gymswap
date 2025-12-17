# 📥 How to Import Environment Variables to Vercel

## Method 1: Using Vercel Dashboard (Recommended)

1. **Open the `vercel-env-template.txt` file** in this repository
2. **Replace placeholder values** with your actual values:
   - `DATABASE_URL` - Your Prisma Accelerate URL
   - `NEXTAUTH_SECRET` - Generate with `openssl rand -base64 32`
   - `NEXTAUTH_URL` - Your Vercel deployment URL
3. **Go to Vercel Dashboard:**
   - Navigate to your project
   - Go to **Settings** → **Environment Variables**
   - Click **"Add New"** or look for **"Import"** button
4. **Add each variable:**
   - Copy each line from `vercel-env-template.txt` (one at a time)
   - Paste into Vercel's form
   - Select environments: **Production**, **Preview**, **Development**
   - Click **"Save"**

## Method 2: Using Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Link your project:**
   ```bash
   vercel link
   ```

4. **Pull environment variables** (if you want to sync):
   ```bash
   vercel env pull .env.local
   ```

5. **Or push from your `vercel-env-template.txt` file:**
   ```bash
   # Set variables one by one
   vercel env add DATABASE_URL production
   vercel env add NEXTAUTH_SECRET production
   vercel env add NEXTAUTH_URL production
   ```

## Method 3: Manual Entry (Most Reliable)

Since Vercel doesn't have a direct "import file" feature, the most reliable method is:

1. **Open `vercel-env-template.txt`** and copy the variable names and values
2. **Go to Vercel Dashboard** → **Settings** → **Environment Variables**
3. **Add each variable manually:**
   - Click **"Add New"**
   - Variable Name: `DATABASE_URL`
   - Value: (paste your Prisma Accelerate URL)
   - Environments: Select **Production**, **Preview**, **Development**
   - Click **"Save"**
   - Repeat for `NEXTAUTH_SECRET` and `NEXTAUTH_URL`

## Quick Copy-Paste Values

After filling in `vercel-env-template.txt`, you can copy these directly:

### DATABASE_URL
```
DATABASE_URL=prisma+postgres://accelerate.prisma-data.net/?api_key=YOUR_ACTUAL_KEY
```

### NEXTAUTH_SECRET
```
NEXTAUTH_SECRET=YOUR_GENERATED_SECRET
```

### NEXTAUTH_URL
```
NEXTAUTH_URL=https://your-project.vercel.app
```

## Verification

After importing:

1. **Check Vercel Dashboard** - All 3 variables should appear
2. **Redeploy** - Go to Deployments → Redeploy latest
3. **Check Build Logs** - Should show successful Prisma Client generation
4. **Test App** - Verify signup/signin works

---

**Note:** The `vercel-env-template.txt` file is for import purposes only. Do NOT commit it with real values to git. Fill it in locally, then use it to set variables in Vercel.

