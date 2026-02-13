import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { StepProps } from "./FirstStep";

export const SecondStep = ({ step, setStep }: StepProps) => {
  return (
    <div className="flex flex-col gap-6 w-104">
      <Button onClick={() => setStep(1)}>
        <ChevronLeft className="h-9 w-9 text-black text-sm border border-[#E4E4E7]" />
      </Button>

      <div className="flex flex-col gap-1">
        <p className="text-[24px] font-semibold">Reset your password</p>
        <p className="text-[#71717A] text-[16px]">
          Enter your email to receive a password reset link
        </p>
      </div>
      <Button>Resend email</Button>
    </div>
  );
};
