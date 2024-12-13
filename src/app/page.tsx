"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundAurora from "@/components/background-aurora";
import Title from "@/components/title";
import Image from "next/image";

const InvitePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const invite = searchParams.get("to");
    if (typeof invite === "string") {
      setName(invite);
    } else {
      router.push("/alternative");
    }
  }, [router, searchParams]);

  const handleButtonClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      router.push(`/contents?to=${name}`);
    }, 2000); // Durasi animasi
  };

  return (
    <BackgroundAurora>
      <div className="h-svh w-screen relative overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-neutral-200 relative mx-auto py-8 px-4 w-full max-w-2xl">
          <div className="flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center text-xl text-neutral-300 font-serif">
              Kepada,
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-3xl font-bold mb-6">
              <Title color="white">{name || "..."}</Title>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-base text-center text-neutral-400">
              Anda Diundang Ke Acara
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-2xl text-center text-neutral-300 font-serif mb-6">
              Ngunduh Mantu
            </motion.p>
            <div className="relative rounded-2xl overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="relative mb-8">
                <Image
                  src="/assets/icon.jpeg"
                  alt="Nanda & Shofi"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl shadow-inherit z-10"
                  style={{
                    filter: "brightness(0.9) contrast(1.1)",
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute inset-x-0 bottom-0 z-10 rounded-br-2xl rounded-bl-2xl flex items-center justify-center p-4 bg-black bg-opacity-60 rounded-b-2xl">
                  <div className="text-3xl font-semibold">
                    <Title color="white">Nanda & Shofi</Title>
                  </div>
                </motion.div>
              </motion.div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              onClick={handleButtonClick}
              className="w-fit h-12 px-8 rounded-full border border-neutral-300 flex items-center justify-center bg-transparent text-neutral-300 hover:bg-neutral-300 hover:text-neutral-900 transition-all duration-300 shadow-lg relative overflow-hidden">
              <AnimatePresence>
                {!isAnimating && (
                  <motion.span
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs uppercase font-bold tracking-wider">
                    Buka Undangan
                  </motion.span>
                )}
              </AnimatePresence>
              {isAnimating && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      x: [0, 300],
                      y: [0, -100, 0],
                      rotate: [0, -45, -90, -135, -180],
                      scale: [1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      times: [0, 1],
                    }}>
                    <Image
                      src="/assets/paper-plane.png"
                      alt="Paper Plane"
                      width={30}
                      height={30}
                    />
                  </motion.div>
                </motion.div>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </BackgroundAurora>
  );
};

export default InvitePage;
