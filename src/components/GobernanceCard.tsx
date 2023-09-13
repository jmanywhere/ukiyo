"use client";
import classNames from "classnames";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
//images
import num1 from "../assets/images/oneimg.svg";
import num2 from "../assets/images/twoimg.svg";
import num3 from "../assets/images/treeimg.svg";

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
    <div className="flex flex-col gap-4">
      {cardsArray.map(({ title, text, aText }, i) => (
        <div key={`governance-${i}-${title}`}>
          <div className="flex items-center">
            <div
              className={classNames(
                "rounded-full text-white text-3xl font-extrabold py-2 px-5 mb-5",
                i % 2 === 0 ? "bg-light-orange  " : "bg-light-blue"
              )}
            >
              {i + 1}
            </div>
            <div className="h-[2px] w-full bg-gradient-to-r from-gray-300 to-transparent rounded-full"></div>
          </div>
          <h4 className="text-[15.53px] font-semibold">{title}</h4>
          <p className="text-[11.648px]">{text}</p>
          <a
            className={classNames(
              "text-xl",
              i % 2 === 0 ? "text-light-orange" : "text-light-blue"
            )}
          >
            {aText}
            <HiArrowLongRight />
          </a>
        </div>
      ))}
    </div>
  );
};

export default GobernanceCard;
