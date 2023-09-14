import Image, { StaticImageData } from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";

type ecoProps = {
  title: string;
  text: string;
  image: StaticImageData | string;
  altText: string;
};

const EcoCard = (props: ecoProps) => {
  const { title, text, image, altText } = props;
  return (
    <div className="bg-white rounded-3xl flex flex-col lg:flex-row items-center py-10 px-4 justify-between w-full lg:px-12  lg:py-16">
      <Image
        src={image}
        alt={altText}
        className="mb-10 max-w-[140px] md:max-w-full lg:order-1 lg:max-w-[120px] xl:max-w-full "
      />
      <div className="text-black flex flex-col items-center lg:items-start lg:mr-3 lg:max-w-[50%]">
        <h2 className="text-2xl font-medium mb-3">{title}</h2>
        <p className="text-sm font-medium mb-6 text-center lg:text-left lg:text-base">
          {text}
        </p>
        <a className="btn rounded-full font-bold text-3xl bg-light-orange text-white border-[1px] border-white/20 h-[38px] max-w-[calc(50%)] w-full">
          <HiArrowLongRight />
        </a>
      </div>
    </div>
  );
};

export default EcoCard;
