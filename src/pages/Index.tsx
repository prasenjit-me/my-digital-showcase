import ProfileSidebar from "@/components/ProfileSidebar";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";

import projectWebapp from "@/assets/project-webapp.jpg";
import projectMobileApp from "@/assets/project-mobile-app.jpg";
import projectAiAgent from "@/assets/project-ai-agent.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAiDocs from "@/assets/project-ai-docs.jpg";

import projectWebappVideo from "@/assets/project-webapp-video.mp4.asset.json";
import projectMobileAppVideo from "@/assets/project-mobile-app-video.mp4.asset.json";
import projectAiAgentVideo from "@/assets/project-ai-agent-video.mp4.asset.json";
import projectEcommerceVideo from "@/assets/project-ecommerce-video.mp4.asset.json";
import projectAiDocsVideo from "@/assets/project-ai-docs-video.mp4.asset.json";

const projects = [
  {
    title: "Analytics Dashboard Platform",
    description:
      "Built a real-time analytics dashboard for a SaaS company, featuring interactive charts, data tables, and role-based access control. Reduced client reporting time by 60%.",
    image: projectWebapp,
    video: projectWebappVideo.url,
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
    video: projectMobileAppVideo.url,
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
    video: projectAiAgentVideo.url,
    category: "AI Agent",
    year: "2023",
    stats: [
      { label: "Tickets resolved", value: "78%" },
      { label: "Response time", value: "< 3s" },
      { label: "CSAT score", value: "94%" },
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with product management, payments integration, and inventory tracking built for a retail startup.",
    image: projectEcommerce,
    video: projectEcommerceVideo.url,
    category: "Website",
    year: "2023",
    stats: [
      { label: "Conversion rate", value: "+35%" },
      { label: "Products", value: "2K+" },
      { label: "Monthly orders", value: "8K+" },
    ],
  },
  {
    title: "AI Document Analyzer",
    description:
      "An AI-powered tool that extracts, summarizes, and organizes information from PDFs and documents automatically.",
    image: projectAiDocs,
    video: projectAiDocsVideo.url,
    category: "AI Agent",
    year: "2023",
    stats: [
      { label: "Accuracy", value: "96%" },
      { label: "Docs processed", value: "1M+" },
      { label: "Time saved", value: "80%" },
    ],
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <ProfileSidebar />

      <main className="flex-1 max-w-4xl mx-auto px-6 sm:px-10 py-10">
        <HeroSection />

        {/* Projects */}
        <section id="portfolio">
          <div className="space-y-14">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <AboutSection />
      </main>
    </div>
  );
};

export default Index;
