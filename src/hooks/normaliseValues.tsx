interface Props {
  range: {
    min: number;
    max: number;
  };
  value: number;
}

export const normaliseValues = ({ range: { min, max }, value }: Props) => {
  if (value === min) return 0;
  if (value === max) return 1;
  const rangeSize = max - min;
  const result = value / rangeSize - min / rangeSize;
  return Number(result.toFixed(3));
};
