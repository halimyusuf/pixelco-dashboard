import Slope1 from "../public/dash card/slope1.jpg";
import Slope2 from "../public/dash card/slope2.jpg";
import Slope3 from "../public/dash card/slope3.jpg";
import gradientLine from "../public/dash card/line.svg";

export const cardsContent = [
  {
    label: "Total Balance",
    price: 19750,
    change: "11.19",
    positive: true,
    slope: Slope1,
    slopePath: "slope1",
    gradientLine: gradientLine,
  },
  {
    label: "Total Expense",
    price: 11375,
    change: "20.91",
    positive: false,
    slope: Slope2,
    slopePath: "slope2",
    gradientLine: gradientLine,
  },
  {
    label: "Total Savings",
    price: 100000,
    change: "21.17",
    positive: true,
    slope: Slope3,
    slopePath: "slope3",
    gradientLine: gradientLine,
  },
];
