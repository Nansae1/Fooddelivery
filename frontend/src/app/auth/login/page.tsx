"use client";
import { useAuth } from "@/app/context/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z, { email } from "zod";

export default function Login() {
  const { login } = useAuth();
  const formSchema = z.object({
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Invalid email. Use a format like example@email.com.",
    }),
    password: z
      .string()
      .min(8)
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
        message: "Incorrect password. Please try again.",
      }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    login(email, password);
    console.log("agadg");
    console.log(values);
  }
  return (
    <div className="h-screen w-screen flex gap-12 justify-center items-center">
      <div className=" w-104 flex flex-col gap-6">
        <ChevronLeft className="h-9 w-9 rounded-md border border-[#E4E4E7] " />
        <div className="flex flex-col gap-1">
          <p className="text-[24px] font-semibold">Log in </p>
          <p className="text-[#71717A] text-[16px]">
            Log in to enjoy your favorite dishes.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        className="h-9 w-104"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        className="h-9 w-104"
                      ></Input>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="underline text-[14px]">Forgot password ?</p>

              <Button className="h-9 w-104 bg-[#18181B] text-white opacity-20 rounded-md">
                Let's Go
              </Button>
            </form>
          </Form>
        </div>

        <div className="flex gap-3">
          <p className="text-[#71717A] text-[16px]">Don’t have an account?</p>
          <Link href="/auth/signup">
            <p className="text-[16px] text-[#2563EB]">Sign up </p>
          </Link>
        </div>
      </div>
      <img src="/loginpage.png" className="h-225 w-210 rounded-md" />
    </div>
  );
}
