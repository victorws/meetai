import "server-only";

import { drizzle } from "drizzle-orm/neon-http";
import { serverConfig } from "@/config";

if (!serverConfig.database.url) {
  throw new Error("❌ DATABASE_URL is missing from serverConfig");
}

export const db = drizzle(serverConfig.database.url);