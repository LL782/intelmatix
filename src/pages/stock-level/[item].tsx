import { StockData } from "@/types/StockData";
import { StockPage } from "../../components/StockPage";
import { EXPECTED_ITEMS } from "@/config/expectedItems";

interface Props {
  data: StockData;
}

const Page = ({ data }: Props) => <StockPage data={data} />;

export default Page;

export async function getStaticPaths() {
  return {
    paths: EXPECTED_ITEMS.map((item) => ({ params: { item } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { item } = params;
  const res = await fetch(`${process.env.API_ROUTES_URL}/stock/${item}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
