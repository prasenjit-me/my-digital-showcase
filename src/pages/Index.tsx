import ProfileSidebar from "@/components/ProfileSidebar";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import OtherProjectCard from "@/components/OtherProjectCard";
import AboutSection from "@/components/AboutSection";

import projectWebapp from "@/assets/project-webapp.jpg";
import projectMobileApp from "@/assets/project-mobile-app.jpg";
import projectAiAgent from "@/assets/project-ai-agent.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAiDocs from "@/assets/project-ai-docs.jpg";

const featuredProjects = [
  {
    title: "Analytics Dashboard Platform",
    description:
      "Built a real-time analytics dashboard for a SaaS company, featuring interactive charts, data tables, and role-based access control. Reduced client reporting time by 60%.",
    image: projectWebapp,
    category: "Website",
    year: "2024",
    stats: [
      { label: "Load time", value: "< 1.2s" },
      { label: "Active users", value: "12K+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    title: "Fitness Tracking Mobile App",
    description:
      "Designed and developed a cross-platform mobile app for tracking workouts, nutrition, and health metrics. Integrated with wearable devices for real-time syncing.",
    image: projectMobileApp,
    category: "Mobile App",
    year: "2024",
    stats: [
      { label: "Downloads", value: "50K+" },
      { label: "Rating", value: "4.8★" },
      { label: "Retention", value: "+42%" },
    ],
  },
  {
    title: "Intelligent Customer Support Agent",
    description:
      "Created an AI-powered conversational agent that handles customer inquiries, integrates with CRM tools, and escalates complex issues to human agents seamlessly.",
    image: projectAiAgent,
    category: "AI Agent",
    year: "2023",
    stats: [
      { label: "Tickets resolved", value: "78%" },
      { label: "Response time", value: "< 3s" },
      { label: "CSAT score", value: "94%" },
    ],
  },
];

const otherProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with product management, payments integration, and inventory tracking built for a retail startup.",
    image: projectEcommerce,
  },
  {
    title: "AI Document Analyzer",
    description:
      "An AI-powered tool that extracts, summarizes, and organizes information from PDFs and documents automatically.",
    image: projectAiDocs,
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <ProfileSidebar />

      <main className="flex-1 max-w-4xl mx-auto px-6 sm:px-10 py-10">
        <HeroSection />

        {/* Featured Projects */}
        <section id="portfolio">
          <div className="space-y-14">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="mt-16">
          <h2 className="text-xl font-semibold text-foreground mb-8">Other projects</h2>
          <div className="grid gap-10 sm:grid-cols-2">
            {otherProjects.map((project) => (
              <OtherProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
