"use client";
import Lottie from "react-lottie-player";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export default function LottieContainer(props: {
  placeholder?: StaticImageData;
  animationData?: any;
  alt?: string;
  lottiePath: string;
  className?: string;
}) {
  const { placeholder, lottiePath, alt, animationData, className } = props;
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimationLoaded(true), 1500);
  }, [setAnimationLoaded]);

  return (
    <div className={className}>
      {!!(placeholder && alt) && (
        <Image
          src={placeholder}
          alt={alt}
          className={animationLoaded && animationData ? "hidden" : ""}
        />
      )}
      <Lottie loop play animationData={animationData} />
    </div>
  );
}
