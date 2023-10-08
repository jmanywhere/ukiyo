//next
import Image from "next/image";

//lotties animation
import LottieContainer from "@/components/LottieContainer";
import heroLottie from "@/../../public/lotties/HeroImageUkiyo.json";

//images
import treasury from "../../assets/images/home.svg";
import mob from "../../assets/images/mob.svg";
import community from "../../assets/images/malefemale.png";
import hero_placeholder from "../../../public/hero_placeholder.gif";
import heroImgMobile from "../../assets/images/HeroImgMobile.svg";
import heroImgDesktop from "../../assets/images/HeroImgDesktop.svg";
import ventures from "../../assets/images/venturesImg.svg";
import studio from "../../assets/images/studiosImg.svg";
import walletIcon from "../../assets/images/walletIcon.svg";
import computerIcon from "../../assets/images/computerIcon.svg";

//components
import EcoCard from "@/components/EcoCard";
import GobernanceCard from "@/components/GobernanceCard";
import NewsCard from "@/components/NewsCard";
import FortuneCard from "@/components/FortuneCard";
import News from "./News";

//icons
import { RiTwitterXLine, RiLinkedinFill } from "react-icons/ri";
import { LiaTelegram } from "react-icons/lia";

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-full bg-light-grey-bg">
      {/*hero*/}
      <section className="bg-grey-blue hero-gradient flex-grow flex flex-col items-center w-full md:h-screen px-2 md:px-5 lg:px-6 xl:px-7">
        <div className="w-full max-w-[1440px] border-x-[1px] border-slate-300/80">
          <div className="w-full flex flex-col items-center justify-between pt-[85px] pb-10 md:h-screen  md:relative">
            <Image
              src={heroImgDesktop}
              alt="ukiyo protocol"
              className="hidden md:block w-full max-w-5xl"
            />
            <Image
              src={heroImgMobile}
              alt="ukiyo protocol_mobile"
              className=" w-full md:hidden"
            />
            <div className="flex justify-between w-full px-5 md:px-16 pb-6 gap-1 md:absolute bottom-0">
              <div className="flex flex-col md:flex-row items-center md:justify-start gap-4 sm:gap-5 md:gap-4 w-full">
                <a className="rounded-full bg-white text-grey-blue btn normal-case font-medium text-base max-w-[calc(50vw)] md:max-w-[144px] w-full">
                  Github
                </a>
                <a className="rounded-full bg-light-orange btn text-white normal-case font-medium text-base max-w-[calc(50vw)] md:max-w-[144px] w-full">
                  Manifesto
                </a>
                <div className="md:self-stretch md:w-full md:flex md:justify-end">
                  <div className="flex justify-evenly items-center bg-white text-grey-blue rounded-full w-screen max-w-[50vw] gap-3 md:max-w-[144px] px-4 py-4 h-full">
                    <a>
                      <RiTwitterXLine className="text-base" />
                    </a>
                    <a>
                      <LiaTelegram className="text-base" />
                    </a>
                    <a>
                      <RiLinkedinFill className="text-base" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Secondary Hero */}
      <section className="w-full py-16 lg:py-32  relative overflow-hidden flex flex-col items-center px-2 md:px-24 xl:px-28">
        <div className="z-10">
          <h2 className="text-2xl xs:text-3xl md:text-[56px] lg:text-7xl text-dark-text z-10 whitespace-pre-wrap md:leading-[4rem] lg:leading-[5.5rem] pb-6 md:pb-9 lg:pb-14">
            A new type of{"\n"}financial technology{"\n"}for capital formation
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <LottieContainer
            lottiePath="HeroImageUkiyo"
            animationData={heroLottie}
            placeholder={hero_placeholder}
            className="max-w-xs lg:max-w-xl z-10"
            alt="Hero_placeholder"
          />
          <div className="z-10">
            <h3 className="text-dark-text italic font-medium text-2xl max-w-sm pb-4">
              We look, we see, and we can&apos;t build the things we dream of
            </h3>
            <p className="text-dark-text font-normal max-w-xs">
              We&apos;re creating the infrastructure to democratize funding,
              making it open and permissionless to Everyone, Everywhere, All at
              Once
            </p>
          </div>
        </div>
        <div className="rounded-full absolute w-[calc(95vw)] h-[calc(95vw)] -top-[calc(95vw/2)] left-[calc((100vw-95vw)/2)] border-2 border-slate-300/80" />
        <div className="rounded-full absolute w-[calc(48vw)] h-[calc(48vw)] -top-[calc(48vw/2)] left-[calc((100vw-48vw)/2)] border-2 border-slate-300/80" />
        <div className="absolute w-[90vw] h-[15vw] striped-bg bottom-0 left-0 max-h-[80px] " />
      </section>
      {/* Floating World */}
      <section className="bg-floating-bg md:bg-floating-bg-desktop bg-no-repeat bg-cover px-2 md:px-5  lg:px-6 xl:px-7 w-full flex flex-col items-center">
        <div className="border-x-[1px] border-slate-300/80 py-14 px-5 lg:flex lg:flex-col lg:items-center max-w-[1440px] w-full">
          <div className="pb-10 w-full lg:pb-20">
            <h2 className="text-[32px] md:text-[75px] lg:text-[100px]">
              A floating world
            </h2>
            <p className="text-base font-normal">
              ukiyo Protocol is designed to allow Ventures and Studios to work
              alone or on top of other protocols
            </p>
          </div>
          <div className="px-10 lg:flex lg:flex-col lg:items-center w-full lg:max-w-[900px] lg:pb-10">
            <div className="pb-3 lg:flex lg:flex-col lg:items-center w-full lg:pb-10">
              <div className="pb-5 lg:flex lg:justify-between lg:items-center w-full ">
                <Image
                  src={ventures}
                  alt="ventures"
                  className="pb-5 lg:order-1"
                />
                <h2 className="text-2xl pb-2 lg:order-0 lg:text-5xl">
                  Ventures
                </h2>
                <p className="max-w-[375px] lg:order-2">
                  Ever wanted to invest capital in far reaching places and
                  don&apos;t know where to start? The protocol is onboarding the
                  next one billion users around the world and turning them into
                  a new generation of Venture Capitalists
                </p>
              </div>
              <div className="pb-5 lg:flex lg:justify-between lg:items-center w-full ">
                <Image
                  src={studio}
                  alt="ventures"
                  className="pb-5 lg:order-1"
                />
                <h2 className="text-2xl pb-2 lg:order-0 lg:text-5xl">
                  Studios
                </h2>
                <p className="max-w-[375px] lg:order-2">
                  Hollywood, Gaming, and Music have always been a distant dream
                  for most of us. Studios changes this. Produce the next
                  generation of blockbuster hits and own the content you consume
                </p>
              </div>
            </div>
            <div className="border-[3px] border-light-orange rounded-3xl  flex flex-col lg:flex-row lg:justify-center items-center floating-assets-gradient py-5 w-full lg:py-14">
              <h2 className="text-grey-blue text-2xl lg:text-[32px] pb-3 w-full text-center">
                Total Assets Deployed:
              </h2>
              <p className="text-light-orange text-[40px] lg:text-5xl font-medium w-full text-center">
                $000
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How it works */}
      <section className="w-full overflow-hidden">
        <div className="px-[calc((100vw-95vw)/2)] z-10 relative">
          <div className="xs:border-x-2 border-dark-text/10 py-16 lg:py-32 flex flex-col items-center justify-center">
            <div className="container z-10">
              <h3 className="text-4xl md:text-[56px] lg:text-7xl font-normal w-full text-dark-text lg:pb-16 pb-12 pl-4">
                How it works
              </h3>
              <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center lg:justify-normal gap-6 px-4">
                <div className="bg-white rounded-2xl border-[1px] border-light-grey/50 drop-shadow-2xl md:px-10 px-6 md:pt-8 md:pb-12 py-6 max-w-[370px] min-h-[261px]">
                  <div className="bg-pink-orange rounded-full w-7 h-7 text-center py-1 font-medium text-sm">
                    1
                  </div>
                  <h4 className="text-dark-text font-semibold text-lg pt-4 md:pt-8 pb-4">
                    A Global Repository of Financial and Legal Contracts
                  </h4>
                  <p className="font-normal text-dark-text">
                    Fully composable, permisionless, and dynamic
                  </p>
                </div>
                <div className="bg-white rounded-2xl border-[1px] border-light-grey/50 drop-shadow-2xl md:px-10 px-6 md:pt-8 md:pb-12 py-6 max-w-[370px] min-h-[261px] lg:mt-20">
                  <div className="bg-pink-orange rounded-full w-7 h-7 text-center py-1 font-medium text-sm">
                    2
                  </div>
                  <h4 className="text-dark-text font-semibold text-lg pt-4 md:pt-8 pb-4">
                    Identity and Reputation
                  </h4>
                  <p className="font-normal text-dark-text">
                    IPFS encrypted ERC-1238 granting access to verified data on
                    individuals
                  </p>
                </div>
                <div className="bg-white rounded-2xl border-[1px] border-light-grey/50 drop-shadow-2xl md:px-10 px-6 md:pt-8 md:pb-12 py-6 max-w-[370px] min-h-[261px]">
                  <div className="bg-pink-orange rounded-full w-7 h-7 text-center py-1 font-medium text-sm">
                    3
                  </div>
                  <h4 className="text-dark-text font-semibold text-lg pt-4 md:pt-8 pb-4">
                    Execute Contracts and Stay Compliant
                  </h4>
                  <p className="font-normal text-dark-text">
                    Stay on top of regulations, compliance, and tax obligations
                    without the need to move a finger
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-[100vw] px-[calc((100vw-90vw)/2)]">
              <Image
                src="/backgrounds/Electronic_Paths.png"
                alt="electronics"
                width={1478}
                height={584}
                className="w-[100vw] h-auto z-0 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Fortune */}
      <section className="w-full px-2 md:px-5  lg:px-6 xl:px-7bg-grey-blue hero-gradient">
        <div className="border-x-[1px] border-slate-300/80 bg-fortune-digital py-10 px-3 md:px-10">
          <h2 className="text-[32px] md:text-[100px] pb-5 max-w-[800px]">
            Fortune favors the bold
          </h2>
          <div className="flex flex-col items-center  gap-6 md:flex-row md:justify-center">
            <FortuneCard
              title="Are you an investor?"
              text="We're seeking the brightest and boldest investors to join us"
              img={walletIcon}
              placeholder="Your Email"
              btnTxt="Contact"
              href=""
            />
            <FortuneCard
              title="Are you a developer?"
              text="Come and help us build the infrastructure for the new world"
              img={computerIcon}
              placeholder="Your Email"
              btnTxt="Contact"
              href=""
            />
          </div>
        </div>
      </section>
      {/*News*/}
      <News />
    </main>
  );
}
