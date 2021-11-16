import React from "react";
import {
  BannerPage,
  BreadCrumb,
  LayoutContainer,
} from "../../components/container";
import { useRouter } from "next/router";
import styles from "../../components/DetailBlog/style/styles.module.scss";
import DetailBlog from "../../components/DetailBlog/DetailBlog";
import Share from "../../components/DetailBlog/Share/Share";
import { data as dataRelatedNews } from ".";
import OtherNews from "../../components/DetailBlog/OtherNews/OtherNews";
const dataFake = {
  title: 'báo cáo hiệu quả truyền thông online “Rap Việt"',
  type_blog: ["Truyền thông"],
  date_created: new Date().toLocaleDateString("vi-vn"),
  blog_detail: `<p>Ready for a kitchen renovation? Anxious for a bathroom remodel? The easy part is knowing your goal for home remodeling — whether you’re trying to keep up with your growing family, add office space, or increase your home’s value. For example, a kitchen generally accounts for 10 to 15 percent of the property value, so spend no more than this on kitchen renovation costs.</p> 
  <p>If your home is worth $200,000, for example, you’ll want to spend $30,000 or less. A kitchen remodel should cost no more than 10 to 15 percent of your home’s value. Photo from Offset. Something else to keep in mind: Contrary to popular belief, kitchen renovations offer among the lowest return on investment, according to analysis from Zillow Talk: The New Rules of Real Estate.</p> 
  <p>Every dollar you spend on a kitchen remodel increases the value of your home by 50 cents. Some contractors will give you an estimate based on what they think you want done, and work completed under these circumstances is almost guaranteed to cost more. You have to be very specific about what you want done, and spell it out in the contract — right down to the materials you’d like used. Make sure that contractors’ estimates include the full scope of your project.</p>
  <img src='/blog_image.png'/>
  <p>You don’t have to think twice when it comes to our team. We have pick the professional to handle their things. From expert at home living, best with visual interior to professor of civil engineering to make sure you got your best living.</p>
    <p>Ready for a kitchen renovation? Anxious for a bathroom remodel? The easy part is knowing your goal for home remodeling — whether you’re trying to keep up with your growing family, add office space, or increase your home’s value. For example, a kitchen generally accounts for 10 to 15 percent of the property value, so spend no more than this on kitchen renovation costs.</p>
    <p>If your home is worth $200,000, for example, you’ll want to spend $30,000 or less. A kitchen remodel should cost no more than 10 to 15 percent of your home’s value. Photo from Offset. Something else to keep in mind: Contrary to popular belief, kitchen renovations offer among the lowest return on investment, according to analysis from Zillow Talk: The New Rules of Real Estate.</p>
    <p>Every dollar you spend on a kitchen remodel increases the value of your home by 50 cents. Some contractors will give you an estimate based on what they think you want done, and work completed under these circumstances is almost guaranteed to cost more. You have to be very specific about what you want done, and spell it out in the contract — right down to the materials you’d like used. Make sure that contractors’ estimates include the full scope of your project.</p>
  `,
  // get that value from editor, now just assume that we have <p> tag from editors
};
const BlogDetail = ({ data, related_news }) => {
  const router = useRouter();
  return (
    <>
      <BannerPage
        classNameBox={styles.container}
        classNameBanner={styles.banner}
        style={{ background: `url('/Banner_detail.png')` }}
        title={"Báo Cáo Hiệu quả truyền thông online rap việt"}
      />
      <LayoutContainer className={styles["container-detail"]}>
        <BreadCrumb
          paths={[
            {
              name: "Tin Tức",
              link: "/news",
              color: true
            },

            ...data.type_blog.map((type) => {
              return {
                name: type.toString().toUpperCase(),
                path: "/",
              };
            }),
            ,
          ]}
          date={data.date_created}
          className={styles["bread-crumb"]}
        />
        <DetailBlog data={data.blog_detail.toString()} />
        <Share />
        <OtherNews data={related_news}/>
      </LayoutContainer>
    </>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: "blocking",
  };
};
export const getStaticProps = async (context) => {
  return {
    props: {
      data: dataFake,
      related_news: dataRelatedNews
    },
  };
};
export default BlogDetail;
