"use client";
import Lottie from "react-lottie-player";
import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import useSWR from "swr";

export default function LottieContainer(props: {
  placeholder?: StaticImageData;
  animationData?: any;
  alt?: string;
  lottiePath: string;
  className?: string;
}) {
  const { placeholder, lottiePath, alt, animationData, className } = props;
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data } = useSWR("api/?lottie=" + lottiePath, (url) =>
    fetch(url).then((r) => r.json())
  );

  console.log({ data, animationData, lottiePath, shouldFetch });

  return (
    <div className={className}>
      {!!(placeholder && alt) && (
        <Image
          src={placeholder}
          alt={alt}
          className={data?.lottie || animationData ? "hidden" : ""}
        />
      )}
      <Lottie loop play animationData={data?.lottie || animationData} />
      {data?.lottie?.nm || "fuuuuuk"}
    </div>
  );
}
