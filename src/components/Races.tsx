import React, { ReactElement, useEffect, useState } from "react";
import vectorDown from "@static/icons/down-vector.svg";
import vectorUp from "@static/icons/up-vector.svg";
import Dropdown from "./Dropdown";
import { acceptableYears, chartBlockMax } from "@src/constants";
import { fetchRacesByYear, setYear } from "@src/reducers/races";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "@src/reducers";
import ChartBlock from "./ChartBlock";

import diffIncrease from "@static/icons/differ-indicator-up.svg";
import diffDecrease from "@static/icons/differ-indicator-down.svg";
import classNames from "@src/utils/classNames";
interface Props {}

export default function Races({}: Props): ReactElement {
  const dispatch = useDispatch();

  const [diffCurrent, setDiff] = useState(0);
  // initially "Jan"
  const [currentMonth, setCurrentMonth] = useState(0);
  const [countRacesCurrent, setCountRaces] = useState(0);
  const { raceList, chosenYear, maxMonthCount } = useTypedSelector(
    (state) => state.Races
  );

  useEffect(() => {
    if (chosenYear) {
      // (2) then we fetch races
      dispatch(fetchRacesByYear(chosenYear.value));
    }
  }, [chosenYear]);

  const onRaceMonthChosen = (ev) => {
    setCurrentMonth(+ev.currentTarget.dataset["id"]);
    setDiff(+ev.currentTarget.dataset["pdp"]);
    setCountRaces(+ev.currentTarget.dataset["count"]);
  };

  // console.log(maxMonthCount);

  return (
    <section className="races card">
      <div className="races__container">
        <div className="races__header">
          <div className="races__title">Races</div>
          <Dropdown
            icons={{ opened: vectorUp, closed: vectorDown }}
            choices={acceptableYears}
            // (1) firstly we set year
            setChosen={(year) => dispatch(setYear(year))}
            chosen={chosenYear}
          />
        </div>
      </div>
      <div className="races__content">
        <div className="races__info">
          <div className="races__info-count">{countRacesCurrent}</div>
          <div className={classNames(["races__info-difference"])}>
            <img src={diffCurrent < 0 ? diffDecrease : diffIncrease} alt="" />
            <span className={classNames(["races__info-difference-percent"])}>
              {diffCurrent && diffCurrent.toFixed(1)} %
            </span>
          </div>
        </div>
        <div className="races__chart chart">
          <div className="chart__container">
            {raceList && maxMonthCount
              ? raceList.map((r, index) => (
                  <div className="chart__item" key={index}>
                    <ChartBlock
                      blockColor={
                        index === currentMonth ? "#7947F7" : "#F5F0FF"
                      }
                      dataCount={r.count}
                      dataId={index}
                      // if first month ( === 0%)
                      dataPrevdifferpercent={
                        index === 0
                          ? 0
                          : ((r.count - raceList[index - 1].count) /
                              raceList[index - 1].count) *
                            100
                      }
                      className="chart__block"
                      onClick={onRaceMonthChosen}
                      height={Math.floor(
                        (r.count / maxMonthCount) * chartBlockMax
                      )}
                    />
                    <div className="chart__month">{r.month}</div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}
