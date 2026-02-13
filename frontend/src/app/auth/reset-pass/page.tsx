"use client";
import { useAuth } from "@/app/context/AuthProvider";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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

export default function Reset() {
  const { login } = useAuth();

  const formSchema = z.object({
    password: z.string({
      message: "Invalid email. Use a format like example@email.com.",
    }),
    confirm: z.string({
      message: "Incorrect password. Please try again.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    login(values.password, values.confirm);
    console.log("agadg");
    console.log(values);
  }
  return (
    <div className="h-screen w-screen flex justify-between px-15 items-center">
      <div className=" w-104 flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-[24px] font-semibold">Create new password </p>
          <p className="text-[#71717A] text-[16px]">
            Set a new password with a combination of letters and numbers for
            better security.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Password"
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
                name="confirm"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Confirm"
                        className="h-9 w-104"
                        {...field}
                      ></Input>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Link href="/auth/forgot-pass">
                <p className="underline text-[14px]">Forgot password ?</p>
              </Link>
              <Checkbox />

              <Button
                className="h-9 w-104 bg-[#18181B] text-white opacity-20 rounded-md"
                type="submit"
              >
                Create password
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <img src="/loginpage.png" className="h-225 w-210 rounded-md" />
    </div>
  );
}
