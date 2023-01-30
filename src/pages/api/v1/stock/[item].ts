import type { NextApiRequest, NextApiResponse } from "next";
import { StockData } from "@/types/StockData";
import { getData } from "../../../../api/getData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StockData | {}>
) {
  const {
    query: { item },
  } = req;
  let { status, data } = getData(item);
  res.status(status).json(data);
}
