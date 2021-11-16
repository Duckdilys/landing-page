import ContainerBanner from "../components/Home/ContainerBanner/ContainerBanner";
import Product from "../components/Home/Product/Product";
import News from "../components/Home/News/News";
import Partner from "../components/Home/Partner/Partner";
import { getHomePageById } from "../config/ApiHomePage";
import axiosConfig from "../service/base";
import { getProductsByCondition } from "../service/getProducts";
import getNewsByCondition from "../service/getNews";
import getPartnerCondition from "../service/getPartners";
export default function Home({ news, products, banner, partners }) {
  return (
    <>
      <ContainerBanner banner={banner} />
      <Product product={products} />
      <News news={news} />
      <Partner partners={partners}/>
    </>
  );
}

export const getStaticProps = async () => {
  const bannerData = await axiosConfig({
    url: getHomePageById(1),
  });
  const product = await getProductsByCondition(1, 4);
  const news = await getNewsByCondition(1, 4, "");
  const partners = await getPartnerCondition(1, 10);
  console.log(partners);
  if (bannerData.code >= 400 || product.code >= 400 || news.code >= 400 || partners.code >= 400) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      news: news.result.items.map((post) => {
        return {
          ...post,
          created_at: new Date(post.created_at).toLocaleDateString("vi-VN"),
        };
      }),
      products: product.result.items,
      banner: bannerData,
      partners: partners.result.items
    },
    revalidate: 60, // revalidate data from server after 60 seconds
  };
};
