import { useState, useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import DeviceShowcase, { DeviceClickPayload } from "@/components/DeviceShowcase";
import LaptopFrame from "@/components/LaptopFrame";
import PhoneFrame from "@/components/PhoneFrame";
import TabletFrame from "@/components/TabletFrame";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  video?: string;
  laptopVideo?: string;
  mobileScreens?: string[];
  tabletScreens?: string[];
  category: string;
  year: string;
  link?: string;
  tech?: string[];
}

const POPUP_MAX_WIDTH: Record<string, string> = {
  laptop: "min(860px, 92vw)",
  tablet: "min(620px, 92vw)",
  mobile: "min(300px, 80vw)",
};

const PopupMedia = ({ payload, title }: { payload: DeviceClickPayload; title: string }) => {
  const { src, isVideo, useFrame, deviceType } = payload;

  const media = isVideo ? (
    <video src={src} className="w-full h-full object-contain bg-black" autoPlay loop muted playsInline />
  ) : (
    <img src={src} alt={title} className="w-full h-full object-cover object-top" loading="lazy" />
  );

  if (deviceType === "laptop" && !useFrame) {
    return (
      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <video src={src} className="w-full aspect-[16/9] object-cover" autoPlay loop muted playsInline />
      </div>
    );
  }
  if (deviceType === "laptop") return <LaptopFrame>{media}</LaptopFrame>;
  if (deviceType === "mobile") return <PhoneFrame>{media}</PhoneFrame>;
  return <TabletFrame>{media}</TabletFrame>;
};

const ProjectCard = ({
  title,
  description,
  image,
  video,
  laptopVideo,
  mobileScreens = [],
  tabletScreens = [],
  category,
  year,
  link,
  tech = [],
}: ProjectCardProps) => {
  const [selected, setSelected] = useState<DeviceClickPayload | null>(null);

  useEffect(() => {
    if (!selected) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected]);

  return (
    <article className="mb-24 animate-fade-in">

      {/* ── Popup ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm animate-in fade-in zoom-in-95 duration-200"
          onClick={() => setSelected(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-black/8 hover:bg-black/15 text-foreground transition-colors z-10"
            onClick={() => setSelected(null)}
          >
            <X className="w-4 h-4" />
          </button>

          {/* Device — centered, no 3D */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: POPUP_MAX_WIDTH[selected.deviceType],
              filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.18))",
            }}
          >
            <PopupMedia payload={selected} title={title} />
          </div>
        </div>
      )}

      {/* ── Card ── */}
      <div className="flex flex-col gap-6">

        {/* Text: category · year, title, description */}
        <div className="flex flex-col max-w-2xl">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-4">
            {category} · {year}
          </span>
          <h3 className="text-lg sm:text-xl leading-[1.25] text-foreground mb-3">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>

          {tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-hero-highlight transition-colors"
            >
              Visit Site
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Devices: constrained below text */}
        <div className="rounded-2xl bg-secondary/70 p-4 sm:p-6 hover:bg-secondary/90 transition-colors">
          <DeviceShowcase
            title={title}
            image={image}
            video={video}
            laptopVideo={laptopVideo}
            mobileScreens={mobileScreens}
            tabletScreens={tabletScreens}
            onDeviceClick={setSelected}
          />
        </div>

      </div>
    </article>
  );
};

export default ProjectCard;
