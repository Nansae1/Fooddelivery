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
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export type StepProps = {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

export const FirstStep = ({ step, setStep }: StepProps) => {
  const [email, setEmail] = useState("");

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
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setStep(2);
    setEmail(values.email);
    console.log("agadg");
  }
  return (
    <div className="flex flex-col gap-6 w-104">
      <Link href="/auth/login">
        <ChevronLeft className="h-9 w-9 text-black text-sm border border-[#E4E4E7]" />
      </Link>

      <div className="flex flex-col gap-1">
        <p className="text-[24px] font-semibold">Reset your password</p>
        <p className="text-[#71717A] text-[16px]">
          Enter your email to receive a password reset link
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    className="h-9 w-104"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="h-9 w-104 bg-[#18181B] text-white opacity-20 rounded-md"
            type="submit"
          >
            Let's Go
          </Button>
        </form>
      </Form>

      <div className="flex gap-3">
        <p className="text-[#71717A] text-[16px]">Don't have an account?</p>
        <Link href="/auth/register">
          <p className="text-[#2563EB] text-[16px]">Sign up</p>
        </Link>
      </div>
    </div>
  );
};
