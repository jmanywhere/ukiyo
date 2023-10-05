"use client";
import Lottie, { type LottieComponentProps } from "lottie-react";
import Image, { type StaticImageData } from "next/image";
import { useLayoutEffect, useState } from "react";
import useSWR from "swr";

export default function LottieContainer(props: {
  placeholder?: StaticImageData;
  alt?: string;
  lottiePath: string;
  className?: string;
}) {
  const { placeholder, lottiePath, alt, className } = props;
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [animation, setAnimation] = useState(null);

  const { data, error, isLoading } = useSWR(
    "api/?lottie=" + lottiePath,
    (url) => fetch(url).then((r) => r.json())
  );

  console.log({ data, error, isLoading });

  return (
    <div className={className}>
      {!!(placeholder && alt) && (
        <Image
          src={placeholder}
          alt={alt}
          className={animationLoaded ? "hidden" : ""}
        />
      )}
      <Lottie
        animationData={data?.lottie}
        onLoadedImages={() => setAnimationLoaded(true)}
      />
    </div>
  );
}
