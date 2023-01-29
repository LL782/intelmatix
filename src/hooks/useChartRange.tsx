interface UseChartRange {
  min: number;
  max: number;
}

const TEN = 10;

export const useChartRange = ({ max, min }: UseChartRange) => {
  return {
    max: roundMax(max),
    min: roundMin(min),
  };
};

function roundMax(max: number) {
  const oneLevelUp = max + TEN;
  const roundedUp = Math.ceil(max / TEN) * TEN;

  return alreadyRound(max) ? oneLevelUp : roundedUp;
}

function roundMin(min: number) {
  const oneLevelDown = min - TEN;
  const roundedDown = Math.floor(min / TEN) * TEN;

  const result = alreadyRound(min) ? oneLevelDown : roundedDown;

  const neverNegative = Math.max(0, result);

  return neverNegative;
}

function alreadyRound(n: number) {
  return n % TEN === 0;
}
