import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "@/db/client"

// Better-auth plugins
import { nextCookies } from "better-auth/next-js"
import { twoFactor } from "better-auth/plugins"
import { username } from "better-auth/plugins"
import { organization } from "better-auth/plugins"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
  },
  appName: "SaaS",
  plugins: [
    nextCookies(),
    twoFactor(),
    organization(),
    username(),
  ],
});
