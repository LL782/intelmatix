import { Source_Sans_Pro } from "@next/font/google";
import Head from "next/head";
import styles from "@/styles/StockLevel.module.css";
import { ItemSelector } from "../../components/ItemSelector";
import { Chart } from "@/components/Chart";
import { CloseButton } from "@/components/CloseButton";

const sans = Source_Sans_Pro({ subsets: ["latin"], weight: "400" });

const ExampleStockPage = () => (
  <>
    <Head>
      <title>Stock Control - Example - Intelmatix x LL782</title>
      <meta name="description" content="Example application" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={`${styles.main} ${sans.className}`}>
      <CloseButton />
      <ItemSelector />
      <Chart />
    </main>
  </>
);

export default ExampleStockPage;