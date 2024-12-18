export function SecondStep({ setCurrentStep, form, onChange }) {
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
          <label className="pl-[70px] text-sm">E-mail *</label>
          <input
            className="block mx-auto w-[70%] p-4 mb-1 border-2 border-black-500 rounded-xl"
            id="email"
            onChange={onChange}
            value={form.email}
            required
            type="email"
          />
          <label className="pl-[70px] text-sm">Phone number *</label>
          <input
            className="block mx-auto w-[70%] p-4 mb-1 border-2 border-black-500 rounded-xl"
            id="number"
            onChange={onChange}
            value={form.number}
            required
            type="number"
          />
          <label className="pl-[70px] text-sm">Password *</label>
          <input
            className="block mx-auto w-[70%] p-4 mb-1 border-2 border-black-500 rounded-xl"
            id="password"
            onChange={onChange}
            value={form.password}
            required
            type="password"
          />
          <label className="pl-[70px] text-sm">Confirm password *</label>
          <input
            className="block mx-auto w-[70%] p-4 mb-1 border-2 border-black-500 rounded-xl"
            id="confirmPassword"
            onChange={onChange}
            value={form.confirmPassword}
            required
            type="password"
          />
        </form>
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
