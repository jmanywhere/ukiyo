import Image from "next/image";
import heroImg from "@/lotties/HeroImageUkiyo.json";
import heroBackground from "./../assets/images/home.svg";
import LottieContainer from "@/components/LottieContainer";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  const lockedValue = 0; //ilustrative pourpuses
  const tokenPrice = 0; //ilustrative pourpuses
  const tokenDeployed = 0; //ilustrative pourpuses

  return (
    <main className="min-h-screen py-24 flex flex-col items-center w-full">
      <div className="pb-24 px-5 lg:px-8 flex flex-col lg:flex-row items-center max-w-[1440px]">
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
      <div className="bg-white w-full px-5 flex flex-col items-center">
        <div className="relative max-w-[1440px] w-full">
          <div className="flex flex-col items-center md:items-start md:px-8 bg-white rounded-3xl drop-shadow-xl p-6 mb-5 -top-12 absolute w-full">
            <h2 className="text-2xl text-black">Protocol Stats</h2>
            <div className="stats stats-vertical md:stats-horizontal bg-white/20">
              <div className="stat place-items-center py-2">
                <div className="stat-figure text-primary"></div>
                <div className="stat-title mb-3">Total Value Locked</div>
                <div className="stat-value text-black">${lockedValue}</div>
              </div>
              <div className="stat place-items-center py-2">
                <div className="stat-title mb-3">Token Price</div>
                <div className="stat-value text-black">${tokenPrice}</div>
              </div>

              <div className="stat place-items-center py-2">
                <div className="stat-title mb-3">Total Assets Deployed</div>
                <div className="stat-value text-black">${tokenDeployed}</div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-black pt-[350px]">Features</h2>
        <div>
          <FeatureCard />
          <FeatureCard />
        </div>
        <div className="h-[400px]">content</div>
      </div>
    </main>
  );
}
