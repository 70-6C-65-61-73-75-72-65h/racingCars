import React, { ReactElement, useEffect, useState } from "react";
import vectorDown from "@static/icons/down-vector.svg";
import vectorUp from "@static/icons/up-vector.svg";
import Dropdown from "./Dropdown";
import { acceptableYears } from "@src/constants";
import { fetchRacesByYear, setYear } from "@src/reducers/races";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "@src/reducers";
import ChartBlock from "./ChartBlock";

import diffIncrease from "@static/icons/differ-indicator-up.svg";
import diffDecrease from "@static/icons/differ-indicator-down.svg";
import classNames from "@src/utils/classNames";
interface Props {}

export default function Races({}: Props): ReactElement {
  //   const [openYearCatalog, setopenYearCatalog] = useState(false);

  const dispatch = useDispatch();

  const [diffCurrent, setDiff] = useState(0);
  const [countRacesCurrent, setCountRaces] = useState(0);
  const { raceList, chosenYear, maxMonthCount } = useTypedSelector(
    (state) => state.Races
  );

  //   fetchRacesByYear;
  // useEffect(() => {
  //     setCountRaces()
  // }, [raceList])

  useEffect(() => {
    if (chosenYear) {
      // (2) then we fetch races
      dispatch(fetchRacesByYear(chosenYear.value));
    }
  }, [chosenYear]);

  const onRaceMonthChosen = (ev) => {
    const count = ev.target.dataset.count;
    const diffPerc = ev.target.dataset.prevDifferPercent;
    setDiff(diffPerc);
    setCountRaces(count);
  };

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
            // (1) firstly we set year
            setChosen={(year) => dispatch(setYear(year))}
            chosen={chosenYear}
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
          <div className="races__info-count">{countRacesCurrent}</div>
          <div
            className={classNames([
              "races__info-difference",
              // diffCurrent < 0 ? "decreasing" : "increasing",
            ])}
          >
            <img src={diffCurrent < 0 ? diffDecrease : diffIncrease} alt="" />
            {diffCurrent.toFixed(1)} %
          </div>
        </div>
        <div className="races__chart chart">
          {raceList && maxMonthCount
            ? raceList.map((r, index) => (
                <div className="chart__item" key={index}>
                  <ChartBlock
                    data-count={r.count}
                    // if first month ( === 0%)
                    data-prevDifferPercent={
                      index === 0
                        ? 0
                        : ((r.count - raceList[index - 1].count) /
                            raceList[index - 1].count) *
                          100
                    }
                    blockColor="#7947F7"
                    className="chart__block"
                    onClick={onRaceMonthChosen}
                    height={Math.floor((r.count / maxMonthCount) * 100)}
                  />
                  <div className="chart__month">{r.month}</div>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
