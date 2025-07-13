"use client";

import { motion } from "framer-motion";

export default function AlternativePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-dvh w-full bg-gradient-to-br from-neutral-900 to-zinc-900 flex flex-col items-center justify-center p-8 text-center"
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
            Maaf, Anda Tidak Terdaftar
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl">
            Anda tidak berada dalam daftar undangan kami. Jika ini merupakan
            kesalahan, silakan hubungi kami.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-12 text-neutral-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Nanda & Shofi Wedding</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
