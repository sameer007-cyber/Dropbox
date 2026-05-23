# 🌟 Droply - Secure Cloud Storage Platform

**Droply** is a modern, secure cloud storage platform built with Next.js, designed specifically for image storage and management. Store your images with energy - Unleash. Secure. Fast.

## 🚀 Features

- **🔐 Secure Authentication** - Powered by Clerk for robust user management
- **📸 Image Storage** - Seamless integration with ImageKit for optimized image handling
- **📁 File Management** - Create folders, organize files, and manage your storage
- **⭐ File Operations** - Star important files, move to trash, and restore
- **🎨 Modern UI** - Beautiful, responsive interface built with HeroUI and Tailwind CSS
- **🌙 Dark Theme** - Sleek dark theme with lime accent colors
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **UI Framework**: HeroUI (NextUI successor), Tailwind CSS
- **Authentication**: Clerk
- **Database**: PostgreSQL with Neon
- **ORM**: Drizzle ORM
- **Image Storage**: ImageKit
- **Deployment**: Vercel
- **Styling**: Tailwind CSS with custom lime theme

## 📦 Project Structure

```
droply-main/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard page
│   ├── sign-in/          # Authentication pages
│   └── sign-up/
├── components/            # Reusable React components
├── lib/                  # Utilities and database
├── schemas/              # Form validation schemas
├── styles/               # Global styles
├── types/                # TypeScript type definitions
└── drizzle/              # Database migrations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL database (Neon recommended)
- Clerk account for authentication
- ImageKit account for image storage

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/PreetKot/Droply.git
   cd droply-main
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy the environment variables from `.env.production.template` and create a `.env` file:

   ```bash
   cp .env.production.template .env
   ```

   Fill in your actual values:

   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # ImageKit
   NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_imagekit_endpoint

   # Database
   DATABASE_URL=your_postgresql_connection_string

   # App URL
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up the database**

   ```bash
   npm run db:push
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

## 🔧 Configuration

### Clerk Setup

1. Create a Clerk application at [clerk.com](https://clerk.com)
2. Configure your sign-in and sign-up pages
3. Add your domain to the allowed origins
4. Copy your publishable key and secret key

### ImageKit Setup

1. Create an ImageKit account at [imagekit.io](https://imagekit.io)
2. Get your public key, private key, and URL endpoint
3. Configure upload settings and transformations as needed

### Database Setup

1. Create a PostgreSQL database (Neon recommended)
2. Copy the connection string
3. Run migrations with `npm run db:push`

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Connect your repository to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

2. **Configure Environment Variables in Vercel**

   ⚠️ **CRITICAL**: You must add ALL these environment variables in your Vercel project settings:

   Go to: **Project Settings** → **Environment Variables** → Add each variable:

   ```env
   # Clerk Authentication (REQUIRED)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZmFuY3ktbW9ua2Zpc2gtNzkuY2xlcmsuYWNjb3VudHMuZGV2JA
   CLERK_SECRET_KEY=sk_test_pMl8drNHyZzDp7HbeqQt8n58qmRb7Dtr08SDLiShWN

   # ImageKit (REQUIRED)
   NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=public_6up0qJdyj2C4+s9wK9qDjTxpM4c=
   IMAGEKIT_PRIVATE_KEY=private_F4KAuv2q0gjOQlScIPM387uu9NE=
   NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/preetkotmire

   # Clerk URLs
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

   # Database (REQUIRED)
   DATABASE_URL=postgresql://neondb_owner:npg_yfEqXdmK83lD@ep-ancient-voice-a8yp8yv2-pooler.eastus2.azure.neon.tech/neondb?sslmode=require

   # App URL (UPDATE with your Vercel URL)
   NEXT_PUBLIC_APP_URL=https://your-project-name.vercel.app
   ```

3. **Update Clerk Settings**

   - Go to [Clerk Dashboard](https://dashboard.clerk.com)
   - Add your Vercel domain to **Allowed Origins**
   - Verify your API keys are active

4. **Deploy**
   ```bash
   git add .
   git commit -m "Add environment variables and deploy fixes"
   git push
   ```

### Troubleshooting Deployment Issues

**Error: "Missing secretKey"**

- Ensure `CLERK_SECRET_KEY` is set in Vercel environment variables
- Check that the key starts with `sk_test_` or `sk_live_`

**Error: "MIDDLEWARE_INVOCATION_FAILED"**

- Verify all Clerk environment variables are properly set
- Make sure your domain is added to Clerk's allowed origins

**File Upload Issues**

- Check ImageKit environment variables are set
- Verify ImageKit URL endpoint is correct

### Environment Variables Verification

Run this script locally to verify your environment setup:

```bash
./verify-env.sh
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Clerk](https://clerk.com/) for seamless authentication
- [HeroUI](https://heroui.com/) for beautiful UI components
- [ImageKit](https://imagekit.io/) for powerful image management
- [Drizzle ORM](https://orm.drizzle.team/) for type-safe database operations
- [Vercel](https://vercel.com/) for effortless deployment

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Contact the maintainer: [PreetKot](https://github.com/PreetKot)

---

**Built with ❤️ by [PreetKot](https://github.com/PreetKot)**
