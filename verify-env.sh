#!/bin/bash

# Environment Variables Verification Script for Vercel
# Run this locally to verify your environment variables

echo "🔍 Checking Environment Variables..."
echo "=================================="

# Check Clerk variables
if [ -z "$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY" ]; then
    echo "❌ NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is missing"
else
    echo "✅ NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is set"
fi

if [ -z "$CLERK_SECRET_KEY" ]; then
    echo "❌ CLERK_SECRET_KEY is missing"
else
    echo "✅ CLERK_SECRET_KEY is set"
fi

# Check ImageKit variables
if [ -z "$NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY" ]; then
    echo "❌ NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY is missing"
else
    echo "✅ NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY is set"
fi

if [ -z "$IMAGEKIT_PRIVATE_KEY" ]; then
    echo "❌ IMAGEKIT_PRIVATE_KEY is missing"
else
    echo "✅ IMAGEKIT_PRIVATE_KEY is set"
fi

if [ -z "$NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT" ]; then
    echo "❌ NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT is missing"
else
    echo "✅ NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT is set"
fi

# Check Database
if [ -z "$DATABASE_URL" ]; then
    echo "❌ DATABASE_URL is missing"
else
    echo "✅ DATABASE_URL is set"
fi

# Check App URL
if [ -z "$NEXT_PUBLIC_APP_URL" ]; then
    echo "❌ NEXT_PUBLIC_APP_URL is missing"
else
    echo "✅ NEXT_PUBLIC_APP_URL is set: $NEXT_PUBLIC_APP_URL"
fi

echo "=================================="
echo "💡 Make sure to add ALL these variables to your Vercel project settings!"
