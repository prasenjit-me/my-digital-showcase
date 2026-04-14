import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  video?: string;
  category: string;
  year: string;
  stats?: { label: string; value: string }[];
}

const ProjectCard = ({ title, description, image, video, category, year, stats }: ProjectCardProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="group animate-fade-in">
      {/* Meta */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-badge-bg text-badge-text">
          {category}
        </span>
        <span className="text-xs text-muted-foreground">{year}</span>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-hero-highlight transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
        {description}
      </p>

      {/* Media showcase */}
      <div className="rounded-xl overflow-hidden border border-border bg-muted/30 relative">
        {video && showVideo ? (
          <video
            src={video}
            className="w-full aspect-[16/10] object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full aspect-[16/10] object-cover group-hover:scale-[1.015] transition-transform duration-500"
            loading="lazy"
            width={1920}
            height={1200}
          />
        )}

        {/* Play / Pause toggle */}
        {video && (
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-sm border border-border text-xs font-medium text-foreground hover:bg-background transition-colors"
          >
            {showVideo ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="4" x2="9" y2="20"/></svg>
                Image
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Video
              </>
            )}
          </button>
        )}
      </div>

      {/* Stats below image */}
      {stats && stats.length > 0 && (
        <div className="flex flex-wrap gap-6 mt-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-semibold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
