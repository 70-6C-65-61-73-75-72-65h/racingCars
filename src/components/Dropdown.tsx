import classNames from "@src/utils/classNames";
import React, { ReactElement, useEffect, useRef, useState } from "react";

interface DropdownChoice {
  value: string;
  label: string;
}

interface Props {
  choices: DropdownChoice[];
  //   className?: string;
  classNameIcon?: string;
  icons?: any;
  classNameSelected?: string;
  classNameChoices?: string;
  chosen?: DropdownChoice;
  setChosen?: any;
}

const noneSelection = "None";

export default function Dropdown({
  choices,
  //   className,
  classNameIcon,
  icons,
  classNameSelected,
  classNameChoices,
  chosen,
  setChosen,
}: Props): ReactElement {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  // const [selection, setSelection] = useState(null);

  useEffect(() => {
    document.addEventListener("click", handleOuterClick);
    return () => {
      document.removeEventListener("click", handleOuterClick);
    };
  });

  // useEffect(() => {
  //   if (selection !== null) onClick && onClick();
  // }, [chosen]);

  const handleDropdownClick = (ev) => {
    ev.preventDefault();
    choices.length > 0 && setOpen(!open);
  };

  const handleOuterClick = (ev) => {
    open &&
      dropdownRef.current &&
      !dropdownRef.current.contains(ev.target) &&
      setOpen(false);
  };

  const mapValueToChoice = (value: string) =>
    choices.find((choice) => choice.value === value);

  const handleChoiceClick = (ev) => {
    ev.preventDefault();

    const value = ev.target.dataset.value;
    const choice = mapValueToChoice(value);

    setChosen(choice?.value ? choice : null);
    // setSelection(choice?.value ? choice : null);
    setOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__selection" onClick={handleDropdownClick}>
        <div
          className={classNames([
            "dropdown__selection-value",
            classNameSelected,
          ])}
        >
          {chosen?.label ?? noneSelection}
        </div>
        <div
          className={classNames(["dropdown__selection-icon", classNameIcon])}
        >
          <img src={open ? icons.opened : icons.closed} alt="" />
        </div>
      </div>
      <ul
        className={classNames([
          "dropdown__choices",
          open && "open",
          classNameChoices,
        ])}
        ref={dropdownRef}
      >
        {choices.map((choice, i) => (
          <li
            className="dropdown__item"
            key={i}
            data-value={choice.value}
            onClick={handleChoiceClick}
          >
            {choice.label}
          </li>
        ))}
      </ul>{" "}
    </div>
  );
}
