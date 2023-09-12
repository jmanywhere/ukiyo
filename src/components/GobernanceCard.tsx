import classNames from "classnames";
import Image from "next/image";
//images
import one from "../assets/images/oneimg.svg";
import two from "../assets/images/twoimg.svg";
import three from "../assets/images/treeimg.svg";

type gobProps = {
  cards: {
    title: string;
    text: string;
    aText: string;
  }[];
};

const GobernanceCard = (props: gobProps) => {
  const { cards } = props;

  const cardsArray = [...cards];
  return (
    <div>
      {cardsArray.map(({ title, text, aText }, i) => (
        <div>
          <div className="flex items-center">
            <Image src={one} alt={i + 1} />
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-light-orange to-transparent mb-6"></div>
          </div>
          <h4>{title}</h4>
          <p>{text}</p>
          <a>{aText}</a>
        </div>
      ))}
    </div>
  );
};

export default GobernanceCard;
