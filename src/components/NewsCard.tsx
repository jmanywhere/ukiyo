import { BsArrowRightShort } from "react-icons/bs";

type newsProps = {
  cards: {
    title: string;
    date: string;
    text: string;
    href: string;
  }[];
};

const NewsCard = (props: newsProps) => {
  const { cards } = props;

  const cardsArray = [...cards];
  return (
    <div className="grid grid-cols-1 gap-5 lg:gap-10">
      {cardsArray.map(({ title, date, text, href }, i) => (
        <div
          key={`news-${i}-${title}`}
          className="bg-white shadow-xl rounded-3xl py-10 px-3 relative"
        >
          <a className="absolute right-5" href={href}>
            <BsArrowRightShort className="text-4xl" />
          </a>
          <div className="pr-12 pl-3">
            <h2 className="text-xl md:text-[26px] font-bold md:font-medium mb-8 md:mb-12">
              {title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <p className="font-medium mb-8 ">{date}</p>
              <p className="text-[15.53px] ">{text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
