export function FirstStep({ setCurrentStep, form, onChange, error }) {
  const red = `block mx-auto w-[70%] p-4 border-[3px] border-red-500 rounded-xl`;
  const black = `block mx-auto w-[70%] p-4 border-2 border-black-500 rounded-xl`;
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
          <label className="pl-[70px] text-sm">First name *</label>
          <input
            className={error ? red : black}
            id="firstname"
            onChange={onChange}
            value={form.firstname}
            required
            type="text"
          />
          {error && (
            <p className="block mx-auto w-[70%] text-red-500 text-[12px]">
              First name cannot contain special characters or numbers.
            </p>
          )}
          <label className="pl-[70px] text-sm">Last name *</label>
          <input
            className={error ? red : black}
            id="lastname"
            value={form.lastname}
            onChange={onChange}
            required
            type="text"
          />
          {error && (
            <p className="block mx-auto w-[70%] text-red-500 text-[12px]">
              Last name cannot contain special characters or numbers.
            </p>
          )}
          <label className="pl-[70px] text-sm">Username *</label>
          <input
            className="block mx-auto w-[70%] p-4 mb-6 border-2 border-black-500 rounded-xl"
            id="username"
            value={form.username}
            onChange={onChange}
            required
            type="text"
          />
        </form>

        <button
          onClick={() => setCurrentStep(2)}
          className="block mx-auto w-[80%] p-4 rounded-xl mt-[67px] bg-[#7e7c7c]"
        >
          Continue 1/3
        </button>
      </div>
    </div>
  );
}
