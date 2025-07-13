"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="z-10 text-neutral-200 relative mx-auto min-h-dvh py-10 px-2 w-full left-0 top-0 overflow-hidden"
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
              className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent text-neutral-200 mb-4 transition-all duration-300"
            >
              13 Oktober 2025
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
      <div className="absolute z-0 top-14 left-10 w-[14rem] h-[14rem] bg-indigo-600 blur-[10rem] md:blur-[15rem] rounded-full bg-opacity-50"></div>
      <div className="hidden md:block absolute z-0 top-14 right-14 w-[24rem] h-[24rem] bg-indigo-600 blur-[18rem] rounded-full bg-opacity-50"></div>
    </motion.div>
  );
}
