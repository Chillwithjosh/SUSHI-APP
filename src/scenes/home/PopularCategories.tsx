import Ellipse from "@/assets/Ellipse.png";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  image: string;
  title: string;
  description: string;
};

const PopularCategories = ({ image, title, description }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="flex h-[246px] w-[246px] flex-col items-center rounded-[40px] bg-white shadow-4xl transition duration-300 hover:scale-125"
    >
      <div className="relative mb-6 mt-10">
        <img src={Ellipse} width={95} height={95} className="" />
        <img
          src={image}
          width={75}
          height={75}
          className="absolute top-0 ml-2 pt-2"
        />
      </div>
      <p className="mb-0 text-[25px] font-[600] text-[#1E1E1E]">{title}</p>
      <p className="text-[14px] font-[500] text-[#555]">{description}</p>
    </motion.div>
  );
};

export default PopularCategories;
