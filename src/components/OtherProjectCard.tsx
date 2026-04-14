interface OtherProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const OtherProjectCard = ({ title, description, image }: OtherProjectCardProps) => {
  return (
    <div className="animate-fade-in">
      <h4 className="text-base font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      <div className="rounded-xl overflow-hidden border border-border">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
          width={1200}
          height={800}
        />
      </div>
    </div>
  );
};

export default OtherProjectCard;
