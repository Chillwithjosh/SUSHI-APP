import Star from "@/assets/star2.png";
import heart from "@/assets/heart.svg";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  image: string;
  title: string;
  description: string;
  cost: string;
  rating: string;
};

const BestDishes = ({ image, title, description, cost, rating }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="flex h-[366px] w-[320px] flex-col items-center rounded-[40px] bg-white shadow-md transition duration-300 hover:scale-105"
    >
      <div className="ml-[270px] h-[50px] w-[50px] rounded-bl-[22px] rounded-tr-[22px] bg-green">
        {/* LIKE BUTTON */}
        <img src={heart} className="pl-[12px] pt-[10px]" />
        {/* <HeartIcon /> */}
      </div>
      <div>
        {/* IMAGE */}
        <img src={image} className="h-[150px] w-[150px]" />
      </div>
      <div>
        {/* DESCRIPTION */}
        <p className="mb-2 mt-6  text-[22px] font-[700] text-[#000]">{title}</p>
        <p className="mb-6 text-[13px] font-[600] text-[#555] opacity-80">
          {description}
        </p>
      </div>
      <div className="flex justify-around gap-[133px]">
        {/* TAGS */}
        <p className=" text-[25px]  font-[700] text-[#000]">
          <span className="text-[15px] text-[#FF6868]">$</span>
          {cost}
        </p>

        <div className="mt-[3px] flex">
          <div className="mt-1">
            <img src={Star} width={20} height={20} />
          </div>
          <p className="text-[20px] text-[#464646] opacity-80">{rating}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BestDishes;
