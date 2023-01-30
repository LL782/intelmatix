const INCREMENT = 10;

interface Props {
  min: number;
  max: number;
}

export const generateYAxisGuides = ({ min, max }: Props) => {
  const result = [];
  let current = min;

  while (current <= max) {
    result.push(current);
    current += INCREMENT;
  }

  return result;
};
