import Marquee from "react-fast-marquee";

const Sponsors = () => {
  return (
    <section className="col-span-full flex flex-col gap-10 items-center w1440:py-24 w1024:py-20 w640:py-16 py-12 ">
      <h4 className={"font-normal font-planar text-foreground "}>Backed by the industry's best</h4>
      <Marquee>
        <h2>bob was here</h2>
        <h2>bob was here</h2>
        <h2>bob was here</h2>
        <h2>bob was here</h2>
        <h2>bob was here</h2>
        <h2>bob was here</h2>
        <h2>bob was here</h2>
      </Marquee>
    </section>
  );
};

export default Sponsors;
