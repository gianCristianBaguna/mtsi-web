import Image from "next/image";
import HeroSection from "@/app/components/homePageSections/heroSection";
import WelcomeSection from "@/app/components/homePageSections/welcomeSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
    </>
  );
}
