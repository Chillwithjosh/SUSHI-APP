import { useState } from "react";
import Link from "./Link";
import LOGO from "@/assets/LOGO.png";
import { SelectedPage } from "@/shared/types";
import {
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { RiMenu4Line } from "react-icons/ri";
import { FaSquarePhone } from "react-icons/fa6";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  Icon?: JSX.Element;
  isTopOfPage: boolean;
};

const Navbar = ({ setSelectedPage, selectedPage, isTopOfPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-white drop-shadow-xl";

  return (
    <nav>
      <div>
        {isAboveMediumScreens ? (
          <div
            className={`${navbarBackground} fixed top-0 z-30 flex w-full justify-around py-[20px]`}
          >
            {/* LEFT SIDE */}
            <div>
              <img alt="logo" src={LOGO} width={125} height={60} />
            </div>
            {/* MIDDLE SIDE */}
            <div className="mt-[20px] flex gap-10 font-[500]">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Menu"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Services"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Offers"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            {/* RIGHT SIDE */}
            <div className="mt-[20px] flex gap-4">
              <div>
                <MagnifyingGlassIcon className="h-6 w-6" />
              </div>
              <div>
                <ShoppingBagIcon className="h-6 w-6" />
              </div>
              <div>
                <AnchorLink
                  className="box py- rounded-full bg-green px-6 py-4 font-medium text-white hover:shadow-3xl"
                  onClick={() => setSelectedPage(SelectedPage.footer)}
                  href={`#${SelectedPage.footer}`}
                >
                  Contact
                </AnchorLink>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`${navbarBackground} fixed top-0 z-30 flex w-full justify-between px-10 py-[14px]`}
          >
            <div>
              <img
                alt="logo"
                src={LOGO}
                width={90}
                height={60}
                className="mt-2"
              />
            </div>
            <div>
              <button>
                <MagnifyingGlassIcon className="mr-1 h-8 w-8 pt-[6px]" />
              </button>
              <button>
                <ShoppingBagIcon className="mr-1 h-8 w-8 pt-[6px]" />
              </button>
              <AnchorLink
                onClick={() => setSelectedPage(SelectedPage.footer)}
                href={`#${SelectedPage.footer}`}
              >
                <button className="mr-1">
                  <FaSquarePhone className="h-7 w-8 text-green" />
                </button>
              </AnchorLink>
              <button
                className="mt-[7px] rounded-full"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <RiMenu4Line className="h-8 w-8 pt-[6px] text-black" />
              </button>
            </div>
          </div>
        )}
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div
          className={`fixed bottom-0 right-0 z-40 h-full w-[300px] bg-white drop-shadow-xl`}
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className="mt-[7px] rounded-full bg-white p-2"
            >
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="ml-[23%] flex flex-col gap-10 text-2xl font-[500] text-black">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Menu"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Offers"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
