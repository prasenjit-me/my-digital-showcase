import Navbar from "@/components/Navbar";
import ProfileSidebar from "@/components/ProfileSidebar";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import OtherWork from "@/components/OtherWork";
import MobileProfile from "@/components/MobileProfile";

import projectAiAgent from "@/assets/project-ai-agent.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAiDocs from "@/assets/project-ai-docs.jpg";

const b = import.meta.env.BASE_URL;

const projects = [
  {
    title: "DAX Hair Care — AI Support Agent",
    description:
      "Developed and deployed conversational AI agents for two US brands — DAX Hair Care (a grooming products brand) and AMBEST (America's Best Travel Centers, 500+ truck stop network). Each agent handles product and service inquiries, resolves FAQs, and surfaces relevant information instantly. Reduced reliance on human support staff while keeping the customer experience fast and on-brand.",
    image: projectAiAgent,
    video: `${b}dax_ai_agent.mp4`,
    mobileScreens: [`${b}ambest-demo.mp4`, `${b}ambest-screen2.png`],
    tabletScreens: [`${b}ambest-tablet.png`],
    category: "AI Agent",
    year: "2023",
    link: "https://www.daxhaircare.com/",
  },
  {
    title: "AMBEST — Member Operator Admin Platform",
    description:
      "Built a full-stack admin platform for AMBEST (America's Best Travel Centers), a member-owned network of 500+ independent truck stops across the US. The platform lets member operators manage their location profiles, amenities, promotions, and service listings. Includes a mobile admin panel for on-the-go management and a tablet-optimised dashboard — giving independent truck stop owners the tools to stay current across the AMBEST network.",
    image: projectEcommerce,
    laptopVideo: `${b}ambest-laptop.mp4`,
    mobileScreens: [`${b}ambest-mobile-admin.mp4`],
    tabletScreens: [`${b}ambest-tablet2.png`],
    category: "Website",
    year: "2023",
    link: "https://am-best.com/",
  },
  {
    title: "BeerGo — Alcohol Delivery Platform",
    description:
      "Designed and built a full-stack alcohol delivery platform with a marketing website and a cross-platform mobile app. Features include cart management, multiple payment methods, real-time delivery tracking, and age verification.",
    image: `${b}beergo-laptop.png`,
    mobileScreens: [`${b}beergo-mobile1.jpeg`, `${b}beergo-mobile2.jpeg`, `${b}beergo-mobile3.jpeg`],
    category: "Website + Mobile App",
    year: "2024",
    link: "https://beergo.in/",
  },
  {
    title: "EdGuru India — Online Tutoring Platform",
    description:
      "Built the full EdGuru India platform — an online private tutoring marketplace that connects students with verified, experienced tutors for live 1-on-1 classes. Supports K-12 and graduation levels across all major boards (CBSE, ICSE, IB, IGCSE). Includes separate student and teacher portals, tutor profile management, slot scheduling, a built-in LMS for teachers, and demo class booking — eliminating admin overhead for tutors while giving students personalised learning.",
    image: projectAiDocs,
    laptopVideo: `${b}edguruindia.mp4#t=9`,
    mobileScreens: [`${b}edguru-mobile.png`],
    tabletScreens: [`${b}edguru-tablet.png`],
    category: "Education Platform",
    year: "2023",
    link: "https://edguruindia.com/",
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

          <AboutSection />
        </main>
      </div>
    </div>
  );
};

export default Index;
