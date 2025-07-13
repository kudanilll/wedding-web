import { BackgroundBeams } from "@/components/background-beams";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { motion } from "framer-motion";
import Title from "@/components/title";
import Image from "next/image";

export default function Bride() {
  const words = `Kebersamaan menggapai takwa. Adalah jalinan cinta yang paling hakiki. Rajutlah puing-puing bahagia dengan penuh kasih dan cinta. Agar lahirkan keluarga sejati nan sejahtera.`;

  return (
    <div className="w-full relative flex flex-col items-center justify-center antialiased bg-gradient-to-b from-black to-zinc-900 min-h-screen py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto px-4 text-center w-full max-w-6xl"
      >
        {/* Judul - Sama untuk mobile dan desktop */}
        <h1 className="relative z-10 text-2xl md:text-6xl mb-6 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-gray-300 font-bold tracking-wider">
          Dari kedua anak kami
        </h1>

        {/* Container Utama */}
        <div className="relative flex flex-col md:flex-row items-center justify-center min-h-[400px] md:h-[600px] w-full">
          {/* Bagian Pria */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-auto mb-8 md:mb-0"
          >
            <div className="relative group mx-auto w-[220px] md:w-[300px]">
              <Image
                src="/assets/images/nanda.jpg"
                alt="Nanda Background"
                width={220}
                height={320}
                className="object-cover w-full h-auto md:h-[450px] opacity-90 rounded-lg shadow-lg md:shadow-xl transition-all duration-300 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-lg" />
              <div className="absolute bottom-0 left-0 z-10 w-full p-4 md:p-6 text-center md:text-start">
                <h2 className="text-xl md:text-3xl text-white font-bold">
                  <Title color="white">Nanda Firdaus</Title>
                </h2>
                <p className="text-sm md:text-lg text-gray-300">A.Md.Kes</p>
                <p className="hidden md:block text-sm text-gray-400 mt-2">
                  Putra pertama dari Bpk. Lorem & Ibu Ipsum
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tanda & */}
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="relative z-50 text-5xl md:text-8xl bg-clip-text font-bold my-4 md:my-0 md:mx-8"
          >
            <Title color="white">&</Title>
          </motion.h1>

          {/* Bagian Wanita */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-auto mt-8 md:mt-0"
          >
            <div className="relative group mx-auto w-[220px] md:w-[300px]">
              <Image
                src="/assets/images/shofi.jpg"
                alt="Shofi Background"
                width={220}
                height={320}
                className="object-cover w-full h-auto md:h-[450px] opacity-90 rounded-lg shadow-lg md:shadow-xl transition-all duration-300 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 rounded-lg" />
              <div className="absolute bottom-0 left-0 z-10 w-full p-4 md:p-6 text-center md:text-end">
                <h2 className="text-xl md:text-3xl text-white font-bold">
                  <Title color="white">Shofi Hepariani</Title>
                </h2>
                <p className="text-sm md:text-lg text-gray-300">A.Md.Kes</p>
                <p className="hidden md:block text-sm text-gray-400 mt-2">
                  Putri kedua dari Bpk. Dolor & Ibu Sit
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Teks Kutipan */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="px-4 md:px-6 mx-auto mt-8 md:mt-16 mb-4 text-center relative z-10 max-w-7xl"
        >
          <TextGenerateEffect duration={3} filter={true} words={words} />
        </motion.div>
      </motion.div>
      <BackgroundBeams />
    </div>
  );
}
