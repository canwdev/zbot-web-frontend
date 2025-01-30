import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import clsx from "clsx";
import { useWindowSize } from "@/components/util/functions";

const CAROUSEL_ITEMS = [
  {
    title: "Motion-to-motion",
    desc: "Program your robot to replicate complex movements.",
    src: "",
    poster: "",
  },
  {
    title: "Play with pets",
    desc: "Let your robot keep your pets entertained when you’re not home.",
    src: "",
    poster: "",
  },
  {
    title: "Boxing for kids",
    desc: "Fun, safe activities for kids to engage with their robot.",
    src: "",
    poster: "",
  },
  {
    title: "Gym buddy",
    desc: "Train alongside your robot for motivation and companionship.",
    src: "",
    poster: "",
  },
];

export const InteractiveCarouselSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const selectedItem = CAROUSEL_ITEMS[selectedIndex];

  const width = useWindowSize().width;

  return (
    <section className="py-16 col-span-full -mx-[5vw] md:px-[5vw]">
      <h2 className="text-center">Interactive Carousel</h2>
      <div className="mt-6 flex flex-col md:flex-row gap-4 relative">
        <div className="w-full md:w-[26vw] flex flex-row md:flex-col gap-2 overflow-auto px-[5vw] md:px-[0]">
          {CAROUSEL_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              layout
              className={clsx(
                "bg-white rounded-2xl p-4 md:p-5 cursor-pointer min-w-32",
                index === selectedIndex ? "opacity-100" : "opacity-50"
              )}
              onClick={() => handleItemClick(index)}
              transition={{ duration: 0.3 }}
            >
              <div className="text-lg font-bold leading-tight">{item.title}</div>

              <AnimatePresence>
                {index === selectedIndex && width > 768 && (
                  <motion.p
                    className="text-xs mt-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <div className="flex-1 px-[5vw] md:px-[0]">
          <div className="sticky top-16   aspect-[1.77] overflow-hidden">
            {selectedItem && (
              <video
                muted
                autoPlay
                className="w-full h-full object-cover rounded-2xl"
                src={selectedItem.src}
                poster={selectedItem.poster}
                controls
              ></video>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
