import { example } from "@/examples/stockData";
import { StockData } from "@/types/StockData";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StockData>
) {
  res.status(200).json(example);
}
