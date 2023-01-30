import { StockData } from "@/types/StockData";
import { StockPage } from "../../components/StockPage";

interface Props {
  data: StockData;
}

const Page = ({ data }: Props) => <StockPage data={data} />;

const expectedPaths = ["pickle"];

export default Page;

export async function getStaticPaths() {
  return {
    paths: expectedPaths.map((item) => ({ params: { item } })),
    fallback: false,
  };
}

export async function getStaticProps({ req, params }: any) {
  const res = await fetch(`${process.env.API_ROUTES_URL}/api/stock/`);
  const data = await res.json();

  return {
    props: { data },
  };
}
