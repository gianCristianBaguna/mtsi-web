import Image from "next/image";
import HeroSection from "@/app/components/homePageSections/heroSection";
import Difference from "@/app/components/homePageSections/welcomeSection";
import Footer from "@/app/components/navigation/footer";
import AboutUsSection from "@/app/components/homePageSections/aboutSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Difference />
      <AboutUsSection />
      <Footer />
    </>
  );
}
