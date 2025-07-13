import Title from "@/components/title";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  // Variants untuk animasi
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl mb-8 md:mb-12"
      >
        <Title color="white">Gallery</Title>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 grid-rows-4 gap-2 md:gap-6" // Gap lebih besar di desktop
      >
        {/* Item 1 */}
        <motion.div variants={item} className="row-span-2 col-span-1">
          <Image
            src="/assets/images/nanda.jpg"
            alt="Nanda 1"
            width={400} // Ukuran lebih besar
            height={600}
            className="object-cover w-full h-full rounded-xl shadow-xl md:shadow-2xl"
          />
        </motion.div>

        {/* Item 2 */}
        <motion.div variants={item} className="row-span-2 col-span-2">
          <Image
            src="/assets/images/2.jpg"
            alt="Nanda 2"
            width={800} // Ukuran lebih besar
            height={600}
            className="object-cover w-full h-full rounded-xl shadow-xl md:shadow-2xl"
          />
        </motion.div>

        {/* Item 3 */}
        <motion.div variants={item} className="row-span-1 col-span-1">
          <Image
            src="/assets/images/3.jpg"
            alt="Nanda 3"
            width={400} // Ukuran lebih besar
            height={400}
            className="object-cover w-full h-full rounded-xl shadow-xl md:shadow-2xl"
          />
        </motion.div>

        {/* Item 4 */}
        <motion.div variants={item} className="row-span-2 col-span-2">
          <Image
            src="/assets/images/4.jpg"
            alt="Nanda 4"
            width={800} // Ukuran lebih besar
            height={600}
            className="object-cover w-full h-full rounded-xl shadow-xl md:shadow-2xl"
          />
        </motion.div>

        {/* Item 5 */}
        <motion.div variants={item} className="row-span-1 col-span-1">
          <Image
            src="/assets/images/5.jpg"
            alt="Nanda 5"
            width={400} // Ukuran lebih besar
            height={300}
            className="object-cover w-full h-full rounded-xl shadow-xl md:shadow-2xl"
          />
        </motion.div>

        {/* Item 6 */}
        <motion.div variants={item} className="md:hidden row-span-3 col-span-2">
          <Image
            src="/assets/images/6.jpg"
            alt="Nanda 6"
            width={800} // Ukuran lebih besar
            height={900}
            className="object-cover w-full h-full rounded-xl shadow-xl md:shadow-2xl"
          />
        </motion.div>

        {/* Item 7 */}
        <motion.div variants={item} className="md:hidden row-span-2 col-span-1">
          <Image
            src="/assets/images/7.jpeg"
            alt="Nanda 7"
            width={400} // Ukuran lebih besar
            height={600}
            className="object-cover w-full h-full rounded-xl shadow-xl md:shadow-2xl"
          />
        </motion.div>

        {/* Item 8 */}
        <motion.div variants={item} className="md:hidden row-span-1 col-span-1">
          <Image
            src="/assets/images/8.jpeg"
            alt="Nanda 8"
            width={400} // Ukuran lebih besar
            height={300}
            className="object-cover w-full h-full rounded-xl shadow-xl md:shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
