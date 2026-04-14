import { Mail, MapPin, Briefcase } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const ProfileSidebar = () => {
  return (
    <aside className="w-[260px] shrink-0 border-r border-border bg-background sticky top-0 h-screen overflow-y-auto hidden lg:flex flex-col items-center py-10 px-6">
      {/* Avatar */}
      <div className="relative mb-4">
        <img
          src={avatarImg}
          alt="Profile avatar"
          className="w-28 h-28 rounded-full object-cover border-4 border-background shadow-md"
          width={112}
          height={112}
        />
      </div>

      {/* Available badge */}
      <div className="flex items-center gap-1.5 mb-3">
        <Briefcase className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs font-medium text-primary">Available for Work</span>
      </div>

      {/* Name */}
      <h2 className="text-lg font-semibold text-foreground text-center">Your Name</h2>
      <p className="text-sm text-muted-foreground mb-1">@yourhandle</p>

      {/* Location */}
      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
        <MapPin className="w-3.5 h-3.5" />
        <span>Your City, Country</span>
      </div>

      {/* Title */}
      <p className="text-sm font-medium text-foreground text-center mb-1">Full Stack Developer</p>
      <p className="text-xs text-muted-foreground mb-6">5+ years experience</p>

      {/* Contact Button */}
      <a
        href="mailto:hello@example.com"
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity mb-8"
      >
        <Mail className="w-4 h-4" />
        Message
      </a>

      {/* Navigation */}
      <nav className="w-full space-y-1">
        <a href="#portfolio" className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-foreground bg-secondary">
          <Briefcase className="w-4 h-4" />
          Portfolio
        </a>
      </nav>
    </aside>
  );
};

export default ProfileSidebar;
