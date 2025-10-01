"use client";

import { authClient } from "@/auth/client";

export default function AccountSettings() {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!session) return <p>Session data not found</p>;

  return (
    <div>
      <h1 className="font-bold text-2xl">User Data</h1>
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
      <p>
        Two-factor Enabled: {session.user.twoFactorEnabled ? "true" : "false"}
      </p>
      <p>IP: {session.session.ipAddress}</p>
    </div>
  );
}
