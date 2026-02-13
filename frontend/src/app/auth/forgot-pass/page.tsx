"use client";
import { FirstStep } from "@/app/_components/forgotpasssteps/FirstStep";
import { SecondStep } from "@/app/_components/forgotpasssteps/SecondStep";
import { useState } from "react";

export default function Login() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex gap-12 justify-center items-center h-screen w-screen">
      {step === 1 ? (
        <FirstStep step={step} setStep={setStep} />
      ) : (
        <SecondStep step={step} setStep={setStep} />
      )}

      <img src="/loginpage.png" className="h-225 w-210 rounded-md" />
    </div>
  );
}
