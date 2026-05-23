# Clerk Configuration Checklist

## 📋 Steps to Configure Clerk for Production

### 1. Find Your Vercel URL

- Go to your Vercel dashboard
- Copy your project's URL (e.g., `https://droply-xyz123.vercel.app`)

### 2. Add to Clerk Allowed Origins

- Go to [Clerk Dashboard](https://dashboard.clerk.com)
- Navigate: **Configure** → **Domains** (or **Settings** → **Domains**)
- Add your Vercel URL to "Allowed Origins"

### 3. Verify Environment Variables in Vercel

- Vercel Dashboard → Your Project → Settings → Environment Variables
- Ensure ALL these are set:
  - ✅ NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  - ✅ CLERK_SECRET_KEY
  - ✅ NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY
  - ✅ IMAGEKIT_PRIVATE_KEY
  - ✅ NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
  - ✅ DATABASE_URL
  - ✅ NEXT_PUBLIC_APP_URL (set to your Vercel URL)

### 4. Test the Deployment

- Redeploy your project on Vercel
- Visit your live URL
- Try signing in/up

## 🔧 Common Issues

**"Missing secretKey" Error:**

- Double-check CLERK_SECRET_KEY is set in Vercel environment variables

**CORS/Origin Errors:**

- Verify your Vercel URL is added to Clerk's allowed origins
- Make sure you're using https:// not http://

**Middleware Errors:**

- Clear Vercel cache and redeploy
- Check all environment variables are correctly spelled
