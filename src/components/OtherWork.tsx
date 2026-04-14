import { useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import LaptopFrame from "@/components/LaptopFrame";

const b = import.meta.env.BASE_URL;

const items = [
  { title: "School Management System", image: `${b}other-school-management.png`, link: "" },
  { title: "Swami Debananda Ashram", image: `${b}other-ashram.png`, link: "https://sdashram.org/" },
  { title: "Education Cube", image: `${b}other-education-cube.png`, link: "https://education-cube.com/" },
  { title: "Coding Avengers", image: `${b}other-codingavengers.png`, link: "https://www.codingavengers.com/" },
];

const OtherWork = () => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    const amount = ref.current.clientWidth * 0.55;
    ref.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section className="mt-16 mb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
            More Work
          </span>
          <h2 className="text-xl sm:text-2xl text-foreground mt-1">Other Projects</h2>
        </div>

        {/* Nav arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
      >
        {items.map(({ title, image, link }) => (
          <div
            key={title}
            className="flex-shrink-0 flex flex-col gap-3"
            style={{ width: "clamp(220px, 75vw, 420px)", scrollSnapAlign: "start" }}
          >
            <div style={{ filter: "drop-shadow(0 12px 32px rgba(0,0,0,0.12))" }}>
              <LaptopFrame>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </LaptopFrame>
            </div>
            <div className="flex items-center justify-between pl-1">
              <p className="text-xs text-muted-foreground">{title}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-medium text-foreground hover:text-hero-highlight transition-colors"
                >
                  Visit
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherWork;
