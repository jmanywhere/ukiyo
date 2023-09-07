import Image from "next/image";
import heroImg from "@/lotties/HeroImageUkiyo.json";
import LottieContainer from "@/components/LottieContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10">
        <LottieContainer
          options={{
            animationData: heroImg,
          }}
        />
      </div>
      <div className="h-[700px]">page</div>
    </main>
  );
}
