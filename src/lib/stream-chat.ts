import "server-only";

import { StreamChat } from "stream-chat";
import { serverConfig } from "@/config";

export const streamChat = StreamChat.getInstance(
    serverConfig.stream.chatApiKey,
    serverConfig.stream.chatSecretKey,
);