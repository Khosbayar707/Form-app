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
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    mail: "",
  });
  const [errors, setErorrs] = useState({
    firstname: "",
    lastname: "",
    username: "",
    mail: "",
  });

  const onChange = (e) => {
    const field = e.target.id;
    const newValue = { ...form, [field]: e.target.value };
    setForm(newValue);
  };

  return (
    <div className={`${montserrat.className}`}>
      {currentStep === 1 ? (
        <FirstStep
          setCurrentStep={setCurrentStep}
          form={form}
          onChange={onChange}
          setErorrs={setErorrs}
          errors={errors}
        />
      ) : currentStep === 2 ? (
        <SecondStep
          setCurrentStep={setCurrentStep}
          form={form}
          onChange={onChange}
          setErorrs={setErorrs}
          errors={errors}
        />
      ) : currentStep === 3 ? (
        <ThirdStep
          setCurrentStep={setCurrentStep}
          form={form}
          onChange={onChange}
          setErorrs={setErorrs}
          errors={errors}
        />
      ) : (
        <Done />
      )}
    </div>
  );
}
