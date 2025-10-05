"use client";

import { RiDropboxFill, RiGoogleFill, RiMicrosoftFill } from "@remixicon/react";
import { authClient } from "@/auth/client";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SignInForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const signInGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/d",
    });
  };

  const signInMicrosoft = async () => {
    const data = await authClient.signIn.social({
      provider: "microsoft",
      callbackURL: "/d",
    });
  };

  const signInDropbox = async () => {
    const data = await authClient.signIn.social({
      provider: "dropbox",
      callbackURL: "/d",
    });
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="/forgot-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </Field>
        <Field>
          <Button type="submit">Login</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button
            onClick={async () => await signInGoogle()}
            variant="outline"
            type="button"
          >
            <RiGoogleFill className="h-5 w-5" />
            Login with Google
          </Button>
          <Button
            onClick={async () => await signInMicrosoft()}
            variant="outline"
            type="button"
          >
            <RiMicrosoftFill className="h-5 w-5" />
            Login with Microsoft
          </Button>
          <Button
            onClick={async () => await signInDropbox()}
            variant="outline"
            type="button"
          >
            <RiDropboxFill className="h-5 w-5" />
            Login with Dropbox
          </Button>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <a href="/sign-up" className="underline underline-offset-4">
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
