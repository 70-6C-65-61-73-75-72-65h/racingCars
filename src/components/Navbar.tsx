import React, { ReactElement } from "react";
import { ReactComponent as Home } from "./nav-home.svg";
import { ReactComponent as Garage } from "@static/icons/nav-category.svg";
import { ReactComponent as ServiceMenu } from "@static/icons/nav-payment.svg";
import { ReactComponent as Racers } from "@static/icons/nav-group.svg";
import { ReactComponent as Calculator } from "@static/icons/nav-calculator.svg";
import { ReactComponent as Settings } from "@static/icons/nav-settings.svg";
import MainIcon from "@static/icons/main-icon.svg";

interface Props {}

export const MenuItem = ({ icon: Icon, label }) => (
  <li className="navbar-main__item">
    <div className="navbar-main__item-icon">
      {/* <img src={icon} alt="" /> */}
      <Icon />
    </div>
    <a className="navbar-main__item-label">{label}</a>
  </li>
);

export default function Navbar({}: Props): ReactElement {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__header">
          <span className="navbar__header-icon">
            <img src={MainIcon} alt="" />
          </span>
          <span className="navbar__header-title">iffee</span>
        </div>

        <div className="navbar-main">
          <div className="navbar-main__header">Menu</div>
          <ul className="navbar-main__container">
            <MenuItem label={"Home"} icon={Home} />
            <MenuItem label={"Garage"} icon={Garage} />
            <MenuItem label={"ServiceMenu"} icon={ServiceMenu} />
            <MenuItem label={"Racers"} icon={Racers} />
            <MenuItem label={"Calculator"} icon={Calculator} />
            <MenuItem label={"Settings"} icon={Settings} />
          </ul>
        </div>
      </div>
    </nav>
  );
}
