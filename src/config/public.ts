import type { PublicConfig } from "./types";

export const publicConfig: PublicConfig = {
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL || "",
  },
  stream: {
    videoApiKey: process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY!,
    chatApiKey: process.env.NEXT_PUBLIC_STREAM_CHAT_API_KEY!,
  },
};
