import Image from "next/image";
import heroImg from "@/lotties/HeroImageUkiyo.json";
import heroBackground from "./../assets/images/home.svg";
import LottieContainer from "@/components/LottieContainer";

export default function Home() {
  return (
    <main className="min-h-screen  py-24 px-5 flex flex-col items-center w-full">
      <div className="pb-16 lg:px-8 flex flex-col lg:flex-row items-center max-w-[1440px]">
        <div className="z-10 lg:order-1">
          <LottieContainer
            options={{
              animationData: heroImg,
            }}
          />
        </div>
        <div className="flex flex-col items-center lg:items-start py-6 lg:flex-[0_0_50%]">
          <h2 className="text-4xl md:text-5xl text-light-orange font-semibold">
            Ukiyo
          </h2>
          <h2 className="text-4xl md:text-5xl font-semibold pb-5">Protocol</h2>
          <p className="text-center lg:text-left pb-3 text-sm text-[#F7F8FD]/80 font-light">
            Venture Capital and Private Equity technology stack to kickstart
            Blockchain and Real-World projects
          </p>
          <p className="text-center lg:text-left pb-8 text-sm text-[#F7F8FD]/80 font-light">
            A community driven protocol powered by Ethereum
          </p>
          <div className="grid grid-cols-2 gap-4 w-full max-w-[345px]">
            <a
              href="https://www.dropbox.com/s/a7wal9nsw43zlb3/230324 ukiyo Whitepaper v1.pdf?dl=0"
              className="bg-light-orange py-2 px-4 rounded-full w-full text-center hover:bg-transparent hover:border-light-orange hover:border-2 hover:text-light-orange"
            >
              Whitepaper
            </a>
            <a
              href="https://github.com/ukiyo-protocol"
              className="w-full py-2 px-4 rounded-full w-full text-center border-2 hover:bg-transparent hover:border-light-orange hover:border-2 hover:text-light-orange"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
