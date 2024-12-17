export function SecondStep({ setCurrentStep }) {
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
        <div>
          <label className="pl-[70px]">E-mail *</label>
          <input
            className="block mx-auto w-[70%] p-4 mb-1 border-2 border-black-500 rounded-xl"
            required
          />
          <label className="pl-[70px]">Phone number *</label>
          <input
            className="block mx-auto w-[70%] p-4 mb-1 border-2 border-black-500 rounded-xl"
            required
          />
          <label className="pl-[70px] text-2">Password *</label>
          <input
            className="block mx-auto w-[70%] p-4 mb-1 border-2 border-black-500 rounded-xl"
            required
          />
          <label className="pl-[70px] text-2">Confirm password *</label>
          <input
            className="block mx-auto w-[70%] p-4 mb-1 border-2 border-black-500 rounded-xl"
            required
          />
        </div>
        <div className="flex">
          <button
            onClick={() => setCurrentStep(1)}
            className="block mx-auto w-[15%] box-border p-4 rounded-xl mt-[20px] border-2 border-black-500"
          >
            Back
          </button>
          <button
            onClick={() => setCurrentStep(3)}
            className="block mx-auto w-[40%] box-border p-4 rounded-xl mt-[20px] bg-[#7e7c7c]"
          >
            Continue 2/3
          </button>
        </div>
      </div>
    </div>
  );
}
