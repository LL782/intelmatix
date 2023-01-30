import { ChartDay } from "@/types/ChartDay";

interface Props {
  chartDays: ChartDay[];
  gutterWidthPercentage: number;
  aspectRatio: number;
}

interface DrawHorizontalLine {
  pointerState: string;
  actualLine: string;
  xPointer: number;
  yPointer: number;
  projectedLine: string;
}

const START = 0;
const X_END = 1000;

export const useSVG = ({
  chartDays,
  gutterWidthPercentage,
  aspectRatio,
}: Props) => {
  const Y_END = X_END * aspectRatio;
  const numDays = chartDays.length;
  const gutterWidth = (gutterWidthPercentage / 100) * X_END;
  let gutterOffset = gutterWidth / 2;
  const totalGutterWidth = (numDays - 1) * gutterWidth;
  const xIncrement = (X_END - totalGutterWidth) / numDays;
  let xPointer = START;
  let yPointer = START;
  let pointerState: string;

  const getY = (demand: number) => (1 - demand) * Y_END;

  let actualLine = `0,${getY(chartDays[0].normalised.demand)}`;
  let projectedLine = "";

  chartDays.forEach(({ normalised: { type, demand } }, index) => {
    if (pointerState === "actual" && type !== "actual") {
      pointerState = type;
      projectedLine += `${xPointer},${yPointer}`;
    }

    yPointer = getY(demand);

    if (index === 0) {
      pointerState = type;

      xPointer = xIncrement;

      actualLine += ` ${xPointer},${yPointer}`;
      return;
    }

    xPointer += gutterWidth;

    const p1 = `${xPointer},${yPointer}`;

    if (chartDays.length === index + 1) {
      gutterOffset = 0;
    }

    xPointer += xIncrement;

    const p2 = `${xPointer},${yPointer}`;

    if (pointerState === "actual") {
      actualLine += ` ${p1} ${p2}`;
    } else {
      projectedLine += ` ${p1} ${p2}`;
    }
  });

  return {
    viewBox: `${START} ${START} ${X_END} ${X_END * aspectRatio}`,
    actualLine: actualLine.trimStart(),
    projectedLine: projectedLine.trimStart(),
  };
};
