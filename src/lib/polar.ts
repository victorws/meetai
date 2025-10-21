import { serverConfig } from "@/config";
import { Polar } from "@polar-sh/sdk";

export const polarClient = new Polar({
    accessToken: serverConfig.polar.accessToken,
    server: "sandbox",
});