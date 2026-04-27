import { ExternalLink } from "lucide-react";
import avatarImg from "@/assets/avatar.jpg";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 h-14 bg-background/95 backdrop-blur-sm border-b border-border flex items-center shrink-0">
      <div className="w-full max-w-[calc(220px+64rem)] mx-auto px-6 sm:px-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={avatarImg}
            alt="Profile"
            className="w-7 h-7 rounded-full object-cover"
            width={28}
            height={28}
          />
          <div className="leading-tight">
            <p className="text-sm font-semibold text-foreground">Prasenjit Dutta</p>
            <p className="text-xs text-muted-foreground">Full Stack Developer</p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <span className="text-muted-foreground hidden md:block">prasenjitdutta198@gmail.com</span>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-hero-highlight transition-colors"
          >
            Resume
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
