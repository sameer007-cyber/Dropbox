# 🚨 URGENT: Fix "Missing secretKey" Error

## Step-by-Step Vercel Environment Setup

### 1. 📍 Go to Vercel Dashboard

- Visit: https://vercel.com/dashboard
- Select your Droply project

### 2. 🔧 Navigate to Environment Variables

- Click on your project
- Go to: **Settings** → **Environment Variables**

### 3. ➕ Add Each Variable ONE BY ONE

**CRITICAL**: Add these EXACT variables (copy-paste each line):

```
Variable Name: NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
Value: pk_test_ZmFuY3ktbW9ua2Zpc2gtNzkuY2xlcmsuYWNjb3VudHMuZGV2JA
Environment: Production, Preview, Development
```

```
Variable Name: CLERK_SECRET_KEY
Value: sk_test_pMl8drNHyZzDp7HbeqQt8n58qmRb7Dtr08SDLiShWN
Environment: Production, Preview, Development
```

```
Variable Name: NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY
Value: public_6up0qJdyj2C4+s9wK9qDjTxpM4c=
Environment: Production, Preview, Development
```

```
Variable Name: IMAGEKIT_PRIVATE_KEY
Value: private_F4KAuv2q0gjOQlScIPM387uu9NE=
Environment: Production, Preview, Development
```

```
Variable Name: NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
Value: https://ik.imagekit.io/preetkotmire
Environment: Production, Preview, Development
```

```
Variable Name: DATABASE_URL
Value: postgresql://neondb_owner:npg_yfEqXdmK83lD@ep-ancient-voice-a8yp8yv2-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
Environment: Production, Preview, Development
```

```
Variable Name: NEXT_PUBLIC_APP_URL
Value: https://YOUR-ACTUAL-VERCEL-URL.vercel.app
Environment: Production, Preview, Development
```

### 4. 🔄 Redeploy

After adding ALL variables:

- Go to **Deployments** tab
- Click **"Redeploy"** on the latest deployment
- OR trigger a new deployment by pushing a small change

### 5. ✅ Verify Setup

Check that ALL variables are listed in your Environment Variables section.

## 🔍 Common Mistakes to Avoid:

❌ **Don't do this:**

- Copying variable names with extra spaces
- Missing the `NEXT_PUBLIC_` prefix
- Adding quotes around values
- Forgetting to select all environments

✅ **Do this:**

- Copy-paste exactly as shown above
- Select Production, Preview, AND Development for each variable
- Double-check each variable name spelling
- Save each variable before adding the next one

## 🚨 If Error Persists:

1. **Clear Vercel Cache:**

   - Go to Settings → Functions
   - Clear cache if available

2. **Check Clerk Dashboard:**

   - Verify your API keys are still active
   - Make sure your domain is in allowed origins

3. **Force Redeploy:**
   - Make a small change to any file
   - Commit and push to trigger new deployment
