import React from "react";
import SwiperBackground from "../../components/News/SwiperBackground/SwiperBackground";
import ListNews from '../../components/News/ListNews/ListNews';
export const data = {
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
        },
        {
            type: 'Truyền thông',
            title: 'báo cáo hiệu quả truyền thông online “Rap Việt”',
            url: '/new-banner.png'
        }
    ],
    news: [
        {
            name: 'báo cáo xếp hạng các chương trình truyền hình việt nam',
            date: new Date().toLocaleDateString('vi-vn'),
            type: 'truyền thông',
            url_cover: '/Rectangle 134.png'
        },
        {
            name: 'báo cáo xếp hạng các chương trình truyền hình việt nam',
            date: new Date().toLocaleDateString('vi-vn'),
            type: 'trung tâm vas',
            url_cover: '/Rectangle 134.png'
        },
        {
            name: 'báo cáo xếp hạng các chương trình truyền hình việt nam',
            date: new Date().toLocaleDateString('vi-vn'),
            type: 'dashboard',
            url_cover: '/Rectangle 134.png'
        },
        {
            name: 'báo cáo xếp hạng các chương trình truyền hình việt nam',
            date: new Date().toLocaleDateString('vi-vn'),
            type: 'truyền thông',
            url_cover: '/Rectangle 134.png'
        },
        {
            name: 'báo cáo xếp hạng các chương trình truyền hình việt nam',
            date: new Date().toLocaleDateString('vi-vn'),
            type: 'dashboard',
            url_cover: '/Rectangle 134.png'
        },
        {
            name: 'báo cáo xếp hạng các chương trình truyền hình việt nam',
            date: new Date().toLocaleDateString('vi-vn'),
            type: 'trung tâm vas',
            url_cover: '/Rectangle 134.png'
        },
    ]
};
const News = ({data}) => {
  return (
    <>
      <SwiperBackground posts={data.posts}/>
      <ListNews news={data.news}/>
    </>
  );
};

export const getServerSideProps = async (context) => {
    return {
        props: {
            data: data
        }
    }
}
export default News;
