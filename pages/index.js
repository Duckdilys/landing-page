import ContainerBanner from "../components/Home/ContainerBanner/ContainerBanner";
import Product from "../components/Home/Product/Product";
import News from "../components/Home/News/News";
import Partner from "../components/Home/Partner/Partner";
import { getHomePage, getHomePageById } from "../config/ApiHomePage";
import axiosConfig from "../service/base";
import { getProductsByCondition } from "../service/getProducts";
import getNewsByCondition from "../service/getNews";
import getPartnerCondition from "../service/getPartners";
import { checkUserIsBot } from "../util";
import { BreadCrumbScript } from "../components/container";
import { DataImageProduct } from "../components/container/DataImageProduct/DataImageProduct";
export default function Home({ news, products, banner, partners, highlightPosts }) {
  return (
    <>
      <BreadCrumbScript
        dataElement={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Xem tất cả",
            href: "/news",
          },
          ...news.map((item) => {
            return {
              name: item.title,
              href: `/news/${item.id}`,
            };
          }),
        ]}
        title={"MH Solution - Giải pháp 4.0"}
      />
      <ContainerBanner banner={banner} />
      <Product product={products}/>
      <News highlightPosts={highlightPosts} news={news} />
      <Partner partners={partners} />
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  const userIsBot = checkUserIsBot(req);

  const bannerDataHandler = await axiosConfig({
    url: getHomePage,
    method: 'POST',
    data: {
      page: 1,
      page_size: 3
    }
  });
  const product = await getProductsByCondition(1, 4);
  const news = await getNewsByCondition(1, 3, "", {
    sorts: [
      {
        property: "created_at",
        direction: "DESC"
      }
    ]
  });
  console.log(news?.result?.items);
  const partners = await getPartnerCondition(1, 10);
  const highlightPosts = await getNewsByCondition(0, 3, "", {
    sorts: [
      {
        property: "created_at",
        direction: "DESC",
      },
    ],
    filters: [
      {
        name: 'is_highlights',
        operation: 'eq',
        value: 1
      }
    ]
  });
  if (
    product.code >= 400 ||
    news.code >= 400 ||
    partners.code >= 400 ||
    highlightPosts.code >= 400 ||
    bannerDataHandler.code >= 400
  ) {
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
      products: product.result.items || [],
      banner: bannerDataHandler?.result?.items || "",
      partners: partners.result.items || [],
      isDisabledAnimation: userIsBot,
      image_products: DataImageProduct || [],
      highlightPosts: highlightPosts
    },
  };
};
