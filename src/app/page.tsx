//next
import Image from "next/image";

//lotties animation
import LottieContainer from "@/components/LottieContainer";
import heroImg from "@/lotties/HeroImageUkiyo.json";
import ventures from "@/lotties/Ventures.json";
import staking from "@/lotties/Staking.json";

//images
import treasury from "./../assets/images/home.svg";
import HeroImage from "./../assets/images/HeroImage.png";
import mob from "./../assets/images/mob.svg";
import eth from "./../assets/images/Eth.svg";
import community from "./../assets/images/malefemale.png";
import hero_placeholder from "./../../public/hero_placeholder.gif";

//components
import FeatureCard from "@/components/FeatureCard";
import EcoCard from "@/components/EcoCard";
import GobernanceCard from "@/components/GobernanceCard";
import NewsCard from "@/components/NewsCard";

export default function Home() {
  const lockedValue = 0; //ilustrative pourpuses
  const tokenPrice = 0; //ilustrative pourpuses
  const tokenDeployed = 0; //ilustrative pourpuses

  return (
    <main className="min-h-screen flex flex-col items-center w-full bg-light-grey-bg">
      {/*hero*/}
      <section className="bg-grey-blue hero-gradient w-full flex flex-col items-center pt-[100px]">
        <div className="max-w-[calc(75vw)] w-full relative py">
          <Image src={HeroImage} alt="background" className="w-full" />
          <h2 className="text-6xl absolute z-10">ukiyo Protocol</h2>
          <p></p>
        </div>
      </section>
      {/* Secondary Hero */}
      <section className="w-full py-16 lg:py-32  relative overflow-hidden flex flex-col items-center px-2 md:px-28">
        <div className="z-10">
          <h2 className="text-2xl xs:text-3xl md:text-[56px] lg:text-7xl text-dark-text z-10 whitespace-pre-wrap w-full md:leading-[4rem] lg:leading-[5.5rem] pb-6 md:pb-9 lg:pb-14">
            A new type of{"\n"}financial technology{"\n"}for capital formation
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <LottieContainer
            lottie={{ animationData: heroImg }}
            placeholder={hero_placeholder}
            className="max-w-xs lg:max-w-lg z-10"
            alt="Hero_placeholder"
          />
          <div className="z-10">
            <h3 className="text-dark-text italic font-medium text-2xl max-w-xs pb-4">
              We look, we see, and we can&apos;t build the things we dream of
            </h3>
            <p className="text-dark-text font-normal max-w-xs">
              We&apos;re creating the infrastructure to democratize funding,
              making it open and permissionless to Eeveryone, Everywhere, All at
              Once
            </p>
          </div>
        </div>
        <div className="rounded-full absolute w-[calc(95vw)] h-[calc(95vw)] -top-[calc(95vw/2)] left-[calc((100vw-95vw)/2)] border-2 border-slate-300/80" />
        <div className="rounded-full absolute w-[calc(48vw)] h-[calc(48vw)] -top-[calc(48vw/2)] left-[calc((100vw-48vw)/2)] border-2 border-slate-300/80" />
        <div className="absolute w-[90vw] h-[15vw] striped-bg bottom-0 left-0 max-h-[80px] " />
      </section>

      {/* How it works */}
      <section className="w-full py-16 lg:py-32 bg-light-grey relative overflow-hidden flex flex-col items-center px-2 md:px-28"></section>

      {/*stats and features*/}
      {/* <section className="bg-white w-full px-5 pb-10 flex flex-col items-center">
        <div className="relative max-w-[1440px] w-full">
          <div className="flex flex-col items-center md:items-start md:px-8 bg-white rounded-3xl drop-shadow-xl p-6 mb-5 -top-12 absolute w-full">
            <h2 className="text-2xl text-black font-semibold">
              Protocol Stats
            </h2>
            <div className="stats stats-vertical md:stats-horizontal bg-white/20 w-full">
              <div className="stat place-items-center py-2">
                <div className="stat-title mb-3 text-black">
                  Total Value Locked
                </div>
                <div className="stat-value text-black">${lockedValue}</div>
              </div>
              <div className="stat place-items-center py-2">
                <div className="stat-title mb-3 text-black">Token Price</div>
                <div className="stat-value text-black">${tokenPrice}</div>
              </div>

              <div className="stat place-items-center py-2">
                <div className="stat-title mb-3 text-black">
                  Total Assets Deployed
                </div>
                <div className="stat-value text-black">${tokenDeployed}</div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-black pt-[380px] md:pt-[180px] lg:pt-[220px] font-semibold text-2xl md:text-3xl mb-8 md:mb-12">
          Features
        </h2>
        <div className="grid grid-flow-col md:grid-flow-row grid-rows-2 md:grid-rows-1 md:grid-cols-2 md:gap-4 lg:gap-6 max-w-[1440px]">
          <FeatureCard
            title="Ventures"
            text="Become a disruptive investor via web3 and access start-ups and mid-stage projects"
            btnText="Learn"
            lottie={ventures}
          />
          <FeatureCard
            title="Staking"
            text="Earn passive income from the Vault. Stake KXO. Govern the protocol"
            btnText="Learn"
            lottie={staking}
          />
        </div>
      </section> */}
      {/*ecosystem*/}
      <section className="bg-grey-blue w-full flex flex-col items-center py-16 lg:py-20">
        <h2 className="py-2 text-2xl md:text-3xl font-semibold mb-5 md:mb-8 lg:mb-12">
          Ecosystem
        </h2>
        <div className="flex flex-col items-center md:items-stretch md:flex-row px-6 gap-3 md:gap-5 justify-center w-full max-w-[1440px]">
          <EcoCard
            title="Treasury"
            text="The Reserve and Liquidity of the protocol.
            Owned and controlled by the community"
            image={treasury}
            altText="treasury"
          />
          <EcoCard
            title="Vault"
            text="Learn about the Vault, its mechanics, and how you can earn KXO"
            image={mob}
            altText="mob"
          />
        </div>
      </section>
      {/*Governed by*/}
      <section className="bg-light-grey text-black flex flex-col items-center py-20 px-5 w-full">
        <h2 className="text-2xl md:text-3xl md:font-bold font-semibold text-center mb-5">
          Governed by the Community
        </h2>
        <p className="text-sm md:text-[15.53px]font-medium text-center mb-6">
          ukiyo is a protocol that is entirely decentralized and governed by its
          community
        </p>
        <a className="btn rounded-full bg-light-orange text-white normal-case mb-8 border-0 md:mb-20">
          Goberment Forum
        </a>
        <Image src={community} alt="community-img" className="mb-10 md:mb-20" />
        <h3 className="text-2xl md:text-[25.23px]font-semibold md:font-bold text-center mb-10 md:mb-16">
          How it works
        </h3>
        <GobernanceCard
          cards={[
            {
              title: "Request for Comment Submission (RFC)",
              text: "Submit proposals and comments and engage with the DAO community.",
              aText: "Visit Docs",
            },
            {
              title: "Create a Snapshot",
              text: "Use a Snapshot vote to measure community opinion on a new proposal.",
              aText: "Go to Snapshot",
            },
            {
              title: "Submit a Request for Improvement (UIP) for ukiyo",
              text: "The proposal(s) can now be submitted via a GitHub pull request, and the DAO community can vote on approvals.",
              aText: "Visit Docs",
            },
          ]}
        />
      </section>
      {/*News*/}
      <section className="bg-light-grey text-black flex flex-col items-center py-16 px-5 w-full">
        <div className="flex flex-col w-full max-w-[1440px] lg:flex-row lg:px-6">
          <div className="w-full max-w-[250px]">
            <h2 className="text-2xl md:text-3xl md:font-bold font-semibold mb-5">
              In The News
            </h2>
            <a className="btn rounded-full bg-light-orange text-white normal-case mb-8 border-0">
              View all Articles
            </a>
          </div>
          {/*aqui mandamos lo del cms*/}
          <NewsCard
            cards={[
              {
                title: "How to Become a Venture Capitalist with DeFi",
                date: "Aug 18, 2023",
                text: "Let's explore the stories of two accomplished venture capitalists, whom we'll refer to as Alex and Morgan in this blog and gain valuable ins...",
                href: "link",
              },
              {
                title:
                  "From Centralization to Decentralization, the Future of Venture Capital and Private Equity Funds: Making Fund Ownership Accessible to Everyone",
                date: "May 17, 2023",
                text: "However, with the rise of decentralized finance (DeFi), fund ownership is becoming more accessible to everyone. In this we explore how DeFi ...",
                href: "link",
              },
              {
                title: "ukiyo Protocol, The Journey So Far",
                date: "Apr 29, 2023",
                text: "Developing a DeFi fund that merges venture capital and private equity is no easy feat. It requires extensive research, expertise, and highly...",
                href: "link",
              },
            ]}
          />
        </div>
      </section>
      {/*Etherium Logo*/}
      {/* <section className="bg-grey-blue w-full py-10 flex flex-col items-center border-t-[1px] border-light-grey">
        <h3 className="text-3xl pb-5 font-medium">Powered By</h3>
        <Image src={eth} alt="img" />
        <h5 className="py-3">Raise Capital. Invest Capital.</h5>
      </section> */}
    </main>
  );
}
