// Environment Variables Debug Helper
// Add this to a page temporarily to debug environment variables in production

export function DebugEnvVars() {
  const envVars = {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env
      .NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
      ? "✅ Set"
      : "❌ Missing",
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY ? "✅ Set" : "❌ Missing",
    NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY
      ? "✅ Set"
      : "❌ Missing",
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY
      ? "✅ Set"
      : "❌ Missing",
    NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT: process.env
      .NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
      ? "✅ Set"
      : "❌ Missing",
    DATABASE_URL: process.env.DATABASE_URL ? "✅ Set" : "❌ Missing",
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL
      ? "✅ Set"
      : "❌ Missing",
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#000",
        color: "#00ff00",
        fontFamily: "monospace",
      }}
    >
      <h2>Environment Variables Status:</h2>
      {Object.entries(envVars).map(([key, status]) => (
        <div key={key}>
          {key}: {status}
        </div>
      ))}
    </div>
  );
}

// Usage: Add this to your page temporarily:
// import { DebugEnvVars } from './debug-env';
// Then add <DebugEnvVars /> to your JSX
