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
    <div className="group rounded-xl border border-border overflow-hidden bg-card hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 sm:h-64 object-cover group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
          width={1200}
          height={800}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-badge-bg text-badge-text">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">{year}</span>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-hero-highlight transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {description}
        </p>

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
