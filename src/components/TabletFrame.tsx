interface TabletFrameProps {
  children: React.ReactNode;
}

const TabletFrame = ({ children }: TabletFrameProps) => {
  return (
    <div className="relative flex justify-center">
      {/* Volume buttons — top edge */}
      <div className="absolute top-0 left-[22%] h-[3px] w-8 bg-zinc-600 rounded-t-sm" />
      <div className="absolute top-0 left-[32%] h-[3px] w-8 bg-zinc-600 rounded-t-sm" />

      {/* Power button — right edge */}
      <div className="absolute right-0 top-[25%] w-[3px] h-8 bg-zinc-600 rounded-r-sm" />

      {/* Tablet body — landscape */}
      <div
        className="relative w-full rounded-[1.2rem] border-[6px] border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden"
        style={{ aspectRatio: "4 / 3" }}
      >
        {/* Camera dot */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-600 z-20" />

        {/* Screen — contain so nothing gets cut */}
        <div className="absolute inset-0 overflow-hidden bg-white flex items-center justify-center [&_img]:object-contain [&_video]:object-contain">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TabletFrame;
