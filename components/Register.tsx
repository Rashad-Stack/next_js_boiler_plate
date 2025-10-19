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
import useRegister from "@/hooks/use-register";
import Link from "next/link";
import GoogleSignup from "./GoogleSignup";

export default function Register() {
  const { form, onSubmit } = useRegister();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your first name"
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
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your last name"
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
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your address"
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
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your phone number"
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
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Zip Code</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your zip code"
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

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your confirm password"
                  {...field}
                  className="placeholder:text-muted-foreground border-border border text-sm shadow-none placeholder:text-sm"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

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
          <GoogleSignup />

          <p className="text-muted-foreground text-center text-sm">
            Already have an account?
            <Link href="/?modal=sign-in" className="text-primary underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </Form>
  );
}
