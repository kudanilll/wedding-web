"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Bride from "@/sections/bride";
import TimelineSection from "@/sections/timeline-section";
import SurahCard from "@/components/surah";
import GiveAWish from "@/sections/give-a-wish";
import Gallery from "@/sections/gallery";
import Location from "@/sections/location";
import Hero from "@/sections/hero";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function toggleMusic() {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  }

  useEffect(() => {
    const invite = searchParams.get("to");
    if (typeof invite === "string") {
      setName(invite);
    } else {
      router.push("/alternative");
    }
    const audio = audioRef.current;
    if (audio) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log("Autoplay prevented:", error));
    }
  }, [router, searchParams]);

  return (
    <div className="min-h-dvh w-screen">
      <Hero name={name} />
      <Bride />
      <SurahCard />
      <Gallery />
      <TimelineSection />
      <Location />
      <GiveAWish />
      <div>
        <audio ref={audioRef} loop preload="auto">
          <source src="/assets/song.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button
          onClick={toggleMusic}
          className="fixed bottom-4 right-4 bg-zinc-800 text-neutral-200 p-4 rounded-3xl shadow-lg"
          style={{ zIndex: 1000 }}
        >
          {isPlaying ? (
            // Pause icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 9v6m4-6v6"
              />
            </svg>
          ) : (
            // Play icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-5.197-3.074A1 1 0 008 8.999v6.002a1 1 0 001.555.832l5.197-3.074a1 1 0 000-1.664z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export const images = [
  // jogja
  "/assets/images/1e383acf-2063-420b-bcd6-c67736e762a5.jpg",
  "/assets/images/3239e0f9-d89e-4591-9273-15a8fd04468d.jpg",
  "/assets/images/e500502c-212d-4dee-a110-ae0761e7ca70.jpg",
  "/assets/images/1e383acf-2063-420b-bcd6-c67736e762a5.jpg",
  "/assets/images/3239e0f9-d89e-4591-9273-15a8fd04468d.jpg",

  // sumbar
  "/assets/images/51133b7c-b8ba-4968-a244-c8cd82fd4c81.jpg",
  "/assets/images/4593d154-65f9-46b3-bad7-ccf0c6860c24.jpg",
  "/assets/images/f569f30e-e834-44e4-bb6d-ee0a54afd89a.jpg",
  "/assets/images/51133b7c-b8ba-4968-a244-c8cd82fd4c81.jpg",
  "/assets/images/4593d154-65f9-46b3-bad7-ccf0c6860c24.jpg",

  // dll
  "/assets/images/DSCF0340.jpeg",
  "/assets/images/DSCF0711.jpeg",
  "/assets/images/DSCF0751.jpeg",
  "/assets/images/DSCF0340.jpeg",
  "/assets/images/DSCF0711.jpeg",
];
