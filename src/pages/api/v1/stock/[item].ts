import type { NextApiRequest, NextApiResponse } from "next";
import { StockData } from "@/types/StockData";
import { example } from "@/examples/stockData/example";
import { pickle } from "@/examples/stockData/pickle";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StockData | {}>
) {
  const {
    query: { item },
  } = req;
  let data = {};
  let status = 200;

  console.log(example);

  switch (item) {
    case "example":
      data = example;
      break;

    case "pickle":
      data = pickle;
      break;

    default:
      data = {};
      status = 404;
      break;
  }

  res.status(status).json(data);
}
