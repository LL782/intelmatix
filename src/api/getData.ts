import { example } from "@/examples/stockData/example";
import { pickle } from "@/examples/stockData/pickle";
import { example2 } from "@/examples/stockData/example2";

export function getData(item: string | string[] | undefined) {
  let data = {};
  let status = 200;

  switch (item) {
    case "example":
      data = example;
      break;

    case "pickle":
      data = pickle;
      break;

    case "lettuce":
      data = example2;
      break;

    case "cheese":
      data = example2;
      break;

    case "bun":
      data = example2;
      break;

    case "patty":
      data = example2;
      break;

    default:
      data = {};
      status = 404;
      break;
  }
  return { status, data };
}
