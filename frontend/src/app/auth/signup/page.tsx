"use client";

import { FirstStep } from "@/app/_components/signupsteps/firststep";
import { SecondStep } from "@/app/_components/signupsteps/secondstep";
import { useState } from "react";

export default function Signup() {
  const [step, setStep] = useState<number>(1);

  const handleNextStep = () => {
    setStep(2);
  };
  const handlePrevStep = () => {
    setStep(1);
  };

  return step === 1 ? (
    <FirstStep step={step} onNextStep={handleNextStep} />
  ) : (
    <SecondStep step={step} onPrevStep={handlePrevStep} />
  );
}
