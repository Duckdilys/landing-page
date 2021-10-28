import ContainerBanner from "../components/Home/ContainerBanner/ContainerBanner";
import Product from "../components/Home/Product/Product";
import News from "../components/Home/News/News";
import Partner from "../components/Home/Partner/Partner";
import news from "../components/Home/News/DataFake";
import products from '../components/Home/Product/FakeData/FakeData';
export default function Home({ news, products }) {
  return (
    <>
      <ContainerBanner />
      <Product product={products}/>
      <News news={news} />
      <Partner />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      news,
      products: products
    },
  };
};
