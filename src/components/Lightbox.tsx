import { useEffect } from "react";
import { X } from "lucide-react";

interface LightboxProps {
  src: string;
  onClose: () => void;
}

const Lightbox = ({ src, onClose }: LightboxProps) => {
  const isVideo = src.toLowerCase().endsWith(".mp4");

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        onClick={onClose}
      >
        <X className="w-5 h-5" />
      </button>

      {/* Media */}
      <div
        className="max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo ? (
          <video
            src={src}
            className="w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        ) : (
          <img
            src={src}
            className="w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
          />
        )}
      </div>
    </div>
  );
};

export default Lightbox;
