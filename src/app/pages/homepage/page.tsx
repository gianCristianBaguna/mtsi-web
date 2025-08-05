import Image from "next/image";
import HeroSection from "@/app/components/homePageSections/heroSection";
import WelcomeSection from "@/app/components/homePageSections/welcomeSection";
import SolutionsSection from "@/app/components/homePageSections/solutionsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <SolutionsSection />
    </>
  );
}
