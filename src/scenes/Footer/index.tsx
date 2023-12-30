import LOGO from "@/assets/LOGO.png";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

type Props = {};

const Footer = (props: Props) => {
  const socialStyles =
    "mr-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#EDFFEF] transition duration-[250] hover:bg-[#39DB4A] hover:text-white";
  const linkStyles = "mb-4 cursor-pointer hover:text-green";

  return (
    <section
      id="footer"
      className="mt-[10px] px-10 pt-14 sm:mt-[100px] lg:px-24"
    >
      <div className="mb-[90px] flex flex-col text-center  sm:mb-[110px] sm:first-letter:text-start md:flex-row md:gap-40">
        <div className="flex flex-col items-center sm:items-start sm:text-start">
          <div className="mb-4 md:mb-8">
            <img src={LOGO} alt="" />
          </div>
          <p className="w-[70%] text-[#555555] sm:hidden md:block">
            Savor the artistry where every dish is a culinary masterpiece.
          </p>
        </div>
        <div className="grid gap-[30px] pt-6 text-[15px] text-[#555555] sm:grid-cols-3 sm:gap-[125px]">
          <div>
            <h1 className="mb-5 text-[23px] font-[600] text-[#000]">
              Useful links
            </h1>
            <p className={`${linkStyles}`}>About us</p>
            <p className={`${linkStyles}`}>Events</p>
            <p className={`${linkStyles}`}>Blogs</p>
            <p className={`${linkStyles}`}>FAQ</p>
          </div>
          <div>
            <h1 className="mb-5 text-[23px] font-[600] text-[#000]">
              Main Menu
            </h1>
            <p className={`${linkStyles}`}>Home</p>
            <p className={`${linkStyles}`}>Offers</p>
            <p className={`${linkStyles}`}>Menus</p>
            <p className={`${linkStyles}`}>Reservation</p>
          </div>
          <div>
            <h1 className="mb-5  text-[23px] font-[600] text-[#000]">
              Contact Us
            </h1>
            <p className={`${linkStyles}`}>sushi@gmail.com</p>
            <p className={`${linkStyles}`}>+64 345 234 657</p>
            <p className={`${linkStyles}`}>Social media</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center sm:flex-row sm:gap-[230px]">
        <div className="flex items-center justify-center sm:items-start">
          {/* LEFT */}
          <div className={`${socialStyles}`}>
            <LuFacebook className="text-[25px]" />
          </div>
          <div className={`${socialStyles}`}>
            <a href="https://www.instagram.com/chillwith_moon/">
              <FaInstagram className="text-[25px]" />
            </a>
          </div>
          <div className={`${socialStyles}`}>
            <a href="https://twitter.com/ChillwithJosh/">
              <FiTwitter className="text-[25px]" />
            </a>
          </div>
          <div className={`${socialStyles}`}>
            <a href="https://www.youtube.com/embed/OZWRM2WG8Kg">
              <FiYoutube className="text-[25px]" />
            </a>
          </div>
        </div>
        <div>
          {/* RIGHT */}
          <p className="hidden pt-4 font-[500] text-[#555555] md:block">
            Copyright &copy; 2023 ChillwithMoon | All rights reserved
          </p>
          <p className="block pt-4 font-[500] text-[#555555] md:hidden">
            Copyright &copy; 2023 ChillwithMoon <br />
            All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
