import { BackgroundBeams } from "@/components/background-beams";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { motion } from "framer-motion";
import Title from "@/components/title";
import Image from "next/image";

export default function Bride() {
  const words = `Kebersamaan menggapai takwa. Adalah jalinan cinta yang paling hakiki. Rajutlah puing-puing bahagia dengan penuh kasih dan cinta. Agar lahirkan keluarga sejati nan sejahtera.`;

  return (
    <div className="w-full relative flex flex-col items-center justify-center antialiased bg-gradient-to-b from-black to-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto px-4 text-center">
        <h1 className="relative z-10 text-2xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-gray-300 font-bold">
          Pernikahan Dari
        </h1>

        <div className="relative flex items-center justify-center h-[450px] w-full">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-0 right-[55%] transform">
            <Image
              src="/assets/images/nanda.jpg"
              alt="Nanda Background"
              width={220}
              height={320}
              className="object-cover z-0 opacity-90 rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 z-10 w-full p-4 text-start bg-gradient-to-t from-black via-black to-transparent transform">
              <h2 className="text-xl text-white font-bold">
                <Title color="white">Nanda Firdaus</Title>
              </h2>
              <p className="text-sm text-gray-300">A.Md.Kes</p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="relative z-50 text-5xl bg-clip-text font-bold">
            <Title color="white">&</Title>
          </motion.h1>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-0 left-[55%]">
            <Image
              src="/assets/images/shofi.jpg"
              alt="Shofi Background"
              width={220}
              height={320}
              className="object-cover z-0 opacity-90 rounded-lg shadow-lg transform"
            />
            <div className="absolute bottom-0 right-0 z-10 w-full p-4 bg-gradient-to-t from-black via-black to-transparent">
              <h2 className="text-xl text-white font-bold text-right">
                <Title color="white">Shofi Hepariani</Title>
              </h2>
              <p className="text-sm text-gray-300 text-right">A.Md.Kes</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="px-6 mx-auto my-10 text-lg text-center relative z-10">
          <TextGenerateEffect duration={3} filter={true} words={words} />
        </motion.div>
      </motion.div>
      <BackgroundBeams />
    </div>
  );
}
