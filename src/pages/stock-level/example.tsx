import Head from "next/head";

import { ItemSelector } from "@/components/ItemSelector";
import { Chart } from "@/components/Chart";
import { Modal } from "@/components/Modal";

const ExampleStockPage = () => (
  <>
    <Head>
      <title>Stock Control - Example - Intelmatix x LL782</title>
      <meta name="description" content="Example application" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Modal>
      <ItemSelector />
      <Chart />
    </Modal>
  </>
);

export default ExampleStockPage;
