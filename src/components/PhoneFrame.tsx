interface PhoneFrameProps {
  children: React.ReactNode;
}

const PhoneFrame = ({ children }: PhoneFrameProps) => {
  return (
    <div className="relative flex justify-center">
      {/* Volume buttons — left side */}
      <div className="absolute left-0 top-[18%] w-[3px] h-6 bg-zinc-600 rounded-l-sm" />
      <div className="absolute left-0 top-[26%] w-[3px] h-8 bg-zinc-600 rounded-l-sm" />
      <div className="absolute left-0 top-[36%] w-[3px] h-8 bg-zinc-600 rounded-l-sm" />

      {/* Power button — right side */}
      <div className="absolute right-0 top-[28%] w-[3px] h-10 bg-zinc-600 rounded-r-sm" />

      {/* Phone body */}
      <div
        className="relative w-full rounded-[1.2rem] border-[4px] border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden"
        style={{ aspectRatio: "9 / 19.5" }}
      >
        {/* Screen */}
        <div className="absolute inset-0 overflow-hidden rounded-[0.9rem]">
          {children}
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-1 bg-white/25 rounded-full z-20" />
      </div>
    </div>
  );
};

export default PhoneFrame;
