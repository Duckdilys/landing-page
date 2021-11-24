import React, { Fragment } from "react";
import Image from "next/image";
import {
  BannerPage,
  TextImage,
  Button,
  BreadCrumbScript,
} from "../../components/container";
import styles from "../../components/Products/Banner.module.scss";
import Introduction from "../../components/Products/Introduction/Introduction";
import Product from "../../components/Home/Product/Product";
import dataFake from "../../components/Home/Product/FakeData/FakeData";
import { checkUserIsBot } from "../../util";
import { getProductById } from "../../config/ApiProducts";
import axiosConfig from "../../service/base";
import BannerLanding from "../../components/Products/BannerLanding/BannerLanding";
import { apiGetProducts } from "../../config/ApiProducts";
const data = {
  introduction: [
    {
      title: "#1 Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra purus eget felis, tristique morbi tellus. Non eros tellus orci, sollicitudin convallis diam quam et.",
    },
    {
      title: "#1 Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra purus eget felis, tristique morbi tellus. Non eros tellus orci, sollicitudin convallis diam quam et.",
    },
    {
      title: "#1 Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus viverra purus eget felis, tristique morbi tellus. Non eros tellus orci, sollicitudin convallis diam quam et.",
    },
  ],
  other_products: dataFake.filter((item, index) => {
    return index !== dataFake.length - 1;
  }),
  title_banner: "Giải pháp về hạ tầng và phân tích dữ liệu",
  line_content: [
    {
      main_title: "Thông tin chi tiết",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor egestas tempus elementum nulla. Non suspendisse vulputate leo tempor, nisi sit massa, ut tincidunt. Rhoncus maecenas mauris turpis facilisi lacus pharetra. Pretium scelerisque eget egestas volutpat volutpat malesuada. Aliquam nibh neque leo consectetur vitae leo.",
      url: "/Products.png",
    },
  ],
};
const Products = ({ data_product, other_products }) => {
  console.log(other_products);
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
      />
      <BannerPage
        title={data_product?.title || "Không có dữ liệu"}
        classNameBanner={styles.banner}
        classNameBox={styles.box}
      />
      <TextImage
        mainTitle={"Thông tin chi tiết"}
        title={
          data_product?.infos[0]
            ? data_product?.infos[0].title
            : "Không có dữ liệu"
        }
        src={"/Products.png"}
        aosImage="fade-left"
        iconImage={null}
        classNameContainer={styles.container}
        className="flex-row-reverse"
        aos="fade-right"
      />
      <Introduction
        aos="fade-left"
        title="chúng tôi đã làm gì?"
        src={"/product_intro_1.png"}
        imageConfig={{
          "data-aos": "fade-right",
        }}
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
      {data_product.landing_page && (
        <Introduction
          imageConfig={{ "data-aos": "fade-left" }}
          className={styles.information}
          src={"/product_intro_1.png"}
          childrenClassName={styles.text}
        >
          <div data-aos="fade-right" data-aos-delay={500} data-aos-offset={300}>
            <h5>Bạn muốn biết thêm thông tin?</h5>
            <p className={styles.title}>
              Nếu muốn biết thêm thông tin chi tiết, vui lòng liên hệ theo số
              điện thoại hoặc truy cập đường link dưới đây:
            </p>
            <div
              className={`d-flex align-items-center justify-content-between ${styles["information-box"]}`}
            >
              <div className={`d-flex align-items-center ${styles.content}`}>
                <Image
                  src={"/Icon/phone-black-icon.svg"}
                  alt=""
                  width="24"
                  height="24"
                />
                <span>0975-718-168</span>
              </div>
              <Button>truy cập đến trang web</Button>
            </div>
          </div>
        </Introduction>
      )}
      {!data_product.landing_page && <BannerLanding />}
      <Product
        className={styles.background}
        classNameContainer={styles["container-product"]}
        product={other_products}
        title="sản phẩm khác của chúng tôi"
        classNameGrid={styles.grid}
      />
    </>
  );
};

export const getServerSideProps = async ({ req, params }) => {
  const userIsBot = checkUserIsBot(req);
  const { id } = params;

  const data_product = await axiosConfig({
    url: getProductById(id),
  });

  const all_products = await axiosConfig({
    url: apiGetProducts,
    method: "POST",
    data: {
      page_size: 4
    },
  });

  if (data_product.code >= 400 || all_products.code >= 400) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data,
      isDisabledAnimation: userIsBot,
      data_product: data_product?.result,
      other_products: all_products?.result?.items?.filter(item => {
        return +item.id !== +id;
      })
    },
  };
};
export default Products;
