import { createAuthClient } from "better-auth/react";

// Better-auth plugins
import { twoFactorClient } from "better-auth/client/plugins";
import { organizationClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [twoFactorClient(), organizationClient()],
});
