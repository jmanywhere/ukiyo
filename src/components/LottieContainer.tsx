"use client";
import Lottie from "react-lottie-player";
import Image, { type StaticImageData } from "next/image";
import { useState, useLayoutEffect } from "react";
import useSWR from "swr";

export default function LottieContainer(props: {
  placeholder?: StaticImageData;
  alt?: string;
  lottiePath: string;
  className?: string;
}) {
  const { placeholder, lottiePath, alt, className } = props;
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data } = useSWR(
    shouldFetch ? "api/?lottie=" + lottiePath : null,
    (url) => fetch(url).then((r) => r.json())
  );

  useLayoutEffect(() => {
    setShouldFetch(true);
  }, [setShouldFetch]);

  return (
    <div className={className}>
      {!!(placeholder && alt) && (
        <Image src={placeholder} alt={alt} className={data ? "hidden" : ""} />
      )}
      <Lottie loop play animationData={data?.lottie} />
    </div>
  );
}
