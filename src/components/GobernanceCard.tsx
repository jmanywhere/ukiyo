"use client";
import classNames from "classnames";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
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
    <div className="max-w-[1440px]">
      <div className="h-[2px] max-w-[1440px] w-full absolute hidden md:block bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-6"></div>
      <div className="flex flex-col gap-4  lg:gap-16 md:flex-row md:justify-center md:px-14">
        {cardsArray.map(({ title, text, aText }, i) => (
          <div key={`governance-${i}-${title}`}>
            <div className="flex items-center mb-5 relative bg-transparent">
              <div
                className={classNames(
                  "rounded-full text-white text-3xl font-extrabold py-2 px-[18px]",
                  i % 2 === 0 ? "bg-light-orange  " : "bg-light-blue"
                )}
              >
                {i + 1}
              </div>
              <div className="h-[2px] w-full bg-gradient-to-r from-gray-300 to-transparent md:hidden"></div>
            </div>
            <div className="pr-[70px] md:pr-0">
              <h4 className="text-[15.53px] font-semibold mb-5">{title}</h4>
              <p className="text-[11.648px] mb-5">{text}</p>
              <a
                className={classNames(
                  "text-[13.58px] flex items-center font-medium text-center mb-5",
                  i % 2 === 0 ? "text-light-orange" : "text-light-blue"
                )}
              >
                {aText}
                <BsArrowRightShort className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GobernanceCard;
