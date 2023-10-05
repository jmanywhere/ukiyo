import { IoIosArrowForward } from "react-icons/io";

const SuscribeBtn = () => {
  return (
    <div className="join border-0 py-4">
      <input
        type="text"
        className="input join-item rounded-full transparent bg-grey-blue border-white/20 placeholder:text-light-gray placeholder:text-xs h-auto font-normal mr-[1px] border-r-0"
        placeholder="Subscribe to our Newsletter"
      />
      <div className="join-item rounded-r-full bg-grey-blue  border-white/20 p-2 border-l-0 border-[1px]">
        <a className="btn rounded-full font-bold text-lg bg-pink-orange text-black border-[1px] text-white ">
          <IoIosArrowForward />
        </a>
      </div>
    </div>
  );
};

export default SuscribeBtn;
