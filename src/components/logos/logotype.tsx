import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Logotype = ({
  atTop = true,
  isMenuOpen = false,
  href = "/"
}: {
  atTop: boolean;
  isMenuOpen: boolean;
  href?: string;
}) => {
  return (
    <Link href={href} aria-label="k-scale labs" className="col-start-1 col-span-2 lg:col-start-1 lg:col-span-2 pointer-events-auto">
      <motion.svg
        width="383"
        height="80"
        className="w-fit max-w-full h-auto max-h-8"
        viewBox="0 0 383 80"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ fill: "var(--filament)" }}
        animate={{
          fill: isMenuOpen
            ? "var(--foreground)"
            : atTop
              ? "var(--filament)"
              : "var(--foreground)",
        }}
      >
        <motion.path
          d="M21.1985 46.5058C5.66364 62.3162 -2.29374 74.2913 1.33209 78.3182C5.00037 82.3922 17.9308 75.6334 35.3754 61.7418C33.7006 61.1057 32.1175 60.2837 30.6511 59.301C19.8262 68.278 14.6913 70.9401 12.4399 68.4396C10.1974 65.949 13.3178 61.116 23.265 51.3472C22.4043 49.8305 21.7075 48.2087 21.1985 46.5058Z"
          className="fill-inherit"
        />
        <motion.path
          d="M52.7307 18.056C54.3744 18.7393 55.9239 19.6037 57.3542 20.6245C68.4429 11.4332 73.789 8.63708 76.0582 11.1574C78.336 13.6871 74.9322 18.7059 64.523 28.8291C65.3479 30.395 66.0011 32.0654 66.4577 33.8152C82.5066 17.6143 90.7954 5.30963 87.1253 1.23351C83.4337 -2.86644 70.3493 3.99097 52.7307 18.056Z"
          className="fill-inherit"
        />
        <motion.path
          d="M56.1169 78.539H46.7729V33.739H56.1169V56.587H58.1649L67.7649 45.579H78.6449L71.3489 54.283C68.5969 57.803 66.8689 59.211 64.8209 60.043V62.219C67.1889 63.179 69.1089 64.907 71.6689 68.427L79.2209 78.539H68.2769L58.1649 65.547H56.1169V78.539Z"
          className="fill-inherit"
        />
        <motion.path
          d="M97.3519 64.203H78.6639V56.459H97.3519V64.203Z"
          className="fill-inherit"
        />
        <motion.path
          d="M116.182 79.435C107.734 79.435 100.694 75.595 100.822 68.171H109.782C110.038 71.563 111.19 73.099 116.566 73.099C121.558 73.099 122.518 71.755 122.518 69.323C122.518 67.595 121.622 66.699 118.422 66.123L111.062 64.779C105.174 63.691 101.462 60.683 101.462 55.691C101.462 49.291 107.222 44.683 116.31 44.683C124.118 44.683 131.094 48.523 130.966 55.627H122.006C121.75 52.427 120.598 50.955 115.926 50.955C111.254 50.955 110.422 52.299 110.358 54.411C110.358 56.139 111.062 57.163 114.198 57.739L121.494 59.019C127.574 60.107 131.478 63.115 131.478 68.235C131.478 74.635 125.654 79.435 116.182 79.435Z"
          className="fill-inherit"
        />
        <motion.path
          d="M150.557 79.435C140.381 79.435 133.661 73.739 133.661 62.027C133.661 50.699 140.509 44.683 150.621 44.683C159.133 44.683 165.917 48.651 166.301 57.419H157.085C156.765 53.003 155.293 51.851 150.493 51.851C144.861 51.851 143.389 52.939 143.389 62.027C143.389 71.115 144.861 72.267 150.493 72.267C155.293 72.267 156.765 71.115 157.085 66.635H166.301C165.917 75.403 159.133 79.435 150.557 79.435Z"
          className="fill-inherit"
        />
        <motion.path
          d="M179.377 79.243C172.849 79.243 168.241 75.403 168.241 68.747C168.241 63.307 171.569 59.531 179.377 58.955L190.193 58.187V55.627C190.193 52.043 188.593 51.275 184.433 51.275C179.697 51.275 178.353 52.491 178.225 55.947H169.073C169.009 49.099 175.281 44.683 184.817 44.683C191.729 44.683 199.217 46.987 199.217 56.587V78.539H190.513L190.385 75.659H188.337C186.865 77.963 183.153 79.243 179.377 79.243ZM183.601 72.715C188.977 72.715 190.193 71.115 190.193 66.699V63.883L181.873 64.587C178.353 64.907 177.585 65.739 177.585 68.683C177.585 71.947 179.121 72.715 183.601 72.715Z"
          className="fill-inherit"
        />
        <motion.path d="M213.954 78.539H204.61V33.739H213.954V78.539Z" className="fill-inherit" />
        <motion.path
          d="M250.605 64.907H227.053C226.861 70.539 228.909 72.523 234.541 72.523C238.765 72.523 240.941 71.499 241.325 67.915H250.349C249.645 75.339 243.053 79.435 234.605 79.435C224.621 79.435 217.901 73.547 217.901 62.219C217.901 51.019 225.133 44.683 234.797 44.683C245.101 44.683 250.861 51.595 250.861 61.067C250.861 62.347 250.797 63.563 250.605 64.907ZM234.541 51.595C228.909 51.595 227.053 53.451 227.117 58.763H241.645C241.965 53.515 239.981 51.595 234.541 51.595Z"
          className="fill-inherit"
        />
        <motion.path
          d="M275.632 78.539H266.288V33.739H275.632V78.539Z"
          className="fill-inherit"
        />
        <motion.path
          d="M290.715 79.243C284.187 79.243 279.579 75.403 279.579 68.747C279.579 63.307 282.907 59.531 290.715 58.955L301.531 58.187V55.627C301.531 52.043 299.931 51.275 295.771 51.275C291.035 51.275 289.691 52.491 289.563 55.947H280.411C280.347 49.099 286.619 44.683 296.155 44.683C303.067 44.683 310.555 46.987 310.555 56.587V78.539H301.851L301.723 75.659H299.675C298.203 77.963 294.491 79.243 290.715 79.243ZM294.939 72.715C300.315 72.715 301.531 71.115 301.531 66.699V63.883L293.211 64.587C289.691 64.907 288.923 65.739 288.923 68.683C288.923 71.947 290.459 72.715 294.939 72.715Z"
          className="fill-inherit"
        />
        <motion.path
          d="M335.98 79.435C331.5 79.435 328.364 77.451 326.828 75.275H324.78L324.588 78.539H315.948V33.739H325.164V48.587H327.212C328.876 46.475 332.332 44.683 336.492 44.683C344.172 44.683 349.74 50.827 349.74 61.899C349.74 73.611 343.532 79.435 335.98 79.435ZM332.588 72.075C339.308 72.075 340.012 70.603 340.012 62.027C340.012 53.451 339.308 51.979 332.588 51.979C325.804 51.979 325.1 53.451 325.1 62.027C325.1 70.603 325.804 72.075 332.588 72.075Z"
          className="fill-inherit"
        />
        <motion.path
          d="M367.027 79.435C358.579 79.435 351.539 75.595 351.667 68.171H360.627C360.883 71.563 362.035 73.099 367.411 73.099C372.403 73.099 373.363 71.755 373.363 69.323C373.363 67.595 372.467 66.699 369.267 66.123L361.907 64.779C356.019 63.691 352.307 60.683 352.307 55.691C352.307 49.291 358.067 44.683 367.155 44.683C374.963 44.683 381.939 48.523 381.811 55.627H372.851C372.595 52.427 371.443 50.955 366.771 50.955C362.099 50.955 361.267 52.299 361.203 54.411C361.203 56.139 361.907 57.163 365.043 57.739L372.339 59.019C378.419 60.107 382.323 63.115 382.323 68.235C382.323 74.635 376.499 79.435 367.027 79.435Z"
          className="fill-inherit"
        />
      </motion.svg>
    </Link>
  );
};

export default Logotype;
