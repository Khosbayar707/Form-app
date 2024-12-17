"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import { FirstStep } from "./components/FirstStep.jsx";
import { SecondStep } from "./components/SecondStep.jsx";
import { ThirdStep } from "./components/ThirdStep.jsx";
import { Done } from "./components/Done.jsx";
const montserrat = Montserrat({ subsets: ["latin"] });
export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className={`${montserrat.className}`}>
      {currentStep === 1 ? (
        <FirstStep setCurrentStep={setCurrentStep} />
      ) : currentStep === 2 ? (
        <SecondStep setCurrentStep={setCurrentStep} />
      ) : currentStep === 3 ? (
        <ThirdStep setCurrentStep={setCurrentStep} />
      ) : (
        <Done />
      )}
    </div>
  );
}
