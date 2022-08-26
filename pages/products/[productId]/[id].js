import React, { Fragment } from "react";
import Image from "next/image";
import {
  BannerPage,
  TextImage,
  Button,
  BreadCrumbScript,
  Line,
} from "../../../components/container";
import styles from '../../../components/Products/Banner.module.scss';
import Introduction from "../../../components/Products/Introduction/Introduction";
import Product from "../../../components/Home/Product/Product";
import { checkUserIsBot } from "../../../util";
import { getProductById } from "../../../config/ApiProducts";
import axiosConfig from "../../../service/base";
import BannerLanding from "../../../components/Products/BannerLanding/BannerLanding";
import { apiGetProducts } from "../../../config/ApiProducts";
import useMedia from "../../../hook/use-media";
import { SerializeNormal } from "../../../util";
const Products = ({ data_product, other_products }) => {
  const isMobile = useMedia("(max-width: 991px");
  return (
    <>
      <BreadCrumbScript
        title={`${data_product.title} || MH-Solution`}
        dataElement={[
          {
            name: data_product.title,
            href: `/products/${data_product.id}`,
          },
          {
            name: "Website",
            href: data_product.website,
          },
        ]}
        keywords={`product,mhsolution,MH Solution,${data_product?.title || ""}`}
      />
      <BannerPage
        title={data_product?.title || "Không có dữ liệu"}
        classNameBanner={styles.banner}
        classNameBox={styles.box}
        style={{
          background: `url('${
            data_product?.cover_url || "/banner_product_2.png"
          }')`,
        }}
      />
      <TextImage
        mainTitle={"Thông tin chi tiết"}
        title={
          data_product?.contents
            ? SerializeNormal(data_product?.contents[0]?.content)
            : "Không có dữ liệu"
        }
        src={
          data_product?.contents
            ? data_product?.contents[0]?.src
            : "/Products.png"
        }
        aosImage="fade-right"
        iconImage={null}
        classImage={styles["text-image"]}
        classText={styles["text-banner"]}
        classNameContainer={styles.container}
        className={`${styles["container-text"]} flex-row-reverse`}
        aos="fade-left"
      />
      <Introduction
        aos="fade-left"
        title="Chúng tôi cung cấp giải pháp với các ưu điểm vượt trội"
        src={data_product?.info_url || "/product_intro_1.png"}
        imageConfig={{
          "data-aos": "fade-right",
        }}
        imageClassName={styles.image}
        className={styles.introduction}
      >
        {data_product?.infos?.length > 0 ? (
          data_product?.infos?.map((item, index) => {
            return (
              <Fragment key={index}>
                <h5>{item.title}</h5>
                <p>{item.content}</p>
              </Fragment>
            );
          })
        ) : (
          <p className="text-center">Không có dữ liệu</p>
        )}
      </Introduction>
      <BannerLanding
        website={data_product?.website}
        isLanding={data_product?.landing_page}
      />
      <Product
        className={`${styles.background}`}
        classNameContainer={`${styles["container-product"]} ${
          other_products?.length <= 3 && !isMobile && styles.flex}`}
        product={other_products}
        title="sản phẩm khác của chúng tôi"
        classNameGrid={styles.grid}
      />
    </>
  );
};

export const getServerSideProps = async ({ req, params }) => {
  const userIsBot = checkUserIsBot(req);
  const { productId } = params;

  const data_product = await axiosConfig({
    url: getProductById(productId),
  })

  const all_products = await axiosConfig({
    url: apiGetProducts,
    method: "POST",
    data: {
      page_size: 4,
    },
  });

  if (data_product.code >= 400 || all_products.code >= 400) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      isDisabledAnimation: userIsBot,
      data_product: data_product?.result,
      other_products: all_products?.result?.items?.filter((item) => {
        return +item.id !== +productId;
      })
    },
  };
};
export default Products;
