import { motion } from "motion/react";
import { useRouter } from "next/router";
import clsx from "clsx";
import { ColorVariant, FillMode } from "../color/Color";

const SHOP_URL = "https://shop.kscale.dev/collections/all";

const getVariantClass = (variant: ColorVariant, mode: FillMode): string => {
  if (mode === FillMode.FILL) {
    switch (variant) {
      case ColorVariant.METHYL:
        return "bg-methyl text-filament";
      case ColorVariant.PLASMA:
        return "bg-plasma text-filament";
      case ColorVariant.OXIDE:
        return "bg-oxide text-filament";
      case ColorVariant.RUST:
        return "bg-rust text-filament";
      case ColorVariant.MOLTEN:
        return "bg-molten text-filament";
      case ColorVariant.SOL:
        return "bg-sol text-filament";
      default:
        return "bg-carbon text-filament";
    }
  } else if (mode === FillMode.INVERT) {
    switch (variant) {
      case ColorVariant.METHYL:
        return "bg-filament text-methyl";
      case ColorVariant.PLASMA:
        return "bg-filament text-plasma";
      case ColorVariant.OXIDE:
        return "bg-filament text-oxide";
      case ColorVariant.RUST:
        return "bg-filament text-rust";
      case ColorVariant.MOLTEN:
        return "bg-filament text-molten";
      case ColorVariant.SOL:
        return "bg-filament text-sol";
      default:
        return "bg-filament text-carbon";
    }
  } else {
    switch (variant) {
      case ColorVariant.METHYL:
        return "border border-methyl text-methyl";
      case ColorVariant.PLASMA:
        return "border border-plasma text-plasma";
      case ColorVariant.OXIDE:
        return "border border-oxide text-oxide";
      case ColorVariant.RUST:
        return "border border-rust text-rust";
      case ColorVariant.MOLTEN:
        return "border border-molten text-molten";
      case ColorVariant.SOL:
        return "border border-sol text-sol";
      default:
        return "border border-foregrounds text-foreground";
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
    opacity: 0.8,
  },
};

export enum Size {
  THIN,
  NORMAL,
}

export const NavCTAButton = ({
  children,
  href = SHOP_URL,
  className,
  variant = ColorVariant.RUST,
  mode = FillMode.FILL,
  size = Size.THIN,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: ColorVariant;
  mode?: FillMode;
  size?: Size;
}) => {
  const router = useRouter();

  return (
    <motion.button
      className={clsx(
        "font-planar font-normal text-body px-2 select-none flex flex-row gap-1 justify-center items-center",
        size === Size.THIN ? "py-1" : "py-2",
        "cursor-pointer",
        "rounded",
        getVariantClass(variant, mode),
        className
      )}
      variants={hoverVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      transition={{
        duration: 0.2,
        ease: "circOut",
      }}
      onClick={() => router.push(href ? href : SHOP_URL)}
    >
      {children}
    </motion.button>
  );
};

export const CTASubtitleButton = ({
  className,
  children,
  subtitle,
  href = SHOP_URL,
  variant = ColorVariant.RUST,
  mode = FillMode.FILL,
}: {
  className?: string;
  children: React.ReactNode;
  subtitle: string;
  href?: string;
  variant?: ColorVariant;
  mode?: FillMode;
}) => {
  const router = useRouter();

  return (
    <motion.button
      className={clsx(
        "font-planar font-normal text-body text-center items-center w-fit px-6 py-4 select-none",
        className,
        "cursor-pointer flex flex-col",
        "rounded",
        getVariantClass(variant, mode)
      )}
      variants={hoverVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      transition={{
        duration: 0.2,
        ease: "circOut",
      }}
      onClick={() => router.push(href ? href : SHOP_URL)}
    >
      {children}
      <span className="block text-body opacity-60">{subtitle}</span>
    </motion.button>
  );
};
