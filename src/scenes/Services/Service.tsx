import { motion } from "framer-motion";

type Props = {
  image: string;
  title: string;
  description: string;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Service = ({ image, title, description }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="flex h-[245px] w-[245px] cursor-pointer flex-col items-center rounded-[40px] bg-white text-center shadow-4xl transition duration-300 hover:scale-125"
    >
      <div className="mb-5 mt-[40px]">
        <img src={image} width={60} height={60} />
      </div>
      <p className="mb-1 text-[20px] font-[700] text-[#5FE26C]">{title}</p>
      <p className="w-[65%] text-[14px] font-[700] text-[#90BD95]">
        {description}
      </p>
    </motion.div>
  );
};

export default Service;
