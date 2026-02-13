"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export const FirstStep = ({
  step,
  onNextStep,
  setEmail,
  setUsername,
}: {
  step: number;
  onNextStep: () => void;
  setEmail: Dispatch<SetStateAction<string>>;
  setUsername: Dispatch<SetStateAction<string>>;
}) => {
  const formSchema = z.object({
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: "Invalid email. Use a format like example@email.com",
    }),
    username: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setEmail(values.email);
    setUsername(values.username);
    console.log("agadg");
    onNextStep();
  }

  return (
    <div className="flex gap-12 justify-center items-center h-screen w-screen">
      <div className="flex flex-col gap-6">
        <Link href="/">
          <ChevronLeft className="h-9 w-9 text-black text-sm border border-[#E4E4E7]" />
        </Link>

        <div className="flex flex-col gap-1">
          <p className="text-[24px] font-semibold">Create your account</p>
          <p className="text-[#71717A] text-[16px]">
            Sign up to explore your favorite dishes.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="h-9 w-104 border border-[#E4E4E7] text-[#71717A] rounded-md"
                      placeholder="Enter your email address"
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="h-9 w-104 border border-[#E4E4E7] text-[#71717A] rounded-md"
                      placeholder="Enter your username"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="h-9 w-104 rounded-md transition-colors bg-black text-white disabled:opacity-20"
              type="submit"
              disabled={!form.formState.isValid || form.formState.isSubmitting}
            >
              Let's Go
            </Button>
          </form>
        </Form>

        <div className="flex gap-3">
          <p className="text-[#71717A] text-[16px]">Already have an account?</p>
          <Link href="/auth/login">
            <p className="text-[#2563EB] text-[16px]">Log in</p>
          </Link>
        </div>
      </div>
      <img src="/loginpage.png" className="h-225 w-210 rounded-md" />
    </div>
  );
};
