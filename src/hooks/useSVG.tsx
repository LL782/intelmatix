import { ChartDay } from "@/examples/chartDays";

interface Props {
  chartDays: ChartDay[];
  gutterWidthPercentage: number;
  aspectRatio: number;
}

const START = 0;
const X_END = 1000;

export const useSVG = ({
  chartDays,
  gutterWidthPercentage,
  aspectRatio,
}: Props) => {
  const numDays = chartDays.length;
  const numPoints = numDays + 1;
  const xIncrement = X_END / numDays;
  const xPoints = [START];

  let xPointer = START;
  let yPointer = START;
  let actualLine = "0,0";
  let projectedLine = "";

  chartDays.forEach(({ normalised: { type, demand } }) => {
    if (type !== "today") {
      xPointer += xIncrement;
    }

    yPointer += demand;

    if (type === "actual") {
      actualLine += ` ${xPointer},${yPointer}`;
    } else {
      projectedLine += ` ${xPointer},${yPointer}`;
    }
  });

  xPointer += xIncrement;
  projectedLine += ` ${xPointer},${yPointer}`;

  return {
    viewBox: `${START} ${START} ${X_END} 1000`,
    actualLine,
    projectedLine: projectedLine.trimStart(),
  };
};
