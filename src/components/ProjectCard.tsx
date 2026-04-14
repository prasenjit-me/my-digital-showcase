interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  stats?: { label: string; value: string }[];
}

const ProjectCard = ({ title, description, image, category, year, stats }: ProjectCardProps) => {
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

      {/* Large image showcase */}
      <div className="rounded-xl overflow-hidden border border-border bg-muted/30">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[16/10] object-cover group-hover:scale-[1.015] transition-transform duration-500"
          loading="lazy"
          width={1200}
          height={750}
        />
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
