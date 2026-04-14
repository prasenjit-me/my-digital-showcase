import PhoneFrame from "@/components/PhoneFrame";
import TabletFrame from "@/components/TabletFrame";
import LaptopFrame from "@/components/LaptopFrame";

export interface DeviceClickPayload {
  deviceType: "laptop" | "mobile" | "tablet";
  src: string;
  isVideo: boolean;
  useFrame: boolean;
}

interface DeviceShowcaseProps {
  title: string;
  image: string;
  video?: string;
  laptopVideo?: string;
  mobileScreens: string[];
  tabletScreens: string[];
  onDeviceClick?: (payload: DeviceClickPayload) => void;
}

const MediaItem = ({ src, title, i }: { src: string; title: string; i: number }) => {
  const isVideo = src.toLowerCase().endsWith(".mp4");
  return isVideo ? (
    <video src={src} className="w-full h-full object-contain bg-black" autoPlay loop muted playsInline />
  ) : (
    <img src={src} alt={`${title} screen ${i + 1}`} className="w-full h-full object-contain" loading="lazy" />
  );
};

const DeviceShowcase = ({
  title,
  image,
  video,
  laptopVideo,
  mobileScreens,
  tabletScreens,
  onDeviceClick,
}: DeviceShowcaseProps) => {
  const hasDeviceScreens = mobileScreens.length > 0 || tabletScreens.length > 0;

  const mainSrc = video ?? laptopVideo ?? image;
  const mainIsVideo = !!(video || laptopVideo);
  const mainUseFrame = !video;

  return (
    <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-5 w-full">

      {/* ── Laptop / main video ── */}
      <div
        className="cursor-pointer transition-transform duration-200 hover:scale-[1.02] w-full"
        style={{ flex: hasDeviceScreens ? "0 0 52%" : "1" }}
        onClick={(e) => {
          e.stopPropagation();
          onDeviceClick?.({ deviceType: "laptop", src: mainSrc, isVideo: mainIsVideo, useFrame: mainUseFrame });
        }}
      >
        {video ? (
          <div className="rounded-xl overflow-hidden">
            <video src={video} className="w-full aspect-[16/9] object-cover" autoPlay loop muted playsInline />
          </div>
        ) : (
          <LaptopFrame>
            {laptopVideo ? (
              <video src={laptopVideo} className="w-full h-full object-contain bg-black" autoPlay loop muted playsInline />
            ) : (
              <img src={image} alt={title} className="w-full h-full object-cover object-top" loading="lazy" />
            )}
          </LaptopFrame>
        )}
      </div>

      {/* ── Phones + tablet ── */}
      {hasDeviceScreens && (
        <div className="flex items-end gap-2 sm:gap-3 w-full" style={{ flex: "1", minWidth: 0 }}>

          {mobileScreens.map((src, i) => (
            <div
              key={i}
              className="cursor-pointer transition-transform duration-200 hover:scale-[1.03] min-w-0"
              style={{ flex: "1" }}
              onClick={(e) => {
                e.stopPropagation();
                onDeviceClick?.({
                  deviceType: "mobile",
                  src,
                  isVideo: src.toLowerCase().endsWith(".mp4"),
                  useFrame: true,
                });
              }}
            >
              <PhoneFrame>
                <MediaItem src={src} title={title} i={i} />
              </PhoneFrame>
            </div>
          ))}

          {tabletScreens[0] && (
            <div
              className="cursor-pointer transition-transform duration-200 hover:scale-[1.03] min-w-0"
              style={{ flex: mobileScreens.length > 0 ? "1.6" : "1" }}
              onClick={(e) => {
                e.stopPropagation();
                onDeviceClick?.({
                  deviceType: "tablet",
                  src: tabletScreens[0],
                  isVideo: tabletScreens[0].toLowerCase().endsWith(".mp4"),
                  useFrame: true,
                });
              }}
            >
              <TabletFrame>
                <MediaItem src={tabletScreens[0]} title={title} i={0} />
              </TabletFrame>
            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default DeviceShowcase;
