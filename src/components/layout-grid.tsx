"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  return (
    <div className="w-full h-full px-4 pt-4 pb-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}>
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10 pointer-events-none"
        )}
        // animate={{ opacity: 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-center absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};
