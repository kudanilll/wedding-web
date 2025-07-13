"use client";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

export function HeroParallax({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const firstRow = images.slice(0, 6);
  const secondRow = images.slice(5, 11);
  const thirdRow = images.slice(9, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 50, damping: 30, bounce: 0 };
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.3, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [25, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-800, 300]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[250vh] overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header name={name} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 mb-6">
          {firstRow.map((image) => (
            <Card image={image} translate={translateX} key={image} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-6 space-x-6">
          {secondRow.map((image) => (
            <Card image={image} translate={translateXReverse} key={image} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6">
          {thirdRow.map((image) => (
            <Card image={image} translate={translateX} key={image} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Header({ name }: { name: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="z-10 text-neutral-200 relative mx-auto py-10 px-2 w-full left-0 top-0"
    >
      <div className="relative flex flex-col items-center justify-center">
        <div className="p-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="pt-12 text-xl text-center"
          >
            Selamat Datang, {name}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-center"
          >
            Dalam Acara
          </motion.h1>
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center text-4xl font-semibold mt-4 mb-6 px-2"
          >
            Ngunduh Mantu
          </motion.h1>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="relative flex flex-col justify-center items-center"
          >
            <Image
              src="/assets/hero.png"
              alt="Nanda & Shofi"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <div className="flex flex-col justify-center items-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent text-neutral-200 mb-4 transition-all duration-300"
              style={{
                backgroundColor: isHovered
                  ? "rgba(255, 255, 255, 0.1)"
                  : "transparent",
              }}
            >
              13 Oktober 2024
            </motion.button>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="relative z-10 text-xl mb-4 bg-clip-text text-center text-neutral-300"
            >
              Pukul 09.00 WIB s/d Selesai
            </motion.h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export const Card = ({
  image,
  translate,
}: {
  image: string;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={image}
      className="group/product h-72 w-[24rem] relative flex-shrink-0"
    >
      <div className="block">
        <Image
          src={image}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0 rounded-xl"
          alt={image}
        />
      </div>
    </motion.div>
  );
};
