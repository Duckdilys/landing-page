import ContainerBanner from "../components/Home/ContainerBanner/ContainerBanner";
import Product from "../components/Home/Product/Product";
import News from "../components/Home/News/News";
import Partner from "../components/Home/Partner/Partner";
export default function Home() {
  return (
    <>
      <ContainerBanner />
      <Product />
      <News />
      <Partner />
    </>
  );
}
