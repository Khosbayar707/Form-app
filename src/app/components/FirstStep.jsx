export function FirstStep(currentStep) {
  return (
    <div className="max-w-md mx-auto rounded-xl mt-8">
      <div className="w-[480px] h-[655px] bg-[#ffffff]">
        <div className="box-border p-[32px]">
          <div className="w-[60px] h-[60px]">
            <img src="/assets/logo.png" alt="Logo" />
          </div>
          <div>
            <b className="text-[24px]">Join Us! 😎</b>
            <p className="text-[18px]">
              Please provide all current information accurately.
            </p>
          </div>
        </div>
        <div>
          <label className="pl-[70px]">First name *</label>
          <input
            className="block mx-auto w-[70%] p-4 rounded-xl mb-6 border-inherit"
            placeholder="First name..."
            required
          />
          <label className="pl-[70px]">Last name *</label>
          <input
            className="block mx-auto w-[70%] p-4 rounded-xl mb-6 border-inherit"
            placeholder="Last name"
            required
          />
          <label className="pl-[70px]">Username *</label>
          <input
            className="block mx-auto w-[70%] p-4 rounded-xl mb-6 border-inherit"
            placeholder="Username..."
            required
          />
        </div>

        <button
          onClick
          className="block mx-auto w-[80%] p-4 rounded-xl mt-[80px] bg-[#7e7c7c]"
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
}
