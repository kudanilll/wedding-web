"use client";
import { Timeline } from "@/components/timeline";
import { useState, useEffect } from "react";

export default function TimelineSection() {
  function calculateTimeLeft() {
    // Jakarta time offset in milliseconds (UTC+7)
    const jakartaOffset = 7 * 60 * 60 * 1000;
    const targetDate =
      new Date("October 13, 2025 00:00:00").getTime() + jakartaOffset;
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    let timeLeft: { [key: string]: string } = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      // If the countdown is finished, set all values to "00"
      timeLeft = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }
    return timeLeft;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  });

  const data = [
    {
      title: "Jumat, 23 Agustus 2025",
      content: (
        <div>
          <h1 className="text-neutral-200 text-2xl font-bold mb-2">
            Akad Nikah
          </h1>
          <p className="text-neutral-500 text-base mb-8">
            Jl. Beringin, Padang Tiakar Hilir, Kec. Payakumbuh Timur., Kota
            Payakumbuh, Sumatera Barat
          </p>
        </div>
      ),
    },
    {
      title: "Senin, 26 Agustus 2025",
      content: (
        <div>
          <h1 className="text-neutral-200 text-2xl font-bold mb-2">
            Acara Resepsi
          </h1>
          <p className="text-neutral-500 text-base mb-8">
            Jl.Prof M.Yamin, Padang Tiakar Hilir, Kec. Payakumbuh Timur., Kota
            Payakumbuh, Sumatera Barat
          </p>
        </div>
      ),
    },
    {
      title: "Minggu, 13 Oktober 2025",
      content: (
        <div>
          <h1 className="text-neutral-200 text-2xl font-bold mb-2">
            Ngunduh Mantu
          </h1>
          <p className="text-neutral-500 text-base mb-8">
            Perumahan Green Bekasi Village, Jl. Rw. Mulya No.6-7, RT.009/RW.003,
            Mustika Jaya, Kec. Mustika Jaya, Kota Bks, Jawa Barat 17158
          </p>
          <div className="grid grid-cols-4 gap-1">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white">
                {timeLeft.days || "0"}
              </span>
              <span className="text-gray-400">Hari</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white">
                {timeLeft.hours || "0"}
              </span>
              <span className="text-gray-400">Jam</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white">
                {timeLeft.minutes || "0"}
              </span>
              <span className="text-gray-400">Menit</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white">
                {timeLeft.seconds || "0"}
              </span>
              <span className="text-gray-400">Detik</span>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full py-12">
      <Timeline data={data} />
    </div>
  );
}
