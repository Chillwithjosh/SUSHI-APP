import React from "react";
import { useSwiper } from "swiper/react";
import SushiSalad3 from "@/assets/SushiSalad3.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {};

const SwiperNavButton = (props: Props) => {
  const swiper = useSwiper();

  return (
    <div className="mb-[100px] flex">
      <button
        className="mr-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#EFEFEF] text-[25px] hover:bg-[#39DB4A] hover:text-white"
        onClick={() => swiper.slidePrev()}
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EFEFEF] text-[25px] hover:bg-[#39DB4A] hover:text-white"
        onClick={() => swiper.slideNext()}
      >
        <MdKeyboardArrowRight className="" />
      </button>
    </div>
  );
};

export default SwiperNavButton;
