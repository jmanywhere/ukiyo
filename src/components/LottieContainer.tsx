"use client";
import Lottie, { type LottieComponentProps } from "lottie-react";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";

export default function LottieContainer(props: {
  placeholder?: StaticImageData;
  alt?: string;
  lottie: LottieComponentProps;
  className?: string;
}) {
  const { placeholder, lottie, alt, className } = props;
  const [animationLoaded, setAnimationLoaded] = useState(false);
  console.log("LottieContainer", { lottie });
  return (
    <div className={className}>
      {!!(placeholder && alt) && (
        <Image
          src={placeholder}
          alt={alt}
          className={animationLoaded ? "hidden" : ""}
        />
      )}
      <Lottie {...lottie} onLoadedImages={() => setAnimationLoaded(true)} />
    </div>
  );
}
