import React from "react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import paths from "../../../Navigation/path";
const BreadCrumbScript = ({
  dataElement,
  title,
  children,
  description,
  imageContent,
}) => {
  const structureList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [...paths, ...dataElement]?.map((item, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name || "",
        item: item.href || item.path || "",
      };
    }),
  };

  return (
    <Head>
      <title>{title}</title>
      {/* <script async defer crossOrigin="anonymous"="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js"></script> */}
      <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      <meta
        property="og:image"
        content={
          imageContent ||
          "https://cdn.noron.vn/2021/12/22/820b6ae8-6a93-4242-ae12-ac677ade4ae9-1640146456.jpg"
        }
      />
      <meta property="og:description" content={description || "MH Solution là công ty giải pháp tích hợp với sứ mệnh là người đồng hành tin cậy cho các doanh nghiệp tổ chức trong quá trình chuyển đổi số."} />
      <meta property="og:url" content="https://mhsolution.vn/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="fb:app_id" content="292204241285034" />
      <link rel="preload" href="/Nunito_Sans/NunitoSans-Regular.ttf" as='font' crossOrigin="anonymous"/>
      <link rel="preload" href="/Nunito_Sans/NunitoSans-Bold.ttf" as='font' crossOrigin="anonymous"/>
      <link rel="preload" href="/Nunito_Sans/NunitoSans-BoldItalic.ttf" as='font' crossOrigin="anonymous"/>
      <link rel="preload" href="/Nunito_Sans/NunitoSans-ExtraLight.ttf" as='font' crossOrigin="anonymous"/>
      <link rel="preload" href="/Nunito_Sans/NunitoSans-ExtraLightItalic.ttf" as='font' crossOrigin="anonymous"/>
      <link rel="preload" href="/Nunito_Sans/NunitoSans-Italic.ttf" as='font' crossOrigin="anonymous"/>
      <link rel="preload" href="/Nunito_Sans/NunitoSans-Light.ttf" as='font' crossOrigin="anonymous"/>
      <link rel="preload" href="/Nunito_Sans/NunitoSans-SemiBold.ttf" as="font" crossOrigin="anonymous" />
      {dataElement && (
        <script type="application/ld+json">
          {ReactHtmlParser(JSON.stringify(structureList))}
        </script>
      )}
      {children}
    </Head>
  );
};

export default BreadCrumbScript;
