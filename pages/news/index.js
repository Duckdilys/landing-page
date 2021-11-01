import React from "react";
import SwiperBackground from "../../components/News/SwiperBackground/SwiperBackground";

const data = {
    posts: [
        {
            type: 'Truyền thông',
            title: 'báo cáo hiệu quả truyền thông online “Rap Việt”',
            url: '/new-banner.png'
        },
        {
            type: 'Truyền thông',
            title: 'báo cáo hiệu quả truyền thông online “Rap Việt”',
            url: '/new-banner.png'
        },
        {
            type: 'Truyền thông',
            title: 'báo cáo hiệu quả truyền thông online “Rap Việt”',
            url: '/new-banner.png'
        }
    ]
}
const News = ({data}) => {
  return (
    <>
      <SwiperBackground posts={data.posts}/>
    </>
  );
};

export const getStaticProps = async (context) => {
    return {
        props: {
            data: data
        }
    }
}
export default News;
