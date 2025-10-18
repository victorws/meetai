import dotenv from "dotenv";

// Automatically load the right env file
if (process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env" });
  console.log("🟢 Loaded .env (production)");
} else {
  dotenv.config({ path: ".env.local" });
  console.log("🧩 Loaded .env.local (development)");
}

export const config = {
  env:
    process.env.VERCEL_ENV ||
    process.env.NODE_ENV ||
    "development",

  database: {
    url: process.env.DATABASE_URL!,
    name:
      process.env.VERCEL_ENV === "production"
        ? "production"
        : "development",
  },

  betterAuth: {
    secret: process.env.BETTER_AUTH_SECRET!,
    url: process.env.BETTER_AUTH_URL!,
  },

  github: {
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  },

  google: {
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  },

  nextApp: {
    url: process.env.NEXT_PUBLIC_APP_URL!,
  },

  stream: {
    videoApiKey: process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY!,
    videoSecretKey: process.env.STREAM_VIDEO_SECRET_KEY!,
    chatApiKey: process.env.NEXT_PUBLIC_STREAM_CHAT_API_KEY!,
    chatSecretKey: process.env.STREAM_CHAT_SECRET_KEY!,
  },

  openai: {
    apiKey: process.env.OPENAI_API_KEY!,
  },

  polar: {
    accessToken: process.env.POLAR_ACCESS_TOKEN!,
  },
};

// ✅ Required variables check
const requiredVars = [
  ["DATABASE_URL", config.database.url],
  ["BETTER_AUTH_SECRET", config.betterAuth.secret],
  ["OPENAI_API_KEY", config.openai.apiKey],
];

for (const [key, value] of requiredVars) {
  if (!value) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
}

console.log(
  `✅ Loaded config for ${config.env} environment (DB: ${config.database.name})`
);
