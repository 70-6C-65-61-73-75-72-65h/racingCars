import { renameCurrentYear } from "./utils/renameCurrentYear";

export const popupDiv = document.getElementById("popup");

// +(new Date()).getFullYear() === year => "This Year"
// lastMonthDiff:

export const acceptableYears = [
  { value: "2020", label: renameCurrentYear("2020") },
  { value: "2021", label: renameCurrentYear("2021") },
];

export interface IRaceData {
  year: string;
  month: string;
  count: number;
}

export const racesData: IRaceData[] = [
  { year: acceptableYears[0].value, month: "Jan", count: 12 },
  { year: acceptableYears[0].value, month: "Feb", count: 23 },
  { year: acceptableYears[0].value, month: "Mar", count: 42 },
  { year: acceptableYears[0].value, month: "Apr", count: 12 },
  { year: acceptableYears[0].value, month: "May", count: 23 },
  { year: acceptableYears[0].value, month: "Jun", count: 13 },
  { year: acceptableYears[0].value, month: "Jul", count: 14 },
  { year: acceptableYears[0].value, month: "Aug", count: 16 },
  { year: acceptableYears[0].value, month: "Sep", count: 45 },
  { year: acceptableYears[0].value, month: "Oct", count: 12 },
  { year: acceptableYears[0].value, month: "Nov", count: 23 },
  { year: acceptableYears[0].value, month: "Dec", count: 32 },
  { year: acceptableYears[1].value, month: "Jan", count: 12 },
  { year: acceptableYears[1].value, month: "Feb", count: 24 },
  { year: acceptableYears[1].value, month: "Mar", count: 25 },
  { year: acceptableYears[1].value, month: "Apr", count: 24 },
  { year: acceptableYears[1].value, month: "May", count: 43 },
  { year: acceptableYears[1].value, month: "Jun", count: 48 },
  { year: acceptableYears[1].value, month: "Jul", count: 44 },
  { year: acceptableYears[1].value, month: "Aug", count: 41 },
  { year: acceptableYears[1].value, month: "Sep", count: 46 },
  { year: acceptableYears[1].value, month: "Oct", count: 25 },
  { year: acceptableYears[1].value, month: "Nov", count: 28 },
  { year: acceptableYears[1].value, month: "Dec", count: 21 },
];

export const racesSheduled = [
  {
    competition: "MotoGP 2022",
  },
  {
    competition: "Dynamics 22",
  },
  {
    competition: "Olympics",
  },
];

export const chartBlockMax = 70;
