import CTAButton from "@/components/buttons/ctaButton";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import RobotRenderer from "@/components/robot/robotRenderer";

const HeaderSection = () => {
  return (
    <section className="pt-16">
      <div className="flex flex-col items-center text-center pt-10 px-4 max-w-full">
        <h1 className="text-5xl mt-16">
          The world&apos;s first humanoid robot
          <br />
          for those who prefer
          <br />
          transparency over trust.
        </h1>
        <h2 className="text-3xl mt-8">
          Open-source to protect your privacy, ensure fair pricing, and ensure your contributions
          help move humanity up the Kardashev scale.
        </h2>
      </div>
    </section>
  );
};

const RobotSection = () => {
  return (
    <div className="flex flex-col items-center text-center pt-10 max-w-full aspect-square my-8">
      <RobotRenderer />
    </div>
  );
};

const BuyNowSection = () => {
  return (
    <div className="flex flex-col items-center text-center pt-10 max-w-full">
      <CTAButton />
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow p-8 max-w-7xl mx-auto px-4 w-full">
        <HeaderSection />
        <RobotSection />
        <BuyNowSection />
      </main>
      <Footer />
    </div>
  );
}
