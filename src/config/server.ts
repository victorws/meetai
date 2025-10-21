import "server-only";

import dotenv from "dotenv";
import type { ServerConfig } from "./types";

// Load correct env file
if (process.env.VERCEL_ENV === "production" || process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env" });
  console.log("Loaded .env (production)");
} else {
  dotenv.config({ path: ".env.local" });
  console.log("Loaded .env.local (development)");
}

// Construct the typed configuration
export const serverConfig: ServerConfig = {
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

// Runtime validation
const requiredVars: [string, string | undefined][] = [
  ["DATABASE_URL", serverConfig.database.url],
  ["BETTER_AUTH_SECRET", serverConfig.betterAuth.secret],
  ["OPENAI_API_KEY", serverConfig.openai.apiKey],
];

for (const [key, value] of requiredVars) {
  if (!value) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
}


console.log(`✅ Loaded server config for ${serverConfig.env} (DB: ${serverConfig.database.name})`);
console.log("DATABASE_URL in server.ts:", process.env.DATABASE_URL);
