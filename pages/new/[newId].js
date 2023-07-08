import React from "react";
import { useRouter } from "next/router";
import {
  BreadCrumb,
  LayoutContainer,
  Grid,
  BreadCrumbScript,
} from "../../components/container";
import { checkUserIsBot } from "../../util";
import styles from "../../components/DetailBlog/style/styles.module.scss";
import DetailBlog from "../../components/DetailBlog/DetailBlog";
import Share from "../../components/DetailBlog/Share/Share";
import OtherNews from "../../components/DetailBlog/OtherNews/OtherNews";
import axiosConfig from "../../service/base";
import { getNewById, getNewsApi } from "../../config/ApiNews";
import { getNews } from "../../service";
import Slide from "../../components/Home/News/Slide/Slide";
import useMedia from "../../hook/use-media";
import { getIdBySeoId, getSeoId } from '../../util/convertString/convertString';
const BlogDetail = ({ data, related_news, hot_news }) => {
  const isMobile = useMedia("(max-width: 768px)");
  const router = useRouter();
  return (
    <>
      <BreadCrumbScript
        imageContent={data?.cover_url}
        description={data?.title}
        keywords={`news,${data?.title || ""}`}
        title={`${data?.title} | MH - Digital`}
        dataElement={[
          ...related_news?.map((item) => {
            return {
              name: item?.title,
              href: `/new/${getSeoId(item)}`,
            };
          }),
          ...hot_news.map((item) => {
            return {
              name: item?.title,
              href: `/new/${getSeoId(item)}`,
            };
          }),
          {
            name: data?.title,
            href: `/new/${getSeoId(data)}`,
          },
        ]}
      ></BreadCrumbScript>
      <LayoutContainer className={styles["container-detail"]}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <BreadCrumb
              isMobile={isMobile}
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
            <h4 className={`text-start ${styles.title}`}>{data?.title}</h4>
            <DetailBlog data={data?.content} />
            <Share data={data} />
            <OtherNews data={related_news} />
          </div>
          <div className={styles.bg}>
            <h4 className="text-start">Tin tức nổi bật</h4>
            <Grid className={styles["grid-near"]}>
              {hot_news?.map((item) => {
                return (
                  <Slide
                    contentClassName={styles.text}
                    className={styles.news}
                    key={item.id}
                    src={item?.cover_url}
                    id={item?.id}
                    title={item?.title}
                    type={item?.category?.title}
                    seo_id={item.seo_id}
                  />
                );
              })}
            </Grid>
          </div>
        </div>
      </LayoutContainer>
    </>
  );
};

export const getServerSideProps = async ({ req, query }) => {
  const userIsBot = checkUserIsBot(req);
  const { newId: seoId } = query;
  const newId = getIdBySeoId(seoId);
  const postDetail = await axiosConfig({
    url: getNewById(+newId),
  });
  const { category_new_id } = postDetail?.result;
  const postRelated = await getNews(0, 3, "", {
    filters: [
      {
        name: "category_new_id",
        operation: "eq",
        value: category_new_id,
      },
      {
        name: "is_highlights",
        operation: "eq",
        value: 0,
      },
    ],
  });
  const getHotNews = await axiosConfig({
    url: getNewsApi,
    method: "POST",
    data: {
      page: 1,
      page_size: 3,
      sorts: [
        {
          property: "created_at",
          direction: "DESC",
        },
      ],
      filters: [
        {
          name: "is_highlights",
          operation: "eq",
          value: 1,
        },
      ],
    },
  });
  if (
    postDetail.code >= 400 ||
    postRelated.code >= 400 ||
    getHotNews.code >= 400
  ) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: postDetail.result,
      related_news: postRelated?.result?.items,
      isDisabledAnimation: userIsBot,
      hot_news: getHotNews?.result?.items,
    },
  };
};
export default BlogDetail;
