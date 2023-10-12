import Image, { type StaticImageData } from "next/image";
import { LiaTelegram } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";

type cardProps = {
  title: string;
  text: string;
  img: StaticImageData | string;
  emailHref: string;
};

const FortuneCard = (props: cardProps) => {
  const { title, text, img, emailHref } = props;
  return (
    <div className="rounded-3xl border-slate-300/80 border-[1px] overflow-hidden px-5 py-8 text-white">
      <Image src={img} alt="image" />
      <h3 className="pt-6 pb-3 text-2xl text-white">{title}</h3>
      <p className="text-light-grey pb-8">{text}</p>
      <div className="flex flex-col justify-center items-start gap-2">
        <div>Contact Us:</div>
        <div className="flex items-center gap-4">
          <a
            className="btn rounded-full font-bold text-lg bg-light-orange border-[1px] text-white hover:bg-light-grey-bg hover:text-secondary"
            href={emailHref}
          >
            <HiOutlineMail />
          </a>
          <a
            className="btn rounded-full font-bold bg-light-orange border-[1px] text-white hover:bg-light-grey-bg hover:text-secondary px-3"
            href="https://t.me/ukiyo_protocol"
          >
            <LiaTelegram className="text-xl mr-[1px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FortuneCard;
