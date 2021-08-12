import React, { ReactElement } from "react";
import Home from "@static/icons/nav-home.svg";
import Garage from "@static/icons/nav-category.svg";
import ServiceMenu from "@static/icons/nav-payment.svg";
import Racers from "@static/icons/nav-group.svg";
import Calculator from "@static/icons/nav-calculator.svg";
import Settings from "@static/icons/nav-settings.svg";
import MainIcon from "@static/icons/main-icon.svg";

interface Props {}

export const MenuItem = ({ icon, label }) => (
  <div className="navbar-main__item">
    <div className="navbar-main__item-icon">
      <img src={icon} alt="" />
    </div>
    <div className="navbar-main__item-label">{label}</div>
  </div>
);

export default function Navbar({}: Props): ReactElement {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__header">
          <div className="navbar__header-icon">
            <img src={MainIcon} alt="" />
          </div>
          <div className="navbar__header-title"></div>
        </div>

        <div className="navbar-main">
          <div className="navbar-main__header">Menu</div>
          <div className="navbar-main__container">
            <MenuItem label={"Home"} icon={Home} />
            <MenuItem label={"Garage"} icon={Garage} />
            <MenuItem label={"ServiceMenu"} icon={ServiceMenu} />
            <MenuItem label={"Racers"} icon={Racers} />
            <MenuItem label={"Calculator"} icon={Calculator} />
            <MenuItem label={"Settings"} icon={Settings} />
          </div>
        </div>
      </div>
    </nav>
  );
}
