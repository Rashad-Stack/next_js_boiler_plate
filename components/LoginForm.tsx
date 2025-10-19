"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useLogin from "@/hooks/use-login";
import Link from "next/link";

import GoogleLogin from "./GoogleLogin";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

export default function LoginForm() {
  const { form, onSubmit } = useLogin();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  {...field}
                  className="placeholder:text-muted-foreground border-border border text-sm shadow-none placeholder:text-sm"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  {...field}
                  className="placeholder:text-muted-foreground border-border border text-sm shadow-none placeholder:text-sm"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  {...field}
                  className="placeholder:text-muted-foreground border-border border text-sm shadow-none placeholder:text-sm"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* Keep me logged in and forgot password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" className="border-primary border-2" />
            <Label htmlFor="terms" className="font-normal">
              Keep me logged in
            </Label>
          </div>

          <Link href="?modal=forgot-password">forgot password?</Link>
        </div>

        <Button
          type="submit"
          className="col-span-full mx-auto flex w-full items-center justify-center font-semibold sm:max-w-md"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          Login
        </Button>
      </form>

      <div className="mt-4 space-y-4">
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or sign up with
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <GoogleLogin />

          <p className="text-muted-foreground text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/?modal=sign-up" className="text-primary underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Form>
  );
}
