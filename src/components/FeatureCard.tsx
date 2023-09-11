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
    <div className="bg-grey-blue flex flex-col items-center px-4 py-10 rounded-3xl mb-5">
      <Image src={logo} alt="logo" className="max-w-[120px] pb-5" />
      <h2 className="text-2xl font-medium mb-5">{title}</h2>
      <p className="text-sm font-normal text-center mb-8">{text}</p>
      <a className="btn rounded-full bg-light-orange text-white normal-case w-full max-w-[118px] mb-8">
        {btnText}
      </a>
      <LottieContainer
        options={{
          animationData: lottie,
        }}
      />
    </div>
  );
};

export default FeatureCard;
