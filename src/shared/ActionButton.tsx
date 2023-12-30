import React from "react";
import { SelectedPage } from "./types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  Icon?: JSX.Element;
};

const ActionButton = ({ children, setSelectedPage, Icon }: Props) => {
  return (
    <AnchorLink
      className="box py- rounded-full bg-green px-6 py-4 font-medium text-white"
      onClick={() => setSelectedPage(SelectedPage.footer)}
      href={`#${SelectedPage.footer}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
