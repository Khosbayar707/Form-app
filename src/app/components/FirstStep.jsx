"use client";
import { ValidateStepOne } from "../utils/validate";

export function FirstStep({
  setCurrentStep,
  form,
  onChange,
  setErorrs,
  errors,
}) {
  const { isValid, newErrors } = ValidateStepOne(form, 1);
  return (
    <div className="max-w-md mx-auto mt-[80px] text-black">
      <div className="w-[480px] h-[655px] rounded-xl bg-[#ffffff]">
        <div className="box-border p-[32px]">
          <div className="w-[60px] h-[60px]">
            <img src="/assets/logo.png" alt="Logo" />
          </div>
          <div>
            <b className="text-[24px]">Join Us! 😎</b>
            <p className="text-[16px] text-gray-500">
              Please provide all current information accurately.
            </p>
          </div>
        </div>
        <form>
          <div>
            <label className="pl-[70px] text-sm">First name *</label>
            <input
              className="block mx-auto w-[70%] p-4 border-2 border-black-500 rounded-xl"
              id="firstname"
              onChange={onChange}
              value={form.firstname}
              required
              type="text"
            />
            <p className="block mx-auto w-[70%] text-red-500 text-[12px]">
              {errors.firstname}
            </p>
          </div>
          <label className="pl-[70px] text-sm">Last name *</label>
          <input
            className="block mx-auto w-[70%] p-4 border-2 border-black-500 rounded-xl"
            id="lastname"
            value={form.lastname}
            onChange={onChange}
            required
            type="text"
          />
          <p className="block mx-auto w-[70%] text-red-500 text-[12px]">
            {errors.lastname}
          </p>
          <label className="pl-[70px] text-sm">Username *</label>
          <input
            className="block mx-auto w-[70%] p-4 border-2 border-black-500 rounded-xl"
            id="username"
            value={form.username}
            onChange={onChange}
            required
            type="text"
          />
          <p className="block mx-auto w-[70%] text-red-500 text-[12px]">
            {errors.username}
          </p>
        </form>

        <button
          onClick={() => {
            if (isValid) {
              setCurrentStep(2);
            } else {
              setErorrs(newErrors);
            }
          }}
          className="block mx-auto w-[80%] p-4 rounded-xl mt-[67px] bg-[#7e7c7c]"
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
}
