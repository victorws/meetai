import "server-only";

import { StreamClient } from "@stream-io/node-sdk";
import { serverConfig } from "@/config";

export const streamVideo = new StreamClient(
    serverConfig.stream.videoApiKey,
    serverConfig.stream.videoSecretKey,
);