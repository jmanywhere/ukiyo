"use client";
import Lottie from "react-lottie-player";
import Image, { type StaticImageData } from "next/image";
import { useState, useLayoutEffect } from "react";
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

  const { data } = useSWR(
    shouldFetch ? "api/?lottie=" + lottiePath : null,
    (url) => fetch(url).then((r) => r.json())
  );

  useLayoutEffect(() => {
    setTimeout(() => setShouldFetch(true), 1500);
  }, [setShouldFetch]);

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
      <button onClick={() => setShouldFetch((p) => !p)}>refetch</button>
    </div>
  );
}
