import { PopularCategoryType, SelectedPage } from "@/shared/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import PLayButton from "@/assets/PLayButton.png";
import MAINSUSHI from "@/assets/MAINSUSHI.png";
import BelowSushi from "@/assets/BelowSushi.png";
import BestSushiEver from "@/assets/BestSushiEver.png";
import PopularCategories from "./PopularCategories";
import SushiCombo from "@/assets/SushiCombo.png";
import Maindish2 from "@/assets/Maindish2.png";
import BreakFast from "@/assets/BreakFast.png";
import BrowseAll from "@/assets/BrowseAll.png";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";

const PopularCategorys: Array<PopularCategoryType> = [
  {
    image: Maindish2,
    title: "Main Dish",
    description: "(86 dishes)",
  },
  {
    image: BreakFast,
    title: "Break Fast",
    description: "(12 break fast)",
  },
  {
    image: SushiCombo,
    title: "Sushi Combo",
    description: "(Combo of 6)",
  },
  {
    image: BrowseAll,
    title: "Browse All",
    description: "(255 Items)",
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

const Home = ({ setSelectedPage }: Props) => {
  const [shown, setShown] = React.useState(false);

  return (
    <section
      id="home"
      className=" pb-30 w-auto px-10  pt-[77px] sm:pt-[160px] lg:px-24"
    >
      <motion.div
        className="mb-20 mt-16 grid grid-cols-1 lg:grid-cols-3"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* LEFT */}
        <div className="col-span-2 text-center md:text-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h1 className="mb-7 text-[30px] font-extrabold sm:mb-14 sm:text-[62px]">
              Sushi Bliss, Every <br /> Roll a Flavorful{" "}
              <span className="text-green">Kiss</span>
            </h1>
            <p className="leading-2 mb-5 text-[11px] font-[500] text-ash sm:mb-10 sm:text-[26px] sm:leading-[44.33px]">
              Masters of Maki: Elevate Your Taste Buds with Our Sushi <br />
              Creations, Where Tradition Meets Innovation!
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <button className="mt-4 rounded-full bg-[#39DB4A] px-8 py-4 font-[600] text-[#fff] transition duration-200 hover:shadow-3xl sm:text-[26px] sm:leading-[44.33px]">
                <AnchorLink
                  className=""
                  onClick={() => setSelectedPage(SelectedPage.Menu)}
                  href={`#${SelectedPage.Menu}`}
                >
                  Order Now
                </AnchorLink>
              </button>
            </div>

            <p className="ml-3 mt-6 font-[600] leading-[44.33px]  text-[#606060] sm:ml-10 sm:mt-8 sm:block sm:text-[20px]">
              Watch Video
            </p>
            <img
              alt="PlayButton"
              src={PLayButton}
              className=" mt-5 h-[70px] w-[70px] cursor-pointer sm:h-[115px] sm:w-[115px]"
              onClick={() => setShown(!shown)}
            />
          </motion.div>
          <div className="flex justify-center">
            {shown ? (
              <VideoModal
                title="Sushi Video"
                src="https://www.youtube.com/embed/OZWRM2WG8Kg"
              />
            ) : null}
          </div>
        </div>
        {/* RIGHT */}
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative ">
            <img src={MAINSUSHI} className="z-20" />
            <img
              src={BestSushiEver}
              width={200}
              height={200}
              className="absolute top-0 sm:left-[60px] sm:top-[120px] md:top-[0]"
            />
            <img
              src={BelowSushi}
              className="absolute top-[235px] z-10 sm:top-[500px] md:top-[310px]"
            />
          </div>
        </motion.div>
      </motion.div>
      <div>
        <div className="text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-[13px] font-[700] tracking-[3.08px] text-[#F63B3B] sm:text-[22px]">
              CUSTOMER FAVORITES
            </p>
            <p className="mb-14 text-[30px] font-[700] text-[#000] sm:mb-10 sm:text-[60px]">
              Popular Categories
            </p>
          </motion.div>
          <div className="flex justify-center sm:block">
            <motion.div
              className="grid grid-cols-1 gap-y-14 sm:ml-[75px] sm:grid-cols-2 md:grid-cols-4 md:gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={container}
            >
              {PopularCategorys.map((PopularCategory: PopularCategoryType) => (
                <PopularCategories
                  key={PopularCategory.title}
                  image={PopularCategory.image}
                  title={PopularCategory.title}
                  description={PopularCategory.description}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
