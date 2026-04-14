interface OtherProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const OtherProjectCard = ({ title, description, image }: OtherProjectCardProps) => {
  return (
    <div className="animate-fade-in group">
      <h4 className="text-base font-semibold text-foreground mb-1 group-hover:text-hero-highlight transition-colors">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
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
    </div>
  );
};

export default OtherProjectCard;
