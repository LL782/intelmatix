import { Inter } from "@next/font/google";
import Head from "next/head";
import styles from "@/styles/StockLevel.module.css";

const inter = Inter({ subsets: ["latin"] });

const ExampleStockPage = () => (
  <>
    <Head>
      <title>Stock Control - Example - Intelmatix x LL782</title>
      <meta name="description" content="Example application" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <h2 className={inter.className}>Let's go</h2>
    </main>
  </>
);

export default ExampleStockPage;
