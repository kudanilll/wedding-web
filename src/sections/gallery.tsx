import Title from "@/components/title";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="w-full">
      <div className="text-center text-4xl pt-10">
        <Title color="white">Gallery</Title>
      </div>
      <div className="p-4 grid grid-cols-3 grid-rows-4 gap-2">
        {/* Gambar dengan ukuran dan posisi acak, tanpa ada space kosong */}
        <Image
          src="/assets/images/nanda.jpg"
          alt="Nanda 1"
          width={300}
          height={400}
          className="object-cover w-full h-full rounded-lg shadow-lg row-span-2 col-span-1"
        />
        <Image
          src="/assets/images/nanda.jpg"
          alt="Nanda 2"
          width={500}
          height={500}
          className="object-cover w-full h-full rounded-lg shadow-lg row-span-2 col-span-2"
        />
        <Image
          src="/assets/images/nanda.jpg"
          alt="Nanda 3"
          width={300}
          height={300}
          className="object-cover w-full h-full rounded-lg shadow-lg row-span-1 col-span-1"
        />
        <Image
          src="/assets/images/nanda.jpg"
          alt="Nanda 4"
          width={300}
          height={400}
          className="object-cover w-full h-full rounded-lg shadow-lg row-span-2 col-span-2"
        />
        <Image
          src="/assets/images/nanda.jpg"
          alt="Nanda 5"
          width={400}
          height={300}
          className="object-cover w-full h-full rounded-lg shadow-lg row-span-1 col-span-1"
        />
        <Image
          src="/assets/images/nanda.jpg"
          alt="Nanda 6"
          width={500}
          height={500}
          className="object-cover w-full h-full rounded-lg shadow-lg row-span-3 col-span-2"
        />
        <Image
          src="/assets/images/nanda.jpg"
          alt="Nanda 7"
          width={200}
          height={500}
          className="object-cover w-full h-full rounded-lg shadow-lg row-span-2 col-span-1"
        />
        <Image
          src="/assets/images/nanda.jpg"
          alt="Nanda 8"
          width={200}
          height={500}
          className="object-cover w-full h-full rounded-lg shadow-lg row-span-1 col-span-1"
        />
      </div>
    </div>
  );
}
