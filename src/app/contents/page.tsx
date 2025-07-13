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
