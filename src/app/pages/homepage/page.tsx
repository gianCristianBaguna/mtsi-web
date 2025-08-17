import Image from "next/image";
import HeroSection from "@/app/components/homePageSections/heroSection";
import Difference from "@/app/components/homePageSections/welcomeSection";
import AboutUsSection from "@/app/components/homePageSections/aboutSection";
import HeroPeaceSectionMobile from "@/app/components/homePageSections/homepageData/heroMobileView";
import ServicesSection from "@/app/components/homePageSections/homeServices";

export default function HomePage() {
  return (
    <>
      <HeroPeaceSectionMobile />
      <HeroSection />
      <ServicesSection />
      <Difference />
      <AboutUsSection />
    </>
  );
}
