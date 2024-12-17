"use client";

import Image from "next/image";
import { useState } from "react";
import { FirstStep } from "./components/FirstStep.jsx";
import { SecondStep } from "./components/SecondStep.jsx";
import { ThirdStep } from "./components/ThirdStep.jsx";
export default function Home(currentStep) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      {currentStep === 1 ? (
        <FirstStep currentStep={currentStep} />
      ) : currentStep === 2 ? (
        <SecondStep />
      ) : currentStep === 3 ? (
        <ThirdStep />
      ) : (
        <Done />
      )}
    </div>
  );
}
