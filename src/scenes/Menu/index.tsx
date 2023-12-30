import { BestDishType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import BestDishes from "./BestDishes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import SushiSalad1 from "@/assets/SushiSalad1.png";
import SushiSalad2 from "@/assets/SushiSalad2.png";
import SushiSalad3 from "@/assets/SushiSalad3.png";
import SwiperNavButton from "./SwiperNavButton";

const BestDishesArray: Array<BestDishType> = [
  {
    image: SushiSalad1,
    title: "Best Sushi Salad",
    description: "Description of the item",
    cost: "10.00",
    rating: "4.9",
  },
  {
    image: SushiSalad2,
    title: "Zen Zest Sashimi Salad",
    description: "Description of the item",
    cost: "22.00",
    rating: "4.0",
  },
  {
    image: SushiSalad3,
    title: "Seaside Sushi Salad ",
    description: "Description of the item",
    cost: "18.00",
    rating: "3.9",
  },
  {
    image: SushiSalad1,
    title: "Best Sushi Salad",
    description: "Description of the item",
    cost: "10.00",
    rating: "4.9",
  },
  {
    image: SushiSalad2,
    title: "Zen Zest Sashimi Salad",
    description: "Description of the item",
    cost: "22.00",
    rating: "4.0",
  },
  {
    image: SushiSalad3,
    title: "Seaside Sushi Salad ",
    description: "Description of the item",
    cost: "18.00",
    rating: "3.9",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Menu = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      id="menu"
      className="mt-[50px] px-10 pt-14 sm:mt-[135px] sm:pt-0 lg:px-24"
      onViewportEnter={() => setSelectedPage(SelectedPage.Menu)}
    >
      {/* TOP PART CONTAINER */}
      <motion.div
        className="md:mb-[-160px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="text-center md:inline-block md:text-left">
          <p className="text-[13px] font-[700] tracking-[3.08px] text-[#F63B3B] sm:text-[22px] ">
            SPECIAL DISHES
          </p>
          <p className="mb-14 text-[30px] font-[700] text-[#000] sm:mb-[10] sm:text-[60px] sm:leading-[70px] md:mb-20">
            Best Dishes <br /> From Our Menu
          </p>
        </div>
      </motion.div>
      <motion.div
        className="hidden md:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={3}
          slidesPerView={3}
          className="flex w-[80%] flex-col"
        >
          <div className="md:order-[-2] md:ml-[890px]">
            <SwiperNavButton />
          </div>
          {BestDishesArray.map((Bestdish: BestDishType) => (
            <SwiperSlide className="pb-4">
              <div className="">
                <BestDishes
                  key={Bestdish.title}
                  image={Bestdish.image}
                  title={Bestdish.title}
                  description={Bestdish.description}
                  cost={Bestdish.cost}
                  rating={Bestdish.rating}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <motion.div
        className="hidden sm:block md:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={3}
          slidesPerView={2}
          className="flex w-[95%] flex-col"
        >
          <div className="sm:ml-[260px] sm:mt-2">
            <SwiperNavButton />
          </div>
          {BestDishesArray.map((Bestdish: BestDishType) => (
            <SwiperSlide className="pb-4">
              <div className="">
                <BestDishes
                  key={Bestdish.title}
                  image={Bestdish.image}
                  title={Bestdish.title}
                  description={Bestdish.description}
                  cost={Bestdish.cost}
                  rating={Bestdish.rating}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <motion.div
        className="block sm:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={3}
          slidesPerView={1}
          className="flex w-[98%] flex-col"
        >
          <div className="ml-[90px] mt-2">
            <SwiperNavButton />
          </div>
          {BestDishesArray.map((Bestdish: BestDishType) => (
            <SwiperSlide className="pb-4">
              <div className="">
                <BestDishes
                  key={Bestdish.title}
                  image={Bestdish.image}
                  title={Bestdish.title}
                  description={Bestdish.description}
                  cost={Bestdish.cost}
                  rating={Bestdish.rating}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Menu;
