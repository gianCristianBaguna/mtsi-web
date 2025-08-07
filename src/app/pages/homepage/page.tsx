import Image from "next/image";
import HeroSection from "@/app/components/homePageSections/heroSection";
import Difference from "@/app/components/homePageSections/welcomeSection";
import AboutUsSection from "@/app/components/homePageSections/aboutSection";
import HeroPeaceSectionMobile from "@/app/components/homePageSections/homepageData/heroMobileView";

export default function HomePage() {
  return (
    <>
      <HeroPeaceSectionMobile />
      <HeroSection />
      <Difference />
      <AboutUsSection />
    </>
  );
}
