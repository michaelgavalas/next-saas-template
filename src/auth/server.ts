import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/client";

// Better-auth plugins
import { nextCookies } from "better-auth/next-js";
import { twoFactor } from "better-auth/plugins";
import { organization } from "better-auth/plugins";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      accessType: "offline",
      prompt: "select_account consent",
    },
    microsoft: {
      clientId: process.env.MICROSOFT_CLIENT_ID as string,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET as string,
      // Optional
      tenantId: "common",
      prompt: "select_account", // Forces account selection
    },
    dropbox: {
      clientId: process.env.DROPBOX_CLIENT_ID as string,
      clientSecret: process.env.DROPBOX_CLIENT_SECRET as string,
    },
  },
  appName: "SaaS",
  plugins: [nextCookies(), twoFactor(), organization()],
});
