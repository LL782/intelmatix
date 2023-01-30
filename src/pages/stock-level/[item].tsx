import { StockData } from "@/types/StockData";
import { StockPage } from "../../components/StockPage";
import { EXPECTED_ITEMS } from "@/config/expectedItems";
import Error from "next/error";
import { getData } from "@/api/getData";

interface Props {
  data: StockData;
}

const Page = ({ data }: Props) => <StockPage data={data} />;

export async function getStaticPaths() {
  return {
    paths: EXPECTED_ITEMS.map((item) => ({ params: { item } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { item } = params;
  const { status, data } = getData(item);

  if (status !== 200) {
    return <Error statusCode={404} />;
  }

  return { props: { data } };
}

export default Page;
