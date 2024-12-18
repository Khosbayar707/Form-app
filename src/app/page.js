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
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);

  const onChange = (e) => {
    const field = e.target.id;
    const newValue = { ...form, [field]: e.target.value };
    setForm(newValue);
    if (field === "firstname" || field === "lastname") {
      if (
        form[field]?.includes("1") ||
        form[field]?.includes("2") ||
        form[field]?.includes("3") ||
        form[field]?.includes("4") ||
        form[field]?.includes("5") ||
        form[field]?.includes("6") ||
        form[field]?.includes("7") ||
        form[field]?.includes("8") ||
        form[field]?.includes("9") ||
        form[field]?.includes("0")
      ) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };

  return (
    <div className={`${montserrat.className}`}>
      {currentStep === 1 ? (
        <FirstStep
          setCurrentStep={setCurrentStep}
          form={form}
          onChange={onChange}
          error={error}
        />
      ) : currentStep === 2 ? (
        <SecondStep
          setCurrentStep={setCurrentStep}
          form={form}
          onChange={onChange}
        />
      ) : currentStep === 3 ? (
        <ThirdStep
          setCurrentStep={setCurrentStep}
          form={form}
          onChange={onChange}
        />
      ) : (
        <Done />
      )}
    </div>
  );
}
