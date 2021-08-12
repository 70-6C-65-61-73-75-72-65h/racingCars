import React, { ReactElement, useEffect, useState } from "react";
import vectorDown from "@static/icons/down-vector.svg";
import vectorUp from "@static/icons/up-vector.svg";
import Dropdown from "./Dropdown";
import { acceptableYears } from "@src/constants";
import { fetchRacesByYear } from "@src/reducers/races";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "@src/reducers";

interface Props {}

export default function Races({}: Props): ReactElement {
  //   const [openYearCatalog, setopenYearCatalog] = useState(false);

  const dispatch = useDispatch();

  const { races, chosenYear } = useTypedSelector((state) => state.Races);

  //   fetchRacesByYear;

  useEffect(() => {}, []);

  return (
    <section className="races card">
      <div className="races__container">
        <div className="races__header">
          <div className="races__title">Races</div>
          <Dropdown
            // classNameSelected="races__year"
            // classNameChoices=''
            // classNameIcon="races__icon-dd"
            icons={{ opened: vectorUp, closed: vectorDown }}
            choices={acceptableYears}
          />

          {/* <div className="races__year" onClick={() => setopenYearCatalog(true)}>

            <span className={`races__year-vector`}>
              {openYearCatalog ? vectorUp : vectorDown}
            </span>
          </div> */}
        </div>
      </div>
      <div className="races__content">
        <div className="races__info">
          <div className="races__info-count"></div>
          <div className="races__info-difference"></div>
        </div>
        <div className="races__chart"></div>
      </div>
    </section>
  );
}
