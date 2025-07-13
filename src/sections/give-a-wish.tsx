"use client";

import { motion } from "framer-motion";
import Title from "@/components/title";

export default function GiveAWish() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-gradient-to-b from-neutral-900 to-zinc-900 py-12 px-4 md:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Title color="white">Kirim Ucapan</Title>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-xl">
            Berikan doa dan harapan terbaik untuk kami
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-neutral-800/50 p-6 md:p-8 rounded-xl shadow-lg mb-12"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-neutral-300 mb-2">
                Nama Anda
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-neutral-300 mb-2">
                Ucapan
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors duration-300"
            >
              Kirim Ucapan
            </button>
          </div>
        </motion.form>
      </motion.div>
      <p className="text-neutral-300 text-center">
        &copy; 2023 Nanda & Shofi. All Rights Reserved.
      </p>
    </div>
  );
}
