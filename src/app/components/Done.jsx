export function Done({}) {
  return (
    <div className="max-w-md mx-auto mt-[80px] text-black">
      <div className="w-[480px] h-[240px] rounded-xl bg-[#ffffff]">
        <div className="box-border p-[32px]">
          <div className="w-[60px] h-[60px]">
            <img src="/assets/logo.png" alt="Logo" />
          </div>
          <div>
            <b className="text-[24px]">You're All Set 🔥</b>
            <p className="text-[16px] text-gray-500">
              We have received your submission. Thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
