import { subtle } from "crypto";
import Image from "next/image";
import logo from "./../assets/images/ukiyo-text-img.png";
import LottieContainer from "@/components/LottieContainer";

type cardProps = {
  title: string;
  text: string;
  btnText: string;
  lottie: object;
};

const FeatureCard = (props: cardProps) => {
  const { title, text, btnText, lottie } = props;

  return (
    <div className=" feature-gradient flex flex-col items-center px-4 py-10 rounded-3xl mb-5">
      <Image src={logo} alt="logo" className="max-w-[165px] pb-5" />
      <h2 className="text-[26px] font-medium mb-5">{title}</h2>
      <p className="text-base font-normal text-center mb-8 max-w-[70%]">
        {text}
      </p>
      <a
        href="/"
        className="hover:outline hover:text-light-orange rounded-full text-white normal-case  mb-8 px-12 py-3 text-center shadow-inner shadow-white/40 hover:bg-transparent bg-light-orange outline-light-orange outline-2"
      >
        {btnText}
      </a>
      <LottieContainer
        className="max-w-[120px] md:max-w-[250px]"
        lottie={{
          animationData: lottie,
        }}
      />
    </div>
  );
};

export default FeatureCard;
