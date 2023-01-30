import Head from "next/head";
import { ItemBar } from "@/components/ItemBar";
import { Chart } from "@/components/Chart";
import { Modal } from "@/components/Modal";
import { StockData } from "@/types/StockData";

export const StockPage = ({ data }: { data: StockData }) => (
  <>
    <Head>
      <title>{`Stock Control - ${data.itemName} - Intelmatix x LL782`}</title>
      <meta name="description" content="Example application" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Modal>
      <ItemBar data={data} />
      <Chart data={data} />
    </Modal>
  </>
);
