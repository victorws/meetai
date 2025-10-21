import "server-only";

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { polar, checkout, portal } from "@polar-sh/better-auth";

import { db } from "@/db"; // your drizzle instance
import * as schema from "@/db/schema";

import { polarClient }  from "./polar";
import { serverConfig } from "@/config";
 
export const auth = betterAuth({
    plugins: [
        polar({
            client: polarClient,
            createCustomerOnSignUp: true,
            use: [
                checkout({
                    authenticatedUsersOnly: true,
                    successUrl: "/upgrade",
                }),
                portal(),
            ],
        }),
    ],
    socialProviders: {
        github: { 
            clientId: serverConfig.github.clientId as string, 
            clientSecret: serverConfig.github.clientSecret as string, 
        },
        google: { 
            clientId: serverConfig.google.clientId as string, 
            clientSecret: serverConfig.google.clientSecret as string, 
        },
    },
    emailAndPassword: {  
        enabled: true
    },
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite",
        schema: {
            ...schema,
        },
    }),
});