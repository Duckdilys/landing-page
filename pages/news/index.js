import React, { useEffect, useMemo } from "react";
import SwiperBackground from "../../components/News/SwiperBackground/SwiperBackground";
import ListNews from "../../components/News/ListNews/ListNews";
import { checkUserIsBot } from "../../util";
import { getNewsApi } from "../../config/ApiNews";
import useFetch from "../../hook/use-fetch";
import axiosConfig from "../../service/base";
import { useRouter } from "next/router";
export const data = {
  posts: [
    {
      type: "Truyền thông",
      title: "báo cáo hiệu quả truyền thông online “Rap Việt”",
      url: "/new-banner.png",
    },
    {
      type: "Truyền thông",
      title: "báo cáo hiệu quả truyền thông online “Rap Việt”",
      url: "/new-banner.png",
    },
    {
      type: "Truyền thông",
      title: "báo cáo hiệu quả truyền thông online “Rap Việt”",
      url: "/new-banner.png",
    },
    {
      type: "Truyền thông",
      title: "báo cáo hiệu quả truyền thông online “Rap Việt”",
      url: "/new-banner.png",
    },
  ],
  news: [
    {
      name: "báo cáo xếp hạng các chương trình truyền hình việt nam",
      date: new Date().toLocaleDateString("vi-vn"),
      type: "truyền thông",
      url_cover: "/Rectangle 134.png",
    },
    {
      name: "báo cáo xếp hạng các chương trình truyền hình việt nam",
      date: new Date().toLocaleDateString("vi-vn"),
      type: "trung tâm vas",
      url_cover: "/Rectangle 134.png",
    },
    {
      name: "báo cáo xếp hạng các chương trình truyền hình việt nam",
      date: new Date().toLocaleDateString("vi-vn"),
      type: "dashboard",
      url_cover: "/Rectangle 134.png",
    },
    {
      name: "báo cáo xếp hạng các chương trình truyền hình việt nam",
      date: new Date().toLocaleDateString("vi-vn"),
      type: "truyền thông",
      url_cover: "/Rectangle 134.png",
    },
    {
      name: "báo cáo xếp hạng các chương trình truyền hình việt nam",
      date: new Date().toLocaleDateString("vi-vn"),
      type: "dashboard",
      url_cover: "/Rectangle 134.png",
    },
    {
      name: "báo cáo xếp hạng các chương trình truyền hình việt nam",
      date: new Date().toLocaleDateString("vi-vn"),
      type: "trung tâm vas",
      url_cover: "/Rectangle 134.png",
    },
  ],
};
const News = ({ data }) => {
  const { isLoading, error, fetchDataFromServer, data: dataNews } = useFetch();
  const router = useRouter();
  const page = useMemo(() => {
    return router.query.page || 1;
  }, [router.query]);
  useEffect(() => {
      fetchDataFromServer({
          method: 'POST',
          url: getNewsApi,
          data: {
              page: page,
              page_size: 2
          }
      });
  }, [fetchDataFromServer, page]);
  return (
    <>
      <SwiperBackground posts={data.posts} />
      <ListNews news={data.news} isLoading={isLoading} error={error} />
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const userIsBot = checkUserIsBot(req);
  return {
    props: {
      data: data,
      isDisabledAnimation: userIsBot,
    },
  };
};
export default News;
