import Image from "next/image";

type cardProps = {
  title: string;
  text: string;
  img: StaticImageData | string;
  placeholder: string;
  btnTxt: string;
  href: string;
};

const FortuneCard = (props: cardProps) => {
  const { title, text, img, placeholder, btnTxt, href } = props;
  return (
    <div className="rounded-3xl border-slate-300/80 border-[1px] overflow-hidden px-5 py-8">
      <Image src={img} alt="imgage" />
      <h3 className="py-2 text-2xl">{title}</h3>
      <p className="text-light-grey">{text}</p>
      <div className="join border-0 py-4">
        <input
          type="text"
          className="input join-item rounded-full transparent bg-transparent border-white/20 placeholder:text-light-gray placeholder:text-xs h-auto font-normal mr-[1px] border-r-0"
          placeholder={placeholder}
        />
        <div className="join-item rounded-r-full bg-transparent  border-white/20 p-2 border-l-0 border-[1px]">
          <a
            className="btn rounded-full font-bold text-lg bg-pink-orange text-black border-[1px] text-white "
            href={href}
          >
            {btnTxt}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FortuneCard;
