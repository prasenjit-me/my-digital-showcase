import Navbar from "@/components/Navbar";
import ProfileSidebar from "@/components/ProfileSidebar";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import OtherWork from "@/components/OtherWork";
import MobileProfile from "@/components/MobileProfile";
import ProcessSection from "@/components/ProcessSection";

import projectAiAgent from "@/assets/project-ai-agent.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAiDocs from "@/assets/project-ai-docs.jpg";

const b = import.meta.env.BASE_URL;

const projects = [
  {
    title: "DAX Hair Care — AI Support Agent",
    description:
      "Deployed conversational AI agents for two US brands — DAX Hair Care (grooming products) and AMBEST (500-location travel center network). Each agent handles product inquiries, resolves FAQs, and surfaces information instantly — cutting response times and reducing dependence on support staff. Built end-to-end: agent design, training, and production integration on both live brand sites.",
    image: projectAiAgent,
    laptopVideo: "https://github.com/prasenjit-me/portfolio/releases/download/v1.0/dax_ai_agent.mp4",
    mobileScreens: [`${b}ambest-demo.mp4`, `${b}ambest-screen2.png`],
    tabletScreens: [`${b}ambest-tablet.png`],
    category: "AI Agent + Website",

    link: "https://www.daxhaircare.com/",
    tech: ["React", "Node.js", "OpenAI", "LangChain", "PostgreSQL"],
  },
  {
    title: "AMBEST — Member Operator Admin Platform",
    description:
      "Full-stack admin platform for AMBEST's 500+ independent truck stop operators across the US. Operators manage location profiles, amenities, promotions, and service listings — from a responsive web dashboard, a mobile admin panel, or a tablet-optimised view. Built solo, end-to-end: API layer, web and mobile admin surfaces, and deployment.",
    image: projectEcommerce,
    laptopVideo: `${b}ambest-laptop.mp4`,
    mobileScreens: [`${b}ambest-mobile-admin.mp4`],
    tabletScreens: [`${b}ambest-tablet2.png`],
    category: "Website",

    link: "https://am-best.com/",
    tech: ["React", "Laravel", "MySQL", "REST API"],
  },
  {
    title: "BeerGo — Alcohol Delivery Platform",
    description:
      "Full-stack alcohol delivery platform — marketing website plus a cross-platform mobile app (iOS & Android). Built with cart management, multiple payment methods, real-time delivery tracking, and age verification. Covers the complete customer journey from product discovery to doorstep delivery.",
    image: `${b}beergo-laptop.png`,
    mobileScreens: [`${b}beergo-mobile1.jpeg`, `${b}beergo-mobile2.jpeg`, `${b}beergo-mobile3.jpeg`],
    category: "Website + Mobile App",

    link: "https://beergo.in/",
    tech: ["React Native", "React", "Laravel", "Stripe", "MySQL"],
  },
  {
    title: "EdGuru India — Online Tutoring Platform",
    description:
      "Built the complete EdGuru India platform from scratch — an online tutoring marketplace connecting students with verified tutors for live 1-on-1 classes. Supports K–12 across CBSE, ICSE, IB, and IGCSE boards. Includes separate student and teacher portals, tutor profile management, slot scheduling, a built-in LMS, and demo class booking. Delivered end-to-end: product design, full-stack development, and deployment.",
    image: projectAiDocs,
    laptopVideo: "https://github.com/prasenjit-me/portfolio/releases/download/v1.0/edguruindia.mp4#t=9",
    mobileScreens: [`${b}edguru-mobile.png`],
    tabletScreens: [`${b}edguru-tablet.png`],
    category: "Education Platform",

    link: "https://edguruindia.com/",
    tech: ["React", "Laravel", "React Native", "MySQL", "WebRTC"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <ProfileSidebar />

        <main className="flex-1 min-w-0 px-6 sm:px-10 py-10">
          <MobileProfile />
          <HeroSection />

          <section id="portfolio">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </section>

          <OtherWork />

          <ProcessSection />

          <AboutSection />
        </main>
      </div>
    </div>
  );
};

export default Index;
