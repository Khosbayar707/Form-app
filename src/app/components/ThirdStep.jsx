export function ThirdStep({ setCurrentStep, form, onChange }) {
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
          <label className="pl-[70px] text-sm">Date of birth *</label>
          <input
            className="block mx-auto w-[70%] p-4 mb-1 border-2 border-black-500 rounded-xl"
            type="date"
            required
            id="date"
            onChange={onChange}
            value={form.date}
          />
          <label className="pl-[70px] text-sm">Profile image *</label>
          <input
            className="block w-[70%] h-[180px] mx-auto border-2 border-black-500 rounded-xl text-sm text-gray-500
               file:mr-4 file:py-2 file:px-4
               file:rounded-full file:border-0
               file:text-sm file:font-semibold
               file:bg-blue-50 file:text-blue-700
               hover:file:bg-blue-100"
            type="file"
            accept="image/*"
            required
            id="image"
            onChange={onChange}
            value={form.image}
          />
        </form>
        <div className="flex">
          <button
            onClick={() => setCurrentStep(2)}
            className="block mx-auto w-[15%] box-border p-4 rounded-xl mt-[78px] border-2 border-black-500"
          >
            Back
          </button>
          <button
            onClick={() => setCurrentStep(4)}
            className="block mx-auto w-[40%] box-border p-4 rounded-xl mt-[78px] bg-[#7e7c7c]"
          >
            Continue 3/3
          </button>
        </div>
      </div>
    </div>
  );
}
