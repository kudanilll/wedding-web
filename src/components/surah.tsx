import { Markazi_Text } from "next/font/google";

const font = Markazi_Text({
  weight: "400",
  subsets: ["arabic"],
});

export default function SurahCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="relative bg-zinc-900 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
        {/* Isi Card */}
        <div className="text-center mt-8">
          <h1 className={font.className}>
            <p className="text-4xl leading-relaxed mb-6">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
              لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
              إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
            </p>
          </h1>
          <p className="text-lg text-neutral-500">
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
        </div>

        {/* Title di bagian bawah */}
        <div className="mt-8 text-center text-sm text-neutral-500">
          <p>Q.S Ar-Rum:21</p>
        </div>
      </div>
    </div>
  );
}
