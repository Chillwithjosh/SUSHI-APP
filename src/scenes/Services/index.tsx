import { motion } from "framer-motion";
import { SelectedPage, ServiceType } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Service from "./Service";
import ShoppingCart from "@/assets/ShoppingCart.png";
import time from "@/assets/time.png";
import GiftCard from "@/assets/GiftCard.png";
import salad from "@/assets/salad.png";

const ServiceCategories: Array<ServiceType> = [
  {
    image: salad,
    title: "CATERING",
    description: "Delight your guests with our flavors and  presentation",
  },
  {
    image: time,
    title: "FAST DELIVERY",
    description: "We deliver your order promptly to your door",
  },
  {
    image: ShoppingCart,
    title: "ONLINE ORDERING",
    description: "Explore menu & order with ease using our Online Ordering ",
  },
  {
    image: GiftCard,
    title: "GIFT CARDS",
    description: "Give the gift of exceptional dining with Foodi Gift Cards",
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

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section className="mt-[10px] px-10 pt-14 sm:mt-[100px] lg:px-24">
      <motion.div
        id="services"
        className="grid grid-cols-1 gap-x-[150px] md:grid-cols-2"
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
      >
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* LEFT */}
          <p className="pt-4 text-[13px] font-[700] text-[#F63B3B] sm:text-[20px] md:mb-10">
            OUR STORY & SERVICES
          </p>
          <p className="mb-6 text-[30px] font-[700] text-[#000] sm:text-[60px] sm:leading-[70px]">
            Our Culinary Journey And Services
          </p>
          <p className="mb-6 text-[18px] font-[500] leading-[40px] text-[#555] sm:w-[100%] sm:text-[24px]">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <button className="mb-10 mt-4 rounded-full bg-[#39DB4A] px-8 py-4 font-[600] text-[#fff] transition duration-200 hover:shadow-3xl sm:text-[26px] sm:leading-[44.33px] ">
              <AnchorLink
                className=""
                onClick={() => setSelectedPage(SelectedPage.Menu)}
                href={`#${SelectedPage.Menu}`}
              >
                Explore
              </AnchorLink>
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {/* RIGHT */}
          <div className=" grid max-w-[500px] grid-cols-1 gap-x-16 gap-y-12 sm:ml-0 sm:grid-cols-2">
            {ServiceCategories.map((ServiceCategory: ServiceType) => (
              <Service
                key={ServiceCategory.title}
                image={ServiceCategory.image}
                title={ServiceCategory.title}
                description={ServiceCategory.description}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
