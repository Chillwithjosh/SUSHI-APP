import { SelectedPage } from "@/shared/types";
import BestChef from "@/assets/BestChef.png";
import Customer from "@/assets/Customer.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section className="px-10 lg:px-24 md:mt-40">
      <motion.div
        id="aboutus"
        className="grid grid-cols-1 md:grid-cols-2"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
      >
        <motion.div
          className="flex justify-center"
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
          <img
            src={BestChef}
            width={550}
            height={550}
            className="ml-[40px] sm:ml-[115px] md:ml-0"
          />
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* RIGHT */}
          <p className="pt-4 text-[13px] font-[700] text-[#F63B3B] sm:text-[20px] md:mb-10">
            TESTIMONIALS
          </p>
          <p className="mb-6 text-[30px] font-[700] text-[#000] sm:text-[60px] sm:leading-[70px]">
            What Our Customers Say About Us
          </p>
          <p className="mb-6 text-[18px] font-[500] leading-[40px] text-[#555] sm:w-[100%] sm:text-[24px]">
            “I had the pleasure of dining at Sushi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </p>
          <div className="flex justify-center">
            <img src={Customer} width={350} height={350} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
