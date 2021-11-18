import React from "react";
import { useRouter } from "next/router";
import {
  BannerPage,
  BreadCrumb,
  LayoutContainer,
} from "../../components/container";
import { checkUserIsBot } from "../../util";
import styles from "../../components/DetailBlog/style/styles.module.scss";
import DetailBlog from "../../components/DetailBlog/DetailBlog";
import Share from "../../components/DetailBlog/Share/Share";
import OtherNews from "../../components/DetailBlog/OtherNews/OtherNews";
import axiosConfig from "../../service/base";
import { getNewById } from "../../config/ApiNews";
import {getNews} from '../../service';

const BlogDetail = ({ data, related_news }) => {
  const router = useRouter();
  return (
    <>
      <BannerPage
        classNameBox={styles.container}
        classNameBanner={styles.banner}
        style={{ background: `url('/Banner_detail.png')` }}
        title={data?.title}
      />
      <LayoutContainer className={styles["container-detail"]}>
        <BreadCrumb
          paths={[
            {
              name: "Tin Tức",
              link: "/news",
              color: true,
            },
            {
              name: data.category?.title,
              path: router.pathname,
            },
          ]}
          date={new Date(data?.created_at).toLocaleDateString("vi-vn")}
          className={styles["bread-crumb"]}
        />
        <DetailBlog data={data?.content} />
        <Share />
        <OtherNews data={related_news}/>
      </LayoutContainer>
    </>
  );
};

export const getServerSideProps = async ({ req, query }) => {
  const userIsBot = checkUserIsBot(req);
  const { id } = query;
  const postDetail = await axiosConfig({
    url: getNewById(+id),
  });
  const postRelated = await getNews(0, 4, "", {
    filters: [
      {
        name: "category_new_id",
        operation: "eq",
        value: id
      }
    ]
  });
  if (postDetail.code >= 400) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: postDetail.result,
      related_news: postRelated?.result?.items,
      isDisabledAnimation: userIsBot,
    },
  };
};
export default BlogDetail;
