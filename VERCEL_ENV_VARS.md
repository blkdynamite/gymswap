# 🔐 Vercel Environment Variables Configuration

## Required Environment Variables

Copy these **EXACT** variable names and values into your Vercel Dashboard:

### 1. DATABASE_URL
**Variable Name:** `DATABASE_URL`  
**Value:** Your Prisma Accelerate connection string  
**Format:** `prisma+postgres://accelerate.prisma-data.net/?api_key=YOUR_API_KEY`  
**Apply to:** Production, Preview, Development  
**Example:**
```
prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. NEXTAUTH_SECRET
**Variable Name:** `NEXTAUTH_SECRET`  
**Value:** A secure random string (32+ characters)  
**Generate with:**
```bash
openssl rand -base64 32
```
**Apply to:** Production, Preview, Development  
**Example:**
```
NMrGI9gwsTDBCoC3coyHeqm+zU63Ow0vk6mQrIgs6hU=
```

### 3. NEXTAUTH_URL
**Variable Name:** `NEXTAUTH_URL`  
**Value:** Your deployment URL  
**Production:** `https://your-project.vercel.app` or your custom domain  
**Preview:** Leave empty (Vercel auto-detects) or use preview URL  
**Development:** `http://localhost:3000`  
**Apply to:** Production (required), Preview (optional), Development (optional)  
**Example (Production):**
```
https://gymswap.vercel.app
```

---

## Quick Setup Steps

1. **Go to Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**

2. **Add each variable:**
   - Click **"Add New"**
   - Enter the **Variable Name** (exactly as shown above)
   - Enter the **Value**
   - Select environments: **Production**, **Preview**, **Development**
   - Click **"Save"**

3. **Redeploy** after adding variables:
   - Go to **Deployments** tab
   - Click **"Redeploy"** on the latest deployment

---

## Environment Variable Summary Table

| Variable | Required | Format | Example |
|----------|----------|--------|---------|
| `DATABASE_URL` | ✅ Yes | `prisma+postgres://...` | Prisma Accelerate URL |
| `NEXTAUTH_SECRET` | ✅ Yes | Random 32+ char string | Base64 encoded secret |
| `NEXTAUTH_URL` | ⚠️ Recommended | `https://your-domain.com` | Your deployment URL |

---

## Verification

After deployment, verify these work:

1. **Check Build Logs:** Should show "Prisma Client generated successfully"
2. **Test Sign Up:** Create a new account
3. **Test Sign In:** Log in with credentials
4. **Check Database:** Verify listings can be created

---

## Troubleshooting

### "DATABASE_URL is not set" Error
- ✅ Verify variable name is exactly `DATABASE_URL` (case-sensitive)
- ✅ Check it's applied to the correct environment
- ✅ Redeploy after adding the variable

### "NEXTAUTH_SECRET is missing" Error
- ✅ Generate a new secret: `openssl rand -base64 32`
- ✅ Ensure it's at least 32 characters
- ✅ Apply to all environments

### Build Succeeds but App Crashes
- ✅ Check Vercel Function Logs for runtime errors
- ✅ Verify all three variables are set
- ✅ Ensure `DATABASE_URL` is the Prisma Accelerate URL (not direct Postgres)

---

**Note:** These are the ONLY environment variables needed for V1. Stripe variables will be added in a future sprint.

