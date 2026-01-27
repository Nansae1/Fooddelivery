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
import { useForm } from "react-hook-form";
import z, { refine } from "zod";

export const SecondStep = ({
  step,
  onPrevStep,
  register,
  email,
  username,
}: {
  step: number;
  onPrevStep: () => void;
  register: (
    username: string,
    email: string,
    password: string,
  ) => Promise<void>;
  email: string;
  username: string;
}) => {
  const formSchema = z
    .object({
      password: z
        .string()
        .min(8)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
          message: "Weak password. Use numbers and symbols.",
        }),
      confirmpass: z.string().min(8),
    })
    .refine(
      (values) => {
        return values.password === values.confirmpass;
      },
      {
        message: "Those password did’t match, Try again",
        path: ["confirmpass"],
      },
    );

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmpass: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    register(username, email, values.password);
    console.log("agadg");
  }
  return (
    <div className="flex gap-12 justify-center items-center h-screen w-screen">
      <div className="flex flex-col gap-6">
        <Button onClick={onPrevStep}>
          <ChevronLeft className="h-9 w-9 text-black text-sm border border-[#E4E4E7]" />
        </Button>
        <div className="flex flex-col gap-1">
          <p className="text-[24px] font-semibold">Create a strong password</p>
          <p className="text-[#71717A] text-[16px]">
            Create a strong password with letters, numbers.
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="h-9 w-104 border border-[#E4E4E7] text-[#71717A] rounded-md"
                      placeholder="Enter your password"
                      type="password"
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
              name="confirmpass"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="h-9 w-104 border border-[#E4E4E7] text-[#71717A] rounded-md"
                      placeholder="Confirm your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Let's Go</Button>
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
