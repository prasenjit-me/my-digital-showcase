interface LaptopFrameProps {
  children: React.ReactNode;
}

const LaptopFrame = ({ children }: LaptopFrameProps) => {
  return (
    <div className="relative w-full flex flex-col items-center select-none">

      {/* ── Screen ── */}
      <div className="w-full relative">
        {/* Outer bezel */}
        <div
          className="relative w-full rounded-t-2xl rounded-b-sm shadow-2xl"
          style={{ background: "#1c1c1e", padding: "10px 10px 6px 10px" }}
        >
          {/* Camera dot */}
          <div className="flex justify-center mb-1.5">
            <div className="w-2 h-2 rounded-full bg-zinc-600" />
          </div>

          {/* Screen glass */}
          <div
            className="w-full overflow-hidden rounded-sm"
            style={{ aspectRatio: "16/9" }}
          >
            {children}
          </div>
        </div>

        {/* Hinge bar */}
        <div
          className="w-full h-[5px]"
          style={{ background: "linear-gradient(to bottom, #48484a, #636366)" }}
        />
      </div>

      {/* ── Base / keyboard deck ── */}
      <div
        className="rounded-b-xl"
        style={{
          width: "106%",
          height: "22px",
          background: "linear-gradient(to bottom, #3a3a3c, #48484a)",
        }}
      >
        {/* Trackpad hint */}
        <div
          className="mx-auto mt-1 rounded-sm opacity-30"
          style={{ width: "22%", height: "8px", background: "#636366" }}
        />
      </div>

      {/* ── Bottom edge ── */}
      <div
        className="rounded-b-2xl"
        style={{
          width: "108%",
          height: "6px",
          background: "linear-gradient(to bottom, #636366, #8e8e93)",
        }}
      />
    </div>
  );
};

export default LaptopFrame;
