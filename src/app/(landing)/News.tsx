import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";

const News = async () => {
  const recentNews =
    await client.fetch(groq`*[_type == "blog"] | order(publishedAt desc){
      title,
      slug,
      publishedAt,
      intro
    }[0...5]`);

  console.log(recentNews);

  return <div>news stuff</div>;
};

export default News;
