# 🚀 Vercel Deployment Guide for GymSwap.ai

## Prerequisites

Before deploying, ensure you have:
1. A GitHub repository with your code pushed
2. A Vercel account (sign up at [vercel.com](https://vercel.com))
3. Your Prisma Accelerate database URL ready

## Step 1: Connect Your Repository to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository (`blkdynamite/gymswap`)
4. Vercel will auto-detect Next.js settings

## Step 2: Configure Environment Variables

**CRITICAL:** You must set these environment variables in Vercel before deployment:

### Required Environment Variables

1. **DATABASE_URL**
   - Go to **Project Settings → Environment Variables**
   - Add: `DATABASE_URL`
   - Value: Your Prisma Accelerate URL (format: `prisma+postgres://accelerate.prisma-data.net/?api_key=...`)
   - Apply to: **Production, Preview, and Development**

2. **NEXTAUTH_SECRET**
   - Generate a secure random string:
     ```bash
     openssl rand -base64 32
     ```
   - Add: `NEXTAUTH_SECRET`
   - Value: The generated string
   - Apply to: **Production, Preview, and Development**

3. **NEXTAUTH_URL**
   - Add: `NEXTAUTH_URL`
   - Value: Your production domain (e.g., `https://gymswap.vercel.app` or your custom domain)
   - Apply to: **Production**
   - For Preview: Use the preview URL Vercel provides
   - For Development: Use `http://localhost:3000`

### Optional (For Future Stripe Integration)

These will be needed when you implement payments:

- `STRIPE_SECRET_KEY`
- `STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`

## Step 3: Build Settings

Vercel should auto-detect these settings, but verify:

- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (already includes `prisma generate`)
- **Output Directory:** `.next` (default)
- **Install Command:** `npm install`

## Step 4: Deploy

1. Click **"Deploy"** in Vercel
2. Wait for the build to complete
3. Your app will be live at `https://your-project.vercel.app`

## Troubleshooting

### Error: "Missing required environment variable: DATABASE_URL"

**Solution:** 
- Make sure you've added `DATABASE_URL` in Vercel's Environment Variables
- Ensure it's applied to the correct environment (Production/Preview/Development)
- Redeploy after adding environment variables

### Error: "Prisma Client not generated"

**Solution:**
- The build script already includes `prisma generate`
- If issues persist, check that `package.json` has: `"build": "prisma generate && next build"`

### Error: "NEXTAUTH_SECRET is missing"

**Solution:**
- Add `NEXTAUTH_SECRET` in Vercel Environment Variables
- Generate a new secret using: `openssl rand -base64 32`

### Build Succeeds but App Crashes

**Check:**
1. All environment variables are set correctly
2. `DATABASE_URL` is the Prisma Accelerate URL (not direct Postgres)
3. `NEXTAUTH_URL` matches your deployment URL
4. Check Vercel Function Logs for runtime errors

## Post-Deployment Checklist

- [ ] Test user signup/signin
- [ ] Test listing creation
- [ ] Verify database connections work
- [ ] Check that legal disclaimers are visible
- [ ] Test on mobile devices
- [ ] Verify SEO metadata is working (check page source)

## Custom Domain Setup (Optional)

1. Go to **Project Settings → Domains**
2. Add your custom domain (e.g., `gymswap.ai`)
3. Follow DNS configuration instructions
4. Update `NEXTAUTH_URL` to match your custom domain

## Environment Variable Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `DATABASE_URL` | ✅ Yes | Prisma Accelerate connection string | `prisma+postgres://...` |
| `NEXTAUTH_SECRET` | ✅ Yes | Secret for NextAuth.js session encryption | Random 32+ char string |
| `NEXTAUTH_URL` | ✅ Yes | Your app's public URL | `https://gymswap.vercel.app` |
| `STRIPE_SECRET_KEY` | ⏳ Future | Stripe API secret key | `sk_live_...` |
| `STRIPE_PUBLISHABLE_KEY` | ⏳ Future | Stripe publishable key | `pk_live_...` |
| `STRIPE_WEBHOOK_SECRET` | ⏳ Future | Stripe webhook signing secret | `whsec_...` |

---

**Need Help?** Check Vercel's [Next.js Deployment Documentation](https://vercel.com/docs/frameworks/nextjs)

