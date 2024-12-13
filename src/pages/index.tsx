import Footer from "@/components/footer/footer";
import { Grid } from "@/components/grid/Grid";
import NavBar from "@/components/navbar/navbar";
import HeaderSection from "@/landing/HeaderSection";
import ResearchSection from "@/landing/ResearchSection";
import SpecSection from "@/landing/SpecSection";
import RobotSection from "@/landing/RobotSection";
import GallerySection from "@/landing/GallerySection";
import PricingSection from "@/landing/PricingSection";
import DataSection from "@/landing/DataSection";
import CommunitySection from "@/landing/CommunitySection";
import { ExpressiveArrow } from "@/components/iconography/Iconography";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Grid />
      <main className="gap-y-4">
        <HeaderSection />
        <ResearchSection />
        <SpecSection />
        <RobotSection />
        <GallerySection />
        <PricingSection />
        <DataSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
