import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { PortableTextBlock } from "sanity";
import Image from "next/image";

const News = async () => {
  const recentNews =
    await client.fetch(groq`*[_type == "blog"] | order(publishedAt desc){
      blogTitle,
      blogSlug,
      publishDate,
      intro,
      url
    }[0...5]`);

  return (
    <section className="w-full pt-8 lg:pt-16 flex flex-col items-center  relative overflow-hidden px-2 md:px-24 xl:px-28">
      <div className="max-w-[1440px] w-full z-10 px-3 md:px-10">
        <h3 className="pl-4 md:pl-0 text-3xl md:text-[56px] lg:text-8xl text-dark-text z-10 whitespace-pre-wrap md:leading-[4rem] lg:leading-[5.5rem] pb-1 w-full">
          In the news
        </h3>
      </div>
      <div className="z-10">
        <div className="flex flex-col md:flex-row gap-4 md:gap-7 justify-between z-10">
          <div className="px-0 sm:px-2 md:px-10 flex flex-col gap-4 pb-0 md:pb-32 pt-5 md:pt-8 lg:pt-12 items-center">
            {recentNews?.[0] && (
              <NewsCard
                title={recentNews[0].blogTitle}
                slug={recentNews[0].blogSlug.current}
                intro={recentNews[0].intro}
                date={recentNews[0].publishDate}
                url={recentNews[0].url}
                acId="recent-news"
              />
            )}
            {recentNews[1] && (
              <NewsCard
                title={recentNews[1].blogTitle}
                slug={recentNews[1].blogSlug.current}
                intro={recentNews[1].intro}
                date={recentNews[1].publishDate}
                url={recentNews[1].url}
                acId="recent-news"
              />
            )}
            {recentNews[2] && (
              <NewsCard
                title={recentNews[2].blogTitle}
                slug={recentNews[2].blogSlug.current}
                intro={recentNews[2].intro}
                date={recentNews[2].publishDate}
                url={recentNews[2].url}
                acId="recent-news"
              />
            )}
          </div>
          <div className="flex-grow min-w-[1px] max-w-[1px] bg-dark-text/20 hidden md:flex" />
          <div className="px-0 sm:px-2 md:px-10 flex flex-col gap-4 pb-12 md:pb-32 pt-0 md:pt-8 lg:pt-12 items-center">
            {recentNews[3] && (
              <NewsCard
                title={recentNews[3].blogTitle}
                slug={recentNews[3].blogSlug.current}
                intro={recentNews[3].intro}
                date={recentNews[3].publishDate}
                url={recentNews[3].url}
                acId="recent-news"
              />
            )}
            {recentNews[4] && (
              <NewsCard
                title={recentNews[4].blogTitle}
                slug={recentNews[4].blogSlug.current}
                intro={recentNews[4].intro}
                date={recentNews[4].publishDate}
                url={recentNews[4].url}
                acId="recent-news"
              />
            )}
            {recentNews[5] && (
              <NewsCard
                title={recentNews[5].blogTitle}
                slug={recentNews[5].blogSlug.current}
                intro={recentNews[5].intro}
                date={recentNews[5].publishDate}
                url={recentNews[5].url}
                acId="recent-news"
              />
            )}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-[100vw] px-[calc((100vw-90vw)/2)]">
        <Image
          src="/backgrounds/Electronic_Paths.png"
          alt="electronics"
          width={1478}
          height={584}
          className="w-[100vw] h-auto z-0 pointer-events-none rotate-180"
        />
      </div>
    </section>
  );
};

export default News;

import { PortableText } from "@portabletext/react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import format from "date-fns/format";

const NewsCard = (props: {
  title: string;
  date: string;
  intro: PortableTextBlock[];
  slug: string;
  acId: string;
  url?: string;
}) => {
  return (
    <div className="border-[1px] border-dark-text/20 bg-almost-white p-2 md:p-8 rounded-2xl min-w-[235px] max-w-[525px] w-full">
      <div className="collapse">
        <input type="radio" name={props.acId} className="peer" />
        <div className="collapse-title pr-0 text-light-orange peer-checked:text-almost-white">
          <div className="flex flex-row justify-between items-center pb-2">
            <div className="text-light-orange text-sm font-semibold">
              {format(new Date(props.date), "MMM dd, yyyy")}
            </div>
            <BsFillPlusCircleFill className="text-2xl" />
          </div>
          <h4 className="text-dark-text text-md font-medium max-w-[90%]">
            {props.title}
          </h4>
        </div>
        <div className="collapse-content text-gray-600/90 font-light text-base">
          <PortableText value={props.intro} />
          {props.url && (
            <a
              href={props.url}
              target="_blank"
              rel="noreferrer"
              className="text-right block btn-link font-base uppercase font-medium text-light-orange mt-2"
            >
              Read more
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
