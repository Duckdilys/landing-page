import React, { Fragment } from "react";
import Image from "next/image";
import { BannerPage, TextImage, Button } from "../../components/container";
import styles from "../../components/Products/Banner.module.scss";
import Introduction from "../../components/Products/Introduction/Introduction";
import Product from "../../components/Home/Product/Product";
import dataFake from "../../components/Home/Product/FakeData/FakeData";
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
const Products = ({ data }) => {
  return (
    <>
      <BannerPage
        title="Giải pháp về hạ tầng và phân tích dữ liệu"
        classNameBanner={styles.banner}
        classNameBox={styles.box}
      />
      {data.line_content.map((content, index) => {
        return (
          <TextImage
            key={index}
            mainTitle={content.main_title}
            title={content.title}
            src={content.url}
            aosImage="fade-left"
            iconImage={null}
            classNameContainer={styles.container}
            className="flex-row-reverse"
            aos="fade-right"
          />
        );
      })}
      <Introduction
        aos="fade-left"
        title="chúng tôi đã làm gì?"
        src={"/product_intro_1.png"}
        imageConfig={{
          "data-aos": "fade-right",
        }}
      >
        {data.introduction.map((item, index) => {
          return (
            <Fragment key={index}>
              <h5>{item.title}</h5>
              <p>{item.content}</p>
            </Fragment>
          );
        })}
      </Introduction>
      <Introduction
        imageConfig={{ "data-aos": "fade-left" }}
        className={styles.information}
        src={"/product_intro_1.png"}
      >
        <div data-aos="fade-right" data-aos-delay={500} data-aos-offset={300}>
          <h5>Bạn muốn biết thêm thông tin?</h5>
          <p className={styles.title}>
            Nếu muốn biết thêm thông tin chi tiết, vui lòng liên hệ theo số điện
            thoại hoặc truy cập đường link dưới đây:
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
      <Product
        className={styles.background}
        classNameContainer={styles["container-product"]}
        product={data.other_products}
        title="sản phẩm khác của chúng tôi"
        classNameGrid={styles.grid}
      />
    </>
  );
};

export const getStaticProps = async (context) => {
  return {
    props: {
      data: data,
    },
  };
};
export default Products;
