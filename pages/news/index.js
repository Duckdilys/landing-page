import React, { useEffect, useMemo, useState } from "react";
import SwiperBackground from "../../components/News/SwiperBackground/SwiperBackground";
import ListNews from "../../components/News/ListNews/ListNews";
import { checkUserIsBot } from "../../util";
import { getNewsApi } from "../../config/ApiNews";
import useFetch from "../../hook/use-fetch";
import { useRouter } from "next/router";
import getCategoriesCondition from '../../service/getCategories';
import getNewsByCondition from "../../service/getNews";
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
const News = ({ data, categories, news }) => {
  const { isLoading, error, fetchDataFromServer, data: dataNews } = useFetch();
  const [posts, setPosts] = useState(news);
  const router = useRouter();

  const page = useMemo(() => {
    return router.query.page || 1;
  }, [router.query]);
  // useEffect(() => {
  //     fetchDataFromServer({
  //         method: 'POST',
  //         url: getNewsApi,
  //         data: {
  //             page: page,
  //             page_size: 2
  //         }
  //     });
  // }, [fetchDataFromServer, page]);
  // console.log(isLoading, error, dataNews);
  return (
    <>
      <SwiperBackground posts={data.posts} />
      <ListNews categories={categories} news={posts} isLoading={isLoading} error={error} />
    </>
  );
};

export const getServerSideProps = async ({ req, query }) => {
  const userIsBot = checkUserIsBot(req);
  const categories = await getCategoriesCondition(1, 10, '')
  const page = query?.page || 1;
  const getNewsByPage = await getNewsByCondition(page, 2, "");
  if(categories.status >= 400 || getNewsByPage.status >= 400){
    return {
      notFound: true
    }
  }

  return {
    props: {
      data: data,
      isDisabledAnimation: userIsBot,
      categories: categories?.result?.items,
      news: getNewsByPage?.result?.items?.map(item => {
        return {
          ...item,
          created_at: new Date(item.created_at).toLocaleDateString('vi-VN', {
            month: '2-digit', day: '2-digit', year: 'numeric'
          })
        }
      })
    },
  };
};
export default News;
