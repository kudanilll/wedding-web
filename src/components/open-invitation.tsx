"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function OpenInvitation({ name }: { name: string }) {
  const router = useRouter();
  return (
    <motion.button
      onClick={() => router.push(`/contents?to=${name}`)}
      className="shadow-[inset_0_0_0_2px_#616467] px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent text-neutral-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      Buka Undangan
    </motion.button>
  );
}
